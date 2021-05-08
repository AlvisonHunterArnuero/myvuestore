import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
});

export const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    username: '',
    password: '',
    islogged: false,
    cart: [],
    total: 0,
    items: 0,
    loginErrorMsg: '',
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
