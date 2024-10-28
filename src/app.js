// Import Firebase modules using ES modules (v9+ syntax)
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';

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

// Handle logout
function handleLogout(event) {
    event.preventDefault();
    signOut(auth)
        .then(() => {
            console.log('User signed out successfully');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error('Error during sign-out:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle Sign-up Form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Retrieve form values
            const displayName = document.getElementById('displayName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }

            try {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Update the user profile to include the display name
                await updateProfile(user, {
                    displayName: displayName
                });

                alert('Sign-up successful! Welcome, ' + displayName);
                window.location.href = '/index.html'; // Redirect after signup

            } catch (error) {
                console.error('Error during sign-up:', error.message);
                alert(`Error: ${error.message}`);
            }
        });
    }

    // Handle Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert('Login successful!');
                    console.log('Logged in:', user);
                    window.location.href = '/index.html';
                })
                .catch((error) => {
                    console.error('Error during login:', error.message);
                    alert(`Error: ${error.message}`);
                });
        });
    }

    // Check Authentication Status
    onAuthStateChanged(auth, (user) => {
        console.log('onAuthStateChanged triggered');

        const welcomeMessage = document.getElementById('welcome-message');
        const loginLogoutBtn = document.getElementById('login-logout-btn');

        if (user) {
            console.log('User detected:', user);
            if (welcomeMessage) {
                welcomeMessage.textContent = `Welcome back, ${user.displayName || user.email}!`;
            }
            if (loginLogoutBtn) {
                loginLogoutBtn.textContent = 'Logout';
                loginLogoutBtn.removeAttribute('href');
                loginLogoutBtn.addEventListener('click', handleLogout);
            }
        } else {
            console.log('No user detected');
            if (welcomeMessage) {
                welcomeMessage.textContent = 'Welcome, Guest!';
            }
            if (loginLogoutBtn) {
                loginLogoutBtn.textContent = 'Login';
                loginLogoutBtn.setAttribute('href', '/login.html');
                loginLogoutBtn.removeEventListener('click', handleLogout);
            }
        }
    });
});
