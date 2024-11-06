import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, doc } from "firebase/firestore";

// Firebase configuration (replace with your configuration values)
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
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

// function to show username 
async function showUsername(user) {
    console.log(user)

    const usernameElement = document.getElementById("username");
        if (user) {
                // Get the email from the logged-in user object
    const email = user.email || "Account";

    // Display the user's email
    usernameElement.textContent = `${email}`;
        } else {
            usernameElement.textContent = "Please log in.";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    }


// function to show login or logout
function showLoginOrLogout(user) {
    const authButton = document.getElementById("auth-button");

    if (user) {
        // If the user is logged in, show the logout button
        authButton.textContent = "Logout";
        authButton.addEventListener("click", () => {
            getAuth().signOut()
                .then(() => {
                    window.location.href = "/login.html"; // Redirect to login page after logout
                })
                .catch((error) => {
                    console.error("Error logging out:", error);
                });
        });
    } else {
        // If the user is not logged in, show the login button
        authButton.textContent = "Login";
        authButton.addEventListener("click", () => {
            window.location.href = "/login.html"; // Redirect to login page
        });
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {

        showUsername(user);
        
        showLoginOrLogout(user);
    } else {
        // Redirect to login page if not logged in
        window.location.href = "/login.html";
    }
});

