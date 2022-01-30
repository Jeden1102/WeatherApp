import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyARlD1cYBjeuuDrA051qI28sVmpUJQuGSs",
  authDomain: "weatherapp-b3c48.firebaseapp.com",
  projectId: "weatherapp-b3c48",
  storageBucket: "weatherapp-b3c48.appspot.com",
  messagingSenderId: "863544097692",
  appId: "1:863544097692:web:6a972ebef53b97ff0b6659"
};
const app = firebase.initializeApp(firebaseConfig)

export default app.firestore();
