<template>
  <div class="url-shortner-wrapper">
    <div class="url-not-shortened" v-show="!isUrlShortenedSuccess">
      <div>
        <h2>Paste the URL to be shortened</h2>
      </div>
      <b-input-group class="mt-3">
        <b-form-input id="input-shrink" v-model="longUrl"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="shrink(longUrl)">Shrink</b-button>
        </b-input-group-append>
      </b-input-group>
      <p>
        Url Shortener is a free tool to shorten a URL.
        Use URL Shortener to create a shortened link and use it anywhere.
      </p>
    </div>

    <!-- urlshortened show this component -->
    <div class="url-not-shortened" v-show="isUrlShortenedSuccess">
      <div>
        <h2>Copy the URL</h2>
      </div>
      <b-input-group class="mt-3">
        <b-form-input v-model="shortUri" id="shortUrlGet"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="copyToClip(targetElementById('shortUrlGet'))">Copy</b-button>
        </b-input-group-append>
      </b-input-group>
      <p>Long Url - {{longUrl}}</p>
      <!-- <a :href="shortUri" target="_blank">{{shortUri}}</a> -->
      <!-- share component -->
      <div>
        <ShareComponent :url="shortUri" />
      </div>
      <!-- <div class="premium-features text-center" v-show="!hasPremium">
        <div>
          <h2>Want More? Try Premium Features!</h2>
        </div>
        <p>Custom short links, API, UTM builder, QR codes .Only $9/month.</p>
        <b-button variant="primary">Get Premium</b-button>
      </div> -->
    </div>
  </div>
</template>
<script>
import ShareComponent from "../../common-components/ShareComponent";
import commonUtil from '../../utils/commonUtil';
import Service from "../../utils/api";


export default {
  name: "Dashboard",
  components: {
    ShareComponent
  },
  data() {
    return {
      isUrlShortenedSuccess: false,
      longUrl: "",
      shortUri:'',
      shortUrlFromDB:"",
      hasPremium: false,
      email:''
    }
  },
  mounted(){
    const sessionData = JSON.parse(sessionStorage.getItem('user'))
    if(sessionData && sessionData.emailId && sessionData.authToken){
        this.email = sessionData.emailId
    }
  },
  methods :{
    copyToClip: commonUtil.copyToClipBoard,
    targetElementById: commonUtil.targetElementById,
    shrink(url){
      Service.shrinkLongUrl(url,this.email) // can use global store with vuex
      .then(response => {
        if(response.success){
          this.isUrlShortenedSuccess = true;
          this.shortUrlFromDB = response.shrinkUrl.shortUrl
          this.shortUri = window.location.href + this.shortUrlFromDB
        }
      }).catch(err => {
        this.makeToast(true, err, "Failed. Try Again", false);
      })
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
<style lang="scss" scoped>
.url-not-shortened {
  p {
    margin-top: 10px;
    font-size: 11px;
    color: #fafafa;
    opacity: 0.4;
  }
  #input-shrink,#shortUrlGet{
    height:50px
  }
  .input-group-append button {
    width:100px
  }
}
.premium-features {
  margin-top: 30px;
  background: #23222d;
  padding: 40px;
}
</style>