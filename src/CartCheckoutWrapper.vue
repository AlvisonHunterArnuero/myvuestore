<template>
  <div class="container-fluid">
<Checkout />
  </div>
</template>

<script>
import Checkout from "./pages/Checkout";

export default {
  name: "CartCheckoutWrapper",
  components: {
    Checkout
  },
    methods: {
    resolve_img_url: function(path) {
      let images = require.context("./pages/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>

<style scoped>

</style>
