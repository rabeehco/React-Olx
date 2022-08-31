/* b1 import firebase */
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

/* b2 copy the firebaseConfig from project settings */
const firebaseConfig = {
    apiKey: "AIzaSyBDIjm7GKIGgJwgQBa9CR-Oz334mxPzkqU",
    authDomain: "fir-7f478.firebaseapp.com",
    projectId: "fir-7f478",
    storageBucket: "fir-7f478.appspot.com",
    messagingSenderId: "993363148213",
    appId: "1:993363148213:web:359ee8a5d29fef4dfe6dfc",
    measurementId: "G-7Y0G2DZE7Q"
  };

  /* b3 export it :store/Context.js */
  export default firebase.initializeApp(firebaseConfig)