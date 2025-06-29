// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBCVlK5L1ZhiDaRDbaRTrMC0i6WhEmjWe0",
  authDomain: "to-do-list-85033.firebaseapp.com",
  projectId: "to-do-list-85033",
  storageBucket: "to-do-list-85033.firebasestorage.app",
  messagingSenderId: "610847826886",
  appId: "1:610847826886:web:c2cf194ad52f0de60f48c7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        // Store basic user info (optional)
        localStorage.setItem("user", JSON.stringify({
          name: user.displayName,
          email: user.email
        }));

        // Redirect to to-do page
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed: " + error.message);
      });
  });
});
