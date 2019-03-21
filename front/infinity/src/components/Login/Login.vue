<template>
  <div>
    <!-- <div v-on:click="popupLogin();">login</div>
    <div v-on:click="logOut();">logOut</div>-->
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
    <button v-on:click="logOut();">로그아웃</button>
    <div>{{name}}</div>
    <!-- <router-link :to="{name: 'HelloWorld', params: ''}">홈으로</router-link> -->
  </div>
</template>  
  
<script>
import { firebaseApp, firebase } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";
import authChk from "./authChk";
let ui = new firebaseui.auth.AuthUI(firebase.auth());

// console.log(firebase.auth().currentUser);

export default {
  data() {
    return {
      userid: "",
      name: "",
      email: "",
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
    }
  },
  mounted: function() {
    ui.start("#firebaseui-container", uiconfig);
    this.name = authChk.getUser();
    // console.log(authChk.getUser());
  },
  created() {},
  beforeCreate() {}
};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />
