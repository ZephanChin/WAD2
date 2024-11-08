import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase configuration
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

// Vue App for Navbar
const navbarApp = Vue.createApp({
    data() {
        return {
            user: null,
            username: "Guest",
            authButtonText: "Login",
        };
    },
    methods: {
        handleAuth() {
            if (this.user) {
                // Logout
                signOut(auth)
                    .then(() => {
                        this.user = null;
                        this.username = "Guest";
                        this.authButtonText = "Login";
                        window.location.href = "/login.html";
                    })
                    .catch((error) => {
                        console.error("Error logging out:", error);
                    });
            } else {
                // Redirect to Login
                window.location.href = "/login.html";
            }
        },
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.username = user.displayName || "Account";
                this.authButtonText = "Logout";
            } else {
                this.user = null;
                this.username = "Guest";
                this.authButtonText = "Login";
            }
        });
    },
});

navbarApp.mount("#navbar-app");
