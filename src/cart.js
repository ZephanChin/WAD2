import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Firebase configuration (replace with your configuration values)
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

// Function to delete an item from the cart
async function deleteCartItem(userId, cartItemId) {
    const cartItemRef = doc(db, `users/${userId}/cart/${cartItemId}`);
    try {
        await deleteDoc(cartItemRef);
        alert("Item deleted from cart.");
        displayCartItems({ uid: userId }); // Refresh the cart display after deletion
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}

// Function to display cart items, grouped by seller account
async function displayCartItems(user) {
    const cartItemsContainer = document.getElementById("cart-items-container");
    cartItemsContainer.innerHTML = ""; // Clear initial loading message

    const cartRef = collection(db, `users/${user.uid}/cart`);
    const cartSnapshot = await getDocs(cartRef);

    if (cartSnapshot.empty) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    // Group items by seller account
    const itemsBySeller = {};
    cartSnapshot.forEach((doc) => {
        const itemData = doc.data();
        const cartItemId = doc.id; // Get document ID for deletion
        const sellerAccount = itemData.account;

        if (!itemsBySeller[sellerAccount]) {
            itemsBySeller[sellerAccount] = [];
        }
        itemsBySeller[sellerAccount].push({ ...itemData, cartItemId });
    });

    // Display items grouped by seller account
    for (const seller in itemsBySeller) {
        const sellerSection = document.createElement("div");
        sellerSection.classList.add("seller-section");

        const sellerTitle = document.createElement("h2");
        sellerTitle.textContent = `Make Purchase from: ${seller}`;
        sellerSection.appendChild(sellerTitle);

        itemsBySeller[seller].forEach((item) => {
            // Create item display elements
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            const itemName = document.createElement("h3");
            itemName.textContent = item.itemName;

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `Price: SGD ${item.itemPrice}`;

            const itemImage = document.createElement("img");
            itemImage.src = item.itemImage;
            itemImage.alt = item.itemName;
            itemImage.classList.add("cart-item-image");

            // Create Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";
            deleteButton.classList.add("btn", "btn-danger", "delete-button");
            deleteButton.addEventListener("click", () => deleteCartItem(user.uid, item.cartItemId));

            // Append item details and delete button to the item div
            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(deleteButton);

            // Append item div to the seller section
            sellerSection.appendChild(itemDiv);
        });

        // Create and append the Checkout button for this seller
        const checkoutButton = document.createElement("button");
        checkoutButton.textContent = "Checkout";
        checkoutButton.classList.add("btn", "btn-success", "checkout-button");
        checkoutButton.style.marginTop = "15px";

        // Redirect to the unique seller checkout page with the seller's account as a query parameter
        checkoutButton.addEventListener("click", () => {
            window.location.href = `/checkout.html?seller=${encodeURIComponent(seller)}`;
        });

        // Append the checkout button to the seller section
        sellerSection.appendChild(checkoutButton);

        // Append each seller section to the cart container
        cartItemsContainer.appendChild(sellerSection);
    }
}

// Check for user authentication and display cart items
onAuthStateChanged(auth, (user) => {
    if (user) {
        displayCartItems(user);
    } else {
        // Redirect to login page if not logged in
        window.location.href = "/login.html";
    }
});
