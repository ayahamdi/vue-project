<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
<script>
import Header from './components/Header';

export default {
  components:{
    Header
  }
}
</script>
