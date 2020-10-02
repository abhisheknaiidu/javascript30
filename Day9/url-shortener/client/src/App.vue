<template>
  <div id="app">
    <Navbar v-show="['home','profile'].includes(this.$route.name)" />
    <div class="main-container">
      <router-view :key="$route.path"></router-view>
    </div>
    <Footer v-show="['home','profile'].includes(this.$route.name)" />
  </div>
</template>

<script>
import Navbar from "./common-components/NavBar";
import Footer from "./common-components/Footer";

export default {
  name: "app",
  data() {
    return {
      hideNavFooter: false
    };
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
  width: 100%;
  height: 100vh;
}
.main-container {
  min-height: calc(100vh - 106px);
}
</style>
