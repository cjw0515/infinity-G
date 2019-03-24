import { firebase } from '@/config/'

const currentUser = {
    name: "",
    email: "",
    emailVerified: "",
    photoURL: "",
    uid: "",
    phoneNumber: "",
    providerData: "",
}

const authUser = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        _checkUser(user)
        resolve(user)
      }, (error) => {
        window.error.log(error)
      })
    })
  }

  const _checkUser = (user) => {
    if (user) {
      currentUser.name = user.displayName
      currentUser.email = user.email
      currentUser.emailVerified = user.emailVerified
      currentUser.photoURL = user.photoURL
      currentUser.uid = user.uid
      currentUser.phoneNumber = user.phoneNumber
      currentUser.providerData = user.providerData
      window.console.log(`user.displayName : ${currentUser.name}`)
    } else {
      currentUser.name = ''
      currentUser.email = ''
      currentUser.emailVerified = ''
      currentUser.photoURL = ''
      currentUser.uid = ''
      currentUser.phoneNumber = ''
      currentUser.providerData = ''        
    }
  }

// let initApp = function() {
//      firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         // User is signed in.
//         currentUser.name = user.displayName 
//         var displayName = user.displayName;
//         var email = user.email;
//         var emailVerified = user.emailVerified;
//         var photoURL = user.photoURL;
//         var uid = user.uid;
//         var phoneNumber = user.phoneNumber;
//         var providerData = user.providerData;
//         window.console.log(displayName);       
//       } else {
//       }
//     }, function(error) {
//       window.console.log(error);
//     });
//   };

  const getUser = ()=> {
      return currentUser
  }
  
  export default{
      getUser,
      authUser
  }