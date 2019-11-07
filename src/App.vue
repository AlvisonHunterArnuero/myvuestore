<template>
  <div id="app">
    <Product :countItem="ItemsInCart" :productSummary="myCart"
    msg="Derminpro Men’s Polo Shirts" 
    description="Short Sleeve Quick Dry Athletic Golf T-Shirts" 
    picture_src="black_shirt.jpg" 
    price="23.56" 
    stars="✭✭✭✭✭"
    color="Black" 
    total= "0.00" />
  </div>
</template>

<script>
import Product from './components/Product.vue';
import { store } from "./components/store";

export default {
  name: 'app',
    data() {
    return {
      storeState: store.state,
      ItemsInCart: store.state.items,
      myCart: store.state.cart
    };
  },
  components: {
    Product
  },
    mounted() {
    store.addItemToCart("Nuevo Dato"); 
    store.countItemsInCart(0); 
    this.ItemsInCart=store.state.items;
   },

   computed:{
     add2Cart(){
       return store.items
     }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
