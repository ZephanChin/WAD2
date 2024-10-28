import { initializeApp, getApps } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const storage = getStorage(app);
const db = getFirestore(app);

// Get form elements
const postForm = document.getElementById('post-form');
const itemNameInput = document.getElementById('itemName');
const itemImageInput = document.getElementById('itemImage');
const statusDiv = document.getElementById('status');

// Handle form submission
postForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Get the item name and file
    const itemName = itemNameInput.value;
    const file = itemImageInput.files[0];

    if (itemName && file) {
        // Display uploading status
        statusDiv.textContent = "Uploading post...";

        // Get the display name of the currently authenticated user
        const userDisplayName = auth.currentUser.displayName;

        // Create a storage reference for the image
        const storageRefPath = storageRef(storage, `posts/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRefPath, file);

        // Handle the image upload
        uploadTask.on('state_changed', 
            (snapshot) => {
                // Optional: Show upload progress if needed
            }, 
            (error) => {
                console.error("Error uploading image:", error);
                statusDiv.textContent = "Error uploading image.";
            }, 
            async () => {
                // Get the download URL after successful upload
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                try {
                    // Save post data to Firestore, using the display name
                    await addDoc(collection(db, 'posts'), {
                        itemName: itemName,
                        imageUrl: downloadURL,
                        account: userDisplayName, // Use the display name instead of email
                        timestamp: new Date() // Optionally, add a timestamp
                    });

                    statusDiv.textContent = "Post created successfully!";
                    postForm.reset(); // Reset the form
                } catch (error) {
                    console.error("Error saving post:", error);
                    statusDiv.textContent = "Error creating post.";
                }
            }
        );
    } else {
        statusDiv.textContent = "Please fill in all fields.";
    }
});
