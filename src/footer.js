// Import Firebase modules
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration (use environment variables if using Vite/Webpack)
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

// Initialize Firebase if it hasn’t been initialized already
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Vue app setup
const vueApp = Vue.createApp({
    data() {
        return {
            email: '',
            message: '',
            user: null // Holds the current user state
        };
    },
    created() {
        // Listen for authentication state changes
        onAuthStateChanged(auth, (user) => {
            this.user = user;
            // console.log("User authentication state changed:", user);
        });
    },
    methods: {
        async subscribe() {
            // Check if the user is logged in
            if (!this.user) {
                this.message = "You must be logged in to subscribe.";
                // console.error("Error: User is not authenticated.");
                return;
            }

            // console.log("Authenticated User UID:", this.user.uid);
            // console.log("Email entered for subscription:", this.email);

            try {
                // Reference to the specific document (user's UID as document ID)
                const subscriberDocRef = doc(db, 'subscribers', this.user.uid);
                console.log("Document Reference for the User:", subscriberDocRef);

                // Check if the user already has a subscription
                const subscriberDocSnap = await getDoc(subscriberDocRef);
                if (subscriberDocSnap.exists()) {
                    this.message = 'Email is already subscribed!';
                    console.warn("Warning: User already subscribed.");
                    return;
                }

                // Add subscription data to Firestore
                await setDoc(subscriberDocRef, {
                    email: this.email,
                    timestamp: serverTimestamp()
                });

                console.log("Subscription successfully saved in Firestore.");
                this.message = 'Subscribed to Newsletter! Your newsletter will appear on the 1st of every month!';
                this.email = ''; // Clear the email input

            } catch (error) {
                console.error("Error during subscription process:", error);
                this.message = 'There was an error subscribing. Please try again.';
            }
        }
    }
});

// Mount the Vue instance
vueApp.mount('#app');

const mailjet = require("node-mailjet").connect(
    "a11dca9b88a708bd11e965090ea1c17c",
    "d306a64a4dc22975ba7b12b8881df85a"
  );
  
  function sendEmail(recipient) {
    return mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "shihua.kwok.2023@scis.smu.edu.sg",
              Name: "H@H",
            },
            To: [
              {
                Email: recipient,
              },
            ],
            Subject: "",
            TextPart: "",
            HTMLPart: "",
          },
        ],
      })
      .then((result) => {
        // do something with the send result or ignore
      })
      .catch((err) => {
        // handle an error
      });
  }
  import { MailSlurp } from "mailslurp-client";
  const api = new MailSlurp({ apiKey: "your-mailslurp-api-key" });
  const newEmailInbox = await api.createInbox();
  const result = await sendEmail(newEmailInbox.emailAddress);
expect(result.success).to.be(true);