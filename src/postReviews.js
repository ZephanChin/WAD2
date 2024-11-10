import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
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

// Initialize Firebase if it hasn’t been initialized already
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}


// Firebase initialization (ensure it's already initialized in your app)
const auth = getAuth();
const db = getFirestore();

// Load reviews for a specific post
export async function loadReviews(postId) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.textContent = ""; // Clear any previous reviews

    const reviewsSnapshot = await getDocs(collection(db, `posts/${postId}/reviews`));

    if (reviewsSnapshot.empty) {
        const noReviewsMessage = document.createElement("p");
        noReviewsMessage.textContent = "No reviews yet. Be the first to leave a review!";
        reviewsList.appendChild(noReviewsMessage);
    }

    reviewsSnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        // Create and append the review elements
        const username = document.createElement("div");
        username.classList.add("review-username");
        username.textContent = reviewData.account;

        const rating = document.createElement("div");
        rating.classList.add("review-rating");
        rating.textContent = `Rating: ${"★".repeat(reviewData.starRating)}`;

        const reviewText = document.createElement("div");
        reviewText.classList.add("review-text");
        reviewText.textContent = reviewData.reviewText;

        reviewElement.appendChild(username);
        reviewElement.appendChild(rating);
        reviewElement.appendChild(reviewText);

        // Add edit/delete buttons if the current user is the review author
        onAuthStateChanged(auth, (user) => {
            if (user && user.uid === reviewData.userId) {
                const buttonsContainer = document.createElement("div");
                buttonsContainer.classList.add("rev-buttons-container");

                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.classList.add("btn", "btn-secondary");
                editButton.addEventListener("click", () => editReview(doc.id, postId, reviewData));

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("btn", "btn-danger");
                deleteButton.addEventListener("click", () => deleteReview(doc.id, postId));

                buttonsContainer.append(editButton, deleteButton);
                reviewElement.appendChild(buttonsContainer);
            }
        });

        reviewsList.appendChild(reviewElement);
    });
}

// Submit a review for a post
export async function submitReview(postId, reviewText, starRating) {
    const user = auth.currentUser;

    if (!user) {
        alert("You must be logged in to submit a review.");
        return;
    }

    const userDisplayName = user.displayName || "Anonymous";

    try {
        await addDoc(collection(db, `posts/${postId}/reviews`), {
            reviewText: reviewText,
            account: userDisplayName,
            userId: user.uid,
            starRating: starRating,
            timestamp: new Date(),
        });
        alert("Review submitted successfully!");
        loadReviews(postId);  // Reload reviews after submission
    } catch (error) {
        console.error("Error submitting review:", error);
        alert("Failed to submit review.");
    }
}

// Edit a review for a post
export async function editReview(reviewId, postId, reviewData) {
    const newReviewText = prompt("Edit your review:", reviewData.reviewText);
    const newRating = prompt("Edit your rating (1-5):", reviewData.starRating);

    if (newReviewText && newRating) {
        await updateReview(reviewId, postId, newReviewText, parseInt(newRating, 10));
    }
}

// Update the review in Firestore
async function updateReview(reviewId, postId, reviewText, starRating) {
    try {
        await updateDoc(doc(db, `posts/${postId}/reviews`, reviewId), {
            reviewText: reviewText,
            starRating: starRating,
            timestamp: new Date(),
        });
        alert("Review updated successfully!");
        loadReviews(postId);  // Reload reviews after updating
    } catch (error) {
        console.error("Error updating review:", error);
        alert("Failed to update review.");
    }
}

// Delete a review from a post
export async function deleteReview(reviewId, postId) {
    if (confirm("Are you sure you want to delete this review?")) {
        try {
            await deleteDoc(doc(db, `posts/${postId}/reviews`, reviewId));
            alert("Review deleted successfully!");
            loadReviews(postId);  // Reload reviews after deleting
        } catch (error) {
            console.error("Error deleting review:", error);
            alert("Failed to delete review.");
        }
    }
}

// Function to set up review form for authenticated users
// Function to set up review form for authenticated users
export function setupReviewForm(postId) {
    const reviewFormContainer = document.getElementById("review-input-section");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Get the post data to check the post creator
            const postRef = doc(db, "posts", postId);
            getDoc(postRef).then(postSnap => {
                if (postSnap.exists()) {
                    const postData = postSnap.data();
                    const postCreatorId = postData.uid;  // The UID of the post creator

                    // If the current user is the post creator, hide the review form
                    if (user.uid === postCreatorId) {
                        const warningMessage = document.createElement("p");
                        warningMessage.classList.add("alert", "alert-warning");
                        warningMessage.textContent = "You cannot leave a review for your own post.";
                        reviewFormContainer.appendChild(warningMessage);
                    } else {
                        // Show the review form if the user is not the post creator
                        const reviewTextArea = document.createElement("textarea");
                        reviewTextArea.id = "review-text";
                        reviewTextArea.classList.add("form-control");
                        reviewTextArea.rows = 3;
                        reviewTextArea.placeholder = "Write your review here...";

                        const stars = document.createElement("span");
                        stars.innerText = "Stars (rate from 1 to 5): ";

                        const reviewStar = document.createElement("select");
                        reviewStar.id = "review-star";
                        reviewStar.classList.add("form-control", "mt-2");

                        for (let i = 1; i <= 5; i++) {
                            const option = document.createElement("option");
                            option.value = i;
                            option.textContent = i;
                            reviewStar.appendChild(option);
                        }

                        const submitButton = document.createElement("button");
                        submitButton.id = "submit-review";
                        submitButton.classList.add("btn", "btn-primary", "mt-2");
                        submitButton.textContent = "Submit Review";

                        reviewFormContainer.appendChild(reviewTextArea);
                        reviewFormContainer.appendChild(stars);
                        reviewFormContainer.appendChild(reviewStar);
                        reviewFormContainer.appendChild(submitButton);

                        submitButton.addEventListener("click", () => {
                            const reviewText = reviewTextArea.value;
                            const starRating = parseInt(reviewStar.value);
                            submitReview(postId, reviewText, starRating);  // Submit review
                        });
                    }
                }
            }).catch(error => {
                console.error("Error fetching post data:", error);
            });
        } else {
            const warningMessage = document.createElement("p");
            warningMessage.classList.add("alert", "alert-warning");
            warningMessage.textContent = "You must be logged in to leave a review.";
            reviewFormContainer.appendChild(warningMessage);
        }
    });
}

