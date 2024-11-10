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
const postDescriptionInput = document.getElementById('postDescription');
const categorySelect = document.getElementById('category');
const priceInput = document.getElementById('price');
const mrtStationInput = document.getElementById('mrtStation');
const itemImageInput = document.getElementById('itemImage');
const statusDiv = document.getElementById('status');

postForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const itemName = itemNameInput.value;
    const postDescription = postDescriptionInput.value;
    const category = categorySelect.value;
    const priceInputValue = priceInput.value;
    const mrtStationName = mrtStationInput.value; // Just the name of MRT station
    const file = itemImageInput.files[0];

    // Validate the price input to ensure it's a valid number, not a string or empty, and has up to 2 decimal places
    let price = parseFloat(priceInputValue);

    if (isNaN(price) || price <= 0) {
        statusDiv.textContent = "Please enter a valid positive price.";
        return; // Exit the function early if price is invalid
    }

    // Round the price to 2 decimal places
    price = Math.round(price * 100) / 100;

    // Ensure the price is properly rounded and formatted to two decimal places
    priceInput.value = price.toFixed(2); // Update the input value with the correctly formatted price

    if (itemName && postDescription && category && price && mrtStationName && file) {
        // Display uploading status
        statusDiv.textContent = "Uploading post...";

        const userDisplayName = auth.currentUser.displayName;
        const userId = auth.currentUser.uid;

        const storageRefPath = storageRef(storage, `posts/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRefPath, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Optional: Show upload progress if needed
            }, 
            (error) => {
                console.error("Error uploading image:", error);
                statusDiv.textContent = "Error uploading image.";
            }, 
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                try {
                    await addDoc(collection(db, 'posts'), {
                        itemName: itemName,
                        postDescription: postDescription,
                        category: category,
                        price: price,
                        mrtStationName: mrtStationName, // Only the name
                        imageUrl: downloadURL,
                        account: userDisplayName,
                        uid: userId,
                        timestamp: new Date()
                    });

                    statusDiv.textContent = "Post created successfully!";
                    postForm.reset(); // Reset the form
                    // Redirect to marketplace.html after a successful post
                    window.location.href = "marketplace.html";
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
