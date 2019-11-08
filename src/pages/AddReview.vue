<template>
  <div>
    <p>I am a Vuex Input, add some data.</p>
    <label for="itemTitle">Title for new Item in data:</label>
    <input v-model="newItem.title" id="itemTitle" type="text" />
    <br />
    <label for="taskDescription">Description for new task</label>
    <input v-model="newItem.description" id="itemDescription" type="text" />
    <br />
    <button @click="addData">Create Task Now</button>
  </div>
</template>

<script>
export default {
  name: "AddReview",
  data() {
    return {
      newItem: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    addData() {
      if (this.newItem.title != "" && this.newItem.description != "") {
        this.$store.commit("addNewData", this.newItem);
        this.newItem.title = "";
        this.newItem.description = "";
      } else {
        alert("Please fill out the mandatory fields. ");
      }
    }
  }
};
</script>