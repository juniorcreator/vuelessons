import firebase from "firebase"
import firestore from "firebase/firestore"
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOFAfmJYelemp_l9AG_xdsXpWLR05m9mI",
    authDomain: "smoothies-fdee5.firebaseapp.com",
    databaseURL: "https://smoothies-fdee5.firebaseio.com",
    projectId: "smoothies-fdee5",
    storageBucket: "smoothies-fdee5.appspot.com",
    messagingSenderId: "797869548631"
  };
  const firebaseApp = firebase.initializeApp(config);

  /// if has some errors
firebaseApp.firestore().settings({timestampsInsSnapshots: true });

export default firebaseApp.firestore();