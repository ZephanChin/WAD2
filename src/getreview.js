import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("working");

async function fetchData() {
    console.log("functioning");
    onAuthStateChanged(auth, async (user) => {
        console.log(user);
        console.log("reached auth")
        if (user) {
            let documentId = user.displayName;
            console.log(documentId);

            document.getElementById('username').textContent = documentId || "Username";
            document.getElementById('profileImage').src = `profile/${documentId}.jpg`;
            try {
                // Reference to the specific document based on the user's display name
                const docRef = doc(db, "report", documentId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();

                    // Update HTML elements with data
                    document.getElementById('sales').textContent = data.sales || 0;
                    document.getElementById('itemsSold').textContent = data.items_sold || 0;
                    document.getElementById('reviewsReceived').textContent = data.reviews || 0;
                    document.getElementById('goodReviews').textContent = data.good || 0;
                    document.getElementById('badReviews').textContent = data.bad || 0;
                    document.getElementById('stars').textContent = (data.total_stars / data.reviews).toFixed(2) || 0;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } else {
            console.log("User is not signed in.");
        }
    });
}

// Call fetchData to load data when the page loads
fetchData();
