<template>
  <div class="marginbottom">
    <Product :countItem="ItemsInCart" :productSummary="myCart"
    msg="Derminpro Men’s Polo Shirts" 
    description="Short Sleeve Quick Dry Athletic Golf T-Shirts" 
    picture_src="black_shirt.jpg" 
    price="23.56" 
    stars="✭✭✭✭✭"
    color="Black" 
    total= "0.00" />
    <div class="mb-4 d-flex justify-content-end mr-4 lead text-primary">
      <router-link to="/">Go to Home page</router-link>  
  </div>
   
  </div>
</template>

<script>
import Product from "./pages/Product";

export default {
  name: "Page2",
  components: {
    Product
  }
};
</script>

<style scoped>
.marginbottom{
  margin-bottom: 45px !important;
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
