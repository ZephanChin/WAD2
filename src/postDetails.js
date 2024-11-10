import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";

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

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Google Maps API key from .env file
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Function to add item to cart
async function addToCart(postData) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const cartRef = collection(db, `users/${user.uid}/cart`);
                const cartSnapshot = await getDocs(cartRef);
                let existingItemDoc = null;

                // Check if the item already exists in the cart
                cartSnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.itemId === postId) {
                        existingItemDoc = doc; // Store the document reference if the item is found
                    }
                });

                if (existingItemDoc) {
                    // Item exists in the cart, update the quantity and total price
                    const newQuantity = existingItemDoc.data().quantity + 1; // Increase quantity
                    const newTotalPrice = postData.price * newQuantity; // Update total price

                    await updateDoc(doc(db, `users/${user.uid}/cart`, existingItemDoc.id), {
                        quantity: newQuantity,
                        totalPrice: newTotalPrice // Store the updated total price
                    });
                    alert("Item quantity updated in cart!");
                } else {
                    // Item does not exist, add it to the cart
                    await addDoc(cartRef, {
                        itemId: postId,
                        itemName: postData.itemName,
                        itemPrice: postData.price,
                        itemImage: postData.imageUrl,
                        account: postData.account,
                        sellerUid: postData.uid,
                        quantity: 1, // Start with quantity of 1
                        totalPrice: postData.price, // Store initial total price
                        timestamp: new Date()
                    });
                    alert("Item added to cart!");
                }
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        } else {
            window.location.href = "/login.html";
        }
    });
}


// Function to retrieve and display post details
async function displayPostDetails() {
    const postDetailsContainer = document.getElementById('post-details');

    if (!postId) {
        postDetailsContainer.textContent = "Post not found.";
        return;
    }

    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);

    if (!postSnap.exists()) {
        postDetailsContainer.textContent = "No such post exists.";
        return;
    }

    const postData = postSnap.data();
    renderPostDetails(postDetailsContainer, postData, postId);
    loadReviews(postId, postData);
    setupReviewForm(postData);
}

// Function to render post details and add the Add to Cart button
function renderPostDetails(container, postData) {
    const title = container.querySelector(".post-title");
    title.textContent = postData.itemName;

    const description = container.querySelector(".post-description");
    description.textContent = "Description: ";
    const descriptionContent = document.createElement("span");
    descriptionContent.classList.add("editable-content");
    descriptionContent.textContent = postData.postDescription;
    description.appendChild(descriptionContent);

    const category = container.querySelector(".post-category");
    category.textContent = "Category: ";
    const categoryContent = document.createElement("span");
    categoryContent.classList.add("editable-content");
    categoryContent.textContent = postData.category;
    category.appendChild(categoryContent);

    const categoryDropdown = document.createElement("select");
    categoryDropdown.classList.add("category-dropdown");
    categoryDropdown.style.display = "none"; // Initially hidden
    ["Crafts", "Fashion", "Food", "Services"].forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        if (postData.category === optionText) {
            option.selected = true;
        }
        categoryDropdown.appendChild(option);
    });
    category.appendChild(categoryDropdown);
    // Price setup - keep it as a static text
    const price = container.querySelector(".post-price");
    price.textContent = `Price: SGD ${postData.price}`; // No editable part
    const account = container.querySelector(".post-account");
    account.textContent = `Posted by: ${postData.account}`;
    const image = container.querySelector(".post-image");
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    const addToCartButton = document.getElementById("addToCartButton");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", () => addToCart(postData));
    }
    if (postData.mrtStationName) {
        loadGoogleMapsScript(postData.mrtStationName);
    }
    onAuthStateChanged(auth, (user) => {
        if (user && user.uid === postData.uid) {
            addEditAndDeleteOptions();
        }
    });
}



