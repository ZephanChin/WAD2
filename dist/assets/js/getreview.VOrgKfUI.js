import{i as C,a as P,o as R}from"./index-a7d5cfcc.rqyF9t_j.js";import{g as w,d as r,b as y,s as U}from"./index.esm2017.FicD-Q5F.js";import{g as S,r as B,u as k,a as h}from"./index.esm2017.BPQr0z8j.js";const Q={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"},u=C(Q),m=P(u),f=w(u),E=S(u);async function b(e,t,o,a){const s=B(E,t);try{await k(s,o);const n=await h(s),i=r(f,e,a);return await U(i,{url:n,uploadedAt:Date.now()},{merge:!0}),n}catch(n){throw console.error(`Error uploading ${e}:`,n.message),n}}async function g(e,t,o,a,s,n){try{console.log(`Fetching document from collection: ${e}, for user: ${t}`);const i=r(f,e,t),p=await y(i);if(p.exists()){const{url:d}=p.data();console.log("Document fetched successfully. URL:",d);const l=document.getElementById(o);l&&(l.src=d,l.onload=()=>{l.style.display="block",console.log("QR Code loaded and displayed.")});const c=document.getElementById(n);c&&(c.style.display="inline",c.style.display="inline-block",c.style.margin="0 auto")}else{console.warn(`No document found in collection '${e}' for user '${t}'.`);const d=document.getElementById(o);if(d)if(o=="profileImage"){const c=B(E,`profilePictures/${a}`),I=await h(c);d.src=I||""}else d.src=a||"";const l=document.getElementById(s);l&&(l.style.display="block")}}catch(i){console.error(`Error fetching document from ${e} for user ${t}:`,i.message)}}async function v(){R(m,async e=>{if(e){const t=e.uid;e.displayName,console.log("Authenticated user:",t);const o=document.getElementById("username");o?o.textContent=e.displayName||"Username":console.warn("Username element not found in the DOM."),await g("profilePictures",t,"profileImage","default-profile.jpg","profileUploadSection","editProfileImageButton"),await g("qrCodes",t,"uploadedQRCode","","qrCodeUploadSection","editQRCodeButton"),await x(t)}else console.log("User is not signed in.")})}async function x(e){try{const t=r(f,"report",e),o=await y(t);if(o.exists()){const a=o.data();document.getElementById("sales").textContent=a.sales||0,document.getElementById("itemsSold").textContent=a.items_sold||0,document.getElementById("reviewsReceived").textContent=a.reviews||0,document.getElementById("goodReviews").textContent=a.good||0,document.getElementById("badReviews").textContent=a.bad||0,document.getElementById("stars").textContent=(a.total_stars/a.reviews).toFixed(2)||0}}catch(t){console.error("Error fetching data:",t)}}async function D(e){const t=m.currentUser;if(t){const o=t.uid,a=`profilePictures/${o}`;try{const s=await b("profilePictures",a,e,o),n=document.getElementById("profileImage");n&&(n.src=s),console.log("Profile Picture uploaded successfully.")}catch{alert("Failed to upload Profile Picture. Please try again.")}}else alert("You must be signed in to upload a Profile Picture.")}async function $(e){const t=m.currentUser;if(t){const o=t.uid,a=`qrCodes/${o}`;try{const s=await b("qrCodes",a,e,o),n=document.getElementById("uploadedQRCode");n&&(n.src=s,n.style.display="block"),console.log("QR Code uploaded successfully.")}catch{alert("Failed to upload QR Code. Please try again.")}}else alert("You must be signed in to upload a QR Code.")}document.getElementById("editProfileImageButton").addEventListener("click",()=>{document.getElementById("profileUploadSection").style.display="block"});document.getElementById("uploadProfileButton").addEventListener("click",()=>{const e=document.getElementById("profileImageUpload").files[0];e?D(e):alert("Please select a Profile Picture to upload.")});document.getElementById("editQRCodeButton").addEventListener("click",()=>{document.getElementById("qrCodeUploadSection").style.display="block"});document.getElementById("uploadQRCodeButton").addEventListener("click",()=>{const e=document.getElementById("qrCodeUpload").files[0];e?$(e):alert("Please select a QR Code image to upload.")});v();
