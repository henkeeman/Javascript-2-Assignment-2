<template>
    <div class="row">
        <div class="col-lg-6">
            <img :src="product.imageurl" class="img-fluid">
        </div>
        <div class="col-lg-6 text-center text-lg-start">
            <h2>{{product.name}}</h2>
            <p class="h3 text-danger mt-3">{{product.price}} USD</p>
            <div class="mt-5">
            <p>{{product.description}}</p>
            </div>
            <div class="mt-5">
                <button class="btn brn-info" > Add to Cart</button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>

</style>