// Load Google Maps script with API key and initialize map with location name
function loadGoogleMapsScript(locationName) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMapWithGeocoding`;
    script.async = true;
    document.head.appendChild(script);

    window.initMapWithGeocoding = function () {
        initMapWithGeocoding(locationName);
    };
}

// Initialize map with geocoding location name
function initMapWithGeocoding(locationName) {
    const mapContainer = document.getElementById("map");
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: locationName }, (results, status) => {
        if (status === "OK" && results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            const mapOptions = {
                center: { lat: lat(), lng: lng() },
                zoom: 15
            };
            const map = new google.maps.Map(mapContainer, mapOptions);
            new google.maps.Marker({
                position: { lat: lat(), lng: lng() },
                map: map,
                title: locationName
            });
        } else {
            mapContainer.textContent = "Location not found.";
        }
    });
}

// Add edit, delete, and save buttons at the end of the review section
function addEditAndDeleteOptions() {
    const reviewFormContainer = document.getElementById("review-input-section");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Post";
    editButton.classList.add("btn", "btn-warning");
    editButton.addEventListener("click", enableEditing);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", () => deletePost(postId));

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.classList.add("btn", "btn-success");
    saveButton.style.display = "none";
    saveButton.addEventListener("click", () => savePostChanges(postId));

    buttonsContainer.append(editButton, deleteButton, saveButton);

    reviewFormContainer.insertAdjacentElement("afterend", buttonsContainer);
    buttonsContainer.saveButton = saveButton;
}
// Enable editing for post details (title and description only) and show Save button
function enableEditing() {
    const title = document.querySelector(".post-title");
    const descriptionContent = document.querySelector(".post-description .editable-content");
    const categoryDropdown = document.querySelector(".post-category .category-dropdown");
    // Make only title and description editable
    title.contentEditable = "true";
    title.classList.add("editable-field"); // Add the editable-field class
    descriptionContent.contentEditable = "true"; // Make description editable
    descriptionContent.classList.add("editable-field"); // Add the editable-field class
    // Hide the current category content and show dropdown    
    const categoryContent = document.querySelector(".post-category .editable-content");
    categoryContent.style.display = "none"; // Hide current category    
    categoryDropdown.style.display = "inline-block"; // Show dropdown
    categoryDropdown.disabled = false; // Enable dropdown
    const addToCartButton = document.getElementById("addToCartButton");
    if (addToCartButton) {
        addToCartButton.style.display = "none"; // Hide Add to Cart button while editing    
    }
    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.saveButton.style.display = "inline-block"; // Show Save button
}

// Save changes to post details
async function savePostChanges(postId) {
    const title = document.querySelector(".post-title");
    const descriptionContent = document.querySelector(".post-description .editable-content");
    const categoryDropdown = document.querySelector(".post-category .category-dropdown");
    try {
        await updateDoc(doc(db, "posts", postId), {
            itemName: title.textContent,
            postDescription: descriptionContent.textContent,
            category: categoryDropdown.value,            // Price is no longer included
        });
        alert("Post updated successfully!");
        location.reload(); // Reload the page to reflect changes
        // Remove editable styles from title, description, and category        
        [title, descriptionContent].forEach(field => {
            field.classList.remove("editable-field");
            field.contentEditable = "false"; // Set contentEditable to false
        });
        // Show the category content and hide the dropdown        
        document.querySelector(".post-category .editable-content").style.display = "inline";
        categoryDropdown.style.display = "none";
        categoryDropdown.disabled = true;
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}

// Delete the post with confirmation
async function deletePost(postId) {
    if (confirm("Are you sure you want to delete this post?")) {
        try {
            await deleteDoc(doc(db, "posts", postId));
            document.getElementById('post-details').textContent = "Post has been deleted.";
            setTimeout(() => window.location.href = "/userPosts.html", 2000);
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post.");
        }
    }
}

// Load and display reviews
async function loadReviews(postId, postData) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.textContent = "";

    const reviewsSnapshot = await getDocs(collection(db, `posts/${postId}/reviews`));
    const user = auth.currentUser;

    reviewsSnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        //reviewElement.textContent = `${reviewData.account} - ${"★".repeat(reviewData.starRating)}: ${reviewData.reviewText}`;

        // Username (Top Left)
        const username = document.createElement("div");
        username.classList.add("review-username");
        username.textContent = reviewData.account;

        // Rating (Below Username)
        const rating = document.createElement("div");
        rating.classList.add("review-rating");
        rating.textContent = `Rating: ${"★".repeat(reviewData.starRating)}`;

        // Main Review Text (Below Rating)
        const reviewText = document.createElement("div");
        reviewText.classList.add("review-text");
        reviewText.textContent = reviewData.reviewText;

        // Append the username, rating, and review text to the review element
        reviewElement.appendChild(username);
        reviewElement.appendChild(rating);
        reviewElement.appendChild(reviewText);

        // Buttons for edit and delete
        if (user && user.uid === reviewData.userId) {
            const revbuttonsContainer = document.createElement("div");
            revbuttonsContainer.classList.add("rev-buttons-container");

            const editReviewButton = document.createElement("button");
            editReviewButton.textContent = "Edit";
            editReviewButton.classList.add("btn", "btn-secondary");
            editReviewButton.addEventListener("click", () => editReview(doc.id, postId, reviewData, postData.account));

            const deleteReviewButton = document.createElement("button");
            deleteReviewButton.textContent = "Delete";
            deleteReviewButton.classList.add("btn", "btn-danger");
            deleteReviewButton.addEventListener("click", () => deleteReview(doc.id, postId, reviewData, postData.account)); // Pass review ID and post ID to delete function
            //reviewElement.appendChild(deleteReviewButton); // Add delete button to the review
            revbuttonsContainer.append(editReviewButton, deleteReviewButton);

            reviewElement.appendChild(revbuttonsContainer);
        }

        reviewsList.appendChild(reviewElement); // Append the review element to the list
    });
}

// Function to submit a review
async function submitReview(postId, reviewText, starRating, account) {
    const user = auth.currentUser; // Get the current user
    const userDisplayName = user.displayName || "Anonymous";
    try {
        await addDoc(collection(db, `posts/${postId}/reviews`), {
            reviewText: reviewText,
            account: userDisplayName,
            userId: user.uid, // Store the user's UID with the review
            starRating: starRating,
            timestamp: new Date()
        });
        // Update the report based on the star rating
        if (starRating >= 4) {
            await addGood(starRating, account);
        } else if (starRating === 3) {
            await addNeutral(starRating, account);
        } else {
            await addBad(starRating, account);
        }

        loadReviews(postId, account);
    } catch (error) {
        console.error("Error adding review:", error);
        alert("Failed to add review.");
    }
}

// Edit review function to enable editing of review and rating
function editReview(reviewId, postId, reviewData, account) {
    const reviewText = prompt("Edit your review:", reviewData.reviewText);
    const rating = prompt("Edit your rating (1-5):", reviewData.rating);

    if (reviewText && rating) {
        updateReview(reviewId, postId, reviewText, parseInt(rating, 10), account);
    }
}

// Function to update a review in Firestore
async function updateReview(reviewId, postId, reviewText, starRating, account) {
    let oldStarRating;
    try {
        const reviewRef = doc(db, `posts/${postId}/reviews`, reviewId);

        // Retrieve the current review document to get the existing starRating
        const reviewSnap = await getDoc(reviewRef);

        if (reviewSnap.exists()) {
            const currentReviewData = reviewSnap.data();
            oldStarRating = currentReviewData.starRating;
        }
    } catch (error) {
        console.error("Error retrieving review:", error);
    }
    try {
        await updateDoc(doc(db, `posts/${postId}/reviews`, reviewId), {
            reviewText: reviewText,
            starRating: starRating,
            timestamp: new Date()
        });
        alert("Review updated successfully!");
        if (oldStarRating != starRating) {
            updateRating(oldStarRating, starRating, account);
        }

        loadReviews(postId, account);
    } catch (error) {
        console.error("Error updating review:", error);
        alert("Failed to update review.");
    }
}

// Delete the review with confirmation
async function deleteReview(reviewId, postId, reviewData, account) {
    if (confirm("Are you sure you want to delete this review?")) {
        try {
            await deleteDoc(doc(db, `posts/${postId}/reviews`, reviewId));
            deleteRating(reviewData.starRating, account);
            loadReviews(postId, account);
        } catch (error) {
            console.error("Error deleting review:", error);
            alert("Failed to delete review.");
        }
    }
}

// Set up review submission only for authenticated users and prevent self-reviews
function setupReviewForm(postData) {
    const reviewFormContainer = document.getElementById("review-input-section");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Check if the logged-in user is the owner of the post
            if (user.uid === postData.uid) {
                // If the user is trying to review their own post, show a warning message
                const warningMessage = document.createElement("p");
                warningMessage.classList.add("alert", "alert-warning");
                warningMessage.textContent = "You cannot leave a review on your own post.";
                reviewFormContainer.appendChild(warningMessage);
                return; // Prevent the review form from being displayed if the user is the post owner
            }

            // Create review form elements for non-owners
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

            // Adding options 1 to 5 in the dropdown
            for (let i = 1; i <= 5; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = i;
                if (i === 5) {
                    option.selected = true;
                }
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

            // Handle review submission
            submitButton.addEventListener("click", async () => {
                const reviewText = reviewTextArea.value;
                const reviewStarValue = parseInt(reviewStar.value); // Convert star rating to an integer

                if (reviewText.trim()) {
                    await submitReview(postData.id, reviewText, reviewStarValue, postData.account); // Pass the star rating to `submitReview`
                    reviewTextArea.value = ""; // Clear the review text area after submission
                }
            });
        } else {
            // If the user is not logged in, show a warning message
            const warningMessage = document.createElement("p");
            warningMessage.classList.add("alert", "alert-warning");
            warningMessage.textContent = "You must be logged in to leave a review.";
            reviewFormContainer.appendChild(warningMessage);
        }
    });
}


// Function to get current value, modify it, and update the document
async function addGood(starRating, account) {
    const reportDocRef = doc(db, "report", account); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentGood = docSnap.data().good || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1, // Increment the sales field
                good: currentGood + 1,
                total_stars: currentStars + starRating
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


async function addBad(starRating, account) {
    const reportDocRef = doc(db, "report", account); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentBad = docSnap.data().bad || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1,
                bad: currentBad + 1,
                total_stars: currentStars + starRating
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


async function addNeutral(starRating, account) {
    const reportDocRef = doc(db, "report", account); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentStars = docSnap.data().total_stars || 0;

            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews + 1,
                total_stars: currentStars + starRating
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

async function updateRating(oldStarRating, starRating, account) {
    console.log(oldStarRating);
    console.log(starRating);
    const reportDocRef = doc(db, "report", account); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);
        console.log("found");

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentStars = docSnap.data().total_stars || 0;
            const currentBad = docSnap.data().bad || 0;
            const currentGood = docSnap.data().good || 0;
            console.log("founded");

            if (oldStarRating > starRating) {
                console.log("foundfounded");
                if (oldStarRating > 3 && starRating == 3) {
                    await updateDoc(reportDocRef, {
                        good: currentGood - 1,
                        total_stars: currentStars - (oldStarRating - starRating)
                    });
                }
                if (oldStarRating == 3 && starRating < 3) {
                    await updateDoc(reportDocRef, {
                        bad: currentBad + 1,
                        total_stars: currentStars - (oldStarRating - starRating)
                    });
                }
                if (oldStarRating == 3 && starRating > 3) {
                    await updateDoc(reportDocRef, {
                        good: currentGood + 1,
                        total_stars: currentStars - (oldStarRating - starRating)
                    });
                }
                if (oldStarRating > 3 && starRating < 3) {
                    console.log("working right");
                    await updateDoc(reportDocRef, {
                        bad: currentBad + 1,
                        good: currentGood - 1,
                        total_stars: currentStars - (oldStarRating - starRating)
                    });
                }
            } else {
                console.log("foundfounded");
                if (starRating > 3 && oldStarRating == 3) {
                    await updateDoc(reportDocRef, {
                        good: currentGood + 1,
                        total_stars: currentStars + (starRating - oldStarRating)
                    });
                }
                if (starRating == 3 && oldStarRating < 3) {
                    await updateDoc(reportDocRef, {
                        bad: currentBad - 1,
                        total_stars: currentStars + (starRating - oldStarRating)
                    });
                }
                if (starRating == 3 && oldStarRating > 3) {
                    await updateDoc(reportDocRef, {
                        good: currentGood - 1,
                        total_stars: currentStars + (starRating - oldStarRating)
                    });
                }

                if (starRating > 3 && oldStarRating < 3) {
                    await updateDoc(reportDocRef, {
                        bad: currentBad - 1,
                        good: currentGood + 1,
                        total_stars: currentStars + (starRating - oldStarRating)
                    });
                }
            }
            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

async function deleteRating(starRating, account) {
    const reportDocRef = doc(db, "report", account); // Reference to your document

    try {
        // Fetch the current document
        const docSnap = await getDoc(reportDocRef);

        if (docSnap.exists()) {
            // Get the current value of a specific field
            const currentReviews = docSnap.data().reviews || 0;
            const currentStars = docSnap.data().total_stars || 0;
            console.log("checking");
            // Update the field by incrementing it, for example
            await updateDoc(reportDocRef, {
                reviews: currentReviews - 1,
                total_stars: currentStars - starRating
            });

            console.log("Field updated successfully!");
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Initialize display of post details on page load
window.onload = displayPostDetails;