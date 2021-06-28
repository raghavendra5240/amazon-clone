import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtGqWDZy2SV5aqV4CR4colc-ko19utTvU",
  authDomain: "ecom-ef958.firebaseapp.com",
  projectId: "ecom-ef958",
  storageBucket: "ecom-ef958.appspot.com",
  messagingSenderId: "468359481953",
  appId: "1:468359481953:web:76cfb799606cedc3953820",
  measurementId: "G-D3MYF3CE6L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export {db, auth}