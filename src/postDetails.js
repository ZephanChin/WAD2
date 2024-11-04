import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, getDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
const auth = getAuth(app);

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Function to initialize the map with geocoding based on location name
function initMapWithGeocoding(locationName) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: locationName }, (results, status) => {
        if (status === "OK" && results.length > 0) {
            const { lat, lng } = results[0].geometry.location;

            const mapOptions = {
                center: { lat: lat(), lng: lng() },
                zoom: 15
            };

            const map = new google.maps.Map(document.getElementById("map"), mapOptions);

            new google.maps.Marker({
                position: { lat: lat(), lng: lng() },
                map: map,
                title: locationName
            });
        } else {
            document.getElementById("map").innerHTML = "<p>Location not found.</p>";
        }
    });
}

// Function to retrieve and display post details
async function displayPostDetails() {
    if (postId) {
        const postRef = doc(db, "posts", postId);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            const postData = postSnap.data();
            const postDetailsContainer = document.getElementById('post-details');

            postDetailsContainer.innerHTML = `
                <h2>${postData.itemName}</h2>
                <p><strong>Description:</strong> ${postData.postDescription}</p>
                <p><strong>Category:</strong> ${postData.category}</p>
                <p><strong>Price:</strong> SGD ${postData.price}</p>
                <p><strong>Posted by:</strong> ${postData.account}</p>
                <img src="${postData.imageUrl}" alt="${postData.itemName}" class="img-fluid mt-3">
                <p><small>Posted on: ${new Date(postData.timestamp.seconds * 1000).toLocaleDateString()}</small></p>
                
                <div class="location-section">
                    <p><strong>Nearest MRT Station:</strong> ${postData.mrtStationName}</p>
                    <div id="map"></div>
                </div>
            `;

            initMapWithGeocoding(postData.mrtStationName);
            loadReviews(postId); // Load reviews after displaying post details
        } else {
            console.log("No such post!");
        }
    } else {
        console.log("Post ID not found in URL.");
    }
}

// Function to load reviews for a specific post
async function loadReviews(postId) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ""; // Clear existing reviews

    const reviewsSnapshot = await getDocs(collection(db, `posts/${postId}/reviews`));
    reviewsSnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";
        reviewElement.textContent = `${reviewData.account}: ${reviewData.reviewText}`;
        reviewsList.appendChild(reviewElement);
    });
}

// Function to submit a review
async function submitReview(postId, reviewText) {
    const userDisplayName = auth.currentUser.displayName || "Anonymous";
    try {
        await addDoc(collection(db, `posts/${postId}/reviews`), {
            reviewText: reviewText,
            account: userDisplayName,
            timestamp: new Date()
        });
        loadReviews(postId); // Reload reviews after adding a new one
    } catch (error) {
        console.error("Error adding review:", error);
    }
}

// Set up review submission only for authenticated users
function setupReviewForm() {
    const reviewFormContainer = document.getElementById("review-input-section");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            reviewFormContainer.innerHTML = `
                <textarea id="review-text" class="form-control" rows="3" placeholder="Write your review here..."></textarea>
                <button id="submit-review" class="btn btn-primary mt-2">Submit Review</button>
            `;

            document.getElementById("submit-review").addEventListener("click", async () => {
                const reviewText = document.getElementById("review-text").value;
                if (reviewText.trim()) {
                    await submitReview(postId, reviewText);
                    document.getElementById("review-text").value = ""; // Clear input
                }
            });
        } else {
            reviewFormContainer.innerHTML = `
                <p class="alert alert-warning">You must be logged in to leave a review.</p>
            `;
        }
    });
}

// Ensure the API and DOM are fully loaded before running displayPostDetails
window.onload = function() {
    displayPostDetails();
    setupReviewForm();
};
