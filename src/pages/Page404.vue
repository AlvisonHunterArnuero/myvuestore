<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1 class="text-muted">
            Oops!
          </h1>
          <h2 class="display-4">
            <b>404</b> PAGE NOT FOUND
          </h2>
          <div class="error-details lead">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div class="error-actions">
            <a href="/home" class="btn btn-primary btn-lg"
              ><span class="glyphicon glyphicon-home"></span> Take Me Home </a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    resolve_img_url: function(path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/);
      return images('./' + path);
    },
  },
};
</script>

<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}
</style>
