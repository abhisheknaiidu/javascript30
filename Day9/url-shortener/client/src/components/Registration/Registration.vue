<template>
  <div class="registration-wrapper">
    <div class="signup-box">
      <b-row>
        <b-col sm="6">
          <div class="image-box">
            <h5>URL SHORTENER</h5>
            <div class="img-container">
              <img :src="registraionImg" alt=""/>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="registration-box">
            <b-tabs content-class="mt-3">
              <b-tab title="Sign Up" active>
                <SignUp></SignUp>
              </b-tab>
              <b-tab title="Login">
                <Login></Login>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SignUp from "../../common-components/SignUp";
import Login from "../../common-components/Login";
import { registraionImg } from '../../assets/images';

export default {
  name: "Registration",
  data: function() {
    return {
      registraionImg:registraionImg
    };
  },
  components: {
    SignUp,
    Login
  },
};
</script>

<style>
.registration-box .nav-tabs .nav-link.active,
.registration-box .nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
  border-color: transparent;
  border-bottom-color: #42663b;
  color: #fff;
}
.nav-tabs {
  margin-bottom: 30px;
  border-bottom: 0px;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: transparent;
}
.nav-link {
  color: #fff;
}
.registration-wrapper {
  background: #1a1a22;
  height: 100vh;
  width: 100%;
}

.signup-box {
  margin: 0 auto;
  width: 800px;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  left: 0;
  right: 0;
  -webkit-box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
  -moz-box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
  box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
  height: 450px;
}
.registration-box,
.image-box {
  padding: 20px 40px;
  height: 450px;
}
.registration-box {
  background: #23222d;
}
.image-box {
  background: #1a1a23;
  text-align: center;
}
.image-box h5 {
  font-weight: 100;
}
.img-container {
    height: 200px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
.img-container img {
    max-width: 100%;
}

</style>