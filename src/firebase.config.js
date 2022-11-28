import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyAHyv0h8Thot0Nvwl3oTdySsQEbkpE5pns",
  authDomain: "test-project-7c170.firebaseapp.com",
  projectId: "test-project-7c170",
  storageBucket: "test-project-7c170.appspot.com",
  messagingSenderId: "57281493334",
  appId: "1:57281493334:web:cb1c4347bc08d5ac827ef7",
  measurementId: "G-S21MFQBJ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)

export default fireStore