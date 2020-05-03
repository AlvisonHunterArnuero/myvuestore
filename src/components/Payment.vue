<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Card Holder Name</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="form-group col-md-6">
        <label for="cardNumber">Card Number</label>
        <input type="text" class="form-control" id="cardNumber" />
      </div>
    </div>
    <div class="form-group">
      <label for="expMonth">Expiration Month</label>
      <select id="expMonth" class="form-control">
        <option selected>Choose Month...</option>
        <option value="January">January</option>
        <option value="Febuary">Febuary</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
    <div class="form-group">
      <label for="expYear">Expiration Year</label>
      <input type="text" class="form-control" id="expYear" />
    </div>

    <div class="form-group">
      <label for="cvv">Card Verification Value</label>
      <input type="text" class="form-control" id="cvv" />
    </div>

    <button type="submit" class="btn btn-primary">Continue to Checkout</button>
  </form>
</template>

<script>
export default {
  name: "Payment",

  data() {
    return {
      name: "",
    };
  },

  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>
