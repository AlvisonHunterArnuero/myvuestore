<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <h2 class="text-uppercase text-info mt-4 mb-1">
          Welcome to vueStore
        </h2>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aliquam
          autem aspernatur fu placeat dignissimos pariatur molestias quod. Alias
          quas corporis vero natus?
        </p>
        <ul class="list-group">
          <li class="list-group-item active bg-danger text-white">
            HOME SALE SAVING + STACK WITH OTHER OFFERS
          </li>
          <li class="list-group-item">
            Dapibus ac facilisis in Morbi leo risus
          </li>
          <li class="list-group-item">
            placeat dignissimos pariatur molestias quod
          </li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">
            autem aspernatur fuga magni exercitationem
          </li>
        </ul>
        <br />
        <p class="lead">Are you ready to start your shopping journey?</p>
        <router-link to="/item-details"
          ><b-button block variant="primary"
            >View our latest products</b-button
          ></router-link
        >
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-8">
        <div class="m-4">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption=""
              :img-src="resolve_img_url('bk_homepage.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              :img-src="resolve_img_url('bk_homepage02.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              :img-src="resolve_img_url('bk_homepage03.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              :img-src="resolve_img_url('bk_homepage04.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              :img-src="resolve_img_url('bk_homepage00.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    resolve_img_url: function(path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/);
      return images('./' + path);
    },
  },
};
</script>
