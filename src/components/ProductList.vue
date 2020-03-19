<template>
<div class="wrapper">
  <div class="cars">
    <div class="product" v-for="product in Cars" :key="product.id">
      <div class="info">
        <h1>{{product.make}} {{product.model}}</h1>
        <p>{{product.color}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
  name: 'CarList',
  props: {
  Cars: Array
  },

  };

</script>
<style scoped>
  .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .cars {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }

  .product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  }

  .product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  }

  .product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  }

  .info {
  background: #93B7BE;
  color: #454545;
  padding: 10px 30px;
  height: 80px;
  }

  .info h1 {
  font-size: 16px;
  }

  .info h2 {
  font-size: 14px;
  }

  .info p {
  margin: 0px;
  font-size: 10px;
  }


  .price {
  display: flex;
  }

  button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  }

  .auto {
  margin-left: auto;
  }
</style>