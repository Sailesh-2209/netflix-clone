import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-5J2SN54DUY4y3E5Nm5M_TmgtKAz7gPM",
  authDomain: "netflix-clone-c6800.firebaseapp.com",
  projectId: "netflix-clone-c6800",
  storageBucket: "netflix-clone-c6800.appspot.com",
  messagingSenderId: "657925157270",
  appId: "1:657925157270:web:9e7b9856bc3832d7906db7",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
