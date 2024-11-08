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
var allOrders = [];

// Function to retrieve and display sales orders made by the current user
async function retrieveUserOrders() {
    // console.log('called sales order');
    const salesOrder = document.getElementById('sales-order');
    const user = auth.currentUser;
    // console.log("User is authenticated:", user);
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(
                collection(db, "porders"),
                orderBy("PlaceDate")
            );
            // const filteredResults = [];
            const querySnapshot = await getDocs(q);
            
            salesOrder.innertext = "";
            if (querySnapshot.empty) {
                salesOrder.innertext = "<p>You do not have any orders.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const salesData = doc.data();
                    // console.log("salesdata=", salesData)
                    allOrders.push(salesData);
                    const items = salesData.Items; 
                    const filteredItems = Object.entries(items).filter(([key, item]) => item[7] === user.uid);                        
                    if (filteredItems.length > 0) { 
                        // filteredItems.forEach(([key, item]) => { 
                        //     filteredResults.push({ [key]: item }); 
                        // }); 
                        displaySOrder(doc.id, salesData, salesOrder);
                    }
                    // console.log('All orders:', allOrders);
                    populateStoreDropdown(allOrders);
                });
            }
        } else {
            salesOrder.innerHTML = "<p>Please log in to see your orders.</p>";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    });
}

// Function to dynamically create and display purchase elements, including a detail button [not done]
function displaySOrder(purchaseId, purchaseData, container) {
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
    // console.log('line 192', purchaseData);
    // console.log('line 193', purchaseData.PlaceDate.toDate());
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
    const user = auth.currentUser;
    for (const key in orderItems) {
        if (orderItems.hasOwnProperty(key) && orderItems[key][7] == user.uid) { 
            // console.log(`Key: ${key}`); 
            const item = orderItems[key]; 
            // Iterate over each array 
            // item.forEach(value => { 
            //     console.log(` - Value: ${value}`); 
            // }); 
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
            
            // Create and configure the "Delete Post" button
            const completeButton = document.createElement('button');
            completeButton.textContent = "✔";
            completeButton.classList.add('btn btn-success'); // Use CSS to style this button

            completeButton.onclick = () => updateStatus(postId, container);

        }
    }
}

// Template function
function template(postId, postData, container) {
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

const updateStatus = async () => { 
    const docRef = doc(db, "porders", docID); 
    try { 
        // Assuming you want to update the first object in the nested array 
        const fieldPath = "Items."+ nestedArray + ".8." + updatevalue; 
        await updateDoc(docRef, { [fieldPath]: "newUpdatedValue" }); 
        console.log("Document successfully updated!"); 
    } 
    catch (error) { 
        console.error("Error updating document: ", error); 
    } 
};


// Month Filter Function
function filterOrdersByMonth() {
    const postsContainer = document.getElementById('sales-order');
    const startMonth = document.getElementById('startMonth').value; 
    const endMonth = document.getElementById('endMonth').value; 
    // console.log('enter filter function');
    // console.log(startMonth);
    // console.log(endMonth);

    const filteredOrders = allOrders.filter(order => { 
        const orderDate = order.PlaceDate.toDate(); 
        const orderMonth = orderDate.getFullYear() + '-' + String(orderDate.getMonth() + 1).padStart(2, '0'); 
        // console.log('fucntion 1', (!startMonth || orderMonth >= startMonth));
        // console.log('fucntion 2', (!endMonth || orderMonth <= endMonth));
        // console.log('start', startMonth, 'order', orderDate, 'end', endMonth);
        return (!startMonth || orderMonth >= startMonth) && (!endMonth || orderMonth <= endMonth); 
    });
    // Display filtered order
    // console.log(filteredOrders);
    if (filteredOrders.length == 0) {
        postsContainer.innerText = 'No matching orders';
    } else {
        console.log('filtered orders', filteredOrders);
        postsContainer.innerText = '';
        filteredOrders.forEach(order => displayPOrder(order.OrderID, order, postsContainer));
    }
}

// Event listeners for filter by month button
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterOrdersByMonth(); // Call the filter function
    });
});

// Populate Store Dropdown
const populateStoreDropdown = (purchaseData) => { 
    // console.log('populate', purchaseData);
    const storeNames = new Set(); 
    purchaseData.forEach(order => { 
        // console.log('populate order', order.Items)
        for (const key in order.Items) { 
            if (order.Items.hasOwnProperty(key)) { 
                // console.log(`Key: ${key}`); 
                const array = order.Items[key]; 
                // array.forEach(value => { 
                //     console.log(` - Value: ${value}`); 
                // }); 
                storeNames.add(array[0]); 
            } 
        }
    }); 
    // console.log('storenames:', allOrders);
    const storeNameSelect = document.getElementById('storeName'); 
    storeNames.forEach(store => { 
        const option = document.createElement('option'); 
        option.value = store; 
        option.textContent = store; 
        storeNameSelect.appendChild(option); 
    }); 
};

// Store Drop Down Function
const filterOrdersByStore = () => { 
    const postsContainer = document.getElementById('pills-purchase');
    const storeName = document.getElementById('storeName').value; 
    const filteredOrders = allOrders.map(order => { 
        const filteredItems = {}; 
        if (storeName == '') {
            for (const key in order.Items) { 
                { 
                    filteredItems[key] = order.Items[key]; 
                } 
            }
            return { ...order, Items: filteredItems }; 
        }
        else {
            for (const key in order.Items) { 
                if (order.Items.hasOwnProperty(key) && order.Items[key][0] === storeName) { 
                    filteredItems[key] = order.Items[key]; 
                } 
            }
            return { ...order, Items: filteredItems }; 
        }  
    }).filter(order => Object.keys(order.Items).length > 0); 
    // displayOrders(filteredOrders);
    if (filteredOrders.length == 0) {
        postsContainer.innerText = 'No matching orders';
    } else {
        console.log('filtered orders', filteredOrders);
        postsContainer.innerText = '';
        filteredOrders.forEach(order => displayPOrder(order.OrderID, order, postsContainer));
    }
};
// Set event listener for filter store
document.getElementById('storeName').addEventListener('input', filterOrdersByStore);


const setMaxMonth = () => { 
    const monthInputs = document.querySelectorAll('input[type="month"]'); 
    const today = new Date(); const currentMonth = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0'); 
    monthInputs.forEach(input => input.setAttribute('max', currentMonth)); 
};

// Update end month minimum value based on start month selection 
const updateEndMonthMin = () => { 
    const startMonth = document.getElementById('startMonth').value; 
    const endMonth = document.getElementById('endMonth'); 
    endMonth.setAttribute('min', startMonth); 
}; 

// Set event listener on start month input 
document.getElementById('startMonth').addEventListener('input', updateEndMonthMin);


// Call the function to retrieve and display the user's posts when the page loads
window.onload = retrieveUserOrders;
setMaxMonth();
