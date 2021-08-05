import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC5hytO-7GI1SU2k48yE2szvZkeCHVdjMk",
    authDomain: "chatapp-bcdc6.firebaseapp.com",
    projectId: "chatapp-bcdc6",
    storageBucket: "chatapp-bcdc6.appspot.com",
    messagingSenderId: "564872529558",
    appId: "1:564872529558:web:e2c641599f1c3632ce24b7",
    measurementId: "G-K5VGGL5MFM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;