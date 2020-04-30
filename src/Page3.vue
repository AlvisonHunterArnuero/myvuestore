<template>
  <div class="container-fluid">
    <Account />
  </div>
</template>

<script>
import Account from "./pages/Account";

export default {
  name: "Page3",
  show: false,
  components: {
    Account,
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("./pages/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style scoped>
a,
a:hover {
  color: honeydew;
}
</style>
