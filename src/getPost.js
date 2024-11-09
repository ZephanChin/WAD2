import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import getAuth and onAuthStateChanged
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
const auth = getAuth(app); // Initialize Firebase Auth
let allPosts = []; // Array to store all posts

// Function to retrieve posts from Firestore
async function retrievePosts() {
    const postsContainer = document.getElementById('posts-container');

    // Clear container and reset posts array
    while (postsContainer.firstChild) {
        postsContainer.removeChild(postsContainer.firstChild);
    }
    allPosts = [];

    try {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const postData = doc.data();
            postData.id = doc.id; // Add the document ID to the post data
            allPosts.push(postData); // Add to the allPosts array
            displayPost(postData, postsContainer);
        });

        if (allPosts.length === 0) {
            const noPostsMessage = document.createElement('p');
            noPostsMessage.textContent = "No posts available.";
            postsContainer.appendChild(noPostsMessage);
        }
    } catch (error) {
        console.error("Error retrieving posts:", error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Failed to load posts. Please try again later.";
        postsContainer.appendChild(errorMessage);
    }
}

function displayPost(postData, container) {
    if (!postData.itemName || !postData.imageUrl || !postData.account) {
        console.warn("Incomplete post data:", postData);
        return;
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post-item');
    postElement.setAttribute('data-category', postData.category || "Uncategorized");

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const account = document.createElement('p');
    account.textContent = "Posted by: ";

    const accountLink = document.createElement('a');
    accountLink.textContent = postData.account; // Only the account name is clickable
    accountLink.classList.add('account-link');

    // Check if the post belongs to the logged-in user
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const loggedInAccount = user.displayName; 
            // console.log("Logged-in account name:", loggedInAccount);
            // console.log("Post account name:", postData.account);

            if (postData.account === loggedInAccount) {
                // console.log("This post belongs to the logged-in user. Redirecting to mymarketplace.html.");
                accountLink.href = `/mymarketplace.html`;
            } else {
                // console.log("This post belongs to another user. Redirecting to usermarketplace.html.");
                accountLink.href = `usermarketplace.html?account=${encodeURIComponent(postData.account)}`;
            }
        } else {
            // console.log("User is not logged in. Redirecting to usermarketplace.html.");
            accountLink.href = `usermarketplace.html?account=${encodeURIComponent(postData.account)}`;
        }
    });

    account.appendChild(accountLink); // Append the link to the paragraph

    const moreDetailsButton = document.createElement('button');
    moreDetailsButton.textContent = "More Details";
    moreDetailsButton.classList.add('more-details');
    moreDetailsButton.addEventListener('click', () => {
        window.location.href = `postDetails.html?id=${postData.id}`;
    });

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image');

    imageContainer.appendChild(image);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    contentContainer.appendChild(itemName);
    contentContainer.appendChild(account);
    contentContainer.appendChild(moreDetailsButton);

    postElement.appendChild(imageContainer);
    postElement.appendChild(contentContainer);

    container.appendChild(postElement);
}


// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent;
            filterPosts(category);
        });
    });

    const searchInput = document.getElementById('search-input'); // Ensure you have an input field with this ID
    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value;
        searchPosts(searchQuery);
    });

    // Call the function to retrieve and display the posts when the page loads
    retrievePosts();
});
