<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <p>Cars!!</p>
      </div>
    </div>
    <div class="List">
      <router-link to="/Make">
        <p>Sort by Make</p>
      </router-link>
      <router-link to="/">
        <p>Show All</p>
      </router-link>
      <router-link to="Color">
        <p>Sort by Color</p>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  * {
  box-sizing: border-box;
  }

  body {
  margin: 50px 100px;

  }
  .List{
    text-align: center;
  }
  .List p {
    display: inline;
    margin: 5px;
  }
  #menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  }

  #menu a {
  color: #B84901;
  }

  #brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  }

  #brand img {
  height: 200px;
  }

  #side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  }

  #side img {
  width: 50px;
  }

  .menu-item {
  display: flex;
  flex-direction: column;
  }

  .menu-item p {
  margin: 0px;
  }

  .browse {
  margin-right: 50px;
  }
</style>
