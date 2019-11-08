<template>
  <div class="container-fluid">
<div class="row justify-content-center mb-2">
  <small class="lead p-2 bg-light w-100"><b>FREE</b> shipping with $50 purchase. 
    details <b>FREE</b> store pickup today <b>TAKE AN EXTRA</b> 30%, 2
5% or 20% off when you use a VueStore's Charge. <a href=""> details & exclusions</a></small>
</div>

<div class="row p-2 bg-warning">
        <div class="col-md-8 justify-content-between">
            <form class="row">
                <div class="col-12 col-sm pr-sm-0">
                    <input type="text" name="search" id="search" value="What are you fetching today?" 
                    placeholder="What are you fetching today?" 
                    class="form-control m-2"> &nbsp; &nbsp;
                </div>
                <div class="col-12 col-sm-auto pl-sm-0">
                     <input type="button" name="commit" 
                    value="Fetch it" class="btn btn-primary m-2 btn-block">
                </div>
            </form>
        </div>
       <div class="col-xl-4 text-right">
         <h5 class="text-white m-2 p-1">
           <a href="" class="text-white" ><font-awesome-icon icon="user-circle" /> Account</a> -
             <a href="" class="text-white" ><font-awesome-icon icon="shopping-cart" /> u$0.00</a> -
          <a href="" class="text-white" ><font-awesome-icon icon="arrow-alt-circle-right" /> Checkout</a>
         </h5>
       </div>
</div>
    <About />
    <br />
    <div>
      <h1 class="border-bottom text-uppercase mt-4 text-danger">Deals and Promotions</h1>
<h4>Shop Today’s Deals, Lightning Deals, and limited-time discounts</h4>
    <div class="row justify-content-center pb-4">
      <div class="m-4">
        <div class="card m-4">    
          <div class="card-header bg-warning text-white">DEAL OF THE DAY</div>
          <img src="./pages/thumb01.jpg" class="card-img-top p-2" alt="Go to the product page" />
          <div class="card-body">
            <h5 class="card-title text-uppercase">Price: <b class="text-danger">$149.99</b> - <s class="text-muted">$249.99</s> (40% off)</h5>
            <p class="card-text">
              <router-link to="/page2"><button type="button" class="btn btn-outline-primary">See Details</button></router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="m-4">
        <div class="card m-4">
          <div class="card-header bg-warning text-white">DEAL OF THE DAY</div>
          <img src="./pages/thumb02.jpg" class="card-img-top p-2" alt="Go to the product page" />
          <div class="card-body">
            <h5 class="card-title text-uppercase">Price: <b class="text-danger">$149.99</b> - <s class="text-muted">$249.99</s> (40% off)</h5>

            <p class="card-text">
              <router-link to="/page2"><button type="button" class="btn btn-outline-primary">See Details</button></router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="m-4">
        <div class="card m-4">
          <div class="card-header bg-warning text-white">DEAL OF THE DAY</div>
          <img src="./pages/thumb03.jpg" class="card-img-top p-2" alt="Go to the product page" />
          <div class="card-body">
            <h5 class="card-title text-uppercase">Price: <b class="text-danger">$149.99</b> - <s class="text-muted">$249.99</s> (40% off)</h5>
            <p class="card-text">
              <router-link to="/page2"><button type="button" class="btn btn-outline-primary">See Details</button></router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="m-4">
        <div class="card m-4">
          <div class="card-header bg-warning text-white">DEAL OF THE DAY</div>
          <img src="./pages/thumb04.jpg" class="card-img-top p-2" alt="Go to the product page" />
          <div class="card-body">
            <h5 class="card-title text-uppercase">Price: <b class="text-danger">$149.99</b> - <s class="text-muted">$249.99</s> (40% off)</h5>

            <p class="card-text">
              <router-link to="/page2"><button type="button" class="btn btn-outline-primary">See Details</button></router-link>
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

export default {
  name: "Page1",
    show: false,
  components: {
    About
  },
    methods: {
    resolve_img_url: function(path) {
      let images = require.context("./pages/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>

<style scoped>
a, a:hover {color:honeydew}

  .card {
    /* the other rules */
    transition: opacity 0.5s, box-shadow 0.9s;
  }
  .card:hover {
    opacity: 0.8;
    box-shadow: 20px 20px 40px 0px rgba(0,0,0,0.5);
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
