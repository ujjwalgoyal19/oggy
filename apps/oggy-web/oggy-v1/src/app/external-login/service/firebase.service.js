import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  signInWithCustomToken,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { CustomAuth } from "./token.service.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photo: user.photoURL,
      });
    }
    console.log(user.displayName, user.email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await git(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
      });
    }
    console.log(user.displayName, user.email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const saveUserWithMobile = async (name, mobile) => {
  try {
    const token = await CustomAuth.getToken(mobile);
    signInWithCustomToken(auth, token).then(async (userCredential) => {
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, {
        uid: user.uid,
        name: name,
        authProvider: "mobile",
        mobile: mobile,
      });
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInUser = async (mobile) => {
  try {
    const token = await CustomAuth.getToken(mobile);
    signInWithCustomToken(auth, token).then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const checkUserExists = async (mobile) => {
  try {
    const q = query(collection(db, "users"), where("mobile", "==", mobile));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = async () => {
  await signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  logout,
  checkUserExists,
  saveUserWithMobile,
  logInUser,
};
