<template>
  <div>
    <login-form></login-form>
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
    <button v-on:click="logOut();">로그아웃</button>
    <div>{{user.name}}</div>
    <!-- <router-link :to="{name: 'HelloWorld', params: ''}">홈으로</router-link> -->
  </div>
</template>  
  
<script>
import { firebaseApp, firebase } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";
import authChk from "@/auth/";
import LoginForm from "./LoginForm.vue";
let ui = new firebaseui.auth.AuthUI(firebase.auth());

export default {
  components: {
    "login-form": LoginForm
  },
  data() {
    return {
      email: "",
      password: "",
      user: {}
    };
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          alert("로그아웃되셨습니다.");
        })
        .catch(function(error) {
          alert(error);
        });
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  },
  mounted: function() {
    ui.start("#firebaseui-container", uiconfig);
    this.user = authChk.getUser();
  },
  created() {},
  beforeCreate() {}
};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />  