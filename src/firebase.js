import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHOFmHRGBF4wncKcd3gbJHc4TQoy2CTkE",
    authDomain: "linkedin-clone-abd93.firebaseapp.com",
    projectId: "linkedin-clone-abd93",
    storageBucket: "linkedin-clone-abd93.appspot.com",
    messagingSenderId: "331645781387",
    appId: "1:331645781387:web:de4e1759637c1b18b09b8e",
    measurementId: "G-5HBXH8CMV9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db; 