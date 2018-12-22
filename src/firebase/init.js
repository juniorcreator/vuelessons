import firebase from "firebase"
import firestore from "firebase/firestore"
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBu3oDIKfg-AJL6SU_2xkJDjjQjkyucXLk",
    authDomain: "day-tasks-777.firebaseapp.com",
    databaseURL: "https://day-tasks-777.firebaseio.com",
    projectId: "day-tasks-777",
    storageBucket: "day-tasks-777.appspot.com",
    messagingSenderId: "766420066986"
  };
  const firebaseApp = firebase.initializeApp(config);

  /// if has some errors
firebaseApp.firestore().settings({timestampsInSnapshots: true });

export default firebaseApp.firestore();