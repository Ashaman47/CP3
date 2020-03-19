<template>
  <div>
    <div class="wrapper">
      <p>Select Color:</p>
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i>
          <input v-model="searchText" />
        </form>
      </div>
    </div>
    <CarList :Cars="Cars" />
    <a class="footer" href="https://github.com/Ashaman47/CP3">
      Find me on <em>Github</em>
    </a>
  </div>

</template>

<script>
  import CarList from "../components/ProductList.vue"
  export default {
  name: 'Home',
  components: {
  CarList
  },
  data() {
  return {
  searchText: '',
  }
  },
  computed: {
  Cars() {
  return this.$root.$data.Cars.filter(Cars => Cars.color.toLowerCase().search(this.searchText) >= 0);
  }
  }
  }
</script>
<style scoped="">
  .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  }

  form {
  display: table;
  width: 100%;
  }

  i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
  }

  input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  }
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #93B7BE;
  color: #454545;
  text-align: center;
  }
</style>