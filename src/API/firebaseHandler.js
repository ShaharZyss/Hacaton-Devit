import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

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

export const auth = firebase.auth();
export const db = firebase.firestore();

export function signUp(email, password, signupForm) {
  auth.createUserWithEmailAndPassword(email, password).then(() => {
    const modal = document.querySelector('#signup-modal');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  }).catch(function (error) {
    alert("cant sign UP" + error.message);
    console.log(error.message);
  });
}

export function login(email, password) {
  if (validateEmail(email)) {
    auth.signInWithEmailAndPassword(email, password).catch(e => { throwError(e) });
  }
  else {
    throwError("email is not valid");
  }
}

export function checkForAuthChange() {
  let user = auth.currentUser;
  return user;
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  }
  return (false);
}

function throwError(e) {
  alert(e);
}

export default { signUp, login, checkForAuthChange, auth, db };