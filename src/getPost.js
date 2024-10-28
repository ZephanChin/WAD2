import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

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

const db = getFirestore(app);

// Function to retrieve posts from Firestore
async function retrievePosts() {
    const postsContainer = document.getElementById('posts-container');

    // Create a query to get posts ordered by the timestamp
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    // Loop through the documents and display each post
    querySnapshot.forEach((doc) => {
        const postData = doc.data();
        displayPost(postData, postsContainer);
    });
}

// Function to dynamically create and display post elements
function displayPost(postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('col-md-4', 'mb-3');

    // Create elements for item name, image, and user display name
    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('img-fluid');

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`; // Use display name saved as `account`

    // Append the elements to the post element
    postElement.appendChild(image);
    postElement.appendChild(itemName);
    postElement.appendChild(account);

    // Append the post element to the container
    container.appendChild(postElement);
}

// Call the function to retrieve and display the posts when the page loads
window.onload = retrievePosts;
