import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";

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

let currentUsername = ""; // Global variable to store the username

// Function to retrieve and display posts made by another user
async function retrieveOtherUserPosts() {
    const postsContainer = document.getElementById('posts-container');
    const marketplaceTitle = document.getElementById('marketplace-title'); // Assuming an element to display the username's marketplace

    // Get the account name from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const account = urlParams.get('account');

    if (!account) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "No user specified.";
        postsContainer.appendChild(errorMessage);
        return;
    }

    currentUsername = account; // Store the username in the global variable

    // Update the marketplace title dynamically
    if (marketplaceTitle) {
        marketplaceTitle.textContent = `${currentUsername}'s Marketplace`;
    }

    try {
        const q = query(
            collection(db, "posts"),
            where("account", "==", account),
            orderBy("timestamp", "desc")
        );

        const querySnapshot = await getDocs(q);

        // Clear previous posts
        postsContainer.textContent = '';

        if (querySnapshot.empty) {
            const noPostsMessage = document.createElement('p');
            noPostsMessage.textContent = `No posts found for user: ${account}`;
            postsContainer.appendChild(noPostsMessage);
        } else {
            querySnapshot.forEach((doc) => {
                const postData = doc.data();
                displayPost(doc.id, postData, postsContainer);
            });
        }
    } catch (error) {
        console.error("Error retrieving posts:", error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Failed to load posts. Please try again later.";
        postsContainer.appendChild(errorMessage);
    }
}

// Function to dynamically create and display post elements, including a "More Details" button
function displayPost(postId, postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-item'); // Use the same class for consistent styling

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container'); // Use the same class for consistent styling

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image'); // Use the same class for consistent styling

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`;

    // Create the "More Details" button
    const moreDetailsButton = document.createElement('button');
    moreDetailsButton.textContent = "More Details";
    moreDetailsButton.classList.add('more-details'); // Use the same class for consistent styling
    moreDetailsButton.onclick = () => {
        window.location.href = `postDetails.html?id=${postId}`;
    };

    // Append elements to the image container
    imageContainer.appendChild(image);
    imageContainer.appendChild(moreDetailsButton);

    // Append elements to the post element
    postElement.appendChild(imageContainer);
    postElement.appendChild(itemName);
    postElement.appendChild(account);

    container.appendChild(postElement);
}

// Call the function to retrieve and display the user's posts when the page loads
window.onload = retrieveOtherUserPosts;

