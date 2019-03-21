import { firebase } from '@/config/'

const currentUser = {
    name: ""
}

const authUser = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((theUser) => {
        _checkUser(theUser)
        resolve(theUser)
      }, (error) => {
        console.log(error)
      })
    })
  }

  const _checkUser = (theUser) => {
    if (theUser) {
        currentUser.name = theUser.displayName
        window.console.log(`theUser.displayName : ${currentUser.name}`)
    } else {
        currentUser.name = ''
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