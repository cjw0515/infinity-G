import firebase from 'firebase/app'
import '@firebase/firestore'

let firebaseAppConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  };

const firebaseApp = firebase.initializeApp(firebaseAppConfig);  
const db = firebase.firestore();

export{
  firebaseApp,
  db
}

