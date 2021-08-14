import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAT-h-szdgA-GODXKluzNMNFUC3_0QeEg",
    authDomain: "linkedin-clone-8834c.firebaseapp.com",
    projectId: "linkedin-clone-8834c",
    storageBucket: "linkedin-clone-8834c.appspot.com",
    messagingSenderId: "476811422751",
    appId: "1:476811422751:web:77fe29585dc373fd8c792a",
    measurementId: "G-X49KX5FTEP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
