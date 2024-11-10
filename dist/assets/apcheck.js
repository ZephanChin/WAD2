import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration (reinitialize here)
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

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig); // Initialize Firebase if not already initialized
} else {
    app = getApps()[0]; // Use the existing initialized Firebase app
}

// Initialize Firebase Authentication
const auth = getAuth(app);

// Function to handle the "Add a post" button click
function handleAddPostClick() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = '/addpost.html'; // Redirect to add post page
        } else {
            window.location.href = '/login.html'; // Redirect to login page
        }
    });
}

// Attach event listener to the "Add a post" button
document.getElementById('add-post-btn').addEventListener('click', handleAddPostClick);
