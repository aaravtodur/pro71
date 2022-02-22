import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDCuPWO-RG3A-8cQ8Cc5UBgdmhwXM4V5Fs",
    authDomain: "e-ride-b0d96.firebaseapp.com",
    projectId: "e-ride-b0d96",
    storageBucket: "e-ride-b0d96.appspot.com",
    database_url:"https://console.firebase.google.com/u/0/project/e-ride-b0d96/firestore/data/~2Fbicycles~2FBICY001",
    messagingSenderId: "847533493390",
    appId: "1:847533493390:web:3d54f6875a3911e0cb8ddf"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
