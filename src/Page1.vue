<template>
  <div class="container-fluid">
    <div class="row justify-content-center mb-0">
      <h6 class="text-secondary p-2 bg-light w-100">
        <b>FREE</b> shipping with $50 purchase. details <b>FREE</b> store pickup
        today <b>TAKE AN EXTRA</b> 30%, 2 5% or 20% off when you use a
        VueStore's Charge.
        <a class="text-danger" href>Click for more details & exclusions</a>
      </h6>
    </div>

    <div class="row p-2 bg-warning">
      <div class="col-12 col-sm-12 col-md-12 col-xl-7 justify-content-between">
        <form class="row">
          <div class="col-12 col-sm pr-sm-0 mr-2">
            <input
              type="text"
              name="search"
              id="search"
              value="What are you fetching today?"
              placeholder="What are you fetching today?"
              class="form-control m-2"
            />
          </div>
          <div class="col-12 col-sm-auto pl-sm-0">
            <input
              type="button"
              name="commit"
              value="Fetch it"
              class="btn btn-primary m-2 btn-block"
            />
          </div>
        </form>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-xl-5 text-right">
        <h5 class="text-white m-2 p-1">
          <router-link
            v-if="this.$store.state.isLogged"
            to="/login"
            v-on:click.native="logout()"
            replace
          >
            <a href class="text-white">
              <font-awesome-icon icon="user-circle" />
              {{ this.$store.state.username }} - Logout
            </a>
          </router-link>
          -
          <a href class="text-white">
            <font-awesome-icon icon="shopping-cart" />
            {{ this.$store.state.cart.length }} items - U${{
              parseFloat(
                Math.round(this.$store.state.total * 100) / 100
              ).toFixed(2)
            }}
          </a>
          -
          <router-link to="/checkout">
            <a href class="text-white">
              <font-awesome-icon icon="arrow-alt-circle-right" /> Checkout
            </a>
          </router-link>
        </h5>
      </div>
    </div>
    <About />
    <br />
    <div>
      <h1 class="border-bottom text-uppercase mt-4 text-danger">
        Deals and Promotions
      </h1>
      <h4>Shop Today’s Deals, Lightning Deals, and limited-time discounts</h4>
      <div class="row justify-content-center pb-4">
        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb01.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$29.99</b> -
                <s class="text-muted">$49.99</s> (20% off)
              </h6>
              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb05.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$22.99</b> -
                <s class="text-muted">$35.99</s> (20% off)
              </h6>
              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb06.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$25.99</b> -
                <s class="text-muted">$39.99</s> (30% off)
              </h6>

              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb03.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$12.99</b> -
                <s class="text-muted">$24.99</s> (50% off)
              </h6>
              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb04.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$19.99</b> -
                <s class="text-muted">$29.99</s> (60% off)
              </h6>

              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 m-4">
          <div class="card m-4">
            <div class="card-header bg-info text-white">DEAL OF THE DAY</div>
            <img
              src="./pages/thumb01.jpg"
              class="card-img-top mt-3"
              alt="Go to the product page"
            />
            <div class="card-body">
              <h6 class="card-title text-uppercase">
                Price:
                <b class="text-danger">$29.99</b> -
                <s class="text-muted">$49.99</s> (20% off)
              </h6>
              <p class="card-text">
                <router-link to="/page2">
                  <button type="button" class="btn btn-outline-primary">
                    See Details
                  </button>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./pages/About";
import { mapState } from "vuex";


export default {
  name: "Page1",
  components: {
    About,
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("./pages/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },

    logout() {
      this.authenticated = false;
      this.$store.state.isLogged = false;
      this.$store.state.loginErrorMsg = "";
    },
  },
  computed: {
    ...mapState(["cart", "total", "islogged", "items", "user"]),

  },
};
</script>

<style scoped>
a,
a:hover {
  color: honeydew;
}

.card {
  /* the other rules */
  transition: opacity 0.5s, box-shadow 0.9s;
}
.card:hover {
  opacity: 0.8;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
