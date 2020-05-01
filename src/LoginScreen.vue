<template>
  <div class="container h-100 p-4">
    <div class="row h-100 justify-content-center align-items-center">
      <b-card
        :header="loginEror"
        header-class="myheader"
        class="overflow-hidden my-4 mx-auto"
        style="margin-top: 16%!important; max-width: 640px;"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body
              class=""
              title="Welcome to VueStore"
              :sub-title="userStatus"
            >
              <b-form>
                <b-form-group
                  id="input-group-2"
                  label="Username:"
                  label-for="username"
                >
                  <b-form-input
                    id="username"
                    type="text"
                    name="username"
                    v-model="input.username"
                    required
                    placeholder="Joe Doe"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Password:"
                  label-for="password"
                >
                  <b-form-input
                    id="password"
                    type="password"
                    name="password"
                    v-model="input.password"
                    required
                    placeholder="Enter Password"
                  ></b-form-input>
                </b-form-group>

                <b-button type="button" v-on:click="login()" variant="primary"
                  >Login</b-button
                >
              </b-form>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
  data() {
    return {
      input: {
        password: "",
        username: "",
      },
    };
  },

  mounted() {
    this.makeToast();
  },
  methods: {
    makeToast(append = false) {
      this.$bvToast.toast(`You must logon in order to access the website.`, {
        title: "Welcome to VueStore",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },

    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$store.state.username &&
          this.input.password == this.$store.state.password
        ) {
          this.$emit("authenticated", true);
          this.$store.state.isLogged = true; // set login to true
          this.$router.push({ path: "/page1" }); // redirect to the main page.
        } else {
          this.$store.state.loginErrorMsg =
            "The username and / or password is incorrect";
        }
      } else {
        this.$store.state.loginErrorMsg =
          "A username and password must be present";
      }
    },
  },

  computed: {
    // a computed getter
    userStatus: function() {
      let logonStatus = this.$store.state.isLogged
        ? "You’re Logged In"
        : "You’re Logged Out";
      return logonStatus;
    },

    loginEror: function() {
      return this.$store.state.loginErrorMsg;
    },
  },
};
</script>

<style scoped>
.marginbottom {
  margin-bottom: 100px !important;
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

.myheader {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  letter-spacing: 0px;
  word-spacing: 2px;
  color: #ff0000;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
  animation-name: fade-in;
  animation-duration: 2s;
}

.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
