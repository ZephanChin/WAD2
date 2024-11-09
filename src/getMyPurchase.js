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

// Function to retrieve and display purchase orders made by the current user
async function retrieveUserOrders() {
    // console.log('called purchase order');
    const purchaseCont = document.getElementById('purchase-container');
    const user = auth.currentUser;
    console.log("User is authenticated:", user);
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(
                collection(db, "porders"),
                where("uid", "==", user.uid),
                orderBy("PlaceDate", "desc")
            );
            // console.log(user.uid);  
            const querySnapshot = await getDocs(q);
            // fails here
            purchaseCont.innertext = "";

            if (querySnapshot.empty) {
                purchaseCont.innertext = "<p>You do not have any orders.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const purchaseData = doc.data();
                    allOrders.push(purchaseData);
                    console.log('All orders:', allOrders);
                    displayPOrder(doc.id, purchaseData, purchaseCont);
                });
            }
        } else {
            purchaseCont.innerText = "Please log in to see your orders.";
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 2000);
        }
        populateStoreDropdown(allOrders);
    });

}

// Function to dynamically create and display purchase elements, including a detail button [not done]
function displayPOrder(purchaseId, purchaseData, container) {
    const purchaseTable = document.createElement('Table');
    purchaseTable.classList.add('table', 'table-bordered')
    // table row [order id], "Ordered On", "Status"
    const purchaseTableRow1 = document.createElement('tr');
    const  purchaseTableValue1_1 = document.createElement('td');
    const  purchaseTableValue1_2 = document.createElement('td');
    const  purchaseTableValue1_3 = document.createElement('td');
    purchaseTableValue1_1.textContent = purchaseId;
    purchaseTableValue1_2.textContent = "Orderd On";
    purchaseTableValue1_3.textContent = "Status";

    purchaseTableRow1.appendChild(purchaseTableValue1_1);
    purchaseTableRow1.appendChild(purchaseTableValue1_2);
    purchaseTableRow1.appendChild(purchaseTableValue1_3);
    purchaseTable.appendChild(purchaseTableRow1);

    // table row [sellaccount], [PlaceDate], [Status]
    const purchaseTableRow2 = document.createElement('tr');
    const  purchaseTableValue2_1 = document.createElement('td');
    const  purchaseTableValue2_2 = document.createElement('td');
    const  purchaseTableValue2_3 = document.createElement('td');
    purchaseTableValue2_1.textContent = purchaseData.sellaccount;
    purchaseTableValue2_2.textContent = purchaseData.PlaceDate.toDate().toLocaleDateString();
    purchaseTableValue2_3.textContent = purchaseData.status;

    purchaseTableRow2.appendChild(purchaseTableValue2_1);
    purchaseTableRow2.appendChild(purchaseTableValue2_2);
    purchaseTableRow2.appendChild(purchaseTableValue2_3);
    purchaseTable.appendChild(purchaseTableRow2);


    // table row [itemImg], [itemPrice], [itemQty], [itemTotalPrice]
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
            purchaseElement.appendChild(purchaseitemdiv);

            // Purchase Element Body
            const purchaseElementBody = document.createElement('div');
            purchaseElementBody.classList.add('row', 'col-10', 'mt-5');
            
            // Item Price Div
            const purchaseElementItemPrice = document.createElement('div');
            purchaseElementItemPrice.classList.add('col-4');
            purchaseElementItemPrice.textContent = `Price: $ ${item[1].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementItemPrice);

            // Item Qty Div
            const purchaseElementItemQty = document.createElement('div');
            purchaseElementItemQty.classList.add('col-4');
            purchaseElementItemQty.textContent = `Qty: ${item[2]}`;

            purchaseElementBody.appendChild(purchaseElementItemQty);

            // Item Item Total Price Div
            const purchaseElementTItemPrice = document.createElement('div');
            purchaseElementTItemPrice.classList.add('col-4');
            purchaseElementTItemPrice.textContent = `Total Price: $ ${item[3].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementTItemPrice);

            // Body to Element
            purchaseElement.appendChild(purchaseElementBody);

            const purchaseTableRow3 = document.createElement('tr');
            const  purchaseTableValue3_1 = document.createElement('td');
            const  purchaseTableValue3_2 = document.createElement('td');
            const  purchaseTableValue3_3 = document.createElement('td');
            purchaseTableValue3_1.textContent = purchaseData.sellaccount;
            purchaseTableValue3_2.textContent = purchaseData.PlaceDate.toDate().toLocaleDateString();
            purchaseTableValue3_3.textContent = purchaseData.status;

            purchaseTableRow3.appendChild(purchaseTableValue3_1);
            purchaseTableRow3.appendChild(purchaseTableValue3_2);
            purchaseTableRow3.appendChild(purchaseTableValue3_3);
            purchaseTable.appendChild(purchaseTableRow3);

        }
    }

    container.appendChild(purchaseTable)




    const purchaseElement = document.createElement('div');
    purchaseElement.classList.add("mt-5",  "row", "border", "rounded-4", "d-flex", "body-ele");
    
    const purchaseElementHead = document.createElement('div');
    purchaseElementHead.classList.add("row", "col-6", "ms-2", "mt-2");

    // Ono Element
    const purchaseElementOnoDiv = document.createElement('div');
    purchaseElementOnoDiv.classList.add("col-3");

    // const purchaseElementOnoLbl = document.createElement('span');
    // purchaseElementOnoLbl.classList.add("fw-bold", "fs-2");
    // purchaseElementOnoLbl.innerText = "Order Number";

    const purchaseElementOnoCtn = document.createElement('div');
    purchaseElementOnoCtn.textContent = purchaseId;

    // purchaseElementOnoDiv.appendChild(purchaseElementOnoLbl);
    purchaseElementOnoDiv.appendChild(purchaseElementOnoCtn);

    // DP Element
    const purchaseElementDPDiv = document.createElement('div');
    purchaseElementDPDiv.classList.add("col-3");

    const purchaseElementDPLbl = document.createElement('span');
    purchaseElementDPLbl.classList.add("fw-bold");
    purchaseElementDPLbl.innerText = "Date Placed";

    const purchaseElementDPCtn = document.createElement('div');
    console.log('line 131', purchaseData);
    console.log('line 132', purchaseData.PlaceDate.toDate());
    purchaseElementDPCtn.textContent = purchaseData.PlaceDate.toDate().toLocaleDateString();

    purchaseElementDPDiv.appendChild(purchaseElementDPLbl);
    purchaseElementDPDiv.appendChild(purchaseElementDPCtn);

    // TA Element
    const purchaseElementTADiv = document.createElement('div');
    purchaseElementTADiv.classList.add("col-3");

    const purchaseElementTALbl = document.createElement('span');
    purchaseElementTALbl.classList.add("fw-bold");
    purchaseElementTALbl.innerText = "Total Amount";

    const purchaseElementTACtn = document.createElement('div');
    purchaseElementTACtn.textContent = `$ ${purchaseData.TotalPrice.toFixed(2)}`;

    purchaseElementTADiv.appendChild(purchaseElementTALbl);
    purchaseElementTADiv.appendChild(purchaseElementTACtn);

    // Shop Name Element
    const purchaseElementShopDiv = document.createElement('div');
    purchaseElementShopDiv.classList.add("col-3");

    const purchaseElementShopLbl = document.createElement('span');
    purchaseElementShopLbl.classList.add("fw-bold");
    purchaseElementShopLbl.innerText = "Hustler";

    const purchaseElementShopCtn = document.createElement('div');
    purchaseElementShopCtn.textContent = purchaseData.sellaccount;

    purchaseElementShopDiv.appendChild(purchaseElementShopLbl);
    purchaseElementShopDiv.appendChild(purchaseElementShopCtn);

    // Filler Element
    // const purchaseElementFiller = document.createElement('div');
    // purchaseElementFiller.classList.add('col-6');

    // Append Elements to Order Head
    purchaseElementHead.appendChild(purchaseElementOnoDiv);
    purchaseElementHead.appendChild(purchaseElementDPDiv);
    purchaseElementHead.appendChild(purchaseElementTADiv);
    purchaseElementHead.appendChild(purchaseElementShopDiv);

    // Append Elements to Order Element
    purchaseElement.appendChild(purchaseElementHead);
    container.appendChild(purchaseElement);

    // filler div
    const purchaseitemfiller = document.createElement('div');
    purchaseitemfiller.classList.add('col-6');
    purchaseElement.appendChild(purchaseitemfiller);  

    // Iterate item from Items Map
    const orderItems = purchaseData.Items; 
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
            purchaseElement.appendChild(purchaseitemdiv);

            // Purchase Element Body
            const purchaseElementBody = document.createElement('div');
            purchaseElementBody.classList.add('row', 'col-10', 'mt-5');
            
            // Item Price Div
            const purchaseElementItemPrice = document.createElement('div');
            purchaseElementItemPrice.classList.add('col-4');
            purchaseElementItemPrice.textContent = `Price: $ ${item[1].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementItemPrice);

            // Item Qty Div
            const purchaseElementItemQty = document.createElement('div');
            purchaseElementItemQty.classList.add('col-4');
            purchaseElementItemQty.textContent = `Qty: ${item[2]}`;

            purchaseElementBody.appendChild(purchaseElementItemQty);

            // Item Item Total Price Div
            const purchaseElementTItemPrice = document.createElement('div');
            purchaseElementTItemPrice.classList.add('col-4');
            purchaseElementTItemPrice.textContent = `Total Price: $ ${item[3].toFixed(2)}`;

            purchaseElementBody.appendChild(purchaseElementTItemPrice);

            // Body to Element
            purchaseElement.appendChild(purchaseElementBody);

        }
    }
}


function filterOrdersByMonth() {
    const postsContainer = document.getElementById('purchase-container');
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

const populateStoreDropdown = (purchaseData) => { 
    // console.log('populate', purchaseData);
    const storeNames = new Set(); 
    purchaseData.forEach((order) => { 
        console.log('populate ddl', order.sellaccount);
        storeNames.add(order.sellaccount);
    }); 
    // console.log('storenames:', storeNames);
    const storeNameSelect = document.getElementById('storeName'); 
    storeNames.forEach(store => { 
        const option = document.createElement('option'); 
        option.value = store; 
        option.textContent = store; 
        storeNameSelect.appendChild(option);
    }); 
};

const filterOrdersByStore = () => { 
    const postsContainer = document.getElementById('purchase-container');
    const storeName = document.getElementById('storeName').value; 
    const filteredPosts = allOrders.filter(order => {
        return storeName === '' || order.sellaccount === storeName;
    });

    // Display filtered posts
    // console.log(filteredPosts);
    console.log("HERE", filteredPosts)
    postsContainer.innerText = '';
    filteredPosts.forEach(order => displayPOrder(order.OrderID, order, postsContainer));
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


// Call the function to retrieve and display the user's posts when the page loads [merge both later]
window.onload = retrieveUserOrders;
setMaxMonth();
// window.onload = retrieveUserPosts;
