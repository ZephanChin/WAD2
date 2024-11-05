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
                await addDoc(cartRef, {
                    itemId: postId,
                    itemName: postData.itemName,
                    itemPrice: postData.price,
                    itemImage: postData.imageUrl,
                    account: postData.account,
                    timestamp: new Date()
                });
                alert("Item added to cart!");
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
    renderPostDetails(postDetailsContainer, postData);
    loadReviews(postId);
    setupReviewForm();
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

    const price = container.querySelector(".post-price");
    price.textContent = `Price: SGD ${postData.price}`;

    const account = container.querySelector(".post-account");
    account.textContent = `Posted by: ${postData.account}`;

    const image = container.querySelector(".post-image");
    image.src = postData.imageUrl;
    image.alt = postData.itemName;

    // Create and position the "Add to Cart" button in the top right
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("btn", "btn-primary", "add-to-cart");
    addToCartButton.addEventListener("click", () => addToCart(postData));
    addToCartButton.style.position = "absolute";
    addToCartButton.style.top = "10px";
    addToCartButton.style.right = "10px";
    container.appendChild(addToCartButton);

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

// Enable editing for post details and show Save button
function enableEditing() {
    const title = document.querySelector(".post-title");
    const descriptionContent = document.querySelector(".post-description .editable-content");
    const categoryContent = document.querySelector(".post-category .editable-content");
    const categoryDropdown = document.querySelector(".post-category .category-dropdown");
    const price = document.querySelector(".post-price");

    [title, descriptionContent, price].forEach(field => {
        field.contentEditable = "true";
        field.classList.add("editable-field");
    });
    
    categoryContent.style.display = "none"; // Hide the text content
    categoryDropdown.style.display = "inline-block"; // Show the dropdown
    categoryDropdown.disabled = false;

    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.saveButton.style.display = "inline-block";
}

// Save changes to post details
async function savePostChanges(postId) {
    const title = document.querySelector(".post-title");
    const descriptionContent = document.querySelector(".post-description .editable-content");
    const categoryDropdown = document.querySelector(".post-category .category-dropdown");
    const price = document.querySelector(".post-price");

    const priceText = price.textContent.replace(/[^\d.-]/g, "");
    const priceValue = parseFloat(priceText);

    if (isNaN(priceValue)) {
        alert("Invalid price. Please enter a numeric value.");
        return;
    }

    try {
        await updateDoc(doc(db, "posts", postId), {
            itemName: title.textContent,
            postDescription: descriptionContent.textContent,
            category: categoryDropdown.value,
            price: priceValue
        });
        alert("Post updated successfully!");
        location.reload();

        [title, descriptionContent, price].forEach(field => {
            field.classList.remove("editable-field");
            field.contentEditable = "false";
        });

        // Hide dropdown and show the text content after saving
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

// Function to load reviews
async function loadReviews(postId) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.textContent = "";

    const reviewsSnapshot = await getDocs(collection(db, `posts/${postId}/reviews`));
    reviewsSnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
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
        loadReviews(postId);
    } catch (error) {
        console.error("Error adding review:", error);
        alert("Failed to add review.");
    }
}

// Set up review submission only for authenticated users
function setupReviewForm() {
    const reviewFormContainer = document.getElementById("review-input-section");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const reviewTextArea = document.createElement("textarea");
            reviewTextArea.id = "review-text";
            reviewTextArea.classList.add("form-control");
            reviewTextArea.rows = 3;
            reviewTextArea.placeholder = "Write your review here...";

            const submitButton = document.createElement("button");
            submitButton.id = "submit-review";
            submitButton.classList.add("btn", "btn-primary", "mt-2");
            submitButton.textContent = "Submit Review";

            reviewFormContainer.appendChild(reviewTextArea);
            reviewFormContainer.appendChild(submitButton);

            submitButton.addEventListener("click", async () => {
                const reviewText = reviewTextArea.value;
                if (reviewText.trim()) {
                    await submitReview(postId, reviewText);
                    reviewTextArea.value = "";
                }
            });
        } else {
            const warningMessage = document.createElement("p");
            warningMessage.classList.add("alert", "alert-warning");
            warningMessage.textContent = "You must be logged in to leave a review.";
            reviewFormContainer.appendChild(warningMessage);
        }
    });
}

// Initialize display of post details on page load
window.onload = displayPostDetails;
