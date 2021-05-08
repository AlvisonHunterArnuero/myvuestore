<template>
  <div class="container-fluid my-5">
    <Page404 />
  </div>
</template>

<script>
import Page404 from './pages/Page404';

export default {
  name: 'PageNotFound',
  show: false,
  components: {
    Page404,
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context('./pages/', false, /\.png$|\.jpg$/);
      return images('./' + path);
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
