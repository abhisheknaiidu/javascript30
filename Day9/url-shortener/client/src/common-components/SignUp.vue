<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-username" v-model="form.username" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div class="btn-container">
        <b-button type="submit" variant="outline-success">Join Us</b-button>
        <b-button type="reset" variant="outline-primary">Clear</b-button>
      </div>
    </b-form>
  </div>
</template>


<script>
import Service from "../utils/api";

export default {
  name: "SignUp",
  data: function() {
    return {
      form: {
        email: "",
        username: "",
        password: ""
      },
      notificationMsg: "",
      messageType: "",
      showToast: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if ((this.form.email.length && this.form.username.length && this.form.password.length) > 5) {
        Service.registerUser(this.form)
          .then(response => {
            if (response.status) {
              this.makeToast(true, "Registration Successful. Please Log In", "Success", true);
            } else {
             this.makeToast(true, response.error, "Failed", false);
            }
          })
          .catch(err => {
            if (err) {
              this.makeToast(true, "Registration Failed.Please Try Again", "danger", false);
            }
          });
      } else {
        this.makeToast(
          true,
          `Email Id should be min of 5 characters
           User Name should be min of 5 characters
           Password should be min of 5 alphaneumaric characters`,
          "Registration Submission Failed",
          false
        );
      }
    },
    makeToast(append = false, toastMsg, toastTitle, isSuccess) {
      this.$bvToast.toast(`${toastMsg}`, {
        title: toastTitle,
        autoHideDelay: 5000,
        appendToast: append,
        variant: isSuccess ? "success" : "danger"
      });
    }
  }
};
</script>
<style lang="scss">
.registration-wrapper {
  .form-control {
    background: transparent;
    border-color: transparent;
    border-bottom-color: #42663b;
    border-radius: 0px;
    padding-left: 0px;
    &:focus {
      background: transparent;
      color: #fff;
      box-shadow: none;
    }
  }
  .btn-container button {
    margin-right: 15px;
  }
}
</style>