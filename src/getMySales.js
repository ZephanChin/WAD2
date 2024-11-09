import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";

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
    // const salesOrder = document.getElementById('sales-order');
    const salesAll = document.getElementById('pills-all');
    const salesPending = document.getElementById('pills-pending');
    const salesCompleted = document.getElementById('pills-completed');
    const salesCancelled = document.getElementById('pills-cancelled');
    const user = auth.currentUser;
    // console.log("User is authenticated:", user);
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(
                collection(db, "porders"),
                where("selluid", "==", user.uid),
                orderBy("PlaceDate", "desc")
            );
            // const filteredResults = [];
            const querySnapshot = await getDocs(q);
            
            salesAll.innertext = "";
            salesPending.innertext = "";
            salesCompleted.innertext = "";
            salesCancelled.innertext = "";

            if (querySnapshot.empty) {
                salesOrder.innertext = "<p>You do not have any orders.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const salesData = doc.data();
                    // console.log("s   alesdata=", salesData)
                    allOrders.push(salesData);
                    // const items = salesData.Items; 
                    if (salesData.selluid == user.uid) {
                        displaySOrder(doc.id, salesData, salesAll);
                        if (salesData.status == "Pending"){
                            displaySOrder(doc.id, salesData, salesPending);
                        }
                        if (salesData.status == "Completed"){
                            displaySOrder(doc.id, salesData, salesCompleted); 
                        }
                        if (salesData.status == "Cancelled"){
                            displaySOrder(doc.id, salesData, salesCancelled);
                        }
                    }
                });
                const all = document.getElementById('pills-all');
                const pend = document.getElementById('pills-pending');
                const comp = document.getElementById('pills-completed');
                const can = document.getElementById('pills-cancelled');
                if (all.textContent.trim() === ''){
                    all.innerText = "No Orders";
                }
                if (pend.textContent.trim() === ''){
                    pend.innerText = "No Pending Orders";
                }
                if (comp.textContent.trim() === ''){
                    comp.innerText = "No Completed Orders";
                }
                if (can.textContent.trim() === ''){
                    pend.innerText = "No Cancelled Orders";
                }
            }
        } else {
            salesOrder.innerText = "Please log in to see your orders.";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
    });
}

