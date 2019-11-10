<template>
  <div>
    <p>I am a Vuex Output</p>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <p>{{item.title}}</p>
        <p>{{item.description}}</p>
        <button @click="removeItem(index)">Remove Item</button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ViewReview",
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    removeItem(index) {
      if (confirm("okay?")) {
        this.$store.commit("removeData", index);
      }
    }
  }
};
</script>