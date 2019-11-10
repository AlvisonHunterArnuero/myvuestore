import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      cart: [],
      total: "0",
      items: 0
  },
  mutations: {
    addNewItem(state, payload) {
      const newItem = {
        title: payload.title,
        description: payload.description
      };
      this.state.cart.push(newItem);
    },
    removeItem(state, payload) {
      const index = payload;
      this.state.Item.splice(index, 1);
    }
  }
});

export default store;


// addItem2Cart: function() {
//   this.countItem = this.countItem + 1;
//   this.total = +this.total + +this.price;
//   this.cart.push({
//     img: this.picture_src,
//     color: this.color,
//     price: this.price,
//     stars: this.stars
//   });
// },

// removeItemFromCart: function(value, prix) {
// this.cart.splice(value, 1); 
// this.countItem = this.countItem - 1;
// this.total = +this.total - +prix;
// },