<template>
  <div class="App-header">
    <div class="container">
      <div class="logo">logo page</div>
      <ul class="text-right">
        <router-link to="/" tag="li" exact><a>Home</a></router-link>
        <router-link to="/about" tag="li"><a>About</a></router-link>
        <router-link to="/blog" tag="li"><a>Blog</a></router-link>
        <router-link to="/help" tag="li"><a>Help</a></router-link>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.App-header {
  background-color: black;
  color: white;
  overflow: hidden;
  margin-bottom: 50px;
  .logo {
    float: left;
    width: 200px;
    font-size: 24px;
    padding: 20px;
  }
  ul {
    width: calc(100% - 200px);
    float: left;
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
<script>
export default {
  name: "Header"
};
</script>