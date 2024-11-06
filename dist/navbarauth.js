// Import Firebase modules using ES modules (v9+ syntax)
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elements for displaying user info and auth buttons
const userInfoElement = document.getElementById('user-info');
const authButtonsElement = document.getElementById('auth-buttons');

// Function to update UI based on user authentication state
function updateUI(user) {
    if (user) {
        // User is signed in
        userInfoElement.textContent = `Welcome, ${user.displayName || user.email}!`;
        authButtonsElement.innerHTML = `<button id="logout-button">Log Out</button>`;
        document.getElementById('logout-button').addEventListener('click', logout);
    } else {
        // User is signed out
        userInfoElement.textContent = '';
        authButtonsElement.innerHTML = `<button id="login-button">Log In</button>`;
        document.getElementById('login-button').addEventListener('click', () => {
            window.location.href = '/login.html'; // Redirect to login page
        });
    }
}

// Handle login with email and password
async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to the homepage after successful login
        window.location.href = '/index.html'; // Change to your desired redirect page
    } catch (error) {
        console.error("Login failed:", error);
        alert(`Error: ${error.message}`); // Notify the user of the error
    }
}

// Handle logout
async function logout() {
    try {
        await signOut(auth);
        console.log('User signed out successfully');
        // Redirect to login page after signing out
        window.location.href = '/login.html';
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    console.log('onAuthStateChanged triggered');
    updateUI(user);
    
    if (!user) {
        // If no user is signed in, redirect to login page
        window.location.href = '/login.html'; // Change to your desired login page
    }
});
