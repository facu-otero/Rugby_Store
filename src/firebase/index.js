import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
console.log("pruebo valores de firebase",process.env.REACT_APP_API_KEY)
const firebaseConfig = {
    apiKey: "AIzaSyDmQbHPumYcLDY_qEFpITe3oLF9Ib6e5kU",
    authDomain: "rugby-store-react.firebaseapp.com",
    projectId: "rugby-store-react",
    storageBucket: "rugby-store-react.appspot.com",
    messagingSenderId: "427164925332",
    appId: "1:427164925332:web:6ff53fcc6db5821c1d2381"
};
const app = firebase.initializeApp(firebaseConfig);
export const getFirebase=()=>app;
//Servicios
export const getFirestore=()=>firebase.firestore(app);
