import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

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

// Function to get current value, modify it, and update the document
async function updateGood() {
    const reportDocRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentGood = docSnap.data().good || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1, // Increment the sales field
                good: currentGood + 1,
                total_stars: currentStars + 1
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Call the function to perform the update
updateGood();


async function updateBad() {
    const reportDocRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentBad = docSnap.data().bad || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1,
                bad: currentBad + 1,
                total_stars: currentStars + 1
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Call the function to perform the update
updateBad();

async function updateNeutral() {
    const reportDocRef = doc(db, "report", "TfgHTy0z8cNSvZ0qFcNM"); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1,
                total_stars: currentStars + 1
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

updateNeutral();