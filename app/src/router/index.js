import Vue from "vue";
import VueRouter from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
import 'normalize.css';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/help",
    name: "Help",
    component: Help
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
