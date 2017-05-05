/**
 * Created by sylvie on 2017/5/5.
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Foo = {template:'<p>this is {{$route.params.username}}\'s profile</p>'};

const routes=[
  {
    path:"/profile/:username",component:Foo
  }
];
const router = new VueRouter({
  routes
});
var app = new Vue({
  el:"#app",
  router
});