import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbMoEnbPASNuGZRy3jR57bB17OxxPUgw8",
  authDomain: "proyecto-web-87609.firebaseapp.com",
  projectId: "proyecto-web-87609",
  storageBucket: "proyecto-web-87609.appspot.com",
  messagingSenderId: "177090459782",
  appId: "1:177090459782:web:5ddc9c1db028bf8317f907",
  measurementId: "G-69DLSN06G8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}