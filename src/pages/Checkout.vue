<template>
  <div class="container-fluid margin-bottom">
    <div class="row justify-content-center">
      <h3 class="display-3 m-4">Your Shopping Cart - Purchase Details</h3>
    </div>
    <div class="row">
      <!-- start table  -->
      <b-table striped hover :items="cartAddedItems" :fields="fields">
        <template v-slot:cell(img)="data">
          <b-img :src="resolve_img_url(data.value)" fluid alt="pic" class="thumb"></b-img>
        </template>
      </b-table>
    </div>
    <!-- end table -->
    <div class="row justify-content-between mt-2 margin-bottom">
      <router-link to="/">
        <button type="button" class="btn btn-info btn-lg">
          <font-awesome-icon icon="home" />Back to Home
        </button>
      </router-link>
      <H4 class="text-primary">
        Purchase Total:
        <b
          class="text-danger"
        >U${{parseFloat(Math.round(this.$store.state.total * 100) / 100).toFixed(2)}}</b>
      </H4>
    </div>
    <!-- end of total of purchase -->
  </div>
  <!-- end of container fluid -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      userId: "",
      fields: [
        { key: "img", label: "ITEM" },
        { key: "color", label: "COLOR" },
        { key: "price", label: "PRICE" },
        { key: "stars", label: "STARS" }
      ],
      cartAddedItems: Array.from(this.$store.state.cart)
    };
  },
  computed: {
    ...mapState(["cart", "total", "islogged", "items", "user"])
  },
  methods: {
    selectedItem: function(myImage, price, stars, color) {
      this.picture_src = myImage;
      this.price = price;
      this.stars = stars;
      this.color = color;
    },
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumb {
  height: 5%;
  border-radius: 50%;
}
.margin-bottom {
  margin-bottom: 100px !important;
}
</style>
