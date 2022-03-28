const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth')
const router = express.Router();

// Försöker att registera en användare med en post request
// Kollar först ifall emailen är upptagen och därefter hashar lösenordet som användaren skickar in
// Skickar sedan tillbaka en token via en auth.js funktion
router.post('/register',(req,res) => {
    User.exists({email: req.body.email},(err,result)=> {
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status:false,
                message: "you made a bad request",
                err
            })
        }
        if(result)
        {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'The email adress is already taken'
                
            })
        }
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt,(err,hash) => {
        if(err)
        {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed when encrypting the password',
                err
            })

            
        }
       User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        passwordhash: hash
       })
       .then(user =>  {
            res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'User has succesfully been created',
            token: auth.generateToken(user)
           })
       })
       .catch(err => {
          res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create user',
          err
          })
        })
       
        })
    })  

})
// Söker efter samma email finns i databasen och jämför sedan lösenordet
// som skickas in och det som finns kopplat till den mailen i databasen
// Skickar sedan tillbaka en bearer token
router.post('/login', async (req,res) => {
    User.findOne({email:req.body.email},(err,user) => {

        if(err)
        {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Bad Request',
                err
            })
        }
        if(!user){
            return res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Incorrect email or password'
            })
        }
        bcrypt.compare(req.body.password,user.passwordhash,(err,result) => {
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'something went wrong when comparing the password'
                })
            }
            if(!result) {
                return res.status(401).json({
                    statusCode: 401,
                    status: false,
                    message: 'Incorrect email or password'
                })
            }

            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was succesful',
                token: auth.generateToken(user)
            })
        })

    })

})
// Validerar först tokenen ifall den är giltig
// Delar sedan upp bearer token så att man kan få tag på user_idet
// Söker efter användaren och skickar sedan tillbaka alla orders som användaren har ifall inget fel kommer upp.
router.get('/getOrders',auth.verifyToken ,async (req,res) => {
    
    const userId = req.headers.authorization.split(" ")[0];
    User.findOne({userId},(err,user) => {

        if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Something went wrong when fetching the products',
              err
            })
        }
        res.status(200).json(user.orders)   
    })

})
// Validerar först att tokenen är giltig
// Delar sedan upp bearer token så att man kan få tag på user_idet
// Detta gör det möjligt att söka efter rätt user och sedan lägga in ordern
// Tänker att ordern i patch requesten kommer ungefär se ut såhär:
// {
//     "item1":[{ "id": "62308b6974b7da342ab55b06" }, { "qty": 5 }],
//     "item2":[{ "id": "62309b48f47664c1f5271f09" }, { "qty": 3 }]
// }
router.patch('/addOrder',auth.verifyToken ,async (req,res) => {
    
    const userId = req.headers.authorization.split(" ")[0];
    User.findOneAndUpdate({userId},{
        $push: { orders: req.body }
    },
    (err,user) => {
        if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Something went wrong when adding the order',
              err
            })
        }
        res.status(200).json(req.body)   
    })

})

module.exports = router;