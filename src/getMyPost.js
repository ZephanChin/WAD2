import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

const auth = getAuth(app);
const db = getFirestore(app);

// Function to retrieve and display posts made by the current user
async function retrieveUserPosts() {
    const postsContainer = document.getElementById('posts-container');

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(
                collection(db, "posts"),
                where("uid", "==", user.uid),
                orderBy("timestamp", "desc")
            );

            const querySnapshot = await getDocs(q);

            // Clear previous posts
            postsContainer.textContent = '';

            if (querySnapshot.empty) {
                const noPostsMessage = document.createElement('p');
                noPostsMessage.textContent = "You have not made any posts.";
                postsContainer.appendChild(noPostsMessage);
            } else {
                querySnapshot.forEach((doc) => {
                    const postData = doc.data();
                    displayPost(doc.id, postData, postsContainer);
                });
            }
        } else {
            const loginPrompt = document.createElement('p');
            loginPrompt.textContent = "Please log in to see your posts.";
            postsContainer.appendChild(loginPrompt);
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    });
}

// Function to dynamically create and display post elements, including a "More Details" button
function displayPost(postId, postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-item');

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image');

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`;

    // Create the "More Details" button
    const moreDetailsButton = document.createElement('button');
    moreDetailsButton.textContent = "More Details";
    moreDetailsButton.classList.add('more-details'); // Style this in CSS to overlay on the image
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
window.onload = retrieveUserPosts;
