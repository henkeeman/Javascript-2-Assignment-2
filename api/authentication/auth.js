const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY
// Kopplar ihop userid med en secretkey som ligger i env filen
exports.generateToken = (user) => {

    return jwt.sign({id: user._id}, secretKey, { expiresIn: '1hr'})
}
// Splittar den inkommande bearer tokenen och jämför token med secretkey stringen ifall dom stämmer överens 
exports.verifyToken = (req,res,next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,secretKey);
        next();
    } catch {
        return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access restricted! Please Login!'
        })
    }
}
