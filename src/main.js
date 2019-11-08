import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart , faUserCircle, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faShoppingCart, faUserCircle, faArrowAltCircleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
});