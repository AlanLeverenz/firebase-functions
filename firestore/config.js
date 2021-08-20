import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'


const firebaseConfig = {
  apiKey: "AIzaSyAPo5OSQZ6HiPKcOTxS2PT9Ikwx3t1F16I",
  authDomain: "ninja-cloud-functions-65f69.firebaseapp.com",
  projectId: "ninja-cloud-functions-65f69",
  storageBucket: "ninja-cloud-functions-65f69.appspot.com",
  messagingSenderId: "375462380286",
  appId: "1:375462380286:web:ec1b1d232d9ac246c51baf"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const projectFunctions = firebase.functions()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, projectFunctions, timestamp }