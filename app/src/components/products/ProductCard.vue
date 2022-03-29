<template>
  <div class="col">
    <div class="card" h-100>
      <div>
        <img :src="product.imageurl" class="card-img-top" />
        <router-link :to="{ name: 'productDetails', params: { id: product._id }}">
          <div class="mask"></div>
        </router-link>
      </div>
     
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>