// Function to dynamically create and display purchase elements, including a detail button [not done]
function displaySOrder(salesId, salesData, container) {
    const salesElement = document.createElement('div');
    salesElement.classList.add("row", "rounded", "d-flex", "body-ele", "mb-2");
    
    const salesElementHead = document.createElement('div');
    salesElementHead.classList.add("row", "col-6", "ms-2", "mt-2");

    // Ono Element
    const salesElementOnoDiv = document.createElement('div');
    salesElementOnoDiv.classList.add("col-3");

    const salesElementOnoLbl = document.createElement('span');
    salesElementOnoLbl.classList.add("fw-bold");
    salesElementOnoLbl.innerText = "Order Number";

    const salesElementOnoCtn = document.createElement('div');
    salesElementOnoCtn.textContent = salesId;

    salesElementOnoDiv.appendChild(salesElementOnoLbl);
    salesElementOnoDiv.appendChild(salesElementOnoCtn);

    // DP Element
    const salesElementDPDiv = document.createElement('div');
    salesElementDPDiv.classList.add("col-3");

    const salesElementDPLbl = document.createElement('span');
    salesElementDPLbl.classList.add("fw-bold");
    salesElementDPLbl.innerText = "Date Placed";

    const salesElementDPCtn = document.createElement('div');
    // console.log('line 131', salesData);
    // console.log('line 132', salesData.PlaceDate.toDate());
    salesElementDPCtn.textContent = salesData.PlaceDate.toDate().toLocaleDateString();

    salesElementDPDiv.appendChild(salesElementDPLbl);
    salesElementDPDiv.appendChild(salesElementDPCtn);

    // TA Element
    const salesElementTADiv = document.createElement('div');
    salesElementTADiv.classList.add("col-3");

    const salesElementTALbl = document.createElement('span');
    salesElementTALbl.classList.add("fw-bold");
    salesElementTALbl.innerText = "Total Amount";

    const salesElementTACtn = document.createElement('div');
    salesElementTACtn.textContent = `$ ${salesData.TotalPrice.toFixed(2)}`;

    salesElementTADiv.appendChild(salesElementTALbl);
    salesElementTADiv.appendChild(salesElementTACtn);

    // Shop Name Element
    const salesElementShopDiv = document.createElement('div');
    salesElementShopDiv.classList.add("col-3");

    const salesElementShopLbl = document.createElement('span');
    salesElementShopLbl.classList.add("fw-bold");
    salesElementShopLbl.innerText = "Hustler";

    const salesElementShopCtn = document.createElement('div');
    salesElementShopCtn.textContent = salesData.sellaccount;

    salesElementShopDiv.appendChild(salesElementShopLbl);
    salesElementShopDiv.appendChild(salesElementShopCtn);

    // Filler Element
    // const salesElementFiller = document.createElement('div');
    // salesElementFiller.classList.add('col-6');

    // Append Elements to Order Head
    salesElementHead.appendChild(salesElementOnoDiv);
    salesElementHead.appendChild(salesElementDPDiv);
    salesElementHead.appendChild(salesElementTADiv);
    salesElementHead.appendChild(salesElementShopDiv);

    // Append Elements to Order Element
    salesElement.appendChild(salesElementHead);
    container.appendChild(salesElement);

    // filler div
    const purchaseitemfiller = document.createElement('div');
    purchaseitemfiller.classList.add('col-6');
    salesElement.appendChild(purchaseitemfiller);  

    // Iterate item from Items Map
    const orderItems = salesData.Items; 
    // console.log("iterate", purchaseData.Items)
    
    // Iterate over the map 
    for (const key in orderItems) {
        if (orderItems.hasOwnProperty(key)) { 
            // console.log(`Key: ${key}`); 
            const item = orderItems[key]; 
           
            // Item Details
            
            // Image Div
            const purchaseitemdiv = document.createElement('div');
            purchaseitemdiv.classList.add('col-2');
            const purchaseitemimg = document.createElement('img');
            purchaseitemimg.src = item[4];
            purchaseitemimg.classList.add("ms-3", "my-2", "item-img");
            
            purchaseitemdiv.appendChild(purchaseitemimg);
            salesElement.appendChild(purchaseitemdiv);

            // Sales Element Body
            const salesElementBody = document.createElement('div');
            salesElementBody.classList.add('row', 'col-10', 'mt-5');
            
            // Item Price Div
            const salesElementItemPrice = document.createElement('div');
            salesElementItemPrice.classList.add('col-4');
            salesElementItemPrice.textContent = `Price: $ ${item[1].toFixed(2)}`;

            salesElementBody.appendChild(salesElementItemPrice);

            // Item Qty Div
            const salesElementItemQty = document.createElement('div');
            salesElementItemQty.classList.add('col-4');
            salesElementItemQty.textContent = `Qty: ${item[2]}`;

            salesElementBody.appendChild(salesElementItemQty);

            // Item Item Total Price Div
            const salesElementTItemPrice = document.createElement('div');
            salesElementTItemPrice.classList.add('col-4');
            salesElementTItemPrice.textContent = `Total Price: $ ${item[3].toFixed(2)}`;

            salesElementBody.appendChild(salesElementTItemPrice);

            // Body to Element
            salesElement.appendChild(salesElementBody);
            
        }
    }
    // Status
    const salesElementStatDiv = document.createElement('div');
    salesElementStatDiv.classList.add("col-3");

    const salesElementStatLbl = document.createElement('span');
    salesElementStatLbl.classList.add("fw-bold");
    salesElementStatLbl.innerText = "Status";

    const salesElementStatCtn = document.createElement('div');
    salesElementStatCtn.textContent = salesData.status;
    if (salesData.status == "Completed"){
        salesElementStatCtn.classList.add('bg-success', 'text-light')
    }
    if (salesData.status == "Cancelled"){
        salesElementStatCtn.classList.add('bg-danger', 'text-light')
    }

    salesElementHead.appendChild(salesElementStatLbl);
    salesElementHead.appendChild(salesElementStatCtn);

    // Complete Button
    const completeButton = document.createElement('button');
    completeButton.textContent = "✓";
    completeButton.classList.add('btn', 'btn-outline-success'); 
    if (salesData.status != "Pending") {
        completeButton.disabled = true;
    }
    salesElementHead.appendChild(completeButton);

    completeButton.onclick = () => updateStatus(salesId, "status", "Completed");

    // Reject Button
    const cancelButton = document.createElement('button');
    cancelButton.textContent = "𐤕";
    if (salesData.status != "Pending") {
        cancelButton.disabled = true;
    }
    cancelButton.classList.add('btn', 'btn-outline-danger');
    salesElementHead.appendChild(cancelButton);

    cancelButton.onclick = () => updateStatus(salesId, "status", "Cancelled");
}

const updateStatus = async (salesId, field, newValue) => { 
    if (newValue == "Completed"){
        const confirmation = confirm("Are you sure you want to complete this order?");
        if (confirmation) {
            console.log(salesId, field, newValue);
            const docRef = doc(db, "porders", salesId); 
            try { 
                await updateDoc(docRef, { 
                    [field]: newValue 
                }); 
                console.log("Order successfully updated!"); 
            } 
            catch (error) { 
                console.error("Error updating document: ", error); 
            } 
        }
    }
    else {
        const confirmation = confirm("Are you sure you want to reject this order?");
        if (confirmation) {
            console.log(salesId, field, newValue);
            const docRef = doc(db, "porders", salesId); 
            try { 
                await updateDoc(docRef, { 
                    [field]: newValue 
                }); 
                console.log("Order successfully updated!"); 
            } 
            catch (error) { 
                console.error("Error updating document: ", error); 
            } 
        }
    }
};

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



// Month Filter Function
function filterOrdersByMonth() {
    const postsContainer = document.getElementById('pills-all');
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
        console.log('start', startMonth, 'order', orderDate, 'end', endMonth);
        return (!startMonth || orderMonth >= startMonth) && (!endMonth || orderMonth <= endMonth); 
    });
    // Display filtered order
    // console.log(filteredOrders);
    if (filteredOrders.length == 0) {
        postsContainer.innerText = 'No matching orders';
    } else {
        console.log('filtered orders', filteredOrders);
        postsContainer.innerText = '';
        filteredOrders.forEach(order => displaySOrder(order.OrderID, order, postsContainer));
    }
}

// Event listeners for filter by month button
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterOrdersByMonth(); // Call the filter function
    });
});



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
