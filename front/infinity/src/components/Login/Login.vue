<template>
  <div>
    <!-- <div v-on:click="popupLogin();">login</div>
    <div v-on:click="logOut();">logOut</div>-->
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
    <button v-on:click="logOut();">로그아웃</button>
    <div>{{userid}}</div>
    <!-- <router-link :to="{name: 'HelloWorld', params: ''}">홈으로</router-link> -->
  </div>
</template>  
  
<script>
import { firebaseApp, firebase } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";
import * as authChk from "./authChk";

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
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          window.console.log(user.displayName);
          this.username = user.displayName;
          // User is signed in.
          // var displayName = user.displayName;
          // var email = user.email;
          // var emailVerified = user.emailVerified;
          // var photoURL = user.photoURL;
          // var uid = user.uid;
          // var phoneNumber = user.phoneNumber;
          // var providerData = user.providerData;
          // window.console.log(displayName);
          // user.getIdToken().then(function(accessToken) {
          //   document.getElementById('sign-in-status').textContent = 'Signed in';
          //   document.getElementById('sign-in').textContent = 'Sign out';
          //   document.getElementById('account-details').textContent = JSON.stringify({
          //     displayName: displayName,
          //     email: email,
          //     emailVerified: emailVerified,
          //     phoneNumber: phoneNumber,
          //     photoURL: photoURL,
          //     uid: uid,
          //     accessToken: accessToken,
          //     providerData: providerData
          //   }, null, '  ');
          // });
        } else {
          // User is signed out.
          // document.getElementById('sign-in-status').textContent = 'Signed out';
          // document.getElementById('sign-in').textContent = 'Sign in';
          // document.getElementById('account-details').textContent = 'null';
        }
      },
      function(error) {
        window.console.log(error);
      }
    );
  },
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  }
};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />
