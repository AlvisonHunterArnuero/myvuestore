<template>
  <div class="marginbottom">
    <Product
      :productSummary="myCart"
      msg="Derminpro Men’s Polo Shirts"
      description="Short Sleeve Quick Dry Athletic Golf T-Shirts"
      picture_src="black_shirt.jpg"
      price="23.56"
      stars="✭✭✭✭✭"
      color="Black"
      countItem="0.00"
      total="0.00"
    />
    <div class="mb-4 d-flex justify-content-end mr-4"></div>
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
.marginbottom {
  margin-bottom: 100px !important;
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
