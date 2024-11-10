import{getApps as Sn,initializeApp as sa}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";import{getFirestore as wp,doc as bp,getDoc as Ap,setDoc as Cp,serverTimestamp as Rp}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";import{getAuth as Sp,onAuthStateChanged as Pp}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,w=d&63;l||(w=64,a||(_=64)),r.push(t[f],t[m],t[_],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Np;const _=i<<2|c>>4;if(r.push(_),d!==64){const w=c<<4&240|d>>2;if(r.push(w),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dp=function(n){const e=Ju(n);return Xu.encodeByteArray(e,!0)},qs=function(n){return Dp(n).replace(/\./g,"")},Zu=function(n){try{return Xu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=()=>Lp().__FIREBASE_DEFAULTS__,Op=()=>{if(typeof process>"u"||typeof pl>"u")return;const n=pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zu(n[1]);return e&&JSON.parse(e)},hi=()=>{try{return Vp()||Op()||xp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eh=n=>{var e,t;return(t=(e=hi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},th=n=>{const e=eh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nh=()=>{var n;return(n=hi())===null||n===void 0?void 0:n.config},rh=n=>{var e;return(e=hi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qs(JSON.stringify(t)),qs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Up(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Fp(){var n;const e=(n=hi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $p(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zp(){return!Fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gp(){try{return typeof indexedDB=="object"}catch{return!1}}function Hp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wp,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Kp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ot(s,c,r)}}function Kp(n,e){return n.replace(Qp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qp=/\{\$([^}]+)}/g;function Yp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function js(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ml(i)&&ml(a)){if(!js(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ml(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function dr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jp(n,e){const t=new Xp(n,e);return t.subscribe.bind(t)}class Xp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ho),s.error===void 0&&(s.error=ho),s.complete===void 0&&(s.complete=ho);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ho(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nm(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(n){return n===Jt?void 0:n}function nm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new em(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const sm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},im=H.INFO,om={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},am=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=om[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=im,this._logHandler=am,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const cm=(n,e)=>e.some(t=>n instanceof t);let gl,_l;function lm(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ih=new WeakMap,Ro=new WeakMap,oh=new WeakMap,fo=new WeakMap,oa=new WeakMap;function hm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Vt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ih.set(t,n)}).catch(()=>{}),oa.set(e,n),e}function dm(n){if(Ro.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ro.set(n,e)}let So={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ro.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fm(n){So=n(So)}function pm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(po(this),e,...t);return oh.set(r,e.sort?e.sort():[e]),Vt(r)}:um().includes(n)?function(...e){return n.apply(po(this),e),Vt(ih.get(this))}:function(...e){return Vt(n.apply(po(this),e))}}function mm(n){return typeof n=="function"?pm(n):(n instanceof IDBTransaction&&dm(n),cm(n,lm())?new Proxy(n,So):n)}function Vt(n){if(n instanceof IDBRequest)return hm(n);if(fo.has(n))return fo.get(n);const e=mm(n);return e!==n&&(fo.set(n,e),oa.set(e,n)),e}const po=n=>oa.get(n);function gm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Vt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vt(a.result),l.oldVersion,l.newVersion,Vt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const _m=["get","getKey","getAll","getAllKeys","count"],ym=["put","add","delete","clear"],mo=new Map;function yl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mo.get(e))return mo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ym.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_m.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return mo.set(e,i),i}fm(n=>({...n,get:(e,t,r)=>yl(e,t)||n.get(e,t,r),has:(e,t)=>!!yl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",El="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new ia("@firebase/app"),Tm="@firebase/app-compat",Im="@firebase/analytics-compat",wm="@firebase/analytics",bm="@firebase/app-check-compat",Am="@firebase/app-check",Cm="@firebase/auth",Rm="@firebase/auth-compat",Sm="@firebase/database",Pm="@firebase/data-connect",km="@firebase/database-compat",Nm="@firebase/functions",Dm="@firebase/functions-compat",Lm="@firebase/installations",Vm="@firebase/installations-compat",Om="@firebase/messaging",xm="@firebase/messaging-compat",Mm="@firebase/performance",Um="@firebase/performance-compat",Fm="@firebase/remote-config",Bm="@firebase/remote-config-compat",$m="@firebase/storage",qm="@firebase/storage-compat",jm="@firebase/firestore",zm="@firebase/vertexai",Gm="@firebase/firestore-compat",Hm="firebase",Wm="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="[DEFAULT]",Km={[Po]:"fire-core",[Tm]:"fire-core-compat",[wm]:"fire-analytics",[Im]:"fire-analytics-compat",[Am]:"fire-app-check",[bm]:"fire-app-check-compat",[Cm]:"fire-auth",[Rm]:"fire-auth-compat",[Sm]:"fire-rtdb",[Pm]:"fire-data-connect",[km]:"fire-rtdb-compat",[Nm]:"fire-fn",[Dm]:"fire-fn-compat",[Lm]:"fire-iid",[Vm]:"fire-iid-compat",[Om]:"fire-fcm",[xm]:"fire-fcm-compat",[Mm]:"fire-perf",[Um]:"fire-perf-compat",[Fm]:"fire-rc",[Bm]:"fire-rc-compat",[$m]:"fire-gcs",[qm]:"fire-gcs-compat",[jm]:"fire-fst",[Gm]:"fire-fst-compat",[zm]:"fire-vertex","fire-js":"fire-js",[Hm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Qm=new Map,No=new Map;function vl(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){const e=n.name;if(No.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,n);for(const t of Ar.values())vl(t,n);for(const t of Qm.values())vl(t,n);return!0}function di(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Je(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Br("app","Firebase",Ym);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=Wm;function Fe(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ko,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=nh()),!t)throw Ot.create("no-options");const i=Ar.get(s);if(i){if(js(t,i.options)&&js(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const a=new rm(s);for(const l of No.values())a.addComponent(l);const c=new Jm(t,r,a);return Ar.set(s,c),c}function aa(n=ko){const e=Ar.get(n);if(!e&&n===ko&&nh())return Fe();if(!e)throw Ot.create("no-app",{appName:n});return e}function he(){return Array.from(Ar.values())}function Ze(n,e,t){var r;let s=(r=Km[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(c.join(" "));return}nn(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="firebase-heartbeat-database",Zm=1,Cr="firebase-heartbeat-store";let go=null;function ah(){return go||(go=gm(Xm,Zm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),go}async function eg(n){try{const t=(await ah()).transaction(Cr),r=await t.objectStore(Cr).get(ch(n));return await t.done,r}catch(e){if(e instanceof ot)yt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function Tl(n,e){try{const r=(await ah()).transaction(Cr,"readwrite");await r.objectStore(Cr).put(e,ch(n)),await r.done}catch(t){if(t instanceof ot)yt.warn(t.message);else{const r=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(r.message)}}}function ch(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=1024,ng=30*24*60*60*1e3;class rg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ig(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Il();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=ng}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Il(),{heartbeatsToSend:r,unsentEntries:s}=sg(this._heartbeatsCache.heartbeats),i=qs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yt.warn(t),""}}}function Il(){return new Date().toISOString().substring(0,10)}function sg(n,e=tg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ig{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gp()?Hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wl(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){nn(new Mt("platform-logger",e=>new Em(e),"PRIVATE")),nn(new Mt("heartbeat",e=>new rg(e),"PRIVATE")),Ze(Po,El,n),Ze(Po,El,"esm2017"),Ze("fire-js","")}og("");var ag="firebase",cg="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(ag,cg,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="firebasestorage.googleapis.com",uh="storageBucket",lg=2*60*1e3,ug=10*60*1e3,hg=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends ot{constructor(e,t,r=0){super(_o(e),`Firebase Storage: ${t} (${_o(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _o(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(re||(re={}));function _o(n){return"storage/"+n}function ca(){const n="An unknown error occurred, please check the error payload for server response.";return new ie(re.UNKNOWN,n)}function dg(n){return new ie(re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function fg(n){return new ie(re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ie(re.UNAUTHENTICATED,n)}function mg(){return new ie(re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gg(n){return new ie(re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hh(){return new ie(re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dh(){return new ie(re.CANCELED,"User canceled the upload/download.")}function _g(n){return new ie(re.INVALID_URL,"Invalid URL '"+n+"'.")}function yg(n){return new ie(re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Eg(){return new ie(re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uh+"' property when initializing the app?")}function fh(){return new ie(re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vg(){return new ie(re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Tg(){return new ie(re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ig(n){return new ie(re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Do(n){return new ie(re.INVALID_ARGUMENT,n)}function ph(){return new ie(re.APP_DELETED,"The Firebase app was deleted.")}function wg(n){return new ie(re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yr(n,e){return new ie(re.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ur(n){throw new ie(re.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=je.makeFromUrl(e,t)}catch{return new je(e,"")}if(r.path==="")return r;throw yg(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${f}/b/${s}/o${_}`,"i"),R={bucket:1,path:3},N=t===lh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",O=new RegExp(`^https?://${N}/${s}/${S}`,"i"),x=[{regex:c,indices:l,postModify:i},{regex:w,indices:R,postModify:d},{regex:O,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<x.length;F++){const G=x[F],z=G.regex.exec(e);if(z){const T=z[G.indices.bucket];let g=z[G.indices.path];g||(g=""),r=new je(T,g),G.postModify(r);break}}if(r==null)throw _g(e);return r}}class bg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let d=!1;function f(...S){d||(d=!0,e.apply(null,S))}function m(S){s=setTimeout(()=>{s=null,n(w,l())},S)}function _(){i&&clearTimeout(i)}function w(S,...O){if(d){_();return}if(S){_(),f.call(null,S,...O);return}if(l()||a){_(),f.call(null,S,...O);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,m(x)}let R=!1;function N(S){R||(R=!0,_(),!d&&(s!==null?(S||(c=2),clearTimeout(s),m(0)):S||(c=1)))}return m(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function Cg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n){return n!==void 0}function Sg(n){return typeof n=="function"}function Pg(n){return typeof n=="object"&&!Array.isArray(n)}function fi(n){return typeof n=="string"||n instanceof String}function bl(n){return la()&&n instanceof Blob}function la(){return typeof Blob<"u"}function Al(n,e,t,r){if(r<e)throw Do(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Do(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function mh(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var en;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(en||(en={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r,s,i,a,c,l,d,f,m,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,R)=>{this.resolve_=w,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===en.NO_ERROR,l=i.getStatus();if(!c||gh(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===en.ABORT;r(!1,new bs(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new bs(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Rg(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=ca();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?ph():dh();a(l)}else{const l=hh();a(l)}};this.canceled_?t(!1,new bs(!1,null,!0)):this.backoffId_=Ag(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Ng(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Dg(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Lg(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Vg(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Og(n,e,t,r,s,i,a=!0){const c=mh(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return Lg(d,e),Ng(d,t),Dg(d,i),Vg(d,r),new kg(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Mg(...n){const e=xg();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(la())return new Blob(n);throw new ie(re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ug(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){if(typeof atob>"u")throw Ig("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yo{constructor(e,t){this.data=e,this.contentType=t||null}}function Bg(n,e){switch(n){case Xe.RAW:return new yo(_h(e));case Xe.BASE64:case Xe.BASE64URL:return new yo(yh(n,e));case Xe.DATA_URL:return new yo(qg(e),jg(e))}throw ca()}function _h(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $g(n){let e;try{e=decodeURIComponent(n)}catch{throw yr(Xe.DATA_URL,"Malformed data URL.")}return _h(e)}function yh(n,e){switch(n){case Xe.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw yr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw yr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Fg(e)}catch(s){throw s.message.includes("polyfill")?s:yr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Eh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw yr(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=zg(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qg(n){const e=new Eh(n);return e.base64?yh(Xe.BASE64,e.rest):$g(e.rest)}function jg(n){return new Eh(n).contentType}function zg(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){let r=0,s="";bl(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(bl(this.data_)){const r=this.data_,s=Ug(r,e,t);return s===null?null:new ht(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ht(r,!0)}}static getBlob(...e){if(la()){const t=e.map(r=>r instanceof ht?r.data_:r);return new ht(Mg.apply(null,t))}else{const t=e.map(a=>fi(a)?Bg(Xe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new ht(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){let e;try{e=JSON.parse(n)}catch{return null}return Pg(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Hg(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Th(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n,e){return e}class Ne{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Wg}}let As=null;function Kg(n){return!fi(n)||n.length<2?n:Th(n)}function ua(){if(As)return As;const n=[];n.push(new Ne("bucket")),n.push(new Ne("generation")),n.push(new Ne("metageneration")),n.push(new Ne("name","fullPath",!0));function e(i,a){return Kg(a)}const t=new Ne("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Ne("size");return s.xform=r,n.push(s),n.push(new Ne("timeCreated")),n.push(new Ne("updated")),n.push(new Ne("md5Hash",null,!0)),n.push(new Ne("cacheControl",null,!0)),n.push(new Ne("contentDisposition",null,!0)),n.push(new Ne("contentEncoding",null,!0)),n.push(new Ne("contentLanguage",null,!0)),n.push(new Ne("contentType",null,!0)),n.push(new Ne("metadata","customMetadata",!0)),As=n,As}function Qg(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new je(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Yg(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return Qg(r,n),r}function Ih(n,e,t){const r=vh(e);return r===null?null:Yg(n,r,t)}function Jg(n,e,t,r){const s=vh(e);if(s===null||!fi(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const f=n.bucket,m=n.fullPath,_="/b/"+a(f)+"/o/"+a(m),w=qr(_,t,r),R=mh({alt:"media",token:d});return w+R})[0]}function wh(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Fn{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){if(!n)throw ca()}function ha(n,e){function t(r,s){const i=Ih(n,s,e);return mt(i!==null),i}return t}function Xg(n,e){function t(r,s){const i=Ih(n,s,e);return mt(i!==null),Jg(i,s,n.host,n._protocol)}return t}function jr(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=mg():s=pg():t.getStatus()===402?s=fg(n.bucket):t.getStatus()===403?s=gg(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function bh(n){const e=jr(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=dg(n.path)),i.serverResponse=s.serverResponse,i}return t}function Zg(n,e,t){const r=e.fullServerUrl(),s=qr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Fn(s,i,ha(n,t),a);return c.errorHandler=bh(e),c}function e_(n,e,t){const r=e.fullServerUrl(),s=qr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Fn(s,i,Xg(n,t),a);return c.errorHandler=bh(e),c}function t_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Ah(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=t_(null,e)),r}function Ch(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let F=0;F<2;F++)x=x+Math.random().toString().slice(2);return x}const l=c();a["Content-Type"]="multipart/related; boundary="+l;const d=Ah(e,r,s),f=wh(d,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+l+"--",w=ht.getBlob(m,r,_);if(w===null)throw fh();const R={name:d.fullPath},N=qr(i,n.host,n._protocol),S="POST",O=n.maxUploadRetryTime,M=new Fn(N,S,ha(n,t),O);return M.urlParams=R,M.headers=a,M.body=w.uploadData(),M.errorHandler=jr(e),M}class zs{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function da(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{mt(!1)}return mt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function n_(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=Ah(e,r,s),c={name:a.fullPath},l=qr(i,n.host,n._protocol),d="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},m=wh(a,t),_=n.maxUploadRetryTime;function w(N){da(N);let S;try{S=N.getResponseHeader("X-Goog-Upload-URL")}catch{mt(!1)}return mt(fi(S)),S}const R=new Fn(l,d,w,_);return R.urlParams=c,R.headers=f,R.body=m,R.errorHandler=jr(e),R}function r_(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(d){const f=da(d,["active","final"]);let m=null;try{m=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{mt(!1)}m||mt(!1);const _=Number(m);return mt(!isNaN(_)),new zs(_,r.size(),f==="final")}const a="POST",c=n.maxUploadRetryTime,l=new Fn(t,a,i,c);return l.headers=s,l.errorHandler=jr(e),l}const Cl=256*1024;function s_(n,e,t,r,s,i,a,c){const l=new zs(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw vg();const d=l.total-l.current;let f=d;s>0&&(f=Math.min(f,s));const m=l.current,_=m+f;let w="";f===0?w="finalize":d===f?w="upload, finalize":w="upload";const R={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${l.current}`},N=r.slice(m,_);if(N===null)throw fh();function S(F,G){const z=da(F,["active","final"]),T=l.current+f,g=r.size();let y;return z==="final"?y=ha(e,i)(F,G):y=null,new zs(T,g,z==="final",y)}const O="POST",M=e.maxUploadRetryTime,x=new Fn(t,O,S,M);return x.headers=R,x.body=N.uploadData(),x.progressCallback=c||null,x.errorHandler=jr(n),x}const xe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Eo(n){switch(n){case"running":case"pausing":case"canceling":return xe.RUNNING;case"paused":return xe.PAUSED;case"success":return xe.SUCCESS;case"canceled":return xe.CANCELED;case"error":return xe.ERROR;default:return xe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,r){if(Sg(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class o_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=en.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=en.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=en.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ur("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ur("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ur("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ur("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ur("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class a_ extends o_{initXhr(){this.xhr_.responseType="text"}}function Xt(){return new a_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=ua(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(gh(s.status,[]))if(i)s=hh();else{this.sleepTime=Math.max(this.sleepTime*2,hg),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(re.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=n_(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=r_(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Xt,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Cl*this._chunkMultiplier,t=new zs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=s_(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(a,Xt,s,i,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Cl*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Zg(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Ch(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Xt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=dh(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Eo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new i_(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Eo(this._state)){case xe.SUCCESS:gn(this._resolve.bind(null,this.snapshot))();break;case xe.CANCELED:case xe.ERROR:const t=this._reject;gn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Eo(this._state)){case xe.RUNNING:case xe.PAUSED:e.next&&gn(e.next.bind(e,this.snapshot))();break;case xe.SUCCESS:e.complete&&gn(e.complete.bind(e))();break;case xe.CANCELED:case xe.ERROR:e.error&&gn(e.error.bind(e,this._error))();break;default:e.error&&gn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this._service=e,t instanceof je?this._location=t:this._location=je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new rn(e,t)}get root(){const e=new je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Th(this._location.path)}get storage(){return this._service}get parent(){const e=Gg(this._location.path);if(e===null)return null;const t=new je(this._location.bucket,e);return new rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wg(e)}}function l_(n,e,t){n._throwIfRoot("uploadBytes");const r=Ch(n.storage,n._location,ua(),new ht(e,!0),t);return n.storage.makeRequestWithTokens(r,Xt).then(s=>({metadata:s,ref:n}))}function u_(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new c_(n,new ht(e),t)}function h_(n){n._throwIfRoot("getDownloadURL");const e=e_(n.storage,n._location,ua());return n.storage.makeRequestWithTokens(e,Xt).then(t=>{if(t===null)throw Tg();return t})}function d_(n,e){const t=Hg(n._location.path,e),r=new je(n._location.bucket,t);return new rn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){return/^[A-Za-z]+:\/\//.test(n)}function p_(n,e){return new rn(n,e)}function Rh(n,e){if(n instanceof fa){const t=n;if(t._bucket==null)throw Eg();const r=new rn(t,t._bucket);return e!=null?Rh(r,e):r}else return e!==void 0?d_(n,e):n}function m_(n,e){if(e&&f_(e)){if(n instanceof fa)return p_(n,e);throw Do("To use ref(service, url), the first argument must be a Storage instance.")}else return Rh(n,e)}function Rl(n,e){const t=e==null?void 0:e[uh];return t==null?null:je.makeFromBucketSpec(t,n)}function g_(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:sh(s,n.app.options.projectId))}class fa{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=lh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lg,this._maxUploadRetryTime=ug,this._requests=new Set,s!=null?this._bucket=je.makeFromBucketSpec(s,this._host):this._bucket=Rl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=je.makeFromBucketSpec(this._url,e):this._bucket=Rl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Al("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Al("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new bg(ph());{const a=Og(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Sl="@firebase/storage",Pl="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="storage";function __(n,e,t){return n=Z(n),l_(n,e,t)}function Ph(n,e,t){return n=Z(n),u_(n,e,t)}function zr(n){return n=Z(n),h_(n)}function Gr(n,e){return n=Z(n),m_(n,e)}function pi(n=aa(),e){n=Z(n);const r=di(n,Sh).getImmediate({identifier:e}),s=th("storage");return s&&y_(r,...s),r}function y_(n,e,t,r={}){g_(n,e,t,r)}function E_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new fa(t,r,s,e,cn)}function v_(){nn(new Mt(Sh,E_,"PUBLIC").setMultipleInstances(!0)),Ze(Sl,Pl,""),Ze(Sl,Pl,"esm2017")}v_();var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function y(){}y.prototype=g.prototype,T.D=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(v,I,A){for(var E=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)E[$e-2]=arguments[$e];return g.prototype[I].apply(v,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)v[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)v[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],E=g+(A^y&(I^A))+v[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+v[1]+3905402710&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+v[2]+606105819&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+v[3]+3250441966&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+v[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+v[5]+1200080426&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+v[6]+2821735955&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+v[7]+4249261313&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+v[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+v[9]+2336552879&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+v[10]+4294925233&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+v[11]+2304563134&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(A^y&(I^A))+v[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=A+(I^g&(y^I))+v[13]+4254626195&4294967295,A=g+(E<<12&4294967295|E>>>20),E=I+(y^A&(g^y))+v[14]+2792965006&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(g^I&(A^g))+v[15]+1236535329&4294967295,y=I+(E<<22&4294967295|E>>>10),E=g+(I^A&(y^I))+v[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+v[6]+3225465664&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+v[11]+643717713&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+v[0]+3921069994&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+v[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+v[10]+38016083&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+v[15]+3634488961&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+v[4]+3889429448&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+v[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+v[14]+3275163606&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+v[3]+4107603335&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+v[8]+1163531501&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(I^A&(y^I))+v[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(g^y))+v[2]+4243563512&4294967295,A=g+(E<<9&4294967295|E>>>23),E=I+(g^y&(A^g))+v[7]+1735328473&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^g&(I^A))+v[12]+2368359562&4294967295,y=I+(E<<20&4294967295|E>>>12),E=g+(y^I^A)+v[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+v[8]+2272392833&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+v[11]+1839030562&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+v[14]+4259657740&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+v[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+v[4]+1272893353&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+v[7]+4139469664&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+v[10]+3200236656&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+v[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+v[0]+3936430074&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+v[3]+3572445317&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+v[6]+76029189&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(y^I^A)+v[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=A+(g^y^I)+v[12]+3873151461&4294967295,A=g+(E<<11&4294967295|E>>>21),E=I+(A^g^y)+v[15]+530742520&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^g)+v[2]+3299628645&4294967295,y=I+(E<<23&4294967295|E>>>9),E=g+(I^(y|~A))+v[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+v[7]+1126891415&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+v[14]+2878612391&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+v[5]+4237533241&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+v[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+v[3]+2399980690&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+v[10]+4293915773&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+v[1]+2240044497&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+v[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+v[15]+4264355552&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+v[6]+2734768916&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+v[13]+1309151649&4294967295,y=I+(E<<21&4294967295|E>>>11),E=g+(I^(y|~A))+v[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=A+(y^(g|~I))+v[11]+3174756917&4294967295,A=g+(E<<10&4294967295|E>>>22),E=I+(g^(A|~y))+v[2]+718787259&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var y=g-this.blockSize,v=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<g;)if(v[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,v),I=0;break}}else for(;A<g;)if(v[I++]=T[A++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var y=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=y&255,y/=256;for(this.u(T),T=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)T[y++]=this.g[g]>>>v&255;return T};function i(T,g){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;for(var y=[],v=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;v&&A==g||(y[I]=A,v=!1)}this.g=y}var c={};function l(T){return-128<=T&&128>T?i(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return S(d(-T));for(var g=[],y=1,v=0;T>=y;v++)g[v]=T/y|0,y*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return S(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=m,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),E=parseInt(T.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),v=v.j(A).add(d(E))):(v=v.j(y),v=v.add(d(E)))}return v}var m=l(0),_=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-S(this).m();for(var T=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);T+=(0<=v?v:4294967296+v)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+S(this).toString(T);for(var g=d(Math.pow(T,6)),y=this,v="";;){var I=F(y,g).g;y=O(y,I.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,R(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=O(this,T),N(T)?-1:R(T)?0:1};function S(T){for(var g=T.g.length,y=[],v=0;v<g;v++)y[v]=~T.g[v];return new a(y,~T.h).add(_)}n.abs=function(){return N(this)?S(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],v=0,I=0;I<=g;I++){var A=v+(this.i(I)&65535)+(T.i(I)&65535),E=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);v=E>>>16,A&=65535,E&=65535,y[I]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function O(T,g){return T.add(S(g))}n.j=function(T){if(R(this)||R(T))return m;if(N(this))return N(T)?S(this).j(S(T)):S(S(this).j(T));if(N(T))return S(this.j(S(T)));if(0>this.l(w)&&0>T.l(w))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<T.g.length;I++){var A=this.i(v)>>>16,E=this.i(v)&65535,$e=T.i(I)>>>16,at=T.i(I)&65535;y[2*v+2*I]+=E*at,M(y,2*v+2*I),y[2*v+2*I+1]+=A*at,M(y,2*v+2*I+1),y[2*v+2*I+1]+=E*$e,M(y,2*v+2*I+1),y[2*v+2*I+2]+=A*$e,M(y,2*v+2*I+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function M(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function x(T,g){this.g=T,this.h=g}function F(T,g){if(R(g))throw Error("division by zero");if(R(T))return new x(m,m);if(N(T))return g=F(S(T),g),new x(S(g.g),S(g.h));if(N(g))return g=F(T,S(g)),new x(S(g.g),g.h);if(30<T.g.length){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,v=g;0>=v.l(T);)y=G(y),v=G(v);var I=z(y,1),A=z(v,1);for(v=z(v,2),y=z(y,2);!R(v);){var E=A.add(v);0>=E.l(T)&&(I=I.add(y),A=E),v=z(v,1),y=z(y,1)}return g=O(T,I.j(g)),new x(I,g)}for(I=m;0<=T.l(g);){for(y=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),E=A.j(g);N(E)||0<E.l(T);)y-=v,A=d(y),E=A.j(g);R(A)&&(A=_),I=I.add(A),T=O(T,E)}return new x(I,T)}n.A=function(T){return F(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&T.i(v);return new a(y,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|T.i(v);return new a(y,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^T.i(v);return new a(y,this.h^T.h)};function G(T){for(var g=T.g.length+1,y=[],v=0;v<g;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(y,T.h)}function z(T,g){var y=g>>5;g%=32;for(var v=T.g.length-y,I=[],A=0;A<v;A++)I[A]=0<g?T.i(A+y)>>>g|T.i(A+y+1)<<32-g:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,tn=a}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nh,fr,Dh,Ns,Lo,Lh,Vh,Oh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cs=="object"&&Cs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function m(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function _(o,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function w(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return u.prototype[b].apply(p,D)}}function N(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function S(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let D=0;D<C;D++)o[b+D]=p[D]}else o.push(p)}}class O{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var G=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function T(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function E(){var o=$i;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class $e{constructor(){this.h=this.g=null}add(u,h){const p=at.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var at=new O(()=>new Kn,o=>o.reset());class Kn{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,Qn=!1,$i=new $e,pc=()=>{const o=c.Promise.resolve(void 0);ct=()=>{o.then(jf)}};var jf=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){A(h)}var u=at;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Qn=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var zf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Yn(o,u){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(G){e:{try{F(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Gf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yn.aa.h.call(this)}}R(Yn,ve);var Gf={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var is="closure_listenable_"+(1e6*Math.random()|0),Hf=0;function Wf(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++Hf,this.da=this.fa=!1}function os(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function as(o){this.src=o,this.g={},this.h=0}as.prototype.add=function(o,u,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var D=ji(o,u,p,b);return-1<D?(u=o[D],h||(u.fa=!1)):(u=new Wf(u,this.src,C,!!p,b),u.fa=h,o.push(u)),u};function qi(o,u){var h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(os(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ji(o,u,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==p)return b}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),Gi={};function mc(o,u,h,p,b){if(Array.isArray(u)){for(var C=0;C<u.length;C++)mc(o,u[C],h,p,b);return null}return h=yc(h),o&&o[is]?o.K(u,h,d(p)?!!p.capture:!!p,b):Kf(o,u,h,!1,p,b)}function Kf(o,u,h,p,b,C){if(!u)throw Error("Invalid event type");var D=d(b)?!!b.capture:!!b,X=Wi(o);if(X||(o[zi]=X=new as(o)),h=X.add(u,h,p,D,C),h.proxy)return h;if(p=Qf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)zf||(b=D),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(_c(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qf(){function o(h){return u.call(o.src,o.listener,h)}const u=Yf;return o}function gc(o,u,h,p,b){if(Array.isArray(u))for(var C=0;C<u.length;C++)gc(o,u[C],h,p,b);else p=d(p)?!!p.capture:!!p,h=yc(h),o&&o[is]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=ji(C,h,p,b),-1<h&&(os(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Wi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ji(u,h,p,b)),(h=-1<o?u[o]:null)&&Hi(h))}function Hi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[is])qi(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(_c(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Wi(u))?(qi(h,o),h.h==0&&(h.src=null,u[zi]=null)):os(o)}}}function _c(o){return o in Gi?Gi[o]:Gi[o]="on"+o}function Yf(o,u){if(o.da)o=!0;else{u=new Yn(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&Hi(o),o=h.call(p,u)}return o}function Wi(o){return o=o[zi],o instanceof as?o:null}var Ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(o){return typeof o=="function"?o:(o[Ki]||(o[Ki]=function(u){return o.handleEvent(u)}),o[Ki])}function Te(){wt.call(this),this.i=new as(this),this.M=this,this.F=null}R(Te,wt),Te.prototype[is]=!0,Te.prototype.removeEventListener=function(o,u,h,p){gc(this,o,u,h,p)};function Pe(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ve(u,o);else if(u instanceof ve)u.target=u.target||o;else{var b=u;u=new ve(p,o),v(u,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var D=u.g=h[C];b=cs(D,p,!0,u)&&b}if(D=u.g=o,b=cs(D,p,!0,u)&&b,b=cs(D,p,!1,u)&&b,h)for(C=0;C<h.length;C++)D=u.g=h[C],b=cs(D,p,!1,u)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)os(h[p]);delete o.g[u],o.h--}}this.F=null},Te.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Te.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function cs(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,C=0;C<u.length;++C){var D=u[C];if(D&&!D.da&&D.capture==h){var X=D.listener,ge=D.ha||D.src;D.fa&&qi(o.i,D),b=X.call(ge,p)!==!1&&b}}return b&&!p.defaultPrevented}function Ec(o,u,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function vc(o){o.g=Ec(()=>{o.g=null,o.i&&(o.i=!1,vc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Jf extends wt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jn(o){wt.call(this),this.h=o,this.g={}}R(Jn,wt);var Tc=[];function Ic(o){z(o.g,function(u,h){this.g.hasOwnProperty(h)&&Hi(u)},o),o.g={}}Jn.prototype.N=function(){Jn.aa.N.call(this),Ic(this)},Jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qi=c.JSON.stringify,Xf=c.JSON.parse,Zf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Yi(){}Yi.prototype.h=null;function wc(o){return o.h||(o.h=o.i())}function bc(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ji(){ve.call(this,"d")}R(Ji,ve);function Xi(){ve.call(this,"c")}R(Xi,ve);var Wt={},Ac=null;function ls(){return Ac=Ac||new Te}Wt.La="serverreachability";function Cc(o){ve.call(this,Wt.La,o)}R(Cc,ve);function Zn(o){const u=ls();Pe(u,new Cc(u))}Wt.STAT_EVENT="statevent";function Rc(o,u){ve.call(this,Wt.STAT_EVENT,o),this.stat=u}R(Rc,ve);function ke(o){const u=ls();Pe(u,new Rc(u,o))}Wt.Ma="timingevent";function Sc(o,u){ve.call(this,Wt.Ma,o),this.size=u}R(Sc,ve);function er(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function tr(){this.g=!0}tr.prototype.xa=function(){this.g=!1};function ep(o,u,h,p,b,C){o.info(function(){if(o.g)if(C)for(var D="",X=C.split("&"),ge=0;ge<X.length;ge++){var Y=X[ge].split("=");if(1<Y.length){var Ie=Y[0];Y=Y[1];var we=Ie.split("_");D=2<=we.length&&we[1]=="type"?D+(Ie+"="+Y+"&"):D+(Ie+"=redacted&")}}else D=null;else D=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+D})}function tp(o,u,h,p,b,C,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+C+" "+D})}function dn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rp(o,h)+(p?" "+p:"")})}function np(o,u){o.info(function(){return"TIMEOUT: "+u})}tr.prototype.info=function(){};function rp(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var D=1;D<b.length;D++)b[D]=""}}}}return Qi(h)}catch{return u}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zi;function hs(){}R(hs,Yi),hs.prototype.g=function(){return new XMLHttpRequest},hs.prototype.i=function(){return{}},Zi=new hs;function bt(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Jn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kc}function kc(){this.i=null,this.g="",this.h=!1}var Nc={},eo={};function to(o,u,h){o.L=1,o.v=ms(lt(u)),o.m=h,o.P=!0,Dc(o,null)}function Dc(o,u){o.F=Date.now(),ds(o),o.A=lt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Hc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new kc,o.g=ul(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Jf(_(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Tc[0]=b.toString()),b=Tc);for(var C=0;C<b.length;C++){var D=mc(h,b[C],p||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zn(),ep(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const u=this.M;u&&ut(o)==3?u.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const we=ut(this.g);var u=this.g.Ba();const mn=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||Zc(this.g)))){this.J||we!=4||u==7||(u==8||0>=mn?Zn(3):Zn(2)),no(this);var h=this.g.Z();this.X=h;t:if(Lc(this)){var p=Zc(this.g);o="";var b=p.length,C=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),nr(this);var D="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,tp(this.i,this.u,this.A,this.l,this.R,we,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,ge=this.g;if((X=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(X)){var Y=X;break t}}Y=null}if(h=Y)dn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ro(this,h);else{this.o=!1,this.s=3,ke(12),Kt(this),nr(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<D.length;)if(He=sp(this,D),He==eo){we==4&&(this.s=4,ke(14),h=!1),dn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Nc){this.s=4,ke(15),dn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else dn(this.i,this.l,He,null),ro(this,He);if(Lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||D.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)dn(this.i,this.l,D,"[Invalid Chunked Response]"),Kt(this),nr(this);else if(0<D.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),lo(Ie),Ie.M=!0,ke(11))}}else dn(this.i,this.l,D,null),ro(this,D);we==4&&Kt(this),this.o&&!this.J&&(we==4?ol(this.j,this):(this.o=!1,ds(this)))}else Tp(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Kt(this),nr(this)}}}catch{}finally{}};function Lc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sp(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?eo:(h=Number(u.substring(h,p)),isNaN(h)?Nc:(p+=1,p+h>u.length?eo:(u=u.slice(p,p+h),o.C=p+h,u)))}bt.prototype.cancel=function(){this.J=!0,Kt(this)};function ds(o){o.S=Date.now()+o.I,Vc(o,o.I)}function Vc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=er(_(o.ba,o),u)}function no(o){o.B&&(c.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(np(this.i,this.A),this.L!=2&&(Zn(),ke(17)),Kt(this),this.s=2,nr(this)):Vc(this,this.S-o)};function nr(o){o.j.G==0||o.J||ol(o.j,o)}function Kt(o){no(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ic(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ro(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||so(h.h,o))){if(!o.K&&so(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ts(h),Es(h);else break e;co(h),ke(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=er(_(h.Za,h),6e3));if(1>=Mc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yt(h,11)}else if((o.K||h.g==o)&&Ts(h),!M(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let Y=b[u];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Ie=Y[3];Ie!=null&&(h.la=Ie,h.j.info("VER="+h.la));const we=Y[4];we!=null&&(h.Aa=we,h.j.info("SVER="+h.Aa));const mn=Y[5];mn!=null&&typeof mn=="number"&&0<mn&&(p=1.5*mn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const He=o.g;if(He){const ws=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var C=p.h;C.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(io(C,C.h),C.h=null))}if(p.D){const uo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(p.ya=uo,te(p.I,p.D,uo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var D=o;if(p.qa=ll(p,p.J?p.ia:null,p.W),D.K){Uc(p.h,D);var X=D,ge=p.L;ge&&(X.I=ge),X.B&&(no(X),ds(X)),p.g=D}else sl(p);0<h.i.length&&vs(h)}else Y[0]!="stop"&&Y[0]!="close"||Yt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Yt(h,7):ao(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Zn(4)}catch{}}var ip=class{constructor(o,u){this.g=o,this.map=u}};function Oc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Mc(o){return o.h?1:o.g?o.g.size:0}function so(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function io(o,u){o.g?o.g.add(u):o.h=u}function Uc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Oc.prototype.cancel=function(){if(this.i=Fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return N(o.i)}function op(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function ap(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function Bc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=ap(o),p=op(o),b=p.length,C=0;C<b;C++)u.call(void 0,p[C],h&&h[C],o)}var $c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];u(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,fs(this,o.j),this.o=o.o,this.g=o.g,ps(this,o.s),this.l=o.l;var u=o.i,h=new ir;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),qc(this,h),this.m=o.m}else o&&(u=String(o).match($c))?(this.h=!1,fs(this,u[1]||"",!0),this.o=rr(u[2]||""),this.g=rr(u[3]||"",!0),ps(this,u[4]),this.l=rr(u[5]||"",!0),qc(this,u[6]||"",!0),this.m=rr(u[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Qt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(sr(u,jc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(sr(u,jc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(sr(h,h.charAt(0)=="/"?hp:up,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",sr(h,fp)),o.join("")};function lt(o){return new Qt(o)}function fs(o,u,h){o.j=h?rr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ps(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function qc(o,u,h){u instanceof ir?(o.i=u,pp(o.i,o.h)):(h||(u=sr(u,dp)),o.i=new ir(u,o.h))}function te(o,u,h){o.i.set(u,h)}function ms(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function sr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,lp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var jc=/[#\/\?@]/g,up=/[#\?:]/g,hp=/[#\?]/g,dp=/[#\?@]/g,fp=/#/g;function ir(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&cp(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=ir.prototype,n.add=function(o,u){At(this),this.i=null,o=fn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function zc(o,u){At(o),u=fn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Gc(o,u){return At(o),u=fn(o,u),o.g.has(u)}n.forEach=function(o,u){At(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(u[p])}return h},n.V=function(o){At(this);let u=[];if(typeof o=="string")Gc(this,o)&&(u=u.concat(this.g.get(fn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return At(this),this.i=null,o=fn(this,o),Gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Hc(o,u,h){zc(o,u),0<h.length&&(o.i=null,o.g.set(fn(o,u),N(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const C=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var b=C;D[p]!==""&&(b+="="+encodeURIComponent(String(D[p]))),o.push(b)}}return this.i=o.join("&")};function fn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function pp(o,u){u&&!o.j&&(At(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(zc(this,p),Hc(this,b,h))},o)),o.j=u}function mp(o,u){const h=new tr;if(c.Image){const p=new Image;p.onload=w(Ct,h,"TestLoadImage: loaded",!0,u,p),p.onerror=w(Ct,h,"TestLoadImage: error",!1,u,p),p.onabort=w(Ct,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(Ct,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function gp(o,u){const h=new tr,p=new AbortController,b=setTimeout(()=>{p.abort(),Ct(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?Ct(h,"TestPingServer: ok",!0,u):Ct(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Ct(h,"TestPingServer: error",!1,u)})}function Ct(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function _p(){this.g=new Zf}function yp(o,u,h){const p=h||"";try{Bc(o,function(b,C){let D=b;d(b)&&(D=Qi(b)),u.push(p+C+"="+encodeURIComponent(D))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function gs(o){this.l=o.Ub||null,this.j=o.eb||!1}R(gs,Yi),gs.prototype.g=function(){return new _s(this.l,this.j)},gs.prototype.i=function(o){return function(){return o}}({});function _s(o,u){Te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_s,Te),n=_s.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?or(this):ar(this),this.readyState==3&&Wc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,or(this))},n.Qa=function(o){this.g&&(this.response=o,or(this))},n.ga=function(){this.g&&or(this)};function or(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ar(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kc(o){let u="";return z(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function oo(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Kc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function oe(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(oe,Te);var Ep=/^https?$/i,vp=["POST","PUT"];n=oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zi.g(),this.v=this.o?wc(this.o):wc(Zi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Qc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vp,u,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of h)this.g.setRequestHeader(C,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Qc(this,C)}};function Qc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Yc(o),ys(o)}function Yc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),ys(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ys(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jc(this):this.bb())},n.bb=function(){Jc(this)};function Jc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ut(o)!=4||o.Z()!=2)){if(o.u&&ut(o)==4)Ec(o.Ea,0,o);else if(Pe(o,"readystatechange"),ut(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=D===0){var b=String(o.D).match($c)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!Ep.test(b?b.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var C=2<ut(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Yc(o)}}finally{ys(o)}}}}function ys(o,u){if(o.g){Xc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Pe(o,"ready");try{h.onreadystatechange=p}catch{}}}function Xc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Xf(u)}};function Zc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Tp(o){const u={};o=(o.g&&2<=ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var h=I(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[b]||[];u[b]=C,C.push(h)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function el(o){this.Aa=0,this.i=[],this.j=new tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,o),this.cb=cr("retryDelaySeedMs",1e4,o),this.Wa=cr("forwardChannelMaxRetries",2,o),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Oc(o&&o.concurrentRequestLimit),this.Da=new _p,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=el.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){ke(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ll(this,null,this.W),vs(this)};function ao(o){if(tl(o),o.G==3){var u=o.U++,h=lt(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),lr(o,h),u=new bt(o,o.j,u),u.L=2,u.v=ms(lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=ul(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ds(u)}cl(o)}function Es(o){o.g&&(lo(o),o.g.cancel(),o.g=null)}function tl(o){Es(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function vs(o){if(!xc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ct||pc(),Qn||(ct(),Qn=!0),$i.add(u,o),o.B=0}}function Ip(o,u){return Mc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=er(_(o.Ga,o,u),al(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new bt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),v(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=rl(this,b,u),h=lt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),lr(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(Kc(C)))+"&"+u:this.m&&oo(h,this.m,C)),io(this.h,b),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),b.T=!0,to(b,h,null)):to(b,h,u),this.G=2}}else this.G==3&&(o?nl(this,o):this.i.length==0||xc(this.h)||nl(this))};function nl(o,u){var h;u?h=u.l:h=o.U++;const p=lt(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),lr(o,p),o.m&&o.o&&oo(p,o.m,o.o),h=new bt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=rl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),io(o.h,h),to(h,p,u)}function lr(o,u){o.H&&z(o.H,function(h,p){te(u,p,h)}),o.l&&Bc({},function(h,p){te(u,p,h)})}function rl(o,u,h){h=Math.min(o.i.length,h);var p=o.l?_(o.l.Na,o.l,o):null;e:{var b=o.i;let C=-1;for(;;){const D=["count="+h];C==-1?0<h?(C=b[0].g,D.push("ofs="+C)):C=0:D.push("ofs="+C);let X=!0;for(let ge=0;ge<h;ge++){let Y=b[ge].g;const Ie=b[ge].map;if(Y-=C,0>Y)C=Math.max(0,b[ge].g-100),X=!1;else try{yp(Ie,D,"req"+Y+"_")}catch{p&&p(Ie)}}if(X){p=D.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function sl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ct||pc(),Qn||(ct(),Qn=!0),$i.add(u,o),o.v=0}}function co(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=er(_(o.Fa,o),al(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=er(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Es(this),il(this))};function lo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function il(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=lt(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),lr(o,u),o.m&&o.o&&oo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ms(lt(u)),h.m=null,h.P=!0,Dc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Es(this),co(this),ke(19))};function Ts(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ol(o,u){var h=null;if(o.g==u){Ts(o),lo(o),o.g=null;var p=2}else if(so(o.h,u))h=u.D,Uc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=ls(),Pe(p,new Sc(p,h)),vs(o)}else sl(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&Ip(o,u)||p==2&&co(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function al(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Yt(o,u){if(o.j.info("Error code "+u),u==2){var h=_(o.fb,o),p=o.Xa;const b=!p;p=new Qt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fs(p,"https"),ms(p),b?mp(p.toString(),h):gp(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(u),cl(o),tl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function cl(o){if(o.G=0,o.ka=[],o.l){const u=Fc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function ll(o,u,h){var p=h instanceof Qt?lt(h):new Qt(h);if(p.g!="")u&&(p.g=u+"."+p.g),ps(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var C=new Qt(null);p&&fs(C,p),u&&(C.g=u),b&&ps(C,b),h&&(C.l=h),p=C}return h=o.D,u=o.ya,h&&u&&te(p,h,u),te(p,"VER",o.la),lr(o,p),p}function ul(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new oe(new gs({eb:h})):new oe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hl(){}n=hl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Is(){}Is.prototype.g=function(o,u){return new qe(o,u)};function qe(o,u){Te.call(this),this.g=new el(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new pn(this)}R(qe,Te),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){ao(this.g)},qe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Qi(o),o=h);u.i.push(new ip(u.Ya++,o)),u.G==3&&vs(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,qe.aa.N.call(this)};function dl(o){Ji.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(dl,Ji);function fl(){Xi.call(this),this.status=1}R(fl,Xi);function pn(o){this.g=o}R(pn,hl),pn.prototype.ua=function(){Pe(this.g,"a")},pn.prototype.ta=function(o){Pe(this.g,new dl(o))},pn.prototype.sa=function(o){Pe(this.g,new fl)},pn.prototype.ra=function(){Pe(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,Oh=function(){return new Is},Vh=function(){return ls()},Lh=Wt,Lo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,Ns=us,Pc.COMPLETE="complete",Dh=Pc,bc.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,fr=bc,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,Nh=oe}).apply(typeof Cs<"u"?Cs:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ia("@firebase/firestore");function yn(){return sn.logLevel}function V(n,...e){if(sn.logLevel<=H.DEBUG){const t=e.map(pa);sn.debug(`Firestore (${Bn}): ${n}`,...t)}}function Et(n,...e){if(sn.logLevel<=H.ERROR){const t=e.map(pa);sn.error(`Firestore (${Bn}): ${n}`,...t)}}function Pn(n,...e){if(sn.logLevel<=H.WARN){const t=e.map(pa);sn.warn(`Firestore (${Bn}): ${n}`,...t)}}function pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+n;throw Et(e),new Error(e)}function J(n,e){n||$()}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class I_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class w_{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new xh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ae(e)}}class b_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class A_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new b_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new C_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=S_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new fe(0,0))}static max(){return new q(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Rr{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const P_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends Rr{construct(e,t,r){return new ye(e,t,r)}static isValidIdentifier(e){return P_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ne.fromString(e))}static fromName(e){return new U(ne.fromString(e).popFirst(5))}static empty(){return new U(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ne(e.slice()))}}function k_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Ut(s,U.empty(),e)}function N_(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ut(q.min(),U.empty(),-1)}static max(){return new Ut(q.max(),U.empty(),-1)}}function D_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==L_)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function O_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mi.oe=-1;function gi(n){return n==null}function Gs(n){return n===0&&1/n==-1/0}function x_(n){return typeof n=="number"&&Number.isInteger(n)&&!Gs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dl(e)),e=U_(n.get(t),e);return Dl(e)}function U_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Dl(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??_e.RED,this.left=s??_e.EMPTY,this.right=i??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new _e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,s,i){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vl(this.data.getIterator())}getIteratorFrom(e){return new Vl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Vl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new ze([])}unionWith(e){let t=new me(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fh("Invalid base64 string: "+i):i}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const F_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(J(!!n),typeof n=="string"){let e=0;const t=F_.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _i(n){const e=n.mapValue.fields.__previous_value__;return ma(e)?_i(e):e}function Sr(n){const e=Ft(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Pr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ma(n)?4:q_(n)?9007199254740991:$_(n)?10:11:$()}function st(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sr(n).isEqual(Sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ft(s.timestampValue),c=Ft(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),c=ae(i.doubleValue);return a===c?Gs(a)===Gs(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return kn(n.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ll(a)!==Ll(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!st(a[l],c[l])))return!1;return!0}(n,e);default:return $()}}function kr(n,e){return(n.values||[]).find(t=>st(t,e))!==void 0}function Nn(n,e){if(n===e)return 0;const t=$t(n),r=$t(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ae(i.integerValue||i.doubleValue),l=ae(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ol(n.timestampValue,e.timestampValue);case 4:return Ol(Sr(n),Sr(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Bt(i),l=Bt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=Q(c[d],l[d]);if(f!==0)return f}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(ae(i.latitude),ae(a.latitude));return c!==0?c:Q(ae(i.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,f;const m=i.fields||{},_=a.fields||{},w=(c=m.value)===null||c===void 0?void 0:c.arrayValue,R=(l=_.value)===null||l===void 0?void 0:l.arrayValue,N=Q(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:xl(w,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ss.mapValue&&a===Ss.mapValue)return 0;if(i===Ss.mapValue)return 1;if(a===Ss.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Q(l[m],f[m]);if(_!==0)return _;const w=Nn(c[l[m]],d[f[m]]);if(w!==0)return w}return Q(l.length,f.length)}(n.mapValue,e.mapValue);default:throw $()}}function Ol(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Ft(n),r=Ft(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function xl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Nn(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function Dn(n){return Vo(n)}function Vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ft(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Vo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Vo(t.fields[a])}`;return s+"}"}(n.mapValue):$()}function Ds(n){switch($t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_i(n);return e?16+Ds(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ds(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return jt(r.fields,(i,a)=>{s+=i.length+Ds(a)}),s}(n.mapValue);default:throw $()}}function Ml(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Oo(n){return!!n&&"integerValue"in n}function ga(n){return!!n&&"arrayValue"in n}function Ul(n){return!!n&&"nullValue"in n}function Fl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function $_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Er(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Er(n.arrayValue.values[t]);return e}return Object.assign({},n)}function q_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Er(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Er(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ls(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ue(Er(this.value))}}function Bh(n){const e=[];return jt(n.fields,(t,r)=>{const s=new ye([t]);if(Ls(r)){const i=Bh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,q.min(),q.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,q.min(),q.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.position=e,this.inclusive=t}}function Bl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Nn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!st(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function j_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{}class ue extends $h{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new G_(e,t,r):t==="array-contains"?new K_(e,r):t==="in"?new Q_(e,r):t==="not-in"?new Y_(e,r):t==="array-contains-any"?new J_(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new H_(e,r):new W_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Nn(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Nn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends $h{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new We(e,t)}matches(e){return qh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qh(n){return n.op==="and"}function jh(n){return z_(n)&&qh(n)}function z_(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function xo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(jh(n))return n.filters.map(e=>xo(e)).join(",");{const e=n.filters.map(t=>xo(t)).join(",");return`${n.op}(${e})`}}function zh(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&st(r.value,s.value)}(n,e):n instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&zh(a,s.filters[c]),!0):!1}(n,e):void $()}function Gh(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof We?function(t){return t.op.toString()+" {"+t.getFilters().map(Gh).join(" ,")+"}"}(n):"Filter"}class G_ extends ue{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class H_ extends ue{constructor(e,t){super(e,"in",t),this.keys=Hh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class W_ extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Hh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class K_ extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ga(t)&&kr(t.arrayValue,this.value)}}class Q_ extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}}class Y_ extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!kr(this.value.arrayValue,t)}}class J_ extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ga(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>kr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function ql(n,e=null,t=[],r=[],s=null,i=null,a=null){return new X_(n,e,t,r,s,i,a)}function _a(n){const e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.ue=t}return e.ue}function ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!j_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$l(n.startAt,e.startAt)&&$l(n.endAt,e.endAt)}function Mo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z_(n,e,t,r,s,i,a,c){return new jn(n,e,t,r,s,i,a,c)}function yi(n){return new jn(n)}function jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wh(n){return n.collectionGroup!==null}function vr(n){const e=j(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(ye.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Nr(i,r))}),t.has(ye.keyField().canonicalString())||e.ce.push(new Nr(ye.keyField(),r))}return e.ce}function et(n){const e=j(n);return e.le||(e.le=ey(e,vr(n))),e.le}function ey(n,e){if(n.limitType==="F")return ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Nr(s.field,i)});const t=n.endAt?new Hs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hs(n.startAt.position,n.startAt.inclusive):null;return ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uo(n,e){const t=n.filters.concat([e]);return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fo(n,e,t){return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ei(n,e){return ya(et(n),et(e))&&n.limitType===e.limitType}function Kh(n){return`${_a(et(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gh(s)).join(", ")}]`),gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Dn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Dn(s)).join(",")),`Target(${r})`}(et(n))}; limitType=${n.limitType})`}function vi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Bl(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,vr(r),s)||r.endAt&&!function(a,c,l){const d=Bl(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,vr(r),s))}(n,e)}function ty(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qh(n){return(e,t)=>{let r=!1;for(const s of vr(n)){const i=ny(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ny(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Nn(l,d):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Uh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new se(U.comparator);function vt(){return ry}const Yh=new se(U.comparator);function pr(...n){let e=Yh;for(const t of n)e=e.insert(t.key,t);return e}function Jh(n){let e=Yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return Tr()}function Xh(){return Tr()}function Tr(){return new ln(n=>n.toString(),(n,e)=>n.isEqual(e))}const sy=new se(U.comparator),iy=new me(U.comparator);function W(...n){let e=iy;for(const t of n)e=e.add(t);return e}const oy=new me(Q);function ay(){return oy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(e)?"-0":e}}function Zh(n){return{integerValue:""+n}}function cy(n,e){return x_(e)?Zh(e):Ea(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this._=void 0}}function ly(n,e,t){return n instanceof Dr?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ma(i)&&(i=_i(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Lr?td(n,e):n instanceof Vr?nd(n,e):function(s,i){const a=ed(s,i),c=zl(a)+zl(s.Pe);return Oo(a)&&Oo(s.Pe)?Zh(c):Ea(s.serializer,c)}(n,e)}function uy(n,e,t){return n instanceof Lr?td(n,e):n instanceof Vr?nd(n,e):t}function ed(n,e){return n instanceof Ws?function(r){return Oo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Dr extends Ti{}class Lr extends Ti{constructor(e){super(),this.elements=e}}function td(n,e){const t=rd(e);for(const r of n.elements)t.some(s=>st(s,r))||t.push(r);return{arrayValue:{values:t}}}class Vr extends Ti{constructor(e){super(),this.elements=e}}function nd(n,e){let t=rd(e);for(const r of n.elements)t=t.filter(s=>!st(s,r));return{arrayValue:{values:t}}}class Ws extends Ti{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zl(n){return ae(n.integerValue||n.doubleValue)}function rd(n){return ga(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.field=e,this.transform=t}}function dy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Lr&&s instanceof Lr||r instanceof Vr&&s instanceof Vr?kn(r.elements,s.elements,st):r instanceof Ws&&s instanceof Ws?st(r.Pe,s.Pe):r instanceof Dr&&s instanceof Dr}(n.transform,e.transform)}class fy{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ii{}function sd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wi(n.key,De.none()):new Hr(n.key,n.data,De.none());{const t=n.data,r=Ue.empty();let s=new me(ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new zt(n.key,r,new ze(s.toArray()),De.none())}}function py(n,e,t){n instanceof Hr?function(s,i,a){const c=s.value.clone(),l=Hl(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof zt?function(s,i,a){if(!Vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Hl(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(id(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ir(n,e,t,r){return n instanceof Hr?function(i,a,c,l){if(!Vs(i.precondition,a))return c;const d=i.value.clone(),f=Wl(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof zt?function(i,a,c,l){if(!Vs(i.precondition,a))return c;const d=Wl(i.fieldTransforms,l,a),f=a.data;return f.setAll(id(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function my(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ed(r.transform,s||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,i))}return t||null}function Gl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kn(r,s,(i,a)=>dy(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hr extends Ii{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zt extends Ii{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function id(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hl(n,e,t){const r=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,uy(a,c,t[s]))}return r}function Wl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ly(i,a,e))}return r}class wi extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gy extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&py(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ir(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ir(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=sd(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(t,r)=>Gl(t,r))&&kn(this.baseMutations,e.baseMutations,(t,r)=>Gl(t,r))}}class va{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length);let s=function(){return sy}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new va(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,K;function vy(n){switch(n){default:return $();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function od(n){if(n===void 0)return Et("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return $()}}(K=ce||(ce={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new tn([4294967295,4294967295],0);function Kl(n){const e=Ty().encode(n),t=new kh;return t.update(e),new Uint8Array(t.digest())}function Ql(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class Ta{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mr(`Invalid padding: ${t}`);if(r<0)throw new mr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new mr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(Iy)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Kl(e),[r,s]=Ql(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ta(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Kl(e),[r,s]=Ql(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bi(q.min(),s,new se(Q),vt(),W())}}class Wr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ad{constructor(e,t){this.targetId=e,this.me=t}}class cd{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Yl{constructor(){this.fe=0,this.ge=Xl(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Wr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Xl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wy{constructor(e){this.Le=e,this.Be=new Map,this.ke=vt(),this.qe=Jl(),this.Qe=new se(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Mo(i))if(r===0){const a=new U(i.path);this.Ue(t,a,Ce.newNoDocument(a,q.min()))}else J(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Bt(r).toUint8Array()}catch(l){if(l instanceof Fh)return Pn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ta(a,s,i)}catch(l){return Pn(l instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Mo(c.target)){const l=new U(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Ce.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=W();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new bi(e,t,this.Qe,this.ke,r);return this.ke=vt(),this.qe=Jl(),this.Qe=new se(Q),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Yl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new me(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Yl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Jl(){return new se(U.comparator)}function Xl(){return new se(U.comparator)}const by={asc:"ASCENDING",desc:"DESCENDING"},Ay={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cy={and:"AND",or:"OR"};class Ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bo(n,e){return n.useProto3Json||gi(e)?e:{value:e}}function Ks(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ld(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sy(n,e){return Ks(n,e.toTimestamp())}function tt(n){return J(!!n),q.fromTimestamp(function(t){const r=Ft(t);return new fe(r.seconds,r.nanos)}(n))}function Ia(n,e){return $o(n,e).canonicalString()}function $o(n,e){const t=function(s){return new ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ud(n){const e=ne.fromString(n);return J(md(e)),e}function qo(n,e){return Ia(n.databaseId,e.path)}function vo(n,e){const t=ud(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(dd(t))}function hd(n,e){return Ia(n.databaseId,e)}function Py(n){const e=ud(n);return e.length===4?ne.emptyPath():dd(e)}function jo(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dd(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zl(n,e,t){return{name:qo(n,e),fields:t.value.mapValue.fields}}function ky(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(J(f===void 0||typeof f=="string"),Ee.fromBase64String(f||"")):(J(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?P.UNKNOWN:od(d.code);return new L(f,d.message||"")}(a);t=new cd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vo(n,r.document.name),i=tt(r.document.updateTime),a=r.document.createTime?tt(r.document.createTime):q.min(),c=new Ue({mapValue:{fields:r.document.fields}}),l=Ce.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Os(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vo(n,r.document),i=r.readTime?tt(r.readTime):q.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Os([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vo(n,r.document),i=r.removedTargetIds||[];t=new Os([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ey(s,i),c=r.targetId;t=new ad(c,a)}}return t}function Ny(n,e){let t;if(e instanceof Hr)t={update:Zl(n,e.key,e.value)};else if(e instanceof wi)t={delete:qo(n,e.key)};else if(e instanceof zt)t={update:Zl(n,e.key,e.data),updateMask:By(e.fieldMask)};else{if(!(e instanceof gy))return $();t={verify:qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,e.precondition)),t}function Dy(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?tt(s.updateTime):tt(i);return a.isEqual(q.min())&&(a=tt(i)),new fy(a,s.transformResults||[])}(t,e))):[]}function Ly(n,e){return{documents:[hd(n,e.path)]}}function Vy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hd(n,s);const i=function(d){if(d.length!==0)return pd(We.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:vn(_.field),direction:My(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Bo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Oy(n){let e=Py(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=fd(m);return _ instanceof We&&jh(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(R){return new Nr(Tn(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,gi(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,w=m.values||[];return new Hs(w,_)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const _=!m.before,w=m.values||[];return new Hs(w,_)}(t.endAt)),Z_(e,s,a,i,c,"F",l,d)}function xy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(Tn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return We.create(t.compositeFilter.filters.map(r=>fd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function My(n){return by[n]}function Uy(n){return Ay[n]}function Fy(n){return Cy[n]}function vn(n){return{fieldPath:n.canonicalString()}}function Tn(n){return ye.fromServerFormat(n.fieldPath)}function pd(n){return n instanceof ue?function(t){if(t.op==="=="){if(Fl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(Ul(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(Ul(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:Uy(t.op),value:t.value}}}(n):n instanceof We?function(t){const r=t.getFilters().map(s=>pd(s));return r.length===1?r[0]:{compositeFilter:{op:Fy(t.op),filters:r}}}(n):$()}function By(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function md(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,r,s,i=q.min(),a=q.min(),c=Ee.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.ct=e}}function qy(n){const e=Oy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.un=new zy}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ut.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new me(ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Me{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(41943040,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ln(0)}static kn(){return new Ln(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class Gy{constructor(e){this.Un=e,this.buffer=new me(tu),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $n(t)}await this.Hn(3e5)})}}class Wy{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(mi.oe);const r=new Gy(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(eu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,a,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),yn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Ky(n,e){return new Wy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.changes=new ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ir(r.mutation,s,ze.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=pr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=vt();const a=Tr(),c=function(){return Tr()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof zt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ir(f.mutation,d,f.mutation.getFieldMask(),fe.now())):a.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var m;return c.set(d,new Yy(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Tr();let s=new se((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||ze.empty();f=c.applyToLocalView(d,f),r.set(l,f);const m=(s.get(c.batchId)||W()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,m=Xh();f.forEach(_=>{if(!i.has(_)){const w=sd(t.get(_),r.get(_));w!==null&&m.set(_,w),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Zt());let c=-1,l=i;return a.next(d=>k.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,W())).next(f=>({batchId:c,changes:Jh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=pr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=pr();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const d=function(m,_){return new jn(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ce.newInvalidDocument(f)))});let c=pr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Ir(f.mutation,d,ze.empty(),fe.now()),vi(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:tt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:qy(s.bundledQuery),readTime:tt(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.overlays=new se(U.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Zt(),i=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Zt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yy(t,r));let i=this.Ir.get(t);i===void 0&&(i=W(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.Tr=new me(pe.Er),this.dr=new me(pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new U(new ne([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new ne([])),r=new pe(t,e),s=new pe(t,e+1);let i=W();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new me(pe.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _y(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(Q);return t.forEach(s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new pe(new U(i),0);let c=new me(Q);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new pe(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.Mr=e,this.docs=function(){return new se(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=vt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=vt();const a=t.path,c=new U(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||D_(N_(f),r)<=0||(s.has(f.key)||vi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rE(this)}getSize(e){return k.resolve(this.size)}}class rE extends Qy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.persistence=e,this.Nr=new ln(t=>_a(t),ya),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wa,this.targetCount=0,this.kr=Ln.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.qr={},this.overlays={},this.Qr=new mi(0),this.Kr=!1,this.Kr=!0,this.$r=new eE,this.referenceDelegate=e(this),this.Ur=new sE(this),this.indexManager=new jy,this.remoteDocumentCache=function(s){return new nE(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $y(t),this.Gr=new Xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new tE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new iE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class iE extends V_{constructor(e){super(),this.currentSequenceNumber=e}}class ba{constructor(e){this.persistence=e,this.Jr=new wa,this.Yr=null}static Zr(e){return new ba(e)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=U.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class Qs{constructor(e,t){this.persistence=e,this.ti=new ln(r=>M_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ky(this,t)}static Zr(e,t){return new Qs(e,t)}zr(){}jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}Zn(e,t){return k.forEach(this.ti,(r,s)=>this.nr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,a=>this.nr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ds(e.data.value)),t}nr(e,t,r){return k.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ti.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Aa(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zp()?8:O_(Se())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oE;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(yn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(yn()<=H.DEBUG&&V("QueryEngine","Query:",En(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(yn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):k.resolve())}Yi(e,t){if(jl(t))return k.resolve(null);let r=et(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fo(t,null,"F"),r=et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,Fo(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return jl(t)||s.isEqual(q.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(yn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),En(t)),this.rs(e,a,t,k_(s,-1)).next(c=>c))})}ts(e,t){let r=new me(Qh(e));return t.forEach((s,i)=>{vi(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return yn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",En(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ut.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new se(Q),this._s=new ln(i=>_a(i),ya),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function lE(n,e,t,r){return new cE(n,e,t,r)}async function _d(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=W();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function uE(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const m=d.batch,_=m.keys();let w=k.resolve();return _.forEach(R=>{w=w.next(()=>f.getEntry(l,R)).next(N=>{const S=d.docVersions.get(R);J(S!==null),N.version.compareTo(S)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function yd(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function hE(n,e){const t=j(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let w=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Ee.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),function(N,S,O){return N.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(_,w,f)&&c.push(t.Ur.updateTargetData(i,w))});let l=vt(),d=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(dE(i,a,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function dE(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=vt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function fE(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pE(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function zo(n,e,t){const r=j(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qn(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function nu(n,e,t){const r=j(n);let s=q.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const m=j(l),_=m._s.get(f);return _!==void 0?k.resolve(m.os.get(_)):m.Ur.getTargetData(d,f)}(r,a,et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:q.min(),t?i:W())).next(c=>(mE(r,ty(e),c),{documents:c,Ts:i})))}function mE(n,e,t){let r=n.us.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class ru{constructor(){this.activeTargetIds=ay()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gE{constructor(){this.so=new ru,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps=null;function To(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class vE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=To(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,l,d,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Pn("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=yE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=To();return new Promise((a,c)=>{const l=new Nh;l.setWithCredentials(!0),l.listenOnce(Dh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ns.NO_ERROR:const f=l.getResponseJson();V(be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ns.TIMEOUT:V(be,`RPC '${e}' ${i} timed out`),c(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ns.HTTP_ERROR:const m=l.getStatus();if(V(be,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_==null?void 0:_.error;if(w&&w.status&&w.message){const R=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN}(w.status);c(new L(R,w.message))}else c(new L(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new L(P.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{V(be,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);V(be,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=To(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Oh(),c=Vh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");V(be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=a.createWebChannel(f,l);let _=!1,w=!1;const R=new EE({Io:S=>{w?V(be,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(_||(V(be,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),V(be,`RPC '${e}' stream ${s} sending:`,S),m.send(S))},To:()=>m.close()}),N=(S,O,M)=>{S.listen(O,x=>{try{M(x)}catch(F){setTimeout(()=>{throw F},0)}})};return N(m,fr.EventType.OPEN,()=>{w||(V(be,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),N(m,fr.EventType.CLOSE,()=>{w||(w=!0,V(be,`RPC '${e}' stream ${s} transport closed`),R.So())}),N(m,fr.EventType.ERROR,S=>{w||(w=!0,Pn(be,`RPC '${e}' stream ${s} transport errored:`,S),R.So(new L(P.UNAVAILABLE,"The operation could not be completed")))}),N(m,fr.EventType.MESSAGE,S=>{var O;if(!w){const M=S.data[0];J(!!M);const x=M,F=x.error||((O=x[0])===null||O===void 0?void 0:O.error);if(F){V(be,`RPC '${e}' stream ${s} received error:`,F);const G=F.status;let z=function(y){const v=ce[y];if(v!==void 0)return od(v)}(G),T=F.message;z===void 0&&(z=P.INTERNAL,T="Unknown error status: "+G+" with message "+F.message),w=!0,R.So(new L(z,T)),m.close()}else V(be,`RPC '${e}' stream ${s} received:`,M),R.bo(M)}}),N(c,Lh.STAT_EVENT,S=>{S.stat===Lo.PROXY?V(be,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Lo.NOPROXY&&V(be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){return new Ry(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ed(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TE extends vd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ky(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?tt(a.readTime):q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=jo(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Mo(l)?{documents:Ly(i,l)}:{query:Vy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ld(i,a.resumeToken);const d=Bo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Ks(i,a.snapshotVersion.toTimestamp());const d=Bo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=xy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=jo(this.serializer),t.removeTarget=e,this.a_(t)}}class IE extends vd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Dy(e.writeResults,e.commitTime),r=tt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=jo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ny(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,$o(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(P.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,$o(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Et(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{un(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=j(l);d.L_.add(4),await Kr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ci(d)}(this))})}),this.q_=new bE(r,s)}}async function Ci(n){if(un(n))for(const e of n.B_)await e(!0)}async function Kr(n){for(const e of n.B_)await e(!1)}function Td(n,e){const t=j(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Pa(t)?Sa(t):zn(t).r_()&&Ra(t,e))}function Ca(n,e){const t=j(n),r=zn(t);t.N_.delete(e),r.r_()&&Id(t,e),t.N_.size===0&&(r.r_()?r.o_():un(t)&&t.q_.set("Unknown"))}function Ra(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zn(n).A_(e)}function Id(n,e){n.Q_.xe(e),zn(n).R_(e)}function Sa(n){n.Q_=new wy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.q_.v_()}function Pa(n){return un(n)&&!zn(n).n_()&&n.N_.size>0}function un(n){return j(n).L_.size===0}function wd(n){n.Q_=void 0}async function CE(n){n.q_.set("Online")}async function RE(n){n.N_.forEach((e,t)=>{Ra(n,e)})}async function SE(n,e){wd(n),Pa(n)?(n.q_.M_(e),Sa(n)):n.q_.set("Unknown")}async function PE(n,e,t){if(n.q_.set("Online"),e instanceof cd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ys(n,r)}else if(e instanceof Os?n.Q_.Ke(e):e instanceof ad?n.Q_.He(e):n.Q_.We(e),!t.isEqual(q.min()))try{const r=await yd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),Id(i,l);const m=new Dt(f.target,l,d,f.sequenceNumber);Ra(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,e,t){if(!qn(e))throw e;n.L_.add(1),await Kr(n),n.q_.set("Offline"),t||(t=()=>yd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ci(n)})}function bd(n,e){return e().catch(t=>Ys(n,t,e))}async function Ri(n){const e=j(n),t=qt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kE(e);)try{const s=await fE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,NE(e,s)}catch(s){await Ys(e,s)}Ad(e)&&Cd(e)}function kE(n){return un(n)&&n.O_.length<10}function NE(n,e){n.O_.push(e);const t=qt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ad(n){return un(n)&&!qt(n).n_()&&n.O_.length>0}function Cd(n){qt(n).start()}async function DE(n){qt(n).p_()}async function LE(n){const e=qt(n);for(const t of n.O_)e.m_(t.mutations)}async function VE(n,e,t){const r=n.O_.shift(),s=va.from(r,e,t);await bd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ri(n)}async function OE(n,e){e&&qt(n).V_&&await async function(r,s){if(function(a){return vy(a)&&a!==P.ABORTED}(s.code)){const i=r.O_.shift();qt(r).s_(),await bd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ri(r)}}(n,e),Ad(n)&&Cd(n)}async function iu(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=un(t);t.L_.add(3),await Kr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ci(t)}async function xE(n,e){const t=j(n);e?(t.L_.delete(2),await Ci(t)):e||(t.L_.add(2),await Kr(t),t.q_.set("Unknown"))}function zn(n){return n.K_||(n.K_=function(t,r,s){const i=j(t);return i.w_(),new TE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:CE.bind(null,n),Ro:RE.bind(null,n),mo:SE.bind(null,n),d_:PE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Pa(n)?Sa(n):n.q_.set("Unknown")):(await n.K_.stop(),wd(n))})),n.K_}function qt(n){return n.U_||(n.U_=function(t,r,s){const i=j(t);return i.w_(),new IE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DE.bind(null,n),mo:OE.bind(null,n),f_:LE.bind(null,n),g_:VE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ri(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ka(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Na(n,e){if(Et("AsyncQueue",`${e}: ${n}`),qn(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=pr(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.W_=new se(U.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):$():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vn{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Vn(e,t,wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ei(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class UE{constructor(){this.queries=au(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=au(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new L(P.ABORTED,"Firestore shutting down"))}}function au(){return new ln(n=>Kh(n),Ei)}async function Da(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ME,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Na(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Va(t)}async function La(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function FE(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Va(t)}function BE(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Va(n){n.Y_.forEach(e=>{e.next()})}var Go,cu;(cu=Go||(Go={})).ea="default",cu.Cache="cache";class Oa{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Go.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.key=e}}class Sd{constructor(e){this.key=e}}class $E{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Qh(e),this.Ra=new wn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new ou,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),w=vi(this.query,m)?m:null,R=!!_&&this.mutatedKeys.has(_.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let S=!1;_&&w?_.data.isEqual(w.data)?R!==N&&(r.track({type:3,doc:w}),S=!0):this.ga(_,w)||(r.track({type:2,doc:w}),S=!0,(l&&this.Aa(w,l)>0||d&&this.Aa(w,d)<0)&&(c=!0)):!_&&w?(r.track({type:0,doc:w}),S=!0):_&&!w&&(r.track({type:1,doc:_}),S=!0,(l||d)&&(c=!0)),S&&(w?(a=a.add(w),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(w,R){const N=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return N(w)-N(R)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Vn(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ou,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Sd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Rd(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Vn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jE{constructor(e){this.key=e,this.va=!1}}class zE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ln(c=>Kh(c),Ei),this.Ma=new Map,this.xa=new Set,this.Oa=new se(U.comparator),this.Na=new Map,this.La=new wa,this.Ba={},this.ka=new Map,this.qa=Ln.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GE(n,e,t=!0){const r=Vd(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Pd(r,e,t,!0),s}async function HE(n,e){const t=Vd(n);await Pd(t,e,!0,!1)}async function Pd(n,e,t,r){const s=await pE(n.localStore,et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await WE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Td(n.remoteStore,s),c}async function WE(n,e,t,r,s){n.Ka=(m,_,w)=>async function(N,S,O,M){let x=S.view.ma(O);x.ns&&(x=await nu(N.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,x)));const F=M&&M.targetChanges.get(S.targetId),G=M&&M.targetMismatches.get(S.targetId)!=null,z=S.view.applyChanges(x,N.isPrimaryClient,F,G);return uu(N,S.targetId,z.wa),z.snapshot}(n,m,_,w);const i=await nu(n.localStore,e,!0),a=new $E(e,i.Ts),c=a.ma(i.documents),l=Wr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);uu(n,t,d.wa);const f=new qE(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function KE(n,e,t){const r=j(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ei(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ca(r.remoteStore,s.targetId),Ho(r,s.targetId)}).catch($n)):(Ho(r,s.targetId),await zo(r.localStore,s.targetId,!0))}async function QE(n,e){const t=j(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ca(t.remoteStore,r.targetId))}async function YE(n,e,t){const r=rv(n);try{const s=await function(a,c){const l=j(a),d=fe.now(),f=c.reduce((w,R)=>w.add(R.key),W());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=vt(),N=W();return l.cs.getEntries(w,f).next(S=>{R=S,R.forEach((O,M)=>{M.isValidDocument()||(N=N.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(S=>{m=S;const O=[];for(const M of c){const x=my(M,m.get(M.key).overlayedDocument);x!=null&&O.push(new zt(M.key,x,Bh(x.value.mapValue),De.exists(!0)))}return l.mutationQueue.addMutationBatch(w,d,O,c)}).next(S=>{_=S;const O=S.applyToLocalDocumentSet(m,N);return l.documentOverlayCache.saveOverlays(w,S.batchId,O)})}).then(()=>({batchId:_.batchId,changes:Jh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new se(Q)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Qr(r,s.changes),await Ri(r.remoteStore)}catch(s){const i=Na(s,"Failed to persist write");t.reject(i)}}async function kd(n,e){const t=j(n);try{const r=await hE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?J(a.va):s.removedDocuments.size>0&&(J(a.va),a.va=!1))}),await Qr(t,r,e)}catch(r){await $n(r)}}function lu(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=j(a);l.onlineState=c;let d=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(c)&&(d=!0)}),d&&Va(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new se(U.comparator);a=a.insert(i,Ce.newNoDocument(i,q.min()));const c=W().add(i),l=new bi(q.min(),new Map,new se(Q),a,c);await kd(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),xa(r)}else await zo(r.localStore,e,!1).then(()=>Ho(r,e,t)).catch($n)}async function XE(n,e){const t=j(n),r=e.batch.batchId;try{const s=await uE(t.localStore,e);Dd(t,r,null),Nd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qr(t,s)}catch(s){await $n(s)}}async function ZE(n,e,t){const r=j(n);try{const s=await function(a,c){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(J(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);Dd(r,e,t),Nd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qr(r,s)}catch(s){await $n(s)}}function Nd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Dd(n,e,t){const r=j(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ho(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Ld(n,r)})}function Ld(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ca(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),xa(n))}function uu(n,e,t){for(const r of t)r instanceof Rd?(n.La.addReference(r.key,e),ev(n,r)):r instanceof Sd?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Ld(n,r.key)):$()}function ev(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),xa(n))}function xa(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new U(ne.fromString(e)),r=n.qa.next();n.Na.set(r,new jE(t)),n.Oa=n.Oa.insert(t,r),Td(n.remoteStore,new Dt(et(yi(t.path)),r,"TargetPurposeLimboResolution",mi.oe))}}async function Qr(n,e,t){const r=j(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Aa.Wi(l.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>k.forEach(d,_=>k.forEach(_.$i,w=>f.persistence.referenceDelegate.addReference(m,_.targetId,w)).next(()=>k.forEach(_.Ui,w=>f.persistence.referenceDelegate.removeReference(m,_.targetId,w)))))}catch(m){if(!qn(m))throw m;V("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const w=f.os.get(_),R=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(_,N)}}}(r.localStore,i))}async function tv(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await _d(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new L(P.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qr(t,r.hs)}}function nv(n,e){const t=j(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let s=W();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Vd(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JE.bind(null,e),e.Ca.d_=FE.bind(null,e.eventManager),e.Ca.$a=BE.bind(null,e.eventManager),e}function rv(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZE.bind(null,e),e}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ai(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return lE(this.persistence,new aE,e.initialUser,this.serializer)}Ga(e){return new gd(ba.Zr,this.serializer)}Wa(e){return new gE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class sv extends Js{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){J(this.persistence.referenceDelegate instanceof Qs);const r=this.persistence.referenceDelegate.garbageCollector;return new Hy(r,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new gd(r=>Qs.Zr(r,t),this.serializer)}}class Wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tv.bind(null,this.syncEngine),await xE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UE}()}createDatastore(e){const t=Ai(e.databaseInfo.databaseId),r=function(i){return new vE(i)}(e.databaseInfo);return function(i,a,c,l){return new wE(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new AE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>lu(this.syncEngine,t,0),function(){return su.D()?new su:new _E}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,f){const m=new zE(s,i,a,c,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=j(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Kr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wo.provider={build:()=>new Wo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=Mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Na(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wo(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _d(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ov(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>iu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>iu(e.remoteStore,s)),n._onlineComponents=e}async function ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await wo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pn("Error using user provided cache. Falling back to memory cache: "+t),await wo(n,new Js)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await wo(n,new sv(void 0));return n._offlineComponents}async function Od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await hu(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await hu(n,new Wo))),n._onlineComponents}function av(n){return Od(n).then(e=>e.syncEngine)}async function Xs(n){const e=await Od(n),t=e.eventManager;return t.onListen=GE.bind(null,e.syncEngine),t.onUnlisten=KE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QE.bind(null,e.syncEngine),t}function cv(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new Ma({next:_=>{f.Za(),a.enqueueAndForget(()=>La(i,m));const w=_.docs.has(c);!w&&_.fromCache?d.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&_.fromCache&&l&&l.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new Oa(yi(c.path),f,{includeMetadataChanges:!0,_a:!0});return Da(i,m)}(await Xs(n),n.asyncQueue,e,t,r)),r.promise}function lv(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new Ma({next:_=>{f.Za(),a.enqueueAndForget(()=>La(i,m)),_.fromCache&&l.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new Oa(c,f,{includeMetadataChanges:!0,_a:!0});return Da(i,m)}(await Xs(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uv(n,e,t,r){if(e===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fu(n){if(!U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pu(n){if(U.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Si(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function Le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Si(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T_;switch(r.type){case"firstParty":return new A_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=du.get(t);r&&(V("ComponentProvider","Removing Datastore"),du.delete(t),r.terminate())}(this),Promise.resolve()}}function hv(n,e,t,r={}){var s;const i=(n=Le(n,Pi))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ae.MOCK_USER;else{c=sh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ae(d)}n._authCredentials=new I_(new xh(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class xt extends Gt{constructor(e,t,r){super(e,t,yi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new U(e))}withConverter(e){return new xt(this.firestore,e,this._path)}}function de(n,e,...t){if(n=Z(n),Md("collection","path",e),n instanceof Pi){const r=ne.fromString(e,...t);return pu(r),new xt(n,null,r)}{if(!(n instanceof Re||n instanceof xt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return pu(r),new xt(n.firestore,null,r)}}function ee(n,e,...t){if(n=Z(n),arguments.length===1&&(e=Mh.newId()),Md("doc","path",e),n instanceof Pi){const r=ne.fromString(e,...t);return fu(r),new Re(n,null,new U(r))}{if(!(n instanceof Re||n instanceof xt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return fu(r),new Re(n.firestore,n instanceof xt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ed(this,"async_queue_retry"),this.Vu=()=>{const r=Io();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new gt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ka.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function _u(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class it extends Pi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function Ge(n,e){const t=typeof n=="object"?n:aa(),r=typeof n=="string"?n:"(default)",s=di(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=th("firestore");i&&hv(s,...i)}return s}function Yr(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dv(n),n._firestoreClient}function dv(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new B_(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new iv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Ee.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=/^__.*__$/;class pv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hr(e,this.data,t,this.fieldTransforms)}}class Ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Ba{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ba(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Fd(this.Cu)&&fv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ai(e)}Qu(e,t,r,s=!1){return new Ba({Cu:e,methodName:t,qu:r,path:ye.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xr(n){const e=n._freezeSettings(),t=Ai(n._databaseId);return new mv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $a(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ja("Data must be an object, but it was:",a,r);const c=qd(r,a);let l,d;if(i.merge)l=new ze(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Ko(e,m,t);if(!a.contains(_))throw new L(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);zd(f,_)||f.push(_)}l=new ze(f),d=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=a.fieldTransforms;return new pv(new Ue(c),l,d)}class Ni extends ki{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ni}}class qa extends ki{_toFieldTransform(e){return new hy(e.path,new Dr)}isEqual(e){return e instanceof qa}}function Bd(n,e,t,r){const s=n.Qu(1,e,t);ja("Data must be an object, but it was:",s,r);const i=[],a=Ue.empty();jt(r,(l,d)=>{const f=za(e,l,t);d=Z(d);const m=s.Nu(f);if(d instanceof Ni)i.push(f);else{const _=Zr(d,m);_!=null&&(i.push(f),a.set(f,_))}});const c=new ze(i);return new Ud(a,c,s.fieldTransforms)}function $d(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Ko(e,r,t)],l=[s];if(i.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Ko(e,i[_])),l.push(i[_+1]);const d=[],f=Ue.empty();for(let _=c.length-1;_>=0;--_)if(!zd(d,c[_])){const w=c[_];let R=l[_];R=Z(R);const N=a.Nu(w);if(R instanceof Ni)d.push(w);else{const S=Zr(R,N);S!=null&&(d.push(w),f.set(w,S))}}const m=new ze(d);return new Ud(f,m,a.fieldTransforms)}function gv(n,e,t,r=!1){return Zr(t,n.Qu(r?4:3,e))}function Zr(n,e){if(jd(n=Z(n)))return ja("Unsupported field value:",e,n),qd(n,e);if(n instanceof ki)return function(r,s){if(!Fd(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Zr(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:Ks(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ks(s.serializer,i)}}if(r instanceof Ua)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:ld(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ia(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fa)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ea(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Si(r)}`)}(n,e)}function qd(n,e){const t={};return Uh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,s)=>{const i=Zr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function jd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Ua||n instanceof On||n instanceof Re||n instanceof ki||n instanceof Fa)}function ja(n,e,t){if(!jd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Si(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ko(n,e,t){if((e=Z(e))instanceof Jr)return e._internalPath;if(typeof e=="string")return za(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const _v=new RegExp("[~\\*/\\[\\]]");function za(n,e,t){if(e.search(_v)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jr(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new L(P.INVALID_ARGUMENT,c+n+l)}function zd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Di("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yv extends Gd{data(){return super.data()}}function Di(n,e){return typeof e=="string"?za(n,e):e instanceof Jr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ga{}class Wd extends Ga{}function Gn(n,e,...t){let r=[];e instanceof Ga&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Ha).length,c=i.filter(l=>l instanceof Li).length;if(a>1||a>0&&c>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Li extends Wd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Li(e,t,r)}_apply(e){const t=this._parse(e);return Kd(e._query,t),new Gt(e.firestore,e.converter,Uo(e._query,t))}_parse(e){const t=Xr(e.firestore);return function(i,a,c,l,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Eu(m,f);const w=[];for(const R of m)w.push(yu(l,i,R));_={arrayValue:{values:w}}}else _=yu(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Eu(m,f),_=gv(c,a,m,f==="in"||f==="not-in");return ue.create(d,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vi(n,e,t){const r=e,s=Di("where",n);return Li._create(s,r,t)}class Ha extends Ga{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ha(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Kd(a,l),a=Uo(a,l)}(e._query,t),new Gt(e.firestore,e.converter,Uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wa extends Wd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Wa(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nr(i,a)}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new jn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Hn(n,e="asc"){const t=e,r=Di("orderBy",n);return Wa._create(r,t)}function yu(n,e,t){if(typeof(t=Z(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wh(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!U.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ml(n,new U(r))}if(t instanceof Re)return Ml(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Si(t)}.`)}function Eu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kd(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ev{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ae(a.doubleValue));return new Fa(i)}convertGeoPoint(e){return new Ua(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_i(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Ft(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);J(md(r));const s=new Pr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qd extends Gd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Di("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class xs extends Qd{data(e={}){return super.data(e)}}class Yd{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new xs(this._firestore,this._userDataWriter,r.key,r,new gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new xs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new xs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:vv(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){n=Le(n,Re);const e=Le(n.firestore,it);return cv(Yr(e),n._key).then(t=>Jd(e,n,t))}class Qa extends Ev{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Be(n){n=Le(n,Gt);const e=Le(n.firestore,it),t=Yr(e),r=new Qa(e);return Hd(n._query),lv(t,n._query).then(s=>new Yd(e,r,n,s))}function ei(n,e,t){n=Le(n,Re);const r=Le(n.firestore,it),s=Ka(n.converter,e,t);return es(r,[$a(Xr(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,De.none())])}function le(n,e,t,...r){n=Le(n,Re);const s=Le(n.firestore,it),i=Xr(s);let a;return a=typeof(e=Z(e))=="string"||e instanceof Jr?$d(i,"updateDoc",n._key,e,t,r):Bd(i,"updateDoc",n._key,e),es(s,[a.toMutation(n._key,De.exists(!0))])}function Oi(n){return es(Le(n.firestore,it),[new wi(n._key,De.none())])}function xi(n,e){const t=Le(n.firestore,it),r=ee(n),s=Ka(n.converter,e);return es(t,[$a(Xr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function Tv(n,...e){var t,r,s;n=Z(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||_u(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(_u(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,d,f;if(n instanceof Re)d=Le(n.firestore,it),f=yi(n._key.path),l={next:m=>{e[a]&&e[a](Jd(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Le(n,Gt);d=Le(m.firestore,it),f=m._query;const _=new Qa(d);l={next:w=>{e[a]&&e[a](new Yd(d,_,m,w))},error:e[a+1],complete:e[a+2]},Hd(n._query)}return function(_,w,R,N){const S=new Ma(N),O=new Oa(w,S,R);return _.asyncQueue.enqueueAndForget(async()=>Da(await Xs(_),O)),()=>{S.Za(),_.asyncQueue.enqueueAndForget(async()=>La(await Xs(_),O))}}(Yr(d),f,c,l)}function es(n,e){return function(r,s){const i=new gt;return r.asyncQueue.enqueueAndForget(async()=>YE(await av(r),s,i)),i.promise}(Yr(n),e)}function Jd(n,e,t){const r=t.docs.get(e._key),s=new Qa(n);return new Qd(n,s,e._key,r,new gr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Xr(e)}set(e,t,r){this._verifyNotCommitted();const s=bo(e,this._firestore),i=Ka(s.converter,t,r),a=$a(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,De.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=bo(e,this._firestore);let a;return a=typeof(t=Z(t))=="string"||t instanceof Jr?$d(this._dataReader,"WriteBatch.update",i._key,t,r,s):Bd(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=bo(e,this._firestore);return this._mutations=this._mutations.concat(new wi(t._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function bo(n,e){if((n=Z(n)).firestore!==e)throw new L(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function wv(){return new qa("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n){return Yr(n=Le(n,it)),new Iv(n,e=>es(n,e))}(function(e,t=!0){(function(s){Bn=s})(cn),nn(new Mt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new it(new w_(r.getProvider("auth-internal")),new R_(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ze(Nl,"4.7.4",e),Ze(Nl,"4.7.4","esm2017")})();function Ya(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Av=Xd,Zd=new Br("auth","Firebase",Xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new ia("@firebase/auth");function Cv(n,...e){ti.logLevel<=H.WARN&&ti.warn(`Auth (${cn}): ${n}`,...e)}function Ms(n,...e){ti.logLevel<=H.ERROR&&ti.error(`Auth (${cn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...e){throw Ja(n,...e)}function nt(n,...e){return Ja(n,...e)}function ef(n,e,t){const r=Object.assign(Object.assign({},Av()),{[e]:t});return new Br("auth","Firebase",r).create(e,{appName:n.name})}function _t(n){return ef(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ja(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zd.create(n,...e)}function B(n,e,...t){if(!n)throw Ja(e,...t)}function dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ms(e),new Error(e)}function Tt(n,e){n||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rv(){return vu()==="http:"||vu()==="https:"}function vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rv()||$p()||"connection"in navigator)?navigator.onLine:!0}function Pv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Up()||qp()}get(){return Sv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new ts(3e4,6e4);function Ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function It(n,e,t,r,s={}){return nf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=$r(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Bp()||(d.referrerPolicy="no-referrer"),tf.fetch()(rf(n,n.config.apiHost,t,c),d)})}async function nf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kv),e);try{const s=new Lv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ks(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ks(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ef(n,f,d);Ke(n,f)}}catch(s){if(s instanceof ot)throw s;Ke(n,"network-request-failed",{message:String(s)})}}async function ns(n,e,t,r,s={}){const i=await It(n,e,t,r,s);return"mfaPendingCredential"in i&&Ke(n,"multi-factor-auth-required",{_serverResponse:i}),i}function rf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Xa(n.config,s):`${n.config.apiScheme}://${s}`}function Dv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Nv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ks(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}function Tu(n){return n!==void 0&&n.enterprise!==void 0}class Vv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ov(n,e){return It(n,"GET","/v2/recaptchaConfig",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n,e){return It(n,"POST","/v1/accounts:delete",e)}async function sf(n,e){return It(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mv(n,e=!1){const t=Z(n),r=await t.getIdToken(e),s=Za(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wr(Ao(s.auth_time)),issuedAtTime:wr(Ao(s.iat)),expirationTime:wr(Ao(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ao(n){return Number(n)*1e3}function Za(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zu(t);return s?JSON.parse(s):(Ms("Failed to decode base64 JWT payload"),null)}catch(s){return Ms("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Iu(n){const e=Za(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&Uv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Uv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){var e;const t=n.auth,r=await n.getIdToken(),s=await xn(n,sf(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?of(i.providerUserInfo):[],c=$v(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Yo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Bv(n){const e=Z(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $v(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function of(n){return n.map(e=>{var{providerId:t}=e,r=Ya(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e){const t=await nf(n,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=rf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jv(n,e){return It(n,"POST","/v2/accounts:revokeToken",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Iu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new bn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ya(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await xn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mv(this,e)}reload(){return Bv(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await xn(this,xv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:F,isAnonymous:G,providerData:z,stsTokenManager:T}=t;B(x&&T,e,"internal-error");const g=bn.fromJSON(this.name,T);B(typeof x=="string",e,"internal-error"),Rt(m,e.name),Rt(_,e.name),B(typeof F=="boolean",e,"internal-error"),B(typeof G=="boolean",e,"internal-error"),Rt(w,e.name),Rt(R,e.name),Rt(N,e.name),Rt(S,e.name),Rt(O,e.name),Rt(M,e.name);const y=new ft({uid:x,auth:e,email:_,emailVerified:F,displayName:m,isAnonymous:G,photoURL:R,phoneNumber:w,tenantId:N,stsTokenManager:g,createdAt:O,lastLoginAt:M});return z&&Array.isArray(z)&&(y.providerData=z.map(v=>Object.assign({},v))),S&&(y._redirectEventId=S),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new bn;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?of(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new bn;c.updateFromIdToken(r);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map;function pt(n){Tt(n instanceof Function,"Expected a class definition");let e=wu.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}af.type="NONE";const bu=af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Us(this.userKey,s.apiKey,i),this.fullPersistenceKey=Us("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new An(pt(bu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||pt(bu);const a=Us(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const m=ft._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new An(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new An(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ff(e))return"Blackberry";if(pf(e))return"Webos";if(lf(e))return"Safari";if((e.includes("chrome/")||uf(e))&&!e.includes("edge/"))return"Chrome";if(df(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cf(n=Se()){return/firefox\//i.test(n)}function lf(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uf(n=Se()){return/crios\//i.test(n)}function hf(n=Se()){return/iemobile/i.test(n)}function df(n=Se()){return/android/i.test(n)}function ff(n=Se()){return/blackberry/i.test(n)}function pf(n=Se()){return/webos/i.test(n)}function ec(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zv(n=Se()){var e;return ec(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gv(){return jp()&&document.documentMode===10}function mf(n=Se()){return ec(n)||df(n)||pf(n)||ff(n)||/windows phone/i.test(n)||hf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e=[]){let t;switch(n){case"Browser":t=Au(Se());break;case"Worker":t=`${Au(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e={}){return It(n,"GET","/v2/passwordPolicy",Ht(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=6;class Qv{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Kv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new Hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sf(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(_t(this));const t=e?Z(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wv(this),t=new Qv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hn(n){return Z(n)}class Cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jp(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jv(n){Mi=n}function _f(n){return Mi.loadJS(n)}function Xv(){return Mi.recaptchaEnterpriseScript}function Zv(){return Mi.gapiScript}function eT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class tT{constructor(){this.enterprise=new nT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rT="recaptcha-enterprise",yf="NO_RECAPTCHA";class sT{constructor(e){this.type=rT,this.auth=hn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ov(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Vv(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Tu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(yf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tT().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Tu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Xv();l.length!==0&&(l+=c),_f(l).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Ru(n,e,t,r=!1,s=!1){const i=new sT(n);let a;if(s)a=yf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Jo(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ru(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ru(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n,e){const t=di(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(js(i,e??{}))return s;Ke(s,"already-initialized")}return t.initialize({options:e})}function oT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aT(n,e,t){const r=hn(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ef(e),{host:a,port:c}=cT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lT()}function Ef(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cT(n){const e=Ef(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Su(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Su(a)}}}function Su(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function uT(n,e){return It(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(n,e){return ns(n,"POST","/v1/accounts:signInWithPassword",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(n,e){return ns(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}async function fT(n,e){return ns(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends tc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Or(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Or(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jo(e,t,"signInWithPassword",hT);case"emailLink":return dT(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jo(e,r,"signUpPassword",uT);case"emailLink":return fT(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(n,e){return ns(n,"POST","/v1/accounts:signInWithIdp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="http://localhost";class on extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ya(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new on(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gT(n){const e=hr(dr(n)).link,t=e?hr(dr(e)).deep_link_id:null,r=hr(dr(n)).deep_link_id;return(r?hr(dr(r)).link:null)||r||t||e||n}class nc{constructor(e){var t,r,s,i,a,c;const l=hr(dr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=mT((s=l.mode)!==null&&s!==void 0?s:null);B(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=gT(e);try{return new nc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.providerId=Wn.PROVIDER_ID}static credential(e,t){return Or._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=nc.parseLink(t);return B(r,"argument-error"),Or._fromEmailAndCode(e,r.code,r.tenantId)}}Wn.PROVIDER_ID="password";Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends rs{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return on._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends rs{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends rs{constructor(){super("twitter.com")}static credential(e,t){return on._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){return ns(n,"POST","/v1/accounts:signUp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),a=Pu(r);return new an({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new an({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ot{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ri(e,t,r,s)}}function Tf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,r):i})}async function yT(n,e,t=!1){const r=await xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(_t(r));const s="reauthenticate";try{const i=await xn(n,Tf(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Za(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),an._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n,e,t=!1){if(Je(n.app))return Promise.reject(_t(n));const r="signIn",s=await Tf(n,r,e),i=await an._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function vT(n,e){return If(hn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n){const e=hn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TT(n,e,t){if(Je(n.app))return Promise.reject(_t(n));const r=hn(n),a=await Jo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_T).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wf(n),l}),c=await an._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function IT(n,e,t){return Je(n.app)?Promise.reject(_t(n)):vT(Z(n),Wn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(n,e){return It(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Z(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await xn(r,wT(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function AT(n,e,t,r){return Z(n).onIdTokenChanged(e,t,r)}function CT(n,e,t){return Z(n).beforeAuthStateChanged(e,t)}function Ve(n,e,t,r){return Z(n).onAuthStateChanged(e,t,r)}function bf(n){return Z(n).signOut()}const si="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=1e3,ST=10;class Cf extends Af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Gv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ST):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},RT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cf.type="LOCAL";const PT=Cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rf.type="SESSION";const Sf=Rf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ui(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await kT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ui.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=rc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function DT(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function LT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function OT(){return Pf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="firebaseLocalStorageDb",xT=1,ii="firebaseLocalStorage",Nf="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fi(n,e){return n.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function MT(){const n=indexedDB.deleteDatabase(kf);return new ss(n).toPromise()}function Xo(){const n=indexedDB.open(kf,xT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ii,{keyPath:Nf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ii)?e(r):(r.close(),await MT(),e(await Xo()))})})}async function ku(n,e,t){const r=Fi(n,!0).put({[Nf]:e,value:t});return new ss(r).toPromise()}async function UT(n,e){const t=Fi(n,!1).get(e),r=await new ss(t).toPromise();return r===void 0?null:r.value}function Nu(n,e){const t=Fi(n,!0).delete(e);return new ss(t).toPromise()}const FT=800,BT=3;class Df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>BT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ui._getInstance(OT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await LT(),!this.activeServiceWorker)return;this.sender=new NT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xo();return await ku(e,si,"1"),await Nu(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ku(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>UT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fi(s,!1).getAll();return new ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Df.type="LOCAL";const $T=Df;new ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n,e){return e?pt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jT(n){return If(n.auth,new sc(n),n.bypassAuthState)}function zT(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),ET(t,new sc(n),n.bypassAuthState)}async function GT(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),yT(t,new sc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return GT;case"reauthViaPopup":case"reauthViaRedirect":return zT;default:Ke(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new ts(2e3,1e4);class In extends Lf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HT.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="pendingRedirect",Fs=new Map;class KT extends Lf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fs.get(this.auth._key());if(!e){try{const r=await QT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fs.set(this.auth._key(),e)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QT(n,e){const t=XT(e),r=JT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function YT(n,e){Fs.set(n._key(),e)}function JT(n){return pt(n._redirectPersistence)}function XT(n){return Us(WT,n.config.apiKey,n.name)}async function ZT(n,e,t=!1){if(Je(n.app))return Promise.reject(_t(n));const r=hn(n),s=qT(r,e),a=await new KT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=10*60*1e3;class tI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Du(e))}saveEventToCache(e){this.cachedEventUids.add(Du(e)),this.lastProcessedEventTime=Date.now()}}function Du(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(n,e={}){return It(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iI=/^https?/;async function oI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rI(n);for(const t of e)try{if(aI(t))return}catch{}Ke(n,"unauthorized-domain")}function aI(n){const e=Qo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!iI.test(t))return!1;if(sI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new ts(3e4,6e4);function Lu(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lI(n){return new Promise((e,t)=>{var r,s,i;function a(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),t(nt(n,"network-request-failed"))},timeout:cI.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)a();else{const c=eT("iframefcb");return rt()[c]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},_f(`${Zv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Bs=null,e})}let Bs=null;function uI(n){return Bs=Bs||lI(n),Bs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new ts(5e3,15e3),dI="__/auth/iframe",fI="emulator/auth/iframe",pI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gI(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xa(e,fI):`https://${n.config.authDomain}/${dI}`,r={apiKey:e.apiKey,appName:n.name,v:cn},s=mI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${$r(r).slice(1)}`}async function _I(n){const e=await uI(n),t=rt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:gI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},hI.get());function l(){rt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,vI=600,TI="_blank",II="http://localhost";class Vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wI(n,e,t,r=EI,s=vI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},yI),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Se().toLowerCase();t&&(c=uf(d)?TI:t),cf(d)&&(e=e||II,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[w,R])=>`${_}${w}=${R},`,"");if(zv(d)&&c!=="_self")return bI(e||"",c),new Vu(null);const m=window.open(e||"",c,f);B(m,n,"popup-blocked");try{m.focus()}catch{}return new Vu(m)}function bI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="__/auth/handler",CI="emulator/auth/handler",RI=encodeURIComponent("fac");async function Ou(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:cn,eventId:s};if(e instanceof vf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof rs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${RI}=${encodeURIComponent(l)}`:"";return`${SI(n)}?${$r(c).slice(1)}${d}`}function SI({config:n}){return n.emulator?Xa(n,CI):`https://${n.authDomain}/${AI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="webStorageSupport";class PI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=ZT,this._overrideRedirectResult=YT}async _openPopup(e,t,r,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ou(e,t,r,Qo(),s);return wI(e,a,rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ou(e,t,r,Qo(),s);return DT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _I(e),r=new tI(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Co,{type:Co},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Co];a!==void 0&&t(!!a),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mf()||lf()||ec()}}const kI=PI;var xu="@firebase/auth",Mu="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LI(n){nn(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gf(n)},d=new Yv(r,s,i,l);return oT(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nn(new Mt("auth-internal",e=>{const t=hn(e.getProvider("auth").getImmediate());return(r=>new NI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(xu,Mu,DI(n)),Ze(xu,Mu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=5*60,OI=rh("authIdTokenMaxAge")||VI;let Uu=null;const xI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>OI)return;const s=t==null?void 0:t.token;Uu!==s&&(Uu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Oe(n=aa()){const e=di(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iT(n,{popupRedirectResolver:kI,persistence:[$T,PT,Sf]}),r=rh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=xI(i.toString());CT(t,a,()=>a(t.currentUser)),AT(t,c=>a(c))}}const s=eh("auth");return s&&aT(t,`http://${s}`),t}function MI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",MI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LI("Browser");const UI={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let xr;he().length?xr=he()[0]:xr=Fe(UI);const Fu=Oe(xr),FI=pi(xr),BI=Ge(xr),Bu=document.getElementById("post-form"),$I=document.getElementById("itemName"),qI=document.getElementById("postDescription"),jI=document.getElementById("category"),$u=document.getElementById("price"),zI=document.getElementById("mrtStation"),GI=document.getElementById("itemImage"),_n=document.getElementById("status");Bu.addEventListener("submit",async n=>{n.preventDefault();const e=$I.value,t=qI.value,r=jI.value,s=$u.value,i=zI.value,a=GI.files[0];let c=parseFloat(s);if(isNaN(c)||c<=0){_n.textContent="Please enter a valid positive price.";return}if(c=Math.round(c*100)/100,$u.value=c.toFixed(2),e&&t&&r&&c&&i&&a){_n.textContent="Uploading post...";const l=Fu.currentUser.displayName,d=Fu.currentUser.uid,f=Gr(FI,`posts/${a.name}`),m=Ph(f,a);m.on("state_changed",_=>{},_=>{console.error("Error uploading image:",_),_n.textContent="Error uploading image."},async()=>{const _=await zr(m.snapshot.ref);try{await xi(de(BI,"posts"),{itemName:e,postDescription:t,category:r,price:c,mrtStationName:i,imageUrl:_,account:l,uid:d,timestamp:new Date}),_n.textContent="Post created successfully!",Bu.reset(),window.location.href="marketplace.html"}catch(w){console.error("Error saving post:",w),_n.textContent="Error creating post."}})}else _n.textContent="Please fill in all fields."});const HI={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let Zo;he().length?Zo=he()[0]:Zo=Fe(HI);const WI=Oe(Zo);function KI(){Ve(WI,n=>{n?window.location.href="/addpost.html":window.location.href="/login.html"})}document.getElementById("add-post-btn").addEventListener("click",KI);const QI={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"},Of=Fe(QI),$s=Oe(Of),qu=Ge(Of);function ju(n){n.preventDefault(),bf($s).then(()=>{window.location.href="login.html"}).catch(e=>{})}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("signup-form");n&&n.addEventListener("submit",async r=>{r.preventDefault();const s=document.getElementById("displayName").value,i=document.getElementById("email").value,a=document.getElementById("password").value,c=document.getElementById("confirmPassword").value;if(a!==c){alert("Passwords do not match. Please try again.");return}try{const d=(await TT($s,i,a)).user;await bT(d,{displayName:s}),await t(d),alert("Sign-up successful! Welcome, "+s),window.location.href="/index.html"}catch(l){alert(`Error: ${l.message}`)}});const e=document.getElementById("login-form");e&&e.addEventListener("submit",r=>{r.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value;IT($s,s,i).then(a=>{a.user,alert("Login successful!"),window.location.href="/index.html"}).catch(a=>{alert(`Error: ${a.message}`)})});async function t(r){try{const s=ee(de(qu,"users_chat"),r.uid);await ei(s,{uid:r.uid,displayName:r.displayName,email:r.email});const i=ee(de(qu,"report"),r.uid);await ei(i,{bad:0,good:0,items_sold:0,reviews:0,sales:0,total_stars:0})}catch{}}Ve($s,r=>{const s=document.getElementById("welcome-message"),i=document.getElementById("login-logout-btn");r?(s&&(s.textContent=`Welcome back, ${r.displayName||r.email}!`),i&&(i.textContent="Logout",i.removeAttribute("href"),i.addEventListener("click",ju))):(s&&(s.textContent="Welcome, Guest!"),i&&(i.textContent="Login",i.setAttribute("href","/login.html"),i.removeEventListener("click",ju)))})});const YI={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let oi;he().length?oi=he()[0]:oi=Fe(YI);const ea=Oe(oi),ic=Ge(oi);async function JI(n,e){console.log(`Deleting cart item with ID: ${e}`);const t=ee(ic,`users/${n}/cart/${e}`);try{await Oi(t),console.log("Item deleted successfully."),alert("Item deleted from cart."),xf({uid:n})}catch(r){console.error("Error deleting item:",r)}}function XI(n){for(;n.firstChild;)n.removeChild(n.firstChild)}async function xf(n){console.log("Fetching cart items for user:",n.uid);const e=document.getElementById("cart-items-container");XI(e);const t=de(ic,`users/${n.uid}/cart`),r=await Be(t);if(r.empty){console.log("Cart is empty.");const f=document.createElement("p");f.textContent="Your cart is empty.",e.appendChild(f);return}const s={};let i=0,a=[];r.forEach(f=>{const m=f.data();a.push(m);const _=f.id,w=m.account;s[w]||(s[w]={});const R=`${m.itemName}-${m.itemPrice}`,N=m.quantity||1;s[w][R]?s[w][R].quantity+=N:s[w][R]={...m,cartItemId:_,quantity:N}}),console.log("Grouped items by seller:",s);for(const f in s){console.log(`Displaying items for seller: ${f}`);const m=document.createElement("div");m.classList.add("seller-section");const _=document.createElement("h2");_.textContent=`Make Purchase from: ${f}`,m.appendChild(_);for(const w in s[f]){const R=s[f][w],{quantity:N,itemPrice:S,itemName:O,itemImage:M,cartItemId:x}=R,F=S*N;i+=F,console.log("Displaying item:",R);const G=document.createElement("div");G.classList.add("cart-item");const z=document.createElement("img");z.src=M,z.alt=O,z.classList.add("cart-item-image");const T=document.createElement("h3");T.textContent=O;const g=document.createElement("p");g.textContent=`Quantity: ${N}`;const y=document.createElement("p");y.textContent=`Total Price: SGD ${F.toFixed(2)}`;const v=document.createElement("button");v.textContent="Remove",v.classList.add("btn","delete-button"),v.addEventListener("click",()=>JI(n.uid,x)),G.appendChild(z),G.appendChild(T),G.appendChild(g),G.appendChild(y),G.appendChild(v),m.appendChild(G)}e.appendChild(m)}console.log("Total price of items in cart:",i);const c=document.createElement("div");c.classList.add("total-container");const l=document.createElement("p");l.classList.add("total-price"),l.textContent=`Total Cart Price: SGD ${i.toFixed(2)}`,c.appendChild(l);const d=document.createElement("button");d.textContent="Checkout",d.classList.add("btn","checkout-button"),d.addEventListener("click",()=>{ZI(a),console.log("Proceeding to checkout.")}),c.appendChild(d),e.appendChild(c)}Ve(ea,n=>{n?(console.log("User authenticated:",n.uid),xf(n)):(console.log("User not authenticated. Redirecting to login page."),window.location.href="/login.html")});const ZI=async n=>{n.sort((d,f)=>d.sellerUid-f.sellerUid);const e=ea.currentUser,t=ea.currentUser.displayName,r=e.uid,s=r.substring(0,3),i=r.substring(10,13),a=new Date().toISOString();let c="",l={};n.forEach(d=>{let f=d.sellerUid;l[f]||(l[f]=[]),l[f].push(d)});for(const[d,f]of Object.entries(l)){const m=f[0].sellerUid.substring(0,3);c=s+i+a.substring(8,13)+a.substring(20,24)+m;let _=0,w=0,R={};f.forEach(O=>{const M=[];M.push(O.itemName),M.push(O.itemPrice),M.push(O.quantity),M.push(O.totalPrice),M.push(O.itemImage);const x="Item"+w.toString();R[x]=M,_+=O.totalPrice,w+=1});let N={OrderID:c,PlaceDate:new Date,TotalPrice:_,account:t,sellaccount:f[0].account,selluid:d,status:"Ongoing",uid:r},S={Items:R,...N};try{await ei(ee(de(ic,"porders"),c),S),console.log(`Document ${c} successfully written!`)}catch(O){console.error(`Error writing document ${c}: `,O)}}window.location.href="/checkout.html"},ew={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"},Mf=Fe(ew),Mn=Oe(Mf),Un=Ge(Mf),tw=pi();let Uf=[];async function nw(){try{const n=de(Un,"users_chat");Uf=(await Be(n)).docs.map(t=>({id:t.id,...t.data()})),oc()}catch(n){console.error("Error fetching users:",n)}}function oc(n=""){const e=document.getElementById("user-list");for(;e.firstChild;)e.removeChild(e.firstChild);const t=Mn.currentUser?Mn.currentUser.email:null;localStorage.setItem("searchTerm",n),Uf.filter(s=>(s.displayName||"").toLowerCase().includes(n.toLowerCase())).forEach(s=>{const{displayName:i,email:a}=s;if(i&&a&&a!==t){const c=document.createElement("button");c.textContent=i,c.classList.add("user-button"),c.addEventListener("click",()=>{Ff(s.id),sw(c)}),e.appendChild(c)}})}document.addEventListener("DOMContentLoaded",()=>{const n=localStorage.getItem("currentChatId"),e=localStorage.getItem("searchTerm");n&&rw(n),e&&oc(e)});function rw(n){const e=Mn.currentUser;if(e){const t=n.split("_").find(r=>r!==e.uid);Ff(t)}}document.getElementById("search-bar").addEventListener("input",n=>{const e=n.target.value.trim();oc(e)});function sw(n){document.querySelectorAll(".user-button").forEach(e=>e.classList.remove("highlight")),n.classList.add("highlight")}function iw(n,e){return n<e?`${n}_${e}`:`${e}_${n}`}function Ff(n){const e=Mn.currentUser;if(!e){console.error("User is not authenticated.");return}const t=iw(e.uid,n);localStorage.setItem("currentChatId",t);const r=de(Un,"chats",t,"messages"),s=Gn(r,Hn("timestamp"));let i=null,a=null;Ye(ee(Un,"users_chat",n)).then(l=>{if(l.exists()){const d=l.data();a=d.displayName||d.email;const f=document.getElementById("chat-title"),m=`Chat with ${a} today!`;Be(r).then(_=>{_.empty?f.textContent=m:f.textContent=`Chatting with ${a}`}).catch(_=>{console.error("Error checking messages:",_)}),Tv(s,_=>{const w=document.getElementById("messages-container");for(;w.firstChild;)w.removeChild(w.firstChild);let R=!1;_.forEach(N=>{const S={id:N.id,...N.data()},O=S.senderId===e.uid,M=S.senderId===i,x=aw(S,O,M,t);w.appendChild(x),i=S.senderId,R=!0}),R?f.textContent=`Chatting with ${a}`:f.textContent=m})}}).catch(l=>{console.error("Error fetching user details:",l)});const c=document.getElementById("send-button");c.onclick=()=>uw(t)}function ow(n,e,t,r){n.addEventListener("contextmenu",s=>{s.preventDefault();const i=r?new Date(r.seconds*1e3).toLocaleString():"No timestamp",a=document.getElementById("message-menu");a.style.left=`${s.pageX}px`,a.style.top=`${s.pageY}px`,a.style.display="block";const c=document.getElementById("message-timestamp");c.textContent=`${i}`,document.getElementById("edit-message").onclick=()=>cw(t,e),document.getElementById("delete-message").onclick=()=>lw(t,e)})}document.addEventListener("click",n=>{const e=document.getElementById("message-menu");n.target.closest("#message-menu")===null&&(e.style.display="none")});function aw(n,e,t,r){const s=document.createElement("div");if(s.classList.add("message",e?"user":"other"),n.text&&!n.imageUrl){const i=document.createElement("p");i.textContent=n.text,s.appendChild(i)}if(n.imageUrl){const i=document.createElement("img");i.src=n.imageUrl,i.classList.add("message-image"),s.appendChild(i)}return t&&s.classList.add("continuation"),e&&ow(s,n.id,r,n.timestamp),s}function cw(n,e){console.log("chatId:",n,"messageId:",e);const t=prompt("Edit your message:");if(t!==null){const r=ee(Un,"chats",n,"messages",e);le(r,{text:t}).then(()=>console.log("Message updated successfully.")).catch(s=>console.error("Error updating message:",s))}}function lw(n,e){if(confirm("Are you sure you want to delete this message?")){const r=ee(Un,"chats",n,"messages",e);Oi(r).then(()=>console.log("Message deleted successfully.")).catch(s=>console.error("Error deleting message:",s))}}function uw(n){const e=document.getElementById("message-input"),t=document.getElementById("image-input"),r=document.getElementById("upload-image-button"),s=e.value.trim(),i=Mn.currentUser;if(!i||!s&&t.files.length===0){console.error("Message cannot be empty.");return}const a={senderId:i.uid,timestamp:wv(),seen:!1};if(s&&(a.text=s),t.files.length>0){const c=t.files[0],l=Gr(tw,`chats/${n}/${c.name}`),d=Ph(l,c);d.on("state_changed",null,f=>console.error("Upload error:",f),()=>{zr(d.snapshot.ref).then(f=>{a.imageUrl=f,zu(n,a),r.textContent="Upload Image"})})}else zu(n,a);e.value="",t.value="",t.addEventListener("change",()=>{r.textContent="Upload Image"})}function zu(n,e){const t=de(Un,"chats",n,"messages");xi(t,e).then(()=>{console.log("Message sent successfully.")}).catch(r=>{console.error("Error sending message: ",r)})}Mn.onAuthStateChanged(n=>{n?nw():window.location.href="login.html"});const hw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};he().length?he()[0]:Fe(hw);const dw=Oe(),Mr=Ge(),fw=pi();async function pw(n){try{const e=de(Mr,`users/${n}/cart`),t=await Be(e),r=new Set;return t.forEach(s=>{const i=s.data();i.sellerUid&&r.add(i.sellerUid)}),console.log("Fetched seller UIDs:",Array.from(r)),Array.from(r)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function mw(n){try{const e=de(Mr,`users/${n}/cart`),t=await Be(e),r=new Set;return t.forEach(s=>{const i=s.data();console.log(i),i.account&&r.add(i.account)}),Array.from(r)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function gw(n){try{const e=de(Mr,`users/${n}/cart`),t=await Be(e),r=new Set;return t.forEach(s=>{const i=s.data();i.totalPrice&&r.add(i.totalPrice)}),Array.from(r)}catch(e){return console.error("Error fetching seller UIDs:",e),[]}}async function _w(n){try{const e=Gr(fw,`qrCodes/${n}`),t=await zr(e);return console.log(`Fetched QR code URL for seller ${n}:`,t),t}catch(e){return console.error(`Error fetching QR code for seller ${n}:`,e),null}}async function yw(n){try{const e=await pw(n),t=await mw(n),r=await gw(n),s=document.getElementById("uid-container");if(!s){console.error("UID container not found.");return}for(;s.firstChild;)s.removeChild(s.firstChild);if(console.log("Displaying seller UIDs:",e),e.length>0){for(let l=0;l<e.length;l++){const d=await _w(e[l]),f=document.createElement("div"),m=document.createElement("p");if(m.textContent=`Seller: ${t[l]}, Price: ${r[l]}`,f.appendChild(m),d){const _=document.createElement("img");_.src=d,_.alt=`QR Code for ${t[l]}`,_.classList.add("qr-code"),f.appendChild(_)}else{const _=document.createElement("p");_.textContent="No QR code available for this seller. Please contact seller for more info",f.appendChild(_)}s.appendChild(f)}const i=document.createElement("button");i.textContent="Go to Purchase History",i.classList.add("btn","payment"),i.addEventListener("click",()=>{window.location.href="./mypurchase.html"});const a=document.createElement("div");a.classList.add("payment");const c=document.createElement("button");c.textContent="Payment Made",c.classList.add("btn","payment"),c.addEventListener("click",()=>{Ew(n),console.log("Cleared."),alert("Thank you for your purchase!"),a.appendChild(i)}),a.appendChild(c),s.appendChild(a)}else{const i=document.createElement("p");i.textContent="You did not purchase anything.",s.appendChild(i)}}catch(e){console.error("Error displaying seller UIDs and QR codes:",e)}}async function Ew(n){console.log(n);const e=de(Mr,`users/${n}/cart`),t=await Be(e),r=bv(Mr);t.forEach(s=>{r.delete(s.ref)}),console.log("running"),await r.commit(),console.log("still running?")}Ve(dw,n=>{n?(console.log("User authenticated:",n.uid),yw(n.uid)):(console.log("User not authenticated. Redirecting to login page."),window.location.href="/login.html")});const vw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let ai;Sn().length?ai=Sn()[0]:ai=sa(vw);const Tw=Sp(ai),Iw=wp(ai),ww=Vue.createApp({data(){return{message:"",user:null}},created(){Pp(Tw,n=>{this.user=n})},methods:{async subscribe(){if(!this.user){this.message="You must be logged in to subscribe.";return}try{const n=bp(Iw,"subscribers",this.user.uid);if((await Ap(n)).exists()){this.message="Email is already subscribed!";return}await Cp(n,{email:this.user.email,timestamp:Rp()}),this.message="Subscribed to Newsletter! Your newsletter will appear on the 1st of every month!"}catch(n){console.error("Error during subscription process:",n),this.message="There was an error subscribing. Please try again."}}}});ww.mount("#app");const bw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let ci;he().length?ci=he()[0]:ci=Fe(bw);const Aw=Oe(ci),Cw=Ge(ci);async function Rw(){const n=document.getElementById("posts-container");Ve(Aw,async e=>{if(e){const t=Gn(de(Cw,"posts"),Vi("uid","==",e.uid),Hn("timestamp","desc")),r=await Be(t);if(n.textContent="",r.empty){const s=document.createElement("p");s.textContent="You have not made any posts.",n.appendChild(s)}else r.forEach(s=>{const i=s.data();Sw(s.id,i,n)})}else{const t=document.createElement("p");t.textContent="Please log in to see your posts.",n.appendChild(t),setTimeout(()=>{window.location.href="/login.html"},2e3)}})}function Sw(n,e,t){const r=document.createElement("div");r.classList.add("post-item");const s=document.createElement("h3");s.textContent=e.itemName;const i=document.createElement("div");i.classList.add("image-container");const a=document.createElement("img");a.src=e.imageUrl,a.alt=e.itemName,a.classList.add("post-image");const c=document.createElement("p");c.textContent=`Posted by: ${e.account}`;const l=document.createElement("button");l.textContent="More Details",l.classList.add("more-details"),l.onclick=()=>{window.location.href=`postDetails.html?id=${n}`},i.appendChild(a),i.appendChild(l),r.appendChild(i),r.appendChild(s),r.appendChild(c),t.appendChild(r)}window.onload=Rw;const Pw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let li;he().length?li=he()[0]:li=Fe(Pw);const Gu=Oe(li),kw=Ge(li);var br=[];async function Nw(){const n=document.getElementById("purchase-container"),e=Gu.currentUser;console.log("User is authenticated:",e),Ve(Gu,async t=>{if(t){const r=Gn(de(kw,"porders"),Vi("uid","==",t.uid),Hn("PlaceDate","desc")),s=await Be(r);n.innertext="",s.empty?n.innertext="<p>You do not have any orders.</p>":s.forEach(i=>{const a=i.data();br.push(a),console.log("All orders:",br),ac(i.id,a,n)})}else n.innerText="Please log in to see your orders.",setTimeout(()=>{window.location.href="/login.html"},2e3);Vw(br)})}function ac(n,e,t){const r=document.createElement("Table");r.classList.add("table");const s=document.createElement("tr");s.classList.add("body-ele");const i=document.createElement("td");i.classList.add("text-center"),i.rowspan=2;const a=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),d=document.createElement("td");i.classList.add("text-secondary"),c.classList.add("text-secondary"),l.classList.add("text-secondary"),d.classList.add("text-secondary"),i.textContent="Order Number:",a.textContent="",c.textContent="Ordered On",l.textContent="Hustler",d.textContent="Status",s.appendChild(i),s.appendChild(a),s.appendChild(c),s.appendChild(l),s.appendChild(d),r.appendChild(s);const f=document.createElement("tr"),m=document.createElement("td");m.classList.add("text-center","fs-5");const _=document.createElement("td"),w=document.createElement("td");w.classList.add("text-start","fs-5");const R=document.createElement("td");R.classList.add("fs-5");const N=document.createElement("td");N.classList.add("text-start","fs-3","fw-bold"),m.textContent=n.toUpperCase(),_.textContent=" ",w.textContent=e.PlaceDate.toDate().toLocaleDateString(),R.textContent=e.sellaccount,N.textContent=e.status,e.status=="Ongoing"&&N.classList.add("text-warning"),e.status=="Completed"&&N.classList.add("text-success"),e.status=="Cancelled"&&N.classList.add("text-danger"),f.appendChild(m),f.appendChild(_),f.appendChild(w),f.appendChild(R),f.appendChild(N),r.appendChild(f);const S=e.Items;for(const F in S)if(S.hasOwnProperty(F)){const G=S[F],z=document.createElement("tr"),T=document.createElement("td"),g=document.createElement("img");g.classList.add("item-img"),T.align="center",T.rowSpan=2;const y=document.createElement("td"),v=document.createElement("td"),I=document.createElement("td"),A=document.createElement("td");y.classList.add("text-secondary"),v.classList.add("text-secondary"),I.classList.add("text-secondary"),A.classList.add("text-secondary"),g.src=G[4],y.textContent="Item Name",v.textContent="Item Price",I.textContent="Quantity",A.textContent="Item Total Price",T.appendChild(g),z.appendChild(T),z.appendChild(y),z.appendChild(v),z.appendChild(I),z.appendChild(A),r.appendChild(z);const E=document.createElement("tr"),$e=document.createElement("td"),at=document.createElement("td"),Kn=document.createElement("td"),ct=document.createElement("td");$e.classList.add("align-top","fs-5"),at.classList.add("align-top","fs-5"),Kn.classList.add("align-top","fs-5"),ct.classList.add("align-top","fs-5"),$e.textContent=G[0],at.textContent=`SGD ${G[1].toFixed(2)}`,Kn.textContent=G[2],ct.textContent=`SGD ${G[3].toFixed(2)}`,E.appendChild($e),E.appendChild(at),E.appendChild(Kn),E.appendChild(ct),r.appendChild(E)}const O=document.createElement("tr"),M=document.createElement("td");M.classList.add("text-end","fs-2"),M.colSpan=3;const x=document.createElement("td");x.classList.add("text-center","fs-3"),x.colSpan=2,M.textContent="Total Order Price:",x.textContent=`SGD ${e.TotalPrice.toFixed(2)}`,O.appendChild(M),O.appendChild(x),r.appendChild(O),r.classList.add("w-75","border","centered-table"),t.appendChild(r)}function Dw(){const n=document.getElementById("purchase-container"),e=document.getElementById("startMonth").value,t=document.getElementById("endMonth").value,r=br.filter(s=>{const i=s.PlaceDate.toDate(),a=i.getFullYear()+"-"+String(i.getMonth()+1).padStart(2,"0");return(!e||a>=e)&&(!t||a<=t)});r.length==0?n.innerText="No matching orders":(console.log("filtered orders",r),n.innerText="",r.forEach(s=>ac(s.OrderID,s,n)))}const Lw=document.querySelectorAll(".filter-btn");Lw.forEach(n=>{n.addEventListener("click",()=>{Dw()})});const Vw=n=>{const e=new Set;n.forEach(r=>{console.log("populate ddl",r.sellaccount),e.add(r.sellaccount)});const t=document.getElementById("storeName");e.forEach(r=>{const s=document.createElement("option");s.value=r,s.textContent=r,t.appendChild(s)})},Ow=()=>{const n=document.getElementById("purchase-container"),e=document.getElementById("storeName").value,t=br.filter(r=>e===""||r.sellaccount===e);console.log("HERE",t),n.innerText="",t.forEach(r=>ac(r.OrderID,r,n))};document.getElementById("storeName").addEventListener("input",Ow);const xw=()=>{const n=document.querySelectorAll('input[type="month"]'),e=new Date,t=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0");n.forEach(r=>r.setAttribute("max",t))},Mw=()=>{const n=document.getElementById("startMonth").value;document.getElementById("endMonth").setAttribute("min",n)};document.getElementById("startMonth").addEventListener("input",Mw);window.onload=Nw;xw();const Uw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let ui;he().length?ui=he()[0]:ui=Fe(Uw);const Hu=Oe(ui),ta=Ge(ui);var Bf=[];async function Fw(){const n=document.getElementById("pills-all"),e=document.getElementById("pills-ongoing"),t=document.getElementById("pills-completed"),r=document.getElementById("pills-cancelled");Hu.currentUser,Ve(Hu,async s=>{if(s){const i=Gn(de(ta,"porders"),Vi("selluid","==",s.uid),Hn("PlaceDate","desc")),a=await Be(i);if(n.innertext="",e.innertext="",t.innertext="",r.innertext="",a.empty){const c=document.createElement("div");c.classList.add("text-center","my-5","fs-4","fw-bold"),c.textContent="No Orders",n.appendChild(c),e.appendChild(c),t.appendChild(c),r.appendChild(c)}else{a.forEach(m=>{const _=m.data();Bf.push(_),_.selluid==s.uid&&(_r(m.id,_,n),_.status=="Ongoing"&&_r(m.id,_,e),_.status=="Completed"&&_r(m.id,_,t),_.status=="Cancelled"&&_r(m.id,_,r))});const c=document.getElementById("pills-all"),l=document.getElementById("pills-ongoing"),d=document.getElementById("pills-completed"),f=document.getElementById("pills-cancelled");if(c.textContent.trim()===""){const m=document.createElement("div");m.classList.add("text-center","my-5","fs-4","fw-bold"),m.textContent="No Orders",c.appendChild(m)}if(l.textContent.trim()===""){const m=document.createElement("div");m.classList.add("text-center","my-5","fs-4","fw-bold"),m.textContent="No Ongoing Orders",l.appendChild(m)}if(d.textContent.trim()===""){const m=document.createElement("div");m.classList.add("text-center","my-5","fs-4","fw-bold"),m.textContent="No Completed Orders",d.appendChild(m)}if(f.textContent.trim()===""){const m=document.createElement("div");m.classList.add("text-center","my-5","fs-4","fw-bold"),m.textContent="No Cancelled Orders",f.appendChild(m)}}}else salesOrder.innerText="Please log in to see your orders.",setTimeout(()=>{window.location.href="/login.html"},2e3)})}function _r(n,e,t){const r=document.createElement("Table");r.classList.add("table");const s=document.createElement("tr"),i=document.createElement("td"),a=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),d=document.createElement("td");i.classList.add("text-secondary"),a.classList.add("text-secondary"),c.classList.add("text-secondary"),l.classList.add("text-secondary"),d.classList.add("text-secondary"),i.textContent="Order Number:",a.textContent="Order Date",c.textContent="Customer",l.textContent="Total Order Amount",d.textContent="Status",s.appendChild(i),s.appendChild(a),s.appendChild(c),s.appendChild(l),s.appendChild(d),r.append(s);const f=document.createElement("tr"),m=document.createElement("td"),_=document.createElement("td"),w=document.createElement("td"),R=document.createElement("td"),N=document.createElement("td");m.classList.add("fw-bold","fs-5"),_.classList.add("fw-bold","fs-5"),w.classList.add("fw-bold","fs-5"),R.classList.add("fw-bold","fs-5"),m.textContent=n.toUpperCase(),_.textContent=e.PlaceDate.toDate().toLocaleDateString(),w.textContent=e.account,R.textContent=`SGD ${e.TotalPrice.toFixed(2)}`,N.textContent=e.status,N.classList.add("fs-3","fw-bold","text-center"),e.status=="Ongoing"&&N.classList.add("bg-warning","text-light"),e.status=="Completed"&&N.classList.add("bg-success","text-light"),e.status=="Cancelled"&&N.classList.add("bg-danger","text-light"),f.appendChild(m),f.appendChild(_),f.appendChild(w),f.appendChild(R),f.appendChild(N),r.append(f),r.classList.add("border","w-75","centered-table"),t.appendChild(r),document.createElement("tr");const S=e.Items;for(const z in S){const T=document.createElement("tr");if(S.hasOwnProperty(z)){const g=S[z],y=document.createElement("img");y.classList.add("item-img"),y.src=g[4];const v=document.createElement("td");v.appendChild(y);const I=document.createElement("td");I.textContent=`${g[0]}`;const A=document.createElement("td");A.textContent=`SGD ${g[1].toFixed(2)} x ${g[2]}`;const E=document.createElement("td");E.classList.add("fs-5","fw-bold"),E.textContent=`= SGD ${g[3].toFixed(2)}`,T.appendChild(v),T.appendChild(I),T.appendChild(A),T.appendChild(E),r.appendChild(T)}}const O=document.createElement("tr"),M=document.createElement("td"),x=document.createElement("td"),F=document.createElement("button");F.textContent="✓",F.classList.add("btn","btn-outline-success","w-100"),e.status!="Ongoing"&&(F.disabled=!0,F.hidden=!0),M.appendChild(F),M.colSpan=2,F.onclick=()=>Wu(n,"status","Completed");const G=document.createElement("button");G.textContent="𐤕",G.classList.add("btn","btn-outline-danger","w-100"),e.status!="Ongoing"&&(G.disabled=!0,G.hidden=!0),x.appendChild(G),x.colSpan=3,G.onclick=()=>Wu(n,"status","Cancelled"),O.appendChild(M),O.appendChild(x),r.appendChild(O),t.appendChild(r)}const Wu=async(n,e,t)=>{if(t=="Completed"){if(confirm("Are you sure you want to complete this order?")){console.log(n,e,t);const s=ee(ta,"porders",n);try{await le(s,{[e]:t}),console.log("Order successfully updated!")}catch(i){console.error("Error updating document: ",i)}location.reload()}}else if(confirm("Are you sure you want to reject this order?")){console.log(n,e,t);const s=ee(ta,"porders",n);try{await le(s,{[e]:t}),console.log("Order successfully updated!")}catch(i){console.error("Error updating document: ",i)}location.reload()}};function Bw(){const n=document.getElementById("pills-all"),e=document.getElementById("startMonth").value,t=document.getElementById("endMonth").value,r=Bf.filter(s=>{const i=s.PlaceDate.toDate(),a=i.getFullYear()+"-"+String(i.getMonth()+1).padStart(2,"0");return console.log("start",e,"order",i,"end",t),(!e||a>=e)&&(!t||a<=t)});r.length==0?n.innerText="No matching orders":(console.log("filtered orders",r),n.innerText="",r.forEach(s=>_r(s.OrderID,s,n)))}const $w=document.querySelectorAll(".filter-btn");$w.forEach(n=>{n.addEventListener("click",()=>{Bw()})});const qw=()=>{const n=document.querySelectorAll('input[type="month"]'),e=new Date,t=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0");n.forEach(r=>r.setAttribute("max",t))},jw=()=>{const n=document.getElementById("startMonth").value;document.getElementById("endMonth").setAttribute("min",n)};document.getElementById("startMonth").addEventListener("input",jw);window.onload=Fw;qw();const zw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let na;he().length?na=he()[0]:na=Fe(zw);const Gw=Ge(na);let Ku="";async function Hw(){const n=document.getElementById("posts-container"),e=document.getElementById("marketplace-title"),r=new URLSearchParams(window.location.search).get("account");if(!r){const s=document.createElement("p");s.textContent="No user specified.",n.appendChild(s);return}Ku=r,e&&(e.textContent=`${Ku}'s Marketplace`);try{const s=Gn(de(Gw,"posts"),Vi("account","==",r),Hn("timestamp","desc")),i=await Be(s);if(n.textContent="",i.empty){const a=document.createElement("p");a.textContent=`No posts found for user: ${r}`,n.appendChild(a)}else i.forEach(a=>{const c=a.data();Ww(a.id,c,n)})}catch(s){console.error("Error retrieving posts:",s);const i=document.createElement("p");i.textContent="Failed to load posts. Please try again later.",n.appendChild(i)}}function Ww(n,e,t){const r=document.createElement("div");r.classList.add("post-item");const s=document.createElement("h3");s.textContent=e.itemName;const i=document.createElement("div");i.classList.add("image-container");const a=document.createElement("img");a.src=e.imageUrl,a.alt=e.itemName,a.classList.add("post-image");const c=document.createElement("p");c.textContent=`Posted by: ${e.account}`;const l=document.createElement("button");l.textContent="More Details",l.classList.add("more-details"),l.onclick=()=>{window.location.href=`postDetails.html?id=${n}`},i.appendChild(a),i.appendChild(l),r.appendChild(i),r.appendChild(s),r.appendChild(c),t.appendChild(r)}window.onload=Hw;const Kw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let Ur;he().length?Ur=he()[0]:Ur=Fe(Kw);const Qw=Ge(Ur);Oe(Ur);let Rn=[];async function Yw(){const n=document.getElementById("posts-container");for(;n.firstChild;)n.removeChild(n.firstChild);Rn=[];try{const e=Gn(de(Qw,"posts"),Hn("timestamp","desc"));if((await Be(e)).forEach(r=>{const s=r.data();s.id=r.id,Rn.push(s),cc(s,n)}),Rn.length===0){const r=document.createElement("p");r.textContent="No posts available.",n.appendChild(r)}}catch(e){console.error("Error retrieving posts:",e);const t=document.createElement("p");t.textContent="Failed to load posts. Please try again later.",n.appendChild(t)}}function cc(n,e){if(!n.itemName||!n.imageUrl||!n.account){console.warn("Incomplete post data:",n);return}const t=document.createElement("div");t.classList.add("post-item"),t.setAttribute("data-category",n.category||"Uncategorized");const r=document.createElement("h3");r.textContent=n.itemName;const s=document.createElement("p");s.textContent="Posted by: ";const i=document.createElement("a");i.textContent=n.account,i.classList.add("account-link");const a=Oe(Ur);Ve(a,m=>{if(m){const _=m.displayName;n.account===_?i.href="/mymarketplace.html":i.href=`usermarketplace.html?account=${encodeURIComponent(n.account)}`}else i.href=`usermarketplace.html?account=${encodeURIComponent(n.account)}`}),s.appendChild(i);const c=document.createElement("button");c.textContent="More Details",c.classList.add("more-details"),c.addEventListener("click",()=>{window.location.href=`postDetails.html?id=${n.id}`});const l=document.createElement("div");l.classList.add("image-container");const d=document.createElement("img");d.src=n.imageUrl,d.alt=n.itemName,d.classList.add("post-image"),l.appendChild(d);const f=document.createElement("div");f.classList.add("content-container"),f.appendChild(r),f.appendChild(s),f.appendChild(c),t.appendChild(l),t.appendChild(f),e.appendChild(t)}function Jw(n){const e=document.getElementById("posts-container"),t=n==="All"?Rn:Rn.filter(r=>r.category===n);for(;e.firstChild;)e.removeChild(e.firstChild);if(t.forEach(r=>cc(r,e)),t.length===0){const r=document.createElement("p");r.textContent=`No posts found in the "${n}" category.`,e.appendChild(r)}}function Xw(n){const e=document.getElementById("posts-container"),t=Rn.filter(i=>i.itemName.toLowerCase().includes(n.toLowerCase())||i.account.toLowerCase().includes(n.toLowerCase())),r=document.querySelector(".active-filter")?document.querySelector(".active-filter").textContent:"All",s=r==="All"?t:t.filter(i=>i.category===r);for(;e.firstChild;)e.removeChild(e.firstChild);if(s.forEach(i=>cc(i,e)),s.length===0){const i=document.createElement("p");i.textContent="No posts found for your search.",e.appendChild(i)}}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".filter-btn");n.forEach(t=>{t.addEventListener("click",()=>{const r=t.textContent;Jw(r),n.forEach(s=>s.classList.remove("active")),t.classList.add("active")})}),document.getElementById("search-input").addEventListener("input",t=>{const r=t.target.value;Xw(r)}),Yw()});const Zw={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"},lc=Fe(Zw),uc=Oe(lc),hc=Ge(lc),$f=pi(lc);async function qf(n,e,t,r){const s=Gr($f,e);try{await __(s,t);const i=await zr(s),a=ee(hc,n,r);return await ei(a,{url:i,uploadedAt:Date.now()},{merge:!0}),i}catch(i){throw console.error(`Error uploading ${n}:`,i.message),i}}async function Qu(n,e,t,r,s,i){try{console.log(`Fetching document from collection: ${n}, for user: ${e}`);const a=ee(hc,n,e),c=await Ye(a);if(c.exists()){const{url:l}=c.data();console.log("Document fetched successfully. URL:",l);const d=document.getElementById(t);d&&(d.src=l,d.onload=()=>{d.style.display="block",console.log("QR Code loaded and displayed.")});const f=document.getElementById(i);f&&(f.style.display="inline",f.style.display="inline-block",f.style.margin="0 auto")}else{console.warn(`No document found in collection '${n}' for user '${e}'.`);const l=document.getElementById(t);if(l)if(t=="profileImage"){const f=Gr($f,`profilePictures/${r}`),m=await zr(f);l.src=m||""}else l.src=r||"";const d=document.getElementById(s);d&&(d.style.display="block")}}catch(a){console.error(`Error fetching document from ${n} for user ${e}:`,a.message)}}async function eb(){Ve(uc,async n=>{if(n){const e=n.uid;n.displayName,console.log("Authenticated user:",e);const t=document.getElementById("username");t?t.textContent=n.displayName||"Username":console.warn("Username element not found in the DOM."),await Qu("profilePictures",e,"profileImage","default-profile.jpg","profileUploadSection","editProfileImageButton"),await Qu("qrCodes",e,"uploadedQRCode","","qrCodeUploadSection","editQRCodeButton"),await tb(e)}else console.log("User is not signed in.")})}async function tb(n){try{const e=ee(hc,"report",n),t=await Ye(e);if(t.exists()){const r=t.data();document.getElementById("sales").textContent=r.sales||0,document.getElementById("itemsSold").textContent=r.items_sold||0,document.getElementById("reviewsReceived").textContent=r.reviews||0,document.getElementById("goodReviews").textContent=r.good||0,document.getElementById("badReviews").textContent=r.bad||0,document.getElementById("stars").textContent=(r.total_stars/r.reviews).toFixed(2)||0}}catch(e){console.error("Error fetching data:",e)}}async function nb(n){const e=uc.currentUser;if(e){const t=e.uid,r=`profilePictures/${t}`;try{const s=await qf("profilePictures",r,n,t),i=document.getElementById("profileImage");i&&(i.src=s),console.log("Profile Picture uploaded successfully.")}catch{alert("Failed to upload Profile Picture. Please try again.")}}else alert("You must be signed in to upload a Profile Picture.")}async function rb(n){const e=uc.currentUser;if(e){const t=e.uid,r=`qrCodes/${t}`;try{const s=await qf("qrCodes",r,n,t),i=document.getElementById("uploadedQRCode");i&&(i.src=s,i.style.display="block"),console.log("QR Code uploaded successfully.")}catch{alert("Failed to upload QR Code. Please try again.")}}else alert("You must be signed in to upload a QR Code.")}document.getElementById("editProfileImageButton").addEventListener("click",()=>{document.getElementById("profileUploadSection").style.display="block"});document.getElementById("uploadProfileButton").addEventListener("click",()=>{const n=document.getElementById("profileImageUpload").files[0];n?nb(n):alert("Please select a Profile Picture to upload.")});document.getElementById("editQRCodeButton").addEventListener("click",()=>{document.getElementById("qrCodeUploadSection").style.display="block"});document.getElementById("uploadQRCodeButton").addEventListener("click",()=>{const n=document.getElementById("qrCodeUpload").files[0];n?rb(n):alert("Please select a QR Code image to upload.")});eb();const sb={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};let ra;he().length?ra=he()[0]:ra=Fe(sb);const Yu=Oe(ra),ib=Vue.createApp({data(){return{user:null,username:"Guest",authButtonText:"Login"}},methods:{handleAuth(){this.user?bf(Yu).then(()=>{this.user=null,this.username="Guest",this.authButtonText="Login",window.location.href="/login.html"}).catch(n=>{console.error("Error logging out:",n)}):window.location.href="/login.html"}},mounted(){Ve(Yu,n=>{n?(this.user=n,this.username=n.displayName||"Account",this.authButtonText="Logout"):(this.user=null,this.username="Guest",this.authButtonText="Login")})}});ib.mount("#navbar-app");const ob={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};Sn().length?Sn()[0]:sa(ob);const dc=Oe(),Qe=Ge();async function Bi(n,e){const t=document.getElementById("reviews-list");t.textContent="";const r=await Be(de(Qe,`posts/${n}/reviews`));if(r.empty){const s=document.createElement("p");s.textContent="No reviews yet. Be the first to leave a review!",t.appendChild(s)}r.forEach(s=>{const i=s.data(),a=document.createElement("div");a.classList.add("review");const c=document.createElement("div");c.classList.add("review-username"),c.textContent=i.account;const l=document.createElement("div");l.classList.add("review-rating"),l.textContent=`Rating: ${"★".repeat(i.starRating)}`;const d=document.createElement("div");d.classList.add("review-text"),d.textContent=i.reviewText,a.appendChild(c),a.appendChild(l),a.appendChild(d),Ve(dc,f=>{if(f&&f.uid===i.userId){const m=document.createElement("div");m.classList.add("rev-buttons-container");const _=document.createElement("button");_.textContent="Edit",_.classList.add("btn","btn-secondary"),_.addEventListener("click",()=>cb(s.id,n,i,e));const w=document.createElement("button");w.textContent="Delete",w.classList.add("btn","btn-danger"),w.addEventListener("click",()=>ub(s.id,n,i,e)),m.append(_,w),a.appendChild(m)}}),t.appendChild(a)})}async function ab(n,e,t,r){const s=dc.currentUser;if(!s){alert("You must be logged in to submit a review.");return}const i=s.displayName||"Anonymous";try{await xi(de(Qe,`posts/${n}/reviews`),{reviewText:e,account:i,userId:s.uid,starRating:t,timestamp:new Date}),alert("Review submitted successfully!"),console.log(r.uid),t>=4?await db(t,r.uid):t===3?await pb(t,r.uid):await fb(t,r.uid),Bi(n,r)}catch(a){console.error("Error submitting review:",a),alert("Failed to submit review.")}}async function cb(n,e,t,r){const s=prompt("Edit your review:",t.reviewText),i=prompt("Edit your rating (1-5):",t.starRating);s&&i&&await lb(n,e,s,parseInt(i,10),r)}async function lb(n,e,t,r,s){let i;try{const a=ee(Qe,`posts/${e}/reviews`,n),c=await Ye(a);c.exists()&&(i=c.data().starRating)}catch(a){console.error("Error retrieving review:",a)}try{await le(ee(Qe,`posts/${e}/reviews`,n),{reviewText:t,starRating:r,timestamp:new Date}),alert("Review updated successfully!"),i!=r&&mb(i,r,s.uid),Bi(e,s)}catch(a){console.error("Error updating review:",a),alert("Failed to update review.")}}async function ub(n,e,t,r){if(confirm("Are you sure you want to delete this review?"))try{await Oi(ee(Qe,`posts/${e}/reviews`,n)),alert("Review deleted successfully!"),gb(t.starRating,r.uid),Bi(e,r)}catch(s){console.error("Error deleting review:",s),alert("Failed to delete review.")}}function hb(n,e){const t=document.getElementById("review-input-section");Ve(dc,r=>{if(r){const s=ee(Qe,"posts",n);Ye(s).then(i=>{if(i.exists()){const a=i.data(),c=a.uid;if(r.uid===c){const l=document.createElement("p");l.classList.add("alert","alert-warning"),l.textContent="You cannot leave a review for your own post.",t.appendChild(l)}else{const l=document.createElement("textarea");l.id="review-text",l.classList.add("form-control"),l.rows=3,l.placeholder="Write your review here...";const d=document.createElement("span");d.innerText="Stars (rate from 1 to 5): ";const f=document.createElement("select");f.id="review-star",f.classList.add("form-control","mt-2");for(let _=1;_<=5;_++){const w=document.createElement("option");w.value=_,w.textContent=_,f.appendChild(w)}const m=document.createElement("button");m.id="submit-review",m.classList.add("btn","btn-primary","mt-2"),m.textContent="Submit Review",t.appendChild(l),t.appendChild(d),t.appendChild(f),t.appendChild(m),m.addEventListener("click",()=>{const _=l.value,w=parseInt(f.value);ab(n,_,w,a),l.value="",f.value="1"})}}}).catch(i=>{console.error("Error fetching post data:",i)})}else{const s=document.createElement("p");s.classList.add("alert","alert-warning"),s.textContent="You must be logged in to leave a review.",t.appendChild(s)}})}async function db(n,e){const t=ee(Qe,"report",e);try{const r=await Ye(t);if(r.exists()){const s=r.data().reviews||0,i=r.data().good||0,a=r.data().total_stars||0;await le(t,{reviews:s+1,good:i+1,total_stars:a+n}),console.log("Field updated successfully!")}else console.log("No such document!")}catch(r){console.error("Error updating document: ",r)}}async function fb(n,e){const t=ee(Qe,"report",e);try{const r=await Ye(t);if(r.exists()){const s=r.data().reviews||0,i=r.data().bad||0,a=r.data().total_stars||0;await le(t,{reviews:s+1,bad:i+1,total_stars:a+n}),console.log("Field updated successfully!")}else console.log("No such document!")}catch(r){console.error("Error updating document: ",r)}}async function pb(n,e){const t=ee(Qe,"report",e);try{const r=await Ye(t);if(r.exists()){const s=r.data().reviews||0,i=r.data().total_stars||0;await le(t,{reviews:s+1,total_stars:i+n}),console.log("Field updated successfully!")}else console.log("No such document!")}catch(r){console.error("Error updating document: ",r)}}async function mb(n,e,t){const r=ee(Qe,"report",t);try{const s=await Ye(r);if(console.log("found"),s.exists()){const i=s.data().total_stars||0,a=s.data().bad||0,c=s.data().good||0;console.log("founded"),n>e?(console.log("foundfounded"),n>3&&e==3&&await le(r,{good:c-1,total_stars:i-(n-e)}),n==3&&e<3&&await le(r,{bad:a+1,total_stars:i-(n-e)}),n==3&&e>3&&await le(r,{good:c+1,total_stars:i-(n-e)}),n>3&&e<3&&(console.log("working right"),await le(r,{bad:a+1,good:c-1,total_stars:i-(n-e)}))):(console.log("foundfounded"),e>3&&n==3&&await le(r,{good:c+1,total_stars:i+(e-n)}),e==3&&n<3&&await le(r,{bad:a-1,total_stars:i+(e-n)}),e==3&&n>3&&await le(r,{good:c-1,total_stars:i+(e-n)}),e>3&&n<3&&await le(r,{bad:a-1,good:c+1,total_stars:i+(e-n)})),console.log("Field updated successfully!")}else console.log("No such document!")}catch(s){console.error("Error updating document: ",s)}}async function gb(n,e){const t=ee(Qe,"report",e);try{const r=await Ye(t);if(r.exists()){const s=r.data().reviews||0,i=r.data().total_stars||0,a=r.data().bad||0,c=r.data().good||0;console.log("checking"),n>3&&await le(t,{reviews:s-1,good:c-1,total_stars:i-n}),n==3&&await le(t,{reviews:s-1,total_stars:i-n}),n<3&&await le(t,{reviews:s-1,bad:currrentBad-1,total_stars:i-n}),console.log("Field updated successfully!")}else console.log("No such document!")}catch(r){console.error("Error updating document: ",r)}}const _b={apiKey:"AIzaSyALbJJCcRibFqa7HVcadIYAgBBzbTREkiY",authDomain:"hustlersathome-b9bee.firebaseapp.com",databaseURL:"https://hustlersathome-b9bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hustlersathome-b9bee",storageBucket:"hustlersathome-b9bee.appspot.com",messagingSenderId:"447459076084",appId:"1:447459076084:web:f26efa8cd4e33523a63ba1",measurementId:"G-5S6WET94BS"};Sn().length?Sn()[0]:sa(_b);const fc=Oe(),Fr=Ge(),yb=new URLSearchParams(window.location.search),Lt=yb.get("id"),Eb="AIzaSyA6-vawo-lbppb1emyFd5h-91IEMyeC_4A";async function vb(){const n=document.getElementById("post-details");if(!Lt){n.textContent="Post not found.";return}const e=ee(Fr,"posts",Lt),t=await Ye(e);if(!t.exists()){n.textContent="No such post exists.";return}const r=t.data();Tb(n,r),Bi(Lt,r),hb(Lt),Ve(fc,s=>{if(s&&s.uid===r.uid){const i=document.getElementById("addToCartButton");i&&(i.style.display="none")}})}function Tb(n,e){const t=n.querySelector(".post-title");t.textContent=e.itemName;const r=n.querySelector(".post-description");r.textContent="Description: ";const s=document.createElement("span");s.classList.add("editable-content"),s.textContent=e.postDescription,r.appendChild(s);const i=n.querySelector(".post-category");i.textContent="Category: ";const a=document.createElement("span");a.classList.add("editable-content"),a.textContent=e.category,i.appendChild(a);const c=n.querySelector(".post-price");c.textContent=`Price: SGD ${e.price}`;const l=n.querySelector(".post-account");l.textContent=`Posted by: ${e.account}`;const d=n.querySelector(".post-image");d.src=e.imageUrl,d.alt=e.itemName;const f=document.getElementById("addToCartButton");f&&f.addEventListener("click",()=>Sb(e)),e.mrtStationName&&Ib(e.mrtStationName),Ve(fc,m=>{m&&m.uid===e.uid&&bb()})}function Ib(n){const e=document.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?key=${Eb}&callback=initMapWithGeocoding`,e.async=!0,document.head.appendChild(e),window.initMapWithGeocoding=function(){wb(n)}}function wb(n){const e=document.getElementById("map");new google.maps.Geocoder().geocode({address:n},(r,s)=>{if(s==="OK"&&r.length>0){const{lat:i,lng:a}=r[0].geometry.location,c={center:{lat:i(),lng:a()},zoom:15},l=new google.maps.Map(e,c);new google.maps.Marker({position:{lat:i(),lng:a()},map:l,title:n})}else e.textContent="Location not found."})}function bb(){const n=document.createElement("div");n.classList.add("buttons-container");const e=document.createElement("button");e.textContent="Edit Post",e.classList.add("btn","btn-warning"),e.addEventListener("click",Ab);const t=document.createElement("button");t.textContent="Delete Post",t.classList.add("btn","btn-danger"),t.addEventListener("click",()=>Rb(Lt));const r=document.createElement("button");r.textContent="Save Changes",r.classList.add("btn","btn-success"),r.style.display="none",r.addEventListener("click",Cb),n.append(e,t,r),document.getElementById("map").insertAdjacentElement("afterend",n),n.saveButton=r}function Ab(){const n=document.querySelector(".post-title"),e=document.querySelector(".post-description .editable-content"),t=document.querySelector(".post-category .editable-content");n.contentEditable="true",e.contentEditable="true",n.classList.add("editable-field"),e.classList.add("editable-field");const r=document.createElement("select");r.classList.add("category-dropdown"),["Crafts","Fashion","Food","Services"].forEach(c=>{const l=document.createElement("option");l.value=c,l.textContent=c,c===t.textContent&&(l.selected=!0),r.appendChild(l)}),t.replaceWith(r);const i=document.getElementById("addToCartButton");i&&(i.style.display="none");const a=document.querySelector(".buttons-container");a.saveButton.style.display="inline-block"}async function Cb(){const n=document.querySelector(".post-title"),e=document.querySelector(".post-description .editable-content"),t=document.querySelector(".post-category .category-dropdown");try{await le(ee(Fr,"posts",Lt),{itemName:n.textContent,postDescription:e.textContent,category:t.value}),alert("Post updated successfully!"),location.reload()}catch(r){console.error("Error updating post:",r),alert("Failed to update post.")}}async function Rb(n){if(confirm("Are you sure you want to delete this post?"))try{await Oi(ee(Fr,"posts",n)),document.getElementById("post-details").textContent="Post has been deleted.",setTimeout(()=>window.location.href="/userPosts.html",2e3)}catch(e){console.error("Error deleting post:",e),alert("Failed to delete post.")}}window.onload=vb;async function Sb(n){Ve(fc,async e=>{if(e)try{const t=de(Fr,`users/${e.uid}/cart`),r=await Be(t);let s=null;if(r.forEach(i=>{i.data().itemId===Lt&&(s=i)}),s){const i=s.data().quantity+1,a=n.price*i;await le(ee(Fr,`users/${e.uid}/cart`,s.id),{quantity:i,totalPrice:a}),alert("Item quantity updated in cart!")}else await xi(t,{itemId:Lt,itemName:n.itemName,itemPrice:n.price,itemImage:n.imageUrl,account:n.account,sellerUid:n.uid,quantity:1,totalPrice:n.price,timestamp:new Date}),alert("Item added to cart!")}catch(t){console.error("Error adding to cart:",t)}else window.location.href="/login.html"})}console.log("Main.js is loaded and bundled!");
