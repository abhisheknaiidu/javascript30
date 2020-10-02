<template>
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Enter Password"></b-form-input>
    </b-form-group>
    <div class="btn-container">
      <b-button type="submit" variant="outline-primary">Submit</b-button>
      <b-button type="reset" variant="outline-danger">Reset</b-button>
    </div>
  </b-form>
</template>

<script>
import Service from "../utils/api";

export default {
  name: "Login",
  data: function() {
    return {
      form: {
        email: "",
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
      try {
       Service.loginUser(this.form)
        .then(response => {
          if (response.success) {
            let userSession = {
              'emailId' : response.email,
              'authToken' : response.token
            }
            this.setSession(userSession);
            this.$router.push({ path: '/' })
          } else {
             this.makeToast(true, response.error, "Login Failed", false);
            }
        })
        .catch(err => {
          if (err) {
            this.makeToast(true, err, "Login Failed", false);
          }
        });
      } catch(e) {
        this.makeToast(true, e, "Login Failed", false);
      }
    },
    setSession(userSessionObj){
      sessionStorage.setItem('user', JSON.stringify(userSessionObj))
    },
    makeToast(append = false, toastMsg, toastTitle, isSuccess) {
      this.$bvToast.toast(`${toastMsg}`, {
        title: toastTitle,
        autoHideDelay: 2000,
        appendToast: append,
        variant: isSuccess ? "success" : "danger"
      });
    }
  }
};
</script>
