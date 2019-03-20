<template>
  <div>
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
    <!-- <router-link :to="{name: 'HelloWorld', params: ''}">홈으로</router-link> -->
  </div>
</template>  
  
<script>
import firebase from "firebase/app";
import { firebaseApp } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";

let ui = new firebaseui.auth.AuthUI(firebase.auth());
console.log(`current user: ${firebase.auth().currentUser}`);

export default {
  mounted: function() {
    ui.start("#firebaseui-container", uiconfig);
  }
};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />
