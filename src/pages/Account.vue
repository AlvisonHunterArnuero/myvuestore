<template>
<div>
THIS IS MY ACCOUNT
</div>
</template>

<script>
export default {
  name: "Account",
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }

};
</script>
