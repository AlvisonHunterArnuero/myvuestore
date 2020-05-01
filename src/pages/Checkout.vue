<template>
  <div class="container-fluid margin-bottom">
    <div class="row justify-content-center">
      <h3 class="display-3 m-4 text-info">Shopping Cart Checkout</h3>
    </div>
    <div class="row">
      <!-- start table  -->
      <b-table
        :sticky-header="stickyHeader"
        hover
        responsive
        head-variant="dark"
        :items="cartAddedItems"
        :fields="fields"
      >
        <template v-slot:cell(img)="data">
          <b-img
            :src="resolve_img_url(data.value)"
            fluid
            alt="pic"
            class="thumb"
          ></b-img>
        </template>
      </b-table>
    </div>
    <!-- end table -->

    <div class="row justify-content-between">
      <div class="col-auto">
        <router-link to="/page1">
          <button type="button" class="btn btn-info btn-lg mb-3">
            <font-awesome-icon icon="home" />Back to Home
          </button>
        </router-link>
      </div>
      <div class="col-auto">
        <h4 class="text-primary text-uppercase">
          Sub-Total:
          <b class="text-secondary">U${{ shoppingCartSubTotal }}</b>
        </h4>
      </div>
      <div class="col-auto">
        <h4 class="text-primary text-uppercase">
          VAT(15%):
          <b class="text-danger">U${{ shoppingCartVAT }}</b>
        </h4>
      </div>
      <div class="col-auto">
        <h4 class="text-primary text-uppercase">
          Total:
          <b class="text-success"
            >U${{ (+shoppingCartSubTotal + +shoppingCartVAT).toFixed(2) }}</b
          >
        </h4>
      </div>
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
        { key: "stars", label: "STARS" },
      ],
      cartAddedItems: Array.from(this.$store.state.cart),
      shoppingCartSubTotal: parseFloat(
        Math.round(this.$store.state.total * 100) / 100
      ).toFixed(2),
      shoppingCartVAT: (
        (15 / 100) *
        parseFloat(Math.round(this.$store.state.total * 100) / 100)
      ).toFixed(2),
    };
  },
  computed: {
    ...mapState(["cart", "total", "islogged", "items", "user"]),
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
    },
  },
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
