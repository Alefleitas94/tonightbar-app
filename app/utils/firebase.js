import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB2PaT7mwN_rJWwLU-9SEs1Tee7EgIPEVo",
    authDomain: "propiedadesapp.firebaseapp.com",
    databaseURL: "https://propiedadesapp.firebaseio.com",
    projectId: "propiedadesapp",
    storageBucket: "propiedadesapp.appspot.com",
    messagingSenderId: "16349029188",
    appId: "1:16349029188:web:dd8b36fba75bd0aebd2d11",
    measurementId: "G-QJ0N76YZQM"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration

//   // Initialize Firebase
//   
//   firebase.analytics();
// </script>