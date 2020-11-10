import { firebase } from '@firebase/app';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDK8KYmWDJ0mSzNhbGFBGz5CuIH0Tq457k",
  authDomain: "libraryapp-beb54.firebaseapp.com",
  databaseURL: "https://libraryapp-beb54.firebaseio.com",
  projectId: "libraryapp-beb54",
  storageBucket: "libraryapp-beb54.appspot.com",
  messagingSenderId: "699442364346",
  appId: "1:699442364346:web:124bddcd9028d2142c2783"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();