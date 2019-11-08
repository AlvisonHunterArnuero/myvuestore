<template>
<div>
   <div class="row">
      <div class="col-sm-4">
        <h2 class="text-uppercase text-info mt-4 mb-4">Welcome to VueStore</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quia aliquam autem aspernatur fu placeat dignissimos pariatur molestias quod. 
              Alias quas corporis vero natus?</p> 
      <ul class="list-group">
        <li class="list-group-item active bg-danger text-white">HOME SALE SAVING +  STACK WITH OTHER OFFERS</li>
        <li class="list-group-item">Dapibus ac facilisis in Morbi leo risus</li>
        <li class="list-group-item">placeat dignissimos pariatur molestias quod</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">autem aspernatur fuga magni exercitationem</li>
      </ul>
      <br />
      <p class="lead">Officia nam soluta placeat fu placeat dignissimos pariatur.Alias quas corporis vero natus?</p> 
          <button href="" class="btn btn-block btn-primary text-white">
            <router-link to="/page2">View our latest products</router-link>
          </button>
      </div>

          <div class="col-sm-8">
    <img :src="resolve_img_url('bk_homepage.jpg')" class="card-img-top p-2 border-info" alt="item.color" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "About",
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }

};
</script>

