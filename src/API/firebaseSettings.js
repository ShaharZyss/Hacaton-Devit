import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwhU3FUx7JYXBiUaMvmuofwe4wweppUWk",
  authDomain: "devit-7190c.firebaseapp.com",
  databaseURL: "https://devit-7190c.firebaseio.com",
  projectId: "devit-7190c",
  storageBucket: "devit-7190c.appspot.com",
  messagingSenderId: "87616142201",
  appId: "1:87616142201:web:35c4313e59d18ec6cd8da8",
  measurementId: "G-4BVQZEX49T"
};

firebase.initializeApp(firebaseConfig);
let n;
const db = firebase.firestore();

export async function getAccessLevel(name, password) {
  
  await db.collection('users').where('name', '==', name).where('password', '==', password).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      n = doc.data().accessLevel;
    })
  });

  return n
}