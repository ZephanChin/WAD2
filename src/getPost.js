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
let allPosts = []; // Array to store all posts

// Function to retrieve posts from Firestore
async function retrievePosts() {
    const postsContainer = document.getElementById('posts-container');

    // Create a query to get posts ordered by the timestamp
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    // Loop through the documents and display each post
    querySnapshot.forEach((doc) => {
        const postData = doc.data();
        postData.id = doc.id; // Add the document ID to the post data
        allPosts.push(postData); // Add to the allPosts array
        displayPost(postData, postsContainer);
    });
}

// Function to dynamically create and display post elements
function displayPost(postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('col-md-4', 'mb-3', 'post-item');
    postElement.setAttribute('data-category', postData.category); // Add category for filtering

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image'); // Use post-image class for consistent styling with CSS

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`;

    // Create the "More Details" button
    const moreDetailsButton = document.createElement('button');
    moreDetailsButton.textContent = "More Details";
    moreDetailsButton.classList.add('more-details'); // Use consistent class name with CSS

    // Add click event to the "More Details" button to navigate to post details page
    moreDetailsButton.addEventListener('click', () => {
        window.location.href = `postDetails.html?id=${postData.id}`;
    });

    // Append the image and button to the image container
    imageContainer.appendChild(image);
    imageContainer.appendChild(moreDetailsButton);

    // Append the elements to the post element
    postElement.appendChild(imageContainer);
    postElement.appendChild(itemName);
    postElement.appendChild(account);

    // Append the post element to the container
    container.appendChild(postElement);
}

// Function to filter posts based on selected category
function filterPosts(category) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear current posts

    const filteredPosts = allPosts.filter(post => {
        return category === 'All' || post.category === category;
    });

    // Display filtered posts
    // console.log(filteredPosts);
    filteredPosts.forEach(post => displayPost(post, postsContainer));
}

// Event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent; // Get the button's text
        filterPosts(category); // Call the filter function
    });
});

// Call the function to retrieve and display the posts when the page loads
window.onload = retrievePosts;
