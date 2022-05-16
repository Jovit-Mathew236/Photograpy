import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase'
import 'firebase/compat/storage'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC2MwFBmSz7dBh1TQZ_isuuBmPEmCDmvs4",
//     authDomain: "event-f7159.firebaseapp.com",
//     projectId: "event-f7159",
//     storageBucket: "event-f7159.appspot.com",
//     messagingSenderId: "915109651176",
//     appId: "1:915109651176:web:cbb32202ae66e6797f5f5d",
//     measurementId: "G-5Q1XGCWT2N"
//   };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDIY-tDW1lBRYS81xBQLjoeoHmXPIwWmmk",
//   authDomain: "hack-c00b2.firebaseapp.com",
//   projectId: "hack-c00b2",
//   storageBucket: "hack-c00b2.appspot.com",
//   messagingSenderId: "515121219689",
//   appId: "1:515121219689:web:7d318836da6de80306baf8",
//   measurementId: "G-Z7YWNDWL58"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5D5-IUC6u9EtXXKr7izR_VXp1aRh1Rys",
  authDomain: "hack3-82fb7.firebaseapp.com",
  projectId: "hack3-82fb7",
  storageBucket: "hack3-82fb7.appspot.com",
  messagingSenderId: "1070320556416",
  appId: "1:1070320556416:web:1ba84daf31c45247d70965",
  measurementId: "G-ESMP1T6VV1"
};


export default firebase.initializeApp(firebaseConfig)