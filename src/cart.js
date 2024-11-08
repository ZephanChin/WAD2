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

// Function to clear all child elements of a container
function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Function to display cart items, grouped by seller account and item quantity, and show total price
async function displayCartItems(user) {
    const cartItemsContainer = document.getElementById("cart-items-container");
    clearContainer(cartItemsContainer); // Clear previous content

    const cartRef = collection(db, `users/${user.uid}/cart`);
    const cartSnapshot = await getDocs(cartRef);

    if (cartSnapshot.empty) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Your cart is empty.";
        cartItemsContainer.appendChild(emptyMessage);
        return;
    }

    // Group items by seller account and calculate total price
    const itemsBySeller = {};
    let totalPrice = 0; // Initialize total price

    cartSnapshot.forEach((doc) => {
        const itemData = doc.data();
        const cartItemId = doc.id; // Get document ID for deletion
        const sellerAccount = itemData.account;
        const itemKey = `${itemData.itemName}-${itemData.itemPrice}`; // Unique key for each item by name and price

        if (!itemsBySeller[sellerAccount]) {
            itemsBySeller[sellerAccount] = {};
        }

        // If item already exists, increment quantity, otherwise add item with quantity of 1
        if (itemsBySeller[sellerAccount][itemKey]) {
            itemsBySeller[sellerAccount][itemKey].quantity += 1;
        } else {
            itemsBySeller[sellerAccount][itemKey] = { ...itemData, cartItemId, quantity: 1 };
        }
    });

    // Display items grouped by seller account
    for (const seller in itemsBySeller) {
        const sellerSection = document.createElement("div");
        sellerSection.classList.add("seller-section");

        const sellerTitle = document.createElement("h2");
        sellerTitle.textContent = `Make Purchase from: ${seller}`;
        sellerSection.appendChild(sellerTitle);

        for (const itemKey in itemsBySeller[seller]) {
            const item = itemsBySeller[seller][itemKey];

            // Update total price by adding item price * quantity
            totalPrice += item.itemPrice * item.quantity;

            // Create item display elements
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            const itemName = document.createElement("h3");
            itemName.textContent = item.itemName;

            const itemQuantity = document.createElement("p");
            itemQuantity.textContent = `Quantity: ${item.quantity}`;

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `Price: SGD ${item.itemPrice}`;

            const itemImage = document.createElement("img");
            itemImage.src = item.itemImage;
            itemImage.alt = item.itemName;
            itemImage.classList.add("cart-item-image");

            // Create Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";
            deleteButton.classList.add("btn", "delete-button");
            deleteButton.addEventListener("click", () => deleteCartItem(user.uid, item.cartItemId));

            // Append item details and delete button to the item div
            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemQuantity);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(deleteButton);

            // Append item div to the seller section
            sellerSection.appendChild(itemDiv);
        }

        // Append each seller section to the cart container
        cartItemsContainer.appendChild(sellerSection);
    }

    // Display the total price and checkout button in a right-aligned container
    const totalContainer = document.createElement("div");
    totalContainer.classList.add("total-container"); // New container for styling alignment

    const totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("total-price");
    totalPriceElement.textContent = `Total Price: SGD ${totalPrice.toFixed(2)}`;
    totalContainer.appendChild(totalPriceElement);

    const massCheckoutButton = document.createElement("button");
    massCheckoutButton.textContent = "Checkout All Items";
    massCheckoutButton.classList.add("btn", "checkout-button");
    massCheckoutButton.addEventListener("click", () => {
        window.location.href = "/checkout.html"; // Adjust this URL as needed
    });
    totalContainer.appendChild(massCheckoutButton);

    // Append the totalContainer to the cart container
    cartItemsContainer.appendChild(totalContainer);
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
