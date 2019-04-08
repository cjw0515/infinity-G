import { firebase } from './node_modules/@/config/'
import router from './node_modules/@/router'

export default {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult) {//authResult, redirectUrl
        if (authResult.user) {
          router.push('main')
        }
        return false;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.        
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: process.env.BASE_URL,
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID      
    ],
    // Terms of service url.
    tosUrl: '',
    // Privacy policy url.
    privacyPolicyUrl: ''
  };