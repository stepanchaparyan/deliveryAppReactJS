import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCZejQZP6f4vhHb1t2tBD9qda8BQp2V5kQ",
    authDomain: "delivery-service-851de.firebaseapp.com",
    databaseURL: "https://delivery-service-851de.firebaseio.com",
    projectId: "delivery-service-851de",
    storageBucket: "delivery-service-851de.appspot.com",
    messagingSenderId: "703165206035",
    appId: "1:703165206035:web:9d7f8c555948741e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;