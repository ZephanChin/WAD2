import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);

async function fetchData() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            let documentId = user.displayName;

            document.getElementById('username').textContent = documentId || "Username";
            document.getElementById('profileImage').src = `profile/${documentId}.jpg`;

            try {
                // Check if an additional uploaded image exists
                const uploadedImageRef = ref(storage, `additionalImages/${documentId}.jpg`);
                const uploadedImageUrl = await getDownloadURL(uploadedImageRef);
                document.getElementById('uploadedImage').src = uploadedImageUrl;
                document.getElementById('uploadedImage').style.display = 'block';
                document.getElementById('uploadSection').style.display = 'none'; // Hide upload section

            } catch (error) {
                console.log("No additional uploaded image found.");
            }
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

async function uploadImage(file) {
    const user = auth.currentUser;
    if (user) {
        const documentId = user.displayName;
        const imageRef = ref(storage, `additionalImages/${documentId}.jpg`);

        try {
            await uploadBytes(imageRef, file);
            console.log("Image uploaded successfully.");

            // Get the download URL and display the uploaded image
            const imageUrl = await getDownloadURL(imageRef);
            document.getElementById('uploadedImage').src = imageUrl;
            document.getElementById('uploadedImage').style.display = 'block';

            // Hide the upload section after a successful upload
            document.getElementById('uploadSection').style.display = 'none';
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }
}

// Event listener for the upload button
document.getElementById('uploadButton').addEventListener('click', () => {
    const file = document.getElementById('imageUpload').files[0];
    if (file) {
        uploadImage(file);
    } else {
        alert("Please select an image to upload.");
    }
});

// Call fetchData to load data when the page loads
fetchData();
