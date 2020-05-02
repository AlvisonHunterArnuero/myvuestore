import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faUserCircle,
  faArrowAltCircleRight,
  faHome,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(
  faShoppingCart,
  faUserCircle,
  faArrowAltCircleRight,
  faHome,
  faSignInAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  router,
});
