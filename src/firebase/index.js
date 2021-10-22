import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID,
};
const app = firebase.initilizeApp(firebaseConfig);

export const getFirebase=()=>app;

//Servicios
export const getFirestore=()=>firebase.forestore(app);


