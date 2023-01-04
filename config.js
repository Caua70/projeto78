import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBJXT0tTsIe9i3Y-lD8R4SaL0PV3JkbQL0",
  authDomain: "projeto78-aa1d1.firebaseapp.com",
  projectId: "projeto78-aa1d1",
  storageBucket: "projeto78-aa1d1.appspot.com",
  messagingSenderId: "366465987470",
  appId: "1:366465987470:web:c7aa9bf45b0a5a08536adf"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
