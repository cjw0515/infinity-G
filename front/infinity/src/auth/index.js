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
        window.error(error)
        reject();
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
    //   window.console.log(`currentUser : ${currentUser.name}`)
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

  const getUser = ()=> {
      return currentUser
  }
  
  export default{
      getUser,
      authUser
  }