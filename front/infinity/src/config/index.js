import firebase from 'firebase/app'
import '@firebase/firestore'
import { runtimeconfig } from './runtimeconfig.json'

let apiKey, authDomain, databaseURL, storageBucket, projectId

if(process.env.VUE_APP_ENV == "development"){
  apiKey = process.env.VUE_APP_FIREBASE_APIKEY
  authDomain = process.env.VUE_APP_AUTHDOMAIN
  databaseURL = process.env.VUE_APP_DATABASEURL
  projectId = process.env.VUE_APP_PROJECTID
  storageBucket = process.env.VUE_APP_STORAGEBUCKET
}else if(runtimeconfig){
  apiKey = runtimeconfig.apikey
  authDomain = runtimeconfig.authdomain
  databaseURL = runtimeconfig.databaseurl
  projectId = runtimeconfig.projectid
  storageBucket = runtimeconfig.storagebucket
}

let firebaseAppConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  storageBucket: storageBucket,
  projectId: projectId
};

const firebaseApp = firebase.initializeApp(firebaseAppConfig);  
const db = firebase.firestore();

export{
  firebaseApp,
  db
}

