import firebase from 'firebase/app'

let firebaseAppConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  };

const firebaseApp = firebase.initializeApp(firebaseAppConfig);  

export{
  firebaseApp
}

