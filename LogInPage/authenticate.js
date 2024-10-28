// Import the Firebase libraries (only if you're using npm)
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",
    authDomain: "hustlersathome-b9bee.firebaseapp.com",
    projectId: "hustlersathome-b9bee",
    storageBucket: "hustlersathome-b9bee.appspot.com",
    messagingSenderId: "447459076084",
    appId: "1:447459076084:web:f26efa8cd4e33523a63ba1",
    measurementId: "G-5S6WET94BS"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Sign up function
function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            // Redirect to another page or show a success message
            alert("Sign up successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing up:', errorCode, errorMessage);
            alert("Error signing up: " + errorMessage);
        });
}

// Handle form submission for Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUp(email, password); // Call sign-up function
});