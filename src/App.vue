<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { store } from "./store";

export default {
  name: "app",
  data() {
    return {
      storeState: store.state,
      itemsInCart: store.state.items,
      myCart: store.state.cart,
    };
  },
  mounted() {
    store.addItemToCart("");
    store.countItemsInCart(0);
    this.itemsInCart = store.state.items;
  },

  computed: {
    add2Cart() {
      return store.items;
    },
  },
};
</script>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  max-height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
