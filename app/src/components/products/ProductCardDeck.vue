<template>
<div style="margin-bottom: 50px" class="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
  <product-card v-for="product in products" :key="product._id" :product="product" />
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
    components: {ProductCard},
    computed: {
      ...mapGetters(['products'])
    }
}
</script>

<style>

</style>