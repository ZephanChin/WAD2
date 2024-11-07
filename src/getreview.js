import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

console.log("called this page");
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
const db = getFirestore(app);

async function fetchData() {
    try {
        const docRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Use the document ID from the screenshot
        // console.log("Document Reference:", docRef);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            // Update your page with the fetched data
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    };
    try {
        // Fetch documents from the "report" collection
        const querySnapshot = await getDocs(collection(db, "report"));
        // Assuming "report" has only one document with the required fields
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Log the data to confirm it's being fetched correctly
            // console.log("Fetched data:", data);

            // Update HTML elements with data
            document.getElementById('sales').textContent = data.sales || 0;
            document.getElementById('itemsSold').textContent = data.items_sold || 0;
            document.getElementById('reviewsReceived').textContent = data.reviews || 0;
            document.getElementById('goodReviews').textContent = data.good || 0;
            document.getElementById('badReviews').textContent = data.bad || 0;
            document.getElementById('stars').textContent = data.total_stars / data.reviews || 0;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call fetchData to load data when the page loads
fetchData();
