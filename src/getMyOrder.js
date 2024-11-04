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

// Function to retrieve and display purchase orders made by the current user
async function retrieveUserOrders() {
    // console.log('called purchase order');
    const pillPurchase = document.getElementById('pills-purchase');
    const user = auth.currentUser;
    console.log("User is authenticated:", user);
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(
                collection(db, "porders"),
                where("UserID", "==", "ak"),
                orderBy("PlaceDate")
            );

            const querySnapshot = await getDocs(q);
            // fails here
            pillPurchase.innerHTML = "";

            if (querySnapshot.empty) {
                pillPurchase.innerHTML = "<p>You do not have any orders.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const purchaseData = doc.data();
                    displayPOrder(doc.id, purchaseData, pillPurchase);
                });
            }
        } else {
            pillPurchase.innerHTML = "<p>Please log in to see your orders.</p>";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    });

    // const pillSales = document.getElementById('pills-sales');

    // onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    //         const q = query(
    //             collection(db, "sorder"),
    //             where("uid", "==", user.uid),
    //             orderBy("timestamp", "desc")
    //         );

    //         const querySnapshot = await getDocs(q);

    //         pillSales.innerHTML = "";

    //         if (querySnapshot.empty) {
    //             pillSales.innerHTML = "<p>You do not have any orders.</p>";
    //         } else {
    //             querySnapshot.forEach((doc) => {
    //                 const salesData = doc.data();
    //                 displaySOrder(doc.id, salesData, pillSales);
    //             });
    //         }
    //     } else {
    //         pillSales.innerHTML = "<p>Please log in to see your orders.</p>";
    //         setTimeout(() => {
    //             window.location.href = "/login.html";
    //         }, 2000);
    //     }
    // });
// }

// async function retrieveUserPosts() {
//     const postsContainer = document.getElementById('pills-purchase');

//     onAuthStateChanged(auth, async (user) => {
//         if (user) {
//             const q = query(
//                 collection(db, "posts"),
//                 where("uid", "==", user.uid),
//                 orderBy("timestamp", "desc")
//             );

//             const querySnapshot = await getDocs(q);

//             postsContainer.innerHTML = "";

//             if (querySnapshot.empty) {
//                 postsContainer.innerHTML = "<p>You have not made any posts.</p>";
//             } else {
//                 querySnapshot.forEach((doc) => {
//                     const postData = doc.data();
//                     displayPost(doc.id, postData, postsContainer);
//                 });
//             }
//         } else {
//             postsContainer.innerHTML = "<p>Please log in to see your posts.</p>";
//             setTimeout(() => {
//                 window.location.href = "/login.html";
//             }, 2000);
//         }
//     });
// }

// Function to retrieve and display sales orders made by the current user
// async function retrieveUserSOrders() {
//     const pillSales = document.getElementById('pills-sales');

//     onAuthStateChanged(auth, async (user) => {
//         if (user) {
//             const q = query(
//                 collection(db, "sorder"),
//                 where("uid", "==", user.uid),
//                 orderBy("timestamp", "desc")
//             );

//             const querySnapshot = await getDocs(q);

//             pillSales.innerHTML = "";

//             if (querySnapshot.empty) {
//                 pillSales.innerHTML = "<p>You do not have any orders.</p>";
//             } else {
//                 querySnapshot.forEach((doc) => {
//                     const salesData = doc.data();
//                     displayPOrder(doc.id, salesData, pillSales);
//                 });
//             }
//         } else {
//             pillSales.innerHTML = "<p>Please log in to see your orders.</p>";
//             setTimeout(() => {
//                 window.location.href = "/login.html";
//             }, 2000);
//         }
//     });
}

