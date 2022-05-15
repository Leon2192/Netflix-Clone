import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8rOr3Sh4NdUNk9o4kxj4rY2YmHQ2MW6I",
  authDomain: "netflix-clone-26158.firebaseapp.com",
  projectId: "netflix-clone-26158",
  storageBucket: "netflix-clone-26158.appspot.com",
  messagingSenderId: "586380404887",
  appId: "1:586380404887:web:df7c8728ca9c9dc90461d2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
