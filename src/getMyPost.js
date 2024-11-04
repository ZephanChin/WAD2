import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, orderBy, deleteDoc, doc } from "firebase/firestore";

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

            postsContainer.innerHTML = "";

            if (querySnapshot.empty) {
                postsContainer.innerHTML = "<p>You have not made any posts.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const postData = doc.data();
                    displayPost(doc.id, postData, postsContainer);
                });
            }
        } else {
            postsContainer.innerHTML = "<p>Please log in to see your posts.</p>";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    });
}

// Function to dynamically create and display post elements, including a delete button and a more details button
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

    // Create and configure the "Delete Post" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add('delete-button'); // Use CSS to style this button

    deleteButton.onclick = () => deletePost(postId, container);

    // Append elements to the image container
    imageContainer.appendChild(image);
    imageContainer.appendChild(moreDetailsButton);

    // Append elements to the post element
    postElement.appendChild(imageContainer);
    postElement.appendChild(itemName);
    postElement.appendChild(account);
    postElement.appendChild(deleteButton);

    container.appendChild(postElement);
}

// Function to delete a post by document ID
async function deletePost(postId, container) {
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (confirmation) {
        try {
            await deleteDoc(doc(db, "posts", postId));
            alert("Post deleted successfully!");
            // Refresh the posts display after deletion
            retrieveUserPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error deleting post.");
        }
    }
}

// Call the function to retrieve and display the user's posts when the page loads
window.onload = retrieveUserPosts;
