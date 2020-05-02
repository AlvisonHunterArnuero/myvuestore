<template>
  <div class="container-fluid margin-bottom">
    <div class="row justify-content-between py-3">
      <div class="col-auto">
        <h1 class="text-info text-uppercase">
          Shopping Cart Checkout
        </h1>
      </div>
      <div class="col-auto">
        <router-link to="/page1">
          <button type="button" class="btn btn-outline-info btn-lg">
            <font-awesome-icon icon="home" />
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <!-- start table  -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-8">
        <b-table
          class="border-bottom"
          :sticky-header="stickyHeader"
          hover
          head-variant="light"
          :items="cartAddedItems"
          :fields="fields"
          responsive="sm"
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
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <b-card
          header="Payment Details"
          :footer="footerNotesDisclaimer"
          title="We accept all major cards."
        >
          <Payment />
        </b-card>
      </div>
    </div>
    <!-- end table -->

    <div class="row justify-content-end border-top border-secondary mt-2 pt-3">
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
import Payment from "../components/Payment";
export default {
  name: "Checkout",
  components: {
    Payment,
  },
  data() {
    return {
      userId: "",
      footerNotesDisclaimer:
        "Disclaimer: Your security is important to us. We do not store your credit card information since this transsaction is being handled in accordance with industry security standards.",
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
