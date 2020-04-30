import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: "Guest",
    islogged: false,
    cart: [],
    total: 0,
    items: 0,
  },
  mutations: {
    addNewItem(state, payload) {
      const newItem = {
        title: payload.title,
        description: payload.description,
      };
      this.state.cart.push(newItem);
    },
    removeItem(state, payload) {
      const index = payload;
      this.state.cart.splice(index, 1);
    },
  },
});

export default store;
