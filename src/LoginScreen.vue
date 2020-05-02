/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div class="container h-100 p-4">
    <div class="row h-100 justify-content-center align-items-center">
      <b-card
        :header="loginError"
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

                <b-button type="button" v-on:click="login()" variant="primary">
                  Login</b-button
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
import { registeredUsers } from "../src/users/users.js"; // list of users
export default {
  name: "LoginScreen",
  data() {
    return {
      input: {
        password: "",
        username: "",
      },
      registeredUsers: registeredUsers,
    };
  },

  mounted() {
    this.makeToast(); // msg to user that he/she needs to logon
  },
  methods: {
    /**
     * This Method will display a popup message on the UI informing
     * the user that he or she needs to logon in order to be able to
     * use this app. The Toast will dissapear after 3 seconds.
     * @param {boolean} [append] - This param is totally optional, we rarely use it as true.
     */
    makeToast(append = false) {
      this.$bvToast.toast(`You must logon in order to access the website.`, {
        title: "Welcome to VueStore",
        autoHideDelay: 3000,
        appendToast: append,
      });
    },

    /**
     * This Method will retrieve an user from our list
     * The return value will be an array with the index
     * of the search query if this was successful.
     * @param {string} usernameKey - Username from input element.
     * @param {string} userPwdKey - Password from input element.
     * @param {Array.<Object>} myArray - This object comes from the list of users imported to this file
     */
    retrieveUser: function(usernameKey, userPwdKey, myArray) {
      for (let i = 0; i < myArray.length; i++) {
        if (
          myArray[i].username === usernameKey &&
          myArray[i].password === userPwdKey
        ) {
          this.$store.state.username = usernameKey;
          this.$store.state.password = userPwdKey;

          return myArray[i];
        }
      }
    },

    /**
     * This Method will allow us to make the validations needed to
     * be able to access restricted views only permitted to registered users
     */
    login() {
      if (this.input.username != "" && this.input.password != "") {
        // Once I confirmed I have valid input, it is time to determine
        // if this user exist in our users file, let's use this method
        // to be able to find out if this is true
        this.retrieveUser(
          this.input.username,
          this.input.password,
          this.registeredUsers
        );

        // Now I have this information, let's compare these inputs with
        // the data we were able to retrieve from our file
        if (
          this.input.username == this.$store.state.username &&
          this.input.password == this.$store.state.password
        ) {
          // We got it! now is time to activate this fllag to allow me the
          // navigation to the next section, or view, or page, or whatever
          // you guys feel like call it, to me is simply a plain view
          this.$emit("authenticated", true);
          this.$store.state.isLogged = true; // set user login status to true
          this.$router.push({ path: "/page1" }); // redirect to the main page o view.
        } else {
          // On Error, I am using this state property to inform the user of the error on the UI
          this.$store.state.loginErrorMsg =
            "The username and / or password is incorrect";
        }
      } else {
        // On Error, I am using this state property to inform the user of the error on the UI
        this.$store.state.loginErrorMsg =
          "A username and password must be present";
      }
    },
  },

  computed: {
    // a computed getter to verify the logon user status
    userStatus: function() {
      let logonStatus = this.$store.state.isLogged
        ? "You’re Logged In"
        : "You’re Logged Out";
      return logonStatus;
    },
    // This is how I handle the logon error events, this came up nicely
    // as part of the fresh ideas of the morning when I'm a bit inspired LOL
    loginError: function() {
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
