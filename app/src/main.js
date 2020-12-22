import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './sass/main.scss'

Vue.config.productionTip = false;
Vue.filter('uppercase',function(v){
   return v.toUpperCase();
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
