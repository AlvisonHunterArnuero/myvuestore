<template>
  <div>
    <div class="container-fluid">
      <div class="row p-2">
        <div class="col-xl-12 text-right">
          <h5 class="text-secondary m-2 p-1">
            <router-link
              v-if="this.$store.state.isLogged"
              to="/login"
              v-on:click.native="logout()"
              replace
            >
              <b-button variant="link">
                <font-awesome-icon icon="user-circle" />
                {{ this.$store.state.username }} - Logout
              </b-button>
            </router-link>

            -
            <b-button variant="link" v-b-modal.modal-center>
              <font-awesome-icon icon="shopping-cart" />
              {{ this.$store.state.cart.length }} items - U${{
                parseFloat(
                  Math.round(this.$store.state.total * 100) / 100
                ).toFixed(2)
              }} </b-button
            >-
            <router-link to="/checkout">
              <b-button variant="link">
                <font-awesome-icon icon="arrow-alt-circle-right" /> Checkout
              </b-button>
            </router-link>
          </h5>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-5 col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="text-uppercase">PRODUCT REVIEWS: {{ stars }}</h5>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <div class="img-hover-zoom">
                <img
                  :src="resolve_img_url(picture_src)"
                  class="img-hover-zoom"
                  alt="Shop with us"
                />
              </div>
            </div>
            <div class="card-body">
              <p class="card-text lead">Roll over image to zoom in.</p>
            </div>
          </div>
          <!-- end of the individual shirts review -->
        </div>
        <!-- end of review column card-->

        <div class="col-lg-7 col-12">
          <h6 class="display-4">{{ msg }}</h6>
          <p class="lead text-uppercase">
            {{ description }} -
            <b class="text-danger">PRICE: {{ price }}</b>
          </p>

          <div class="d-flex justify-content-around mb-2 mt-2">
            <a
              v-on:click="
                selectedItem('black_shirt.jpg', '23.99', '✭✭✭✭✭✭', 'Black')
              "
              class="btn btn-dark m-2 btn-block text-white"
              >BLACK</a
            >
            <a
              v-on:click="
                selectedItem('blue_shirt.jpg', '20.99', '✭✭✭✭✩✩', 'Blue')
              "
              class="btn btn-primary m-2 btn-block text-white"
              >BLUE</a
            >

            <a
              v-on:click="
                selectedItem('red_shirt.jpg', '14.99', '✭✭✭✭✩✩', 'Red')
              "
              class="btn btn-danger m-2 btn-block text-white"
              >RED</a
            >
            <a
              v-on:click="
                selectedItem('orange_shirt.jpg', '16.99', '✭✭✩✩✩✩', 'Orange')
              "
              class="btn btn-warning m-2 btn-block text-white"
              >ORANGE</a
            >
            <a
              v-on:click="
                selectedItem('green_shirt.jpg', '11.99', '✭✭✭✩✩✩', 'Green')
              "
              class="btn btn-success m-2 btn-block text-white"
              >GREEN</a
            >
          </div>

          <div class="d-flex justify-content-center">
            <ul class="list-group">
              <li class="list-group-item bg-dark">
                <h5 class="text-white mt-2">
                  PRODUCT DETAILS -

                  <b class="small text-warning">
                    Total before Shipping & Tax: U${{
                      parseFloat(Math.round(total * 100) / 100).toFixed(2)
                    }}
                  </b>
                </h5>
              </li>
              <li class="list-group-item">95% Polyester 5% Spandex</li>
              <li class="list-group-item">Button closure & Machine wash</li>
              <li class="list-group-item">
                Quick Dry &amp; Breathable Material --- High moisture wicking
                feature keeps your skin stay cool quickly after sweaty sport
                activities in hot summer
              </li>
              <li class="list-group-item">
                Lightweight and Soft to the Touch --- Protect your sensitive
                skin in extreme comfort
              </li>
              <li class="list-group-item">
                High Elasticity &amp; Regular Fit--- Ensures you move well when
                playing golf, tennis or any vigorous exercises
              </li>
              <li class="list-group-item">
                Basic Polo Design with 3 Buttons --- Look fashionable in any
                occasion; Matches with slacks, sport pants, beach shorts, or
                jeans
              </li>
              <li class="list-group-item">
                Machine Wash/Hand Wash Recommended. Enjoy a stress-free
                Satisfaction Guarantee and free replacement for defective item
              </li>

              <li class="list-group-item bg-light">
                <div class="d-flex justify-content-between">
                  <button
                    @click="addItem2Cart()"
                    class="btn display-4 btn-success btn-lg"
                  >
                    <font-awesome-icon icon="shopping-cart" />Add to Cart
                  </button>
                  <router-link to="/page1">
                    <button type="button" class="btn btn-info btn-lg">
                      <font-awesome-icon icon="home" />Back to Home
                    </button>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- modals row starts here -->
        <b-modal
          size="xl"
          id="modal-center"
          modal-cancel="No"
          centered
          title="Items List"
        >
          <p
            class="text-info text-center text-uppercase"
            v-if="!cartAddedItems.length"
          >
            Your Shopping Cart is currently empty 😢
          </p>
          <div class="row">
            <div
              class="col-sm-3 col-md-3 col-xl-3"
              v-for="(item, index) in cartAddedItems"
              v-bind:key="index"
            >
              <div class="card m-4 justify-content-center">
                <div class="card-header text-right">
                  <button
                    @click="removeItemFromCart(index, item.price)"
                    type="button"
                    class="close small"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <img
                  :src="resolve_img_url(item.img)"
                  class="card-img-top mt-2"
                  alt="item.color"
                />
                <div class="card-body">
                  <h6 class="card-title text-center text-uppercase">
                    <b>COLOR:</b>
                    {{ item.color }}
                  </h6>
                  <h6 class="card-subtitle mb-2 text-center text-success">
                    <b>PRICE:</b>
                    U${{ item.price }}
                  </h6>
                  <h6 class="card-text text-muted text-center">
                    <b>STARS:</b>
                    {{ item.stars }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Row for modals ends here -->
    </div>
    <!-- end of container fluid -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      userId: "",
      cartAddedItems: [...this.$store.state.cart],
    };
  },
  props: {
    msg: String,
    description: String,
    price: String,
    countItem: String,
    total: String,
    stars: String,
    cart: Array,
    color: String,
    picture_src: String,
  },
  methods: {
    selectedItem: function(myImage, price, stars, color) {
      this.picture_src = myImage;
      this.price = price;
      this.stars = stars;
      this.color = color;
    },

    computed: {
      ...mapState(["cart", "total", "islogged", "items", "user"]),
    },

    // this has to be moved to the store.js and use it by
    // reference once we need to use it here or elsewhere

    addItem2Cart: function() {
      this.countItem = +this.countItem + 1;
      this.total = +this.total + +this.price;
      this.$store.state.total = this.total;
      this.$store.state.items = this.countItem;
      this.cartAddedItems.push({
        img: this.picture_src,
        color: this.color,
        price: this.price,
        stars: this.stars,
      });
      this.$store.state.cart = [...this.cartAddedItems];
    },

    removeItemFromCart: function(value, prix) {
      this.cartAddedItems.splice(value, 1);
      this.countItem = this.countItem - 1;
      this.total = +this.total - +prix;
      this.$store.state.total = this.total;
      this.$store.state.items = this.countItem;
      this.$store.state.cart = [...this.cartAddedItems];
    },

    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },

    logout() {
      this.authenticated = false;
      this.$store.state.isLogged = false;
      this.$store.state.loginErrorMsg = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 80%;
  width: 70%;
  align-self: center;
}
.thumb {
  height: 10%;
  width: 10%;
}
.img-hover-zoom {
  height: 80%; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform 0.5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.9);
}
</style>
