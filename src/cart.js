import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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

// Function to delete an item from the cart
async function deleteCartItem(userId, cartItemId) {
    console.log(`Deleting cart item with ID: ${cartItemId}`);
    const cartItemRef = doc(db, `users/${userId}/cart/${cartItemId}`);
    try {
        await deleteDoc(cartItemRef);
        console.log("Item deleted successfully.");
        alert("Item deleted from cart.");
        displayCartItems({ uid: userId }); // Refresh the cart display after deletion
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}

// Function to clear all child elements of a container
function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Function to display cart items, grouped by seller account and item quantity, and show total price
async function displayCartItems(user) {
    console.log("Fetching cart items for user:", user.uid);
    const cartItemsContainer = document.getElementById("cart-items-container");
    clearContainer(cartItemsContainer); // Clear previous content

    const cartRef = collection(db, `users/${user.uid}/cart`);
    const cartSnapshot = await getDocs(cartRef);

    if (cartSnapshot.empty) {
        console.log("Cart is empty.");
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Your cart is empty.";
        cartItemsContainer.appendChild(emptyMessage);
        return;
    }

    // Group items by seller account and calculate total price
    const itemsBySeller = {};
    let totalCartPrice = 0; // Initialize total price for the cart

    cartSnapshot.forEach((doc) => {
        const itemData = doc.data();
        const cartItemId = doc.id; // Get document ID for deletion
        const sellerAccount = itemData.account;

        if (!itemsBySeller[sellerAccount]) {
            itemsBySeller[sellerAccount] = {};
        }

        // Group items by name and price
        const itemKey = `${itemData.itemName}-${itemData.itemPrice}`;

        // Get the quantity directly from the itemData
        const quantity = itemData.quantity || 1; // Use the quantity from Firestore

        if (itemsBySeller[sellerAccount][itemKey]) {
            itemsBySeller[sellerAccount][itemKey].quantity += quantity; // Accumulate the quantity
        } else {
            itemsBySeller[sellerAccount][itemKey] = { ...itemData, cartItemId, quantity }; // Include quantity
        }
    });

    console.log("Grouped items by seller:", itemsBySeller);

    // Display items grouped by seller account
    for (const seller in itemsBySeller) {
        console.log(`Displaying items for seller: ${seller}`);
        const sellerSection = document.createElement("div");
        sellerSection.classList.add("seller-section");

        const sellerTitle = document.createElement("h2");
        sellerTitle.textContent = `Make Purchase from: ${seller}`;
        sellerSection.appendChild(sellerTitle);
        for (const itemKey in itemsBySeller[seller]) {
            const item = itemsBySeller[seller][itemKey];
            const { quantity, itemPrice, itemName, itemImage, cartItemId } = item;

            const totalPriceForItem = itemPrice * quantity; // Calculate total price for this item

            // Update the total cart price
            totalCartPrice += totalPriceForItem;

            console.log(`Displaying item:`, item);

            // Create item display elements
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            const itemImageElement = document.createElement("img");
            itemImageElement.src = itemImage;
            itemImageElement.alt = itemName;
            itemImageElement.classList.add("cart-item-image");

            const itemNameElement = document.createElement("h3");
            itemNameElement.textContent = itemName;

            const itemQuantityElement = document.createElement("p");
            itemQuantityElement.textContent = `Quantity: ${quantity}`;

            const itemTotalPriceElement = document.createElement("p");
            itemTotalPriceElement.textContent = `Total Price: SGD ${totalPriceForItem.toFixed(2)}`;

            // Remove Button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("btn", "delete-button");
            removeButton.addEventListener("click", () => deleteCartItem(user.uid, cartItemId));

            // Append item details to the item div
            itemDiv.appendChild(itemImageElement);
            itemDiv.appendChild(itemNameElement);
            itemDiv.appendChild(itemQuantityElement);
            itemDiv.appendChild(itemTotalPriceElement);
            itemDiv.appendChild(removeButton);

            sellerSection.appendChild(itemDiv);
        }

        cartItemsContainer.appendChild(sellerSection);
    }

    console.log("Total price of items in cart:", totalCartPrice);

    // Display total cart price and checkout button
    const totalContainer = document.createElement("div");
    totalContainer.classList.add("total-container");

    const totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("total-price");
    totalPriceElement.textContent = `Total Cart Price: SGD ${totalCartPrice.toFixed(2)}`;
    totalContainer.appendChild(totalPriceElement);

    const checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.classList.add("btn", "checkout-button");
    checkoutButton.addEventListener("click", () => {
        console.log("Proceeding to checkout.");
        window.location.href = "/checkout.html"; // Adjust the URL as needed
    });
    totalContainer.appendChild(checkoutButton);

    cartItemsContainer.appendChild(totalContainer);
}

// Check for user authentication and display cart items
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User authenticated:", user.uid);
        displayCartItems(user);
    } else {
        console.log("User not authenticated. Redirecting to login page.");
        // Redirect to login page if not logged in
        window.location.href = "/login.html";
    }
});


