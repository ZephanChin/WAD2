import{g,i as y,a as b,o as C}from"./index-a7d5cfcc.rqyF9t_j.js";import{g as E,c as f,a as u,f as w}from"./index.esm2017.FicD-Q5F.js";import{g as U,r as R,a as S}from"./index.esm2017.BPQr0z8j.js";const A={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};g().length?g()[0]:y(A);const D=b(),l=E(),I=U();async function L(t){try{const e=f(l,`users/${t}/cart`),n=await u(e),a=new Set;return n.forEach(r=>{const o=r.data();o.sellerUid&&a.add(o.sellerUid)}),console.log("Fetched seller UIDs:",Array.from(a)),Array.from(a)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function $(t){try{const e=f(l,`users/${t}/cart`),n=await u(e),a=new Set;return n.forEach(r=>{const o=r.data();console.log(o),o.account&&a.add(o.account)}),Array.from(a)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function B(t){try{const e=f(l,`users/${t}/cart`),n=await u(e),a=new Set;return n.forEach(r=>{const o=r.data();o.totalPrice&&a.add(o.totalPrice)}),Array.from(a)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function q(t){try{const e=R(I,`qrCodes/${t}`),n=await S(e);return console.log(`Fetched QR code URL for seller ${t}:`,n),n}catch(e){return console.error(`Error fetching QR code for seller ${t}:`,e),null}}async function P(t){try{const e=await L(t),n=await $(t),a=await B(t),r=document.getElementById("uid-container");if(!r){console.error("UID container not found.");return}for(;r.firstChild;)r.removeChild(r.firstChild);if(console.log("Displaying seller UIDs:",e),e.length>0){for(let c=0;c<e.length;c++){const m=await q(e[c]),h=document.createElement("div"),p=document.createElement("p");if(p.textContent=`Seller: ${n[c]}, Price: ${a[c]}`,h.appendChild(p),m){const s=document.createElement("img");s.src=m,s.alt=`QR Code for ${n[c]}`,s.classList.add("qr-code"),h.appendChild(s)}else{const s=document.createElement("p");s.textContent="No QR code available for this seller. Please contact seller for more info",h.appendChild(s)}r.appendChild(h)}const o=document.createElement("button");o.textContent="Go to Purchase History",o.classList.add("btn","payment"),o.addEventListener("click",()=>{window.location.href="./mypurchase.html"});const i=document.createElement("div");i.classList.add("payment");const d=document.createElement("button");d.textContent="Payment Made",d.classList.add("btn","payment"),d.addEventListener("click",()=>{Q(t),console.log("Cleared."),alert("Thank you for your purchase!"),i.appendChild(o)}),i.appendChild(d),r.appendChild(i)}else{const o=document.createElement("p");o.textContent="You did not purchase anything.",r.appendChild(o)}}catch(e){console.error("Error displaying seller UIDs and QR codes:",e)}}async function Q(t){console.log(t);const e=f(l,`users/${t}/cart`),n=await u(e),a=w(l);n.forEach(r=>{a.delete(r.ref)}),console.log("running"),await a.commit(),console.log("still running?")}C(D,t=>{t?(console.log("User authenticated:",t.uid),P(t.uid)):(console.log("User not authenticated. Redirecting to login page."),window.location.href="/login.html")});