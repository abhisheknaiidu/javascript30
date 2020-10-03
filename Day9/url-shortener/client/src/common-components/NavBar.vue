<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to="/"><img :src="registraionImg" alt=""/> Url Shortener</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button-group v-show="!isLoggedIn">
        <b-button to="/registration" variant="primary">Sign In</b-button>
      </b-button-group>

      <b-button-group v-show="isLoggedIn">
        <b-button to="/profile" variant="primary">My Profile</b-button>
        <b-button to="/" variant="danger" @click="logOut">Log Out</b-button>
      </b-button-group>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { registraionImg } from '../assets/images';

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
      registraionImg:registraionImg
    };
  },
  mounted(){
    this.changeNavButtons();
  },
  watch: {
    $route: "changeNavButtons" // watching for changes in route and update
  },
  methods: {
    changeNavButtons() {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      if (userData && userData.authToken) {
        this.isLoggedIn = true;
      }
    },
    logOut() {
      sessionStorage.removeItem("user");
      this.isLoggedIn = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  img {
    width: 30px;
    margin-right: 5px;
}
}
</style>