import firebase from 'firebase';


const firebaseConfig = ({
    apiKey: "AIzaSyB92VPjbNdGZQ97ykqKeqhgWVjPNmkprEo",
    authDomain: "linkedin-clone-d1764.firebaseapp.com",
    projectId: "linkedin-clone-d1764",
    storageBucket: "linkedin-clone-d1764.appspot.com",
    messagingSenderId: "619659007603",
    appId: "1:619659007603:web:0226239cd9b5e30918bc06"
  });

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };

