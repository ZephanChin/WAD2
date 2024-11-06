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
console.log(db);

try {
    const querySnapshot = await getDocs(collection(db, "report"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
} catch (error) {
    console.error("Error fetching documents:", error);
}
// Function to fetch data from Firestore and update the page
async function fetchData() {
    console.log("into the function")
    try {
        console.log("try works1");
        const docRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Use the document ID from the screenshot
        console.log("Document Reference:", docRef);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Report data:", data);
            // Update your page with the fetched data
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    };
    try {
        // Fetch documents from the "report" collection
        console.log("try works")
        const querySnapshot = await getDocs(collection(db, "report"));
        console.log("getting data");
        // Assuming "report" has only one document with the required fields
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Log the data to confirm it's being fetched correctly
            console.log("Fetched data:", data);

            // Update HTML elements with data
            document.getElementById('sales').textContent = data.sales || 0;
            document.getElementById('itemsSold').textContent = data.items_sold || 0;
            document.getElementById('reviewsReceived').textContent = data.reviews || 0;
            document.getElementById('goodReviews').textContent = data.good || 0;
            document.getElementById('badReviews').textContent = data.bad || 0;
            document.getElementById('stars').textContent = data.stars || 0;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call fetchData to load data when the page loads
fetchData();

async function fetchReportData() {
    try {
        const docRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Use the document ID from the screenshot
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Report data:", data);
            // Update your page with the fetched data
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}

fetchReportData();