function displayPost(postId, postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-item');

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image');

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`;

    // Create and configure the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add('btn', 'btn-danger', 'mt-2');
    deleteButton.onclick = () => deletePost(postId, container);

    // Append elements to the post element
    postElement.appendChild(image);
    postElement.appendChild(itemName);
    postElement.appendChild(account);
    postElement.appendChild(deleteButton);

    container.appendChild(postElement);
}


// Function to dynamically create and display purchase elements, including a detail button [not done]
function displayPOrder(purchaseId, purchaseData, container) {
    const purchaseElement = document.createElement('div');
    purchaseElement.classList.add("mt-5", "me-5", "row", "bg-light", "border", "rounded", "d-flex");
    
    const purchaseElementHead = document.createElement('div');
    purchaseElementHead.classList.add("row", "col-4", "ms-2", "mt-2");

    // Ono Element
    const purchaseElementOnoDiv = document.createElement('div');
    purchaseElementOnoDiv.classList.add("col-4");

    const purchaseElementOnoLbl = document.createElement('span');
    purchaseElementOnoLbl.classList.add("fw-bold");
    purchaseElementOnoLbl.innerText = "Order Number";

    const purchaseElementOnoCtn = document.createElement('div');
    purchaseElementOnoCtn.textContent = purchaseId;

    purchaseElementOnoDiv.appendChild(purchaseElementOnoLbl);
    purchaseElementOnoDiv.appendChild(purchaseElementOnoCtn);

    // DP Element
    const purchaseElementDPDiv = document.createElement('div');
    purchaseElementDPDiv.classList.add("col-4");

    const purchaseElementDPLbl = document.createElement('span');
    purchaseElementDPLbl.classList.add("fw-bold");
    purchaseElementDPLbl.innerText = "Date Placed";

    const purchaseElementDPCtn = document.createElement('div');
    purchaseElementDPCtn.textContent = purchaseData.PlaceDate.toDate().toLocaleDateString();

    purchaseElementDPDiv.appendChild(purchaseElementDPLbl);
    purchaseElementDPDiv.appendChild(purchaseElementDPCtn);

    // TA Element
    const purchaseElementTADiv = document.createElement('div');
    purchaseElementTADiv.classList.add("col-4");

    const purchaseElementTALbl = document.createElement('span');
    purchaseElementTALbl.classList.add("fw-bold");
    purchaseElementTALbl.innerText = "Total Amount";

    const purchaseElementTACtn = document.createElement('div');
    purchaseElementTACtn.textContent = `$ ${purchaseData.TotalPrice.toFixed(2)}`;

    purchaseElementTADiv.appendChild(purchaseElementTALbl);
    purchaseElementTADiv.appendChild(purchaseElementTACtn);

    // Filler Element
    const purchaseElementFiller = document.createElement('div');
    purchaseElementFiller.classList.add('col-8');

    // Append Elements to Order Head
    purchaseElementHead.appendChild(purchaseElementOnoDiv);
    purchaseElementHead.appendChild(purchaseElementDPDiv);
    purchaseElementHead.appendChild(purchaseElementTADiv);

    // Append Elements to Order Element
    purchaseElement.appendChild(purchaseElementHead);
    container.appendChild(purchaseElement);

    // filler div
    const purchaseitemfiller = document.createElement('div');
    purchaseitemfiller.classList.add('col-8');
    purchaseElement.appendChild(purchaseitemfiller);  

    // Iterate item from Items Map
    const orderItems = purchaseData.Items; 
    
    // Iterate over the map 
    for (const key in orderItems) {
        if (orderItems.hasOwnProperty(key)) { 
            console.log(`Key: ${key}`); 
            const item = orderItems[key]; 
            // Iterate over each array 
            item.forEach(value => { 
                console.log(` - Value: ${value}`); 
            }); 
            // Item Details

            

            
            // Image Div
            const purchaseitemdiv = document.createElement('div');
            purchaseitemdiv.classList.add('col-2');
            const purchaseitemimg = document.createElement('img');
            purchaseitemimg.src = item[6];
            purchaseitemimg.classList.add("ms-3", "my-2", "item-img");
            
            purchaseitemdiv.appendChild(purchaseitemimg);
            purchaseElement.appendChild(purchaseitemdiv);

            // Purchase Element Body
            const purchaseElementBody = document.createElement('div');
            purchaseElementBody.classList.add('row', 'col-10', 'mt-5');

            // Shop Name Div
            const purchaseElementStoreName = document.createElement('div');
            purchaseElementStoreName.classList.add('col-4');
            purchaseElementStoreName.textContent = item[0];

            purchaseElementBody.appendChild(purchaseElementStoreName);

            // Item Desc Div
            const purchaseElementItemName = document.createElement('div');
            purchaseElementItemName.classList.add('col-8');
            purchaseElementItemName.textContent = item[2]; 

            purchaseElementBody.appendChild(purchaseElementItemName);
            
            // Item Price Div
            const purchaseElementItemPrice = document.createElement('div');
            purchaseElementItemPrice.classList.add('col-4');
            purchaseElementItemPrice.textContent = `Price: $ ${item[3].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementItemPrice);

            // Item Qty Div
            const purchaseElementItemQty = document.createElement('div');
            purchaseElementItemQty.classList.add('col-4');
            purchaseElementItemQty.textContent = `Qty: ${item[4]}`;

            purchaseElementBody.appendChild(purchaseElementItemQty);

            // Item Item Total Price Div
            const purchaseElementTItemPrice = document.createElement('div');
            purchaseElementTItemPrice.classList.add('col-4');
            purchaseElementTItemPrice.textContent = `Total Price: $ ${item[5].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementTItemPrice);

            // Body to Element
            purchaseElement.appendChild(purchaseElementBody);

        }
    }

    // const itemName = document.createElement('h3');
    // itemName.textContent = purchaseData.itemName;

    // const image = document.createElement('img');
    // image.src = purchaseData.imageUrl;
    // image.alt = purchaseData.itemName;
    // image.classList.add('post-image');

    // const account = document.createElement('p');
    // account.textContent = `Posted by: ${purchaseData.account}`;



    // Create and configure the delete button
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = "Delete Post";
    // deleteButton.classList.add('btn', 'btn-danger', 'mt-2');
    // deleteButton.onclick = () => deletePost(postId, container);

    // Append elements to the post element
    // postElement.appendChild(image);
    // postElement.appendChild(itemName);
    // postElement.appendChild(account);
    // postElement.appendChild(deleteButton);

    // container.appendChild(postElement);
}

// Function to dynamically create and display sales elements, including a complete button [not done]
function displaySOrder(postId, postData, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-item');

    const itemName = document.createElement('h3');
    itemName.textContent = postData.itemName;

    const image = document.createElement('img');
    image.src = postData.imageUrl;
    image.alt = postData.itemName;
    image.classList.add('post-image');

    const account = document.createElement('p');
    account.textContent = `Posted by: ${postData.account}`;

    // Create and configure the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add('btn', 'btn-danger', 'mt-2');
    deleteButton.onclick = () => deletePost(postId, container);

    // Append elements to the post element
    postElement.appendChild(image);
    postElement.appendChild(itemName);
    postElement.appendChild(account);
    postElement.appendChild(deleteButton);

    container.appendChild(postElement);
}

// Function to delete a post by document ID [not in use?]
// async function deletePost(postId, container) {
//     const confirmation = confirm("Are you sure you want to delete this post?");
//     if (confirmation) {
//         try {
//             await deleteDoc(doc(db, "posts", postId));
//             alert("Post deleted successfully!");
//             // Refresh the posts display after deletion
//             retrieveUserPosts();
//         } catch (error) {
//             console.error("Error deleting post:", error);
//             alert("Error deleting post.");
//         }
//     }
// }

// Call the function to retrieve and display the user's posts when the page loads [merge both later]
window.onload = retrieveUserOrders;
// window.onload = retrieveUserPosts;
