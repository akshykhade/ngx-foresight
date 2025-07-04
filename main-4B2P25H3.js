import{A as dt,B as k,C as ut,D as gt,F as pt,G as _,H as mt,I as P,J as bt,K as ft,L as yt,M as vt,a as f,b as v,c as tt,d as O,e as Z,g as D,h as z,i as et,k as nt,l as C,m as E,n as it,o as ot,p as R,q as st,r as rt,s as lt,t as at,u,v as g,w as p,x as S,y as ct,z as ht}from"./chunk-TG6MGWIN.js";var St=[{path:"feature1",loadChildren:()=>import("./chunk-5YC35YCK.js").then(n=>n.Feature1Module)},{path:"feature2",loadChildren:()=>import("./chunk-KUI6GAJW.js").then(n=>n.Feature2Module)},{path:"feature3",loadChildren:()=>import("./chunk-B7EYWXS7.js").then(n=>n.Feature3Module)}];var G=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),jt=typeof Element>"u",L=jt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,B=!jt&&Element.prototype.getRootNode?function(n){var t;return n==null||(t=n.getRootNode)===null||t===void 0?void 0:t.call(n)}:function(n){return n?.ownerDocument},H=function n(t,e){var i;e===void 0&&(e=!0);var o=t==null||(i=t.getAttribute)===null||i===void 0?void 0:i.call(t,"inert");return o===""||o==="true"||e&&t&&n(t.parentNode)},Kt=function n(t,e,i){for(var o=[],s=Array.from(t);s.length;){var r=s.shift();if(!H(r,!1))if(r.tagName==="SLOT"){var l=r.assignedElements(),a=n(l.length?l:r.children,!0,i);i.flatten?o.push.apply(o,a):o.push({scopeParent:r,candidates:a})}else{L.call(r,G)&&i.filter(r)&&(e||!t.includes(r))&&o.push(r);var c=r.shadowRoot||typeof i.getShadowRoot=="function"&&i.getShadowRoot(r),h=!H(c,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(r));if(c&&h){var d=n(c===!0?r.children:c.children,!0,i);i.flatten?o.push.apply(o,d):o.push({scopeParent:r,candidates:d})}else s.unshift.apply(s,r.children)}}return o},Ot=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},Dt=function(n){if(!n)throw new Error("No node provided");return n.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||function(t){var e,i=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return i===""||i==="true"}(n))&&!Ot(n)?0:n.tabIndex},Yt=function(n,t){return n.tabIndex===t.tabIndex?n.documentOrder-t.documentOrder:n.tabIndex-t.tabIndex},zt=function(n){return n.tagName==="INPUT"},Jt=function(n){return function(t){return zt(t)&&t.type==="radio"}(n)&&!function(t){if(!t.name)return!0;var e,i=t.form||B(t),o=function(r){return i.querySelectorAll('input[type="radio"][name="'+r+'"]')};if(typeof window<"u"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")e=o(window.CSS.escape(t.name));else try{e=o(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var s=function(r,l){for(var a=0;a<r.length;a++)if(r[a].checked&&r[a].form===l)return r[a]}(e,t.form);return!s||s===t}(n)},xt=function(n){var t=n.getBoundingClientRect(),e=t.width,i=t.height;return e===0&&i===0},Xt=function(n,t){var e=t.displayCheck,i=t.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var o=L.call(n,"details>summary:first-of-type")?n.parentElement:n;if(L.call(o,"details:not([open]) *"))return!0;if(e&&e!=="full"&&e!=="legacy-full"){if(e==="non-zero-area")return xt(n)}else{if(typeof i=="function"){for(var s=n;n;){var r=n.parentElement,l=B(n);if(r&&!r.shadowRoot&&i(r)===!0)return xt(n);n=n.assignedSlot?n.assignedSlot:r||l===n.ownerDocument?r:l.host}n=s}if(function(a){var c,h,d,m,I=a&&B(a),w=(c=I)===null||c===void 0?void 0:c.host,j=!1;if(I&&I!==a)for(j=!!((h=w)!==null&&h!==void 0&&(d=h.ownerDocument)!==null&&d!==void 0&&d.contains(w)||a!=null&&(m=a.ownerDocument)!==null&&m!==void 0&&m.contains(a));!j&&w;){var A,q,U;j=!((q=w=(A=I=B(w))===null||A===void 0?void 0:A.host)===null||q===void 0||(U=q.ownerDocument)===null||U===void 0||!U.contains(w))}return j}(n))return!n.getClientRects().length;if(e!=="legacy-full")return!0}return!1},Qt=function(n,t){return!(t.disabled||H(t)||function(e){return zt(e)&&e.type==="hidden"}(t)||Xt(t,n)||function(e){return e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"})}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var i=e.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var o=0;o<i.children.length;o++){var s=i.children.item(o);if(s.tagName==="LEGEND")return!!L.call(i,"fieldset[disabled] *")||!s.contains(e)}return!0}i=i.parentElement}return!1}(t))},wt=function(n,t){return!(Jt(t)||Dt(t)<0||!Qt(n,t))},te=function(n){var t=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ee=function n(t){var e=[],i=[];return t.forEach(function(o,s){var r=!!o.scopeParent,l=r?o.scopeParent:o,a=function(h,d){var m=Dt(h);return m<0&&d&&!Ot(h)?0:m}(l,r),c=r?n(o.candidates):l;a===0?r?e.push.apply(e,c):e.push(l):i.push({documentOrder:s,tabIndex:a,item:o,isScope:r,content:c})}),i.sort(Yt).reduce(function(o,s){return s.isScope?o.push.apply(o,s.content):o.push(s.content),o},[]).concat(e)},ne=function(n,t){var e;return e=(t=t||{}).getShadowRoot?Kt([n],t.includeContainer,{filter:wt.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:te}):function(i,o,s){if(H(i))return[];var r=Array.prototype.slice.apply(i.querySelectorAll(G));return o&&L.call(i,G)&&r.unshift(i),r.filter(s)}(n,t.includeContainer,wt.bind(null,t)),ee(e)};function ie(){let n=window.matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0,t=function(){let e=navigator.connection;return!!e&&(/2g/.test(e.effectiveType)||e.saveData)}();return{isTouchDevice:n,isLimitedConnection:t,shouldRegister:!n&&!t}}var T=2e3;function M(n,t,e,i){return n<t?console.warn(`ForesightJS: "${i}" value ${n} is below minimum bound ${t}, clamping to ${t}`):n>e&&console.warn(`ForesightJS: "${i}" value ${n} is above maximum bound ${e}, clamping to ${e}`),Math.min(Math.max(n,t),e)}function Ct(n,t,e){let i=0,o=1,s=t.x-n.x,r=t.y-n.y,l=(a,c)=>{if(a===0){if(c<0)return!1}else{let h=c/a;if(a<0){if(h>o)return!1;h>i&&(i=h)}else{if(h<i)return!1;h<o&&(o=h)}}return!0};return!!l(-s,n.x-e.left)&&!!l(s,e.right-n.x)&&!!l(-r,n.y-e.top)&&!!l(r,e.bottom-n.y)&&i<=o}function kt(n){if(typeof n=="number"){let t=M(n,0,T,"hitslop");return{top:t,left:t,right:t,bottom:t}}return{top:M(n.top,0,T,"hitslop - top"),left:M(n.left,0,T,"hitslop - left"),right:M(n.right,0,T,"hitslop - right"),bottom:M(n.bottom,0,T,"hitslop - bottom")}}function Mt(n,t){return{left:n.left-t.left,right:n.right+t.right,top:n.top-t.top,bottom:n.bottom+t.bottom}}function Et(n,t){return n&&t?n.left===t.left&&n.right===t.right&&n.top===t.top&&n.bottom===t.bottom:n===t}function Pt(n,t){return n.x>=t.left&&n.x<=t.right&&n.y>=t.top&&n.y<=t.bottom}function Tt(n,t){return n!==void 0&&t!==n}var b=class{static intersect(n,t){let e=Math.max(n.left,t.left),i=Math.min(n.right,t.right),o=Math.max(n.top,t.top),s=Math.min(n.bottom,t.bottom),r=Math.max(0,i-e),l=Math.max(0,s-o);return new DOMRect(e,o,r,l)}static clip(n,t){let e=v(f({},n.toJSON()),{top:n.top+t.top,left:n.left+t.left,bottom:n.bottom-t.bottom,right:n.right-t.right});return e.width=e.right-e.left,e.height=e.bottom-e.top,e}static clipOffsets(n,t){return{top:t.top-n.top,left:t.left-n.left,bottom:n.bottom-t.bottom,right:n.right-t.right}}static equals(n,t){return n==null||t==null?n===t:n.x===t.x&&n.y===t.y&&n.width===t.width&&n.height===t.height}static sizeEqual(n,t){return Math.round(n.width)===Math.round(t.width)&&Math.round(n.height)===Math.round(t.height)}};function oe(n,t){let e=Math.max(n.width,3),i=Math.max(n.height,3),o=n.top-t.top- -1,s=n.left-t.left- -1,r=t.right-n.left-e- -1,l=t.bottom-n.top-i- -1;return`${-Math.round(o)}px ${-Math.round(r)}px ${-Math.round(l)}px ${-Math.round(s)}px`}var Rt=[...Array.from({length:1e3},(n,t)=>t/1e3),1],se=class{constructor(n,t,e){this.#n=t,this.#e=e,this.#i=e.clientRect,this.#o(n)}#n;#t=void 0;#e;#i;#r=void 0;get visibleRect(){let n=this.#e.clip;return n?b.clip(this.#i,n):this.#i}get isIntersecting(){let{width:n,height:t}=this.visibleRect;return n>0&&t>0}#o(n){let{root:t,rootBounds:e}=this.#e,{visibleRect:i}=this;this.#t?.disconnect(),this.#t=new IntersectionObserver(this.#s,{root:t,rootMargin:oe(i,e),threshold:Rt}),this.#t.observe(n)}#s=n=>{if(!this.#t)return;let t=n[n.length-1];if(t){let{intersectionRatio:e,boundingClientRect:i}=t,o=this.#i;this.#i=i;let s=this.#r,r=!b.equals(i,o);if(e!==this.#r||r){let l=this.#e.rootBounds,a=b.intersect(i,l),c=a.width>0&&a.height>0;if(!c)return;this.#r=e,(s!=null||r)&&(this.#n(new re(t.target,i,t.intersectionRect,c,l),this),this.#o(t.target))}}};disconnect(){this.#t?.disconnect()}},re=class{constructor(n,t,e,i,o){this.target=n,this.boundingClientRect=t,this.intersectionRect=e,this.isIntersecting=i,this.rootBounds=o}},le=class{constructor(n,t){let e=function(i){return!i||function(o){return o.nodeType===Node.DOCUMENT_NODE}(i)?i?.defaultView??window:i}(n);if(function(i){return It(i)&&i.nodeType===Node.ELEMENT_NODE}(e)){let i=e.ownerDocument??document;this.rootBounds=e.getBoundingClientRect(),this.#n=new ResizeObserver(o=>{for(let s of o){let[{inlineSize:r,blockSize:l}]=s.borderBoxSize;if(b.sizeEqual(this.rootBounds,{width:r,height:l}))continue;let a=s.target.getBoundingClientRect();this.rootBounds=a,t(a,this)}}),this.#n.observe(e),i.addEventListener("scroll",o=>{o.target&&o.target!==e&&It(o.target)&&o.target.contains(e)&&(this.rootBounds=e.getBoundingClientRect(),t(this.rootBounds,this))},{capture:!0,passive:!0,signal:this.#t.signal})}else{let i=e.visualViewport??e;this.rootBounds=Lt(e);let o=()=>{let s=Lt(e);b.equals(this.rootBounds,s)||(this.rootBounds=s,t(s,this))};i.addEventListener("resize",o,{signal:this.#t.signal})}}#n;#t=new AbortController;rootBounds;disconnect(){this.#n?.disconnect(),this.#t.abort()}};function Lt(n){let t=n.visualViewport?.width??n.innerWidth,e=n.visualViewport?.height??n.innerHeight;return new DOMRect(0,0,t,e)}function It(n){return"nodeType"in n}var ae=class{constructor(n,t){this.#e=t,this.#n=e=>{let i=[];for(let o of e){let s=this.intersections.get(o.target);this.intersections.set(o.target,o),s?.isIntersecting===o.isIntersecting&&b.equals(s?.intersectionRect,o.intersectionRect)||i.push(o)}i.length>0&&n(i,this)}}#n;#t=new Map;#e;intersections=new WeakMap;observe(n){let t=n.ownerDocument;if(!t)return;let e=this.#t.get(t);e||(e=new IntersectionObserver(this.#n,v(f({},this.#e),{threshold:Rt})),this.#t.set(t,e)),e.observe(n)}unobserve(n){let t=n.ownerDocument;if(!t)return;let e=this.#t.get(t);e&&(e.unobserve(n),this.intersections.delete(n))}disconnect(){for(let n of this.#t.values())n.disconnect();this.#t.clear()}},ce=class{constructor(n,t){this.#n=n,this.#t=t,this.#o=new le(t?.root,this.#c),this.#s=new ae(this.#h,t),this.#i=new ResizeObserver(this.#u)}#n;#t;#e=new Map;#i;#r=new WeakMap;#o;#s;observe(n){this.#s.observe(n)}unobserve(n){n?(this.#e.get(n)?.disconnect(),this.#s.unobserve(n)):this.disconnect()}disconnect(){for(let n of this.#e.values())n.disconnect();this.#i.disconnect(),this.#o.disconnect(),this.#s.disconnect()}#l(n){let t=[];for(let e of n){let{target:i}=e;he(e,this.#r.get(i))||(this.#r.set(i,e),t.push(e))}t.length>0&&this.#n(t)}#c=n=>{let t=[];for(let[e]of this.#e){let i=e.getBoundingClientRect(),o=this.#a(e,i);t.push(new $(e,i,o.visibleRect,o.isIntersecting,n))}this.#l(t)};#a(n,t){let e=this.#s;this.#e.get(n)?.disconnect();let i=new se(n,this.#d,{clientRect:t,root:this.#t?.root,rootBounds:this.#o.rootBounds,get clip(){let o=e.intersections.get(n);if(!o)return;let{intersectionRect:s,boundingClientRect:r}=o;return b.clipOffsets(r,s)}});return this.#e.set(n,i),i}#h=n=>{let t=[];for(let e of n){let{target:i,isIntersecting:o,boundingClientRect:s}=e;o?(this.#a(i,s),this.#i.observe(i)):(this.#e.get(i)?.disconnect(),this.#e.delete(i),this.#i.unobserve(i));let r=this.#e.get(i);t.push(new $(i,s,r?.visibleRect??e.intersectionRect,o,this.#o.rootBounds))}this.#l(t)};#d=(n,t)=>{this.#l([new $(n.target,n.boundingClientRect,t.visibleRect,n.isIntersecting,this.#o.rootBounds)])};#u=n=>{let t=[];for(let e of n){let{target:i,borderBoxSize:o}=e,s=this.#r.get(i);if(s){let[{inlineSize:a,blockSize:c}]=o;if(b.sizeEqual(s.boundingClientRect,{width:a,height:c}))continue}let r=i.getBoundingClientRect(),l=this.#a(i,r);t.push(new $(i,r,l.visibleRect,this.#s.intersections.get(i)?.isIntersecting??!1,this.#o.rootBounds))}this.#l(t)}},$=class{constructor(n,t,e,i,o){this.target=n,this.boundingClientRect=t,this.intersectionRect=e,this.isIntersecting=i,this.rootBounds=o}};function he(n,t){return t!=null&&n.target===t.target&&n.isIntersecting===t.isIntersecting&&b.equals(n.boundingClientRect,t.boundingClientRect)&&b.equals(n.intersectionRect,t.intersectionRect)}var x=class n{constructor(){this.elements=new Map,this.isSetup=!1,this._globalCallbackHits={mouse:{hover:0,trajectory:0},tab:{forwards:0,reverse:0},scroll:{down:0,left:0,right:0,up:0},total:0},this._globalSettings={debug:!1,enableMousePrediction:!0,enableScrollPrediction:!0,positionHistorySize:8,trajectoryPredictionTime:120,scrollMargin:150,defaultHitSlop:{top:0,left:0,right:0,bottom:0},enableTabPrediction:!0,tabOffset:2,onAnyCallbackFired:(t,e)=>{}},this.trajectoryPositions={positions:[],currentPoint:{x:0,y:0},predictedPoint:{x:0,y:0}},this.tabbableElementsCache=[],this.lastFocusedIndex=null,this.predictedScrollPoint=null,this.scrollDirection=null,this.domObserver=null,this.positionObserver=null,this.lastKeyDown=null,this.globalListenersController=null,this.eventListeners=new Map,this.handleMouseMove=t=>{this.updatePointerState(t),this.elements.forEach(e=>{e.isIntersectingWithViewport&&this.handleCallbackInteraction(e)}),this.emit({type:"mouseTrajectoryUpdate",predictionEnabled:this._globalSettings.enableMousePrediction,timestamp:Date.now(),trajectoryPositions:this.trajectoryPositions})},this.handleDomMutations=t=>{t.length&&(this.tabbableElementsCache=[],this.lastFocusedIndex=null);for(let e of t)if(e.type==="childList"&&e.removedNodes.length>0)for(let i of Array.from(this.elements.keys()))i.isConnected||this.unregister(i,"disconnected")},this.handleKeyDown=t=>{t.key==="Tab"&&(this.lastKeyDown=t)},this.handleFocusIn=t=>{if(!this.lastKeyDown||!this._globalSettings.enableTabPrediction)return;let e=t.target;if(!(e instanceof HTMLElement))return;this.tabbableElementsCache.length||(this.tabbableElementsCache=ne(document.documentElement));let i=this.lastKeyDown.shiftKey,o=function(r,l,a,c){if(l!==null){let h=r?l-1:l+1;if(h>=0&&h<a.length&&a[h]===c)return h}return a.findIndex(h=>h===c)}(i,this.lastFocusedIndex,this.tabbableElementsCache,e);this.lastFocusedIndex=o,this.lastKeyDown=null;let s=[];for(let r=0;r<=this._globalSettings.tabOffset;r++)if(i){let l=this.tabbableElementsCache[o-r];this.elements.has(l)&&s.push(l)}else{let l=this.tabbableElementsCache[o+r];this.elements.has(l)&&s.push(l)}s.forEach(r=>{this.callCallback(this.elements.get(r),{kind:"tab",subType:i?"reverse":"forwards"})})},this.handlePositionChange=t=>{for(let e of t){let i=this.elements.get(e.target);if(!i)continue;let o=i.isIntersectingWithViewport,s=e.isIntersecting;i.isIntersectingWithViewport=s,o!==s&&this.emit({type:"elementDataUpdated",elementData:i,timestamp:Date.now(),updatedProp:"visibility"}),s&&(this.updateElementBounds(e.boundingClientRect,i),this.handleScrollPrefetch(i,e.boundingClientRect))}this.scrollDirection=null,this.predictedScrollPoint=null}}static initialize(t){return this.isInitiated||(n.manager=new n),t!==void 0&&n.manager.alterGlobalSettings(t),n.manager}addEventListener(t,e,i){if(i?.signal?.aborted)return()=>{};this.eventListeners.has(t)||this.eventListeners.set(t,[]),this.eventListeners.get(t).push(e),i?.signal?.addEventListener("abort",()=>this.removeEventListener(t,e))}removeEventListener(t,e){let i=this.eventListeners.get(t);if(i){let o=i.indexOf(e);o>-1&&i.splice(o,1)}}logSubscribers(){console.log("%c[ForesightManager] Current Subscribers:","font-weight: bold; color: #3b82f6;");let t=Array.from(this.eventListeners.keys());t.length!==0?t.forEach(e=>{let i=this.eventListeners.get(e);i&&i.length>0&&(console.groupCollapsed(`Event: %c${e}`,"font-weight: bold;",`(${i.length} listener${i.length>1?"s":""})`),i.forEach((o,s)=>{console.log(`[${s}]:`,o)}),console.groupEnd())}):console.log("  No active subscribers.")}emit(t){let e=this.eventListeners.get(t.type);e&&e.forEach(i=>{try{i(t)}catch(o){console.error(`Error in ForesightManager event listener for ${t.type}:`,o)}})}get getManagerData(){return{registeredElements:this.elements,globalSettings:this._globalSettings,globalCallbackHits:this._globalCallbackHits}}static get isInitiated(){return!!n.manager}static get instance(){return this.initialize()}get registeredElements(){return this.elements}register({element:t,callback:e,hitSlop:i,name:o}){let{shouldRegister:s,isTouchDevice:r,isLimitedConnection:l}=ie();if(!s)return{isLimitedConnection:l,isTouchDevice:r,isRegistered:!1,unregister:()=>{}};this.isSetup||this.initializeGlobalListeners();let a=i?kt(i):this._globalSettings.defaultHitSlop,c={element:t,callback:e,elementBounds:{originalRect:void 0,expandedRect:{top:0,left:0,right:0,bottom:0},hitSlop:a},isHovering:!1,trajectoryHitData:{isTrajectoryHit:!1,trajectoryHitTime:0,trajectoryHitExpirationTimeoutId:void 0},name:o??t.id??"",isIntersectingWithViewport:!0};return this.elements.set(t,c),this.positionObserver?.observe(t),this.emit({type:"elementRegistered",timestamp:Date.now(),elementData:c}),{isTouchDevice:r,isLimitedConnection:l,isRegistered:!0,unregister:()=>this.unregister(t,"apiCall")}}unregister(t,e){if(!this.elements.has(t))return;let i=this.elements.get(t);i&&this.emit({type:"elementUnregistered",elementData:i,timestamp:Date.now(),unregisterReason:e}),i?.trajectoryHitData.trajectoryHitExpirationTimeoutId&&clearTimeout(i.trajectoryHitData.trajectoryHitExpirationTimeoutId),this.positionObserver?.unobserve(t),this.elements.delete(t),this.elements.size===0&&this.isSetup&&this.removeGlobalListeners()}updateNumericSettings(t,e,i,o){return!!Tt(t,this._globalSettings[e])&&(this._globalSettings[e]=M(t,i,o,e),!0)}updateBooleanSetting(t,e){return!!Tt(t,this._globalSettings[e])&&(this._globalSettings[e]=t,!0)}alterGlobalSettings(t){let e=this._globalSettings.positionHistorySize,i=this.updateNumericSettings(t?.positionHistorySize,"positionHistorySize",2,30);i&&this._globalSettings.positionHistorySize<e&&this.trajectoryPositions.positions.length>this._globalSettings.positionHistorySize&&(this.trajectoryPositions.positions=this.trajectoryPositions.positions.slice(this.trajectoryPositions.positions.length-this._globalSettings.positionHistorySize));let o=this.updateNumericSettings(t?.trajectoryPredictionTime,"trajectoryPredictionTime",10,200),s=this.updateNumericSettings(t?.scrollMargin,"scrollMargin",30,300),r=this.updateNumericSettings(t?.tabOffset,"tabOffset",0,20),l=this.updateBooleanSetting(t?.enableMousePrediction,"enableMousePrediction"),a=this.updateBooleanSetting(t?.enableScrollPrediction,"enableScrollPrediction"),c=this.updateBooleanSetting(t?.enableTabPrediction,"enableTabPrediction");t?.onAnyCallbackFired!==void 0&&(this._globalSettings.onAnyCallbackFired=t.onAnyCallbackFired);let h=!1;if(t?.defaultHitSlop!==void 0){let d=kt(t.defaultHitSlop);Et(this._globalSettings.defaultHitSlop,d)||(this._globalSettings.defaultHitSlop=d,h=!0,this.forceUpdateAllElementBounds())}(i||o||r||l||c||a||h||s)&&this.emit({type:"managerSettingsChanged",timestamp:Date.now(),managerData:this.getManagerData})}forceUpdateAllElementBounds(){this.elements.forEach((t,e)=>{let i=this.elements.get(e);i&&i.isIntersectingWithViewport&&this.forceUpdateElementBounds(i)})}updatePointerState(t){this.trajectoryPositions.currentPoint={x:t.clientX,y:t.clientY},this.trajectoryPositions.predictedPoint=this._globalSettings.enableMousePrediction?function(e,i,o,s){let r={point:e,time:performance.now()},{x:l,y:a}=e;if(i.push(r),i.length>o&&i.shift(),i.length<2)return{x:l,y:a};let c=i[0],h=i[i.length-1],d=(h.time-c.time)/1e3;if(d===0)return{x:l,y:a};let m=s/1e3;return{x:l+(h.point.x-c.point.x)/d*m,y:a+(h.point.y-c.point.y)/d*m}}(this.trajectoryPositions.currentPoint,this.trajectoryPositions.positions,this._globalSettings.positionHistorySize,this._globalSettings.trajectoryPredictionTime):f({},this.trajectoryPositions.currentPoint)}handleCallbackInteraction(t){let{expandedRect:e}=t.elementBounds;if(this._globalSettings.enableMousePrediction)Ct(this.trajectoryPositions.currentPoint,this.trajectoryPositions.predictedPoint,e)&&this.callCallback(t,{kind:"mouse",subType:"trajectory"});else if(Pt(this.trajectoryPositions.currentPoint,e))return void this.callCallback(t,{kind:"mouse",subType:"hover"})}updateHitCounters(t,e){switch(e.kind){case"mouse":this._globalCallbackHits.mouse[e.subType]++;break;case"tab":this._globalCallbackHits.tab[e.subType]++;break;case"scroll":this._globalCallbackHits.scroll[e.subType]++}this._globalCallbackHits.total++}callCallback(t,e){t&&(this.updateHitCounters(t,e),t.callback(),this._globalSettings.onAnyCallbackFired(t,this.getManagerData),this.emit({type:"callbackFired",timestamp:Date.now(),elementData:t,hitType:e,managerData:this.getManagerData}),this.unregister(t.element,"callbackHit"))}forceUpdateElementBounds(t){let e=t.element.getBoundingClientRect(),i=Mt(e,t.elementBounds.hitSlop);if(!Et(i,t.elementBounds.expandedRect)){let o=v(f({},t),{elementBounds:v(f({},t.elementBounds),{originalRect:e,expandedRect:i})});this.elements.set(t.element,o),this.emit({type:"elementDataUpdated",timestamp:Date.now(),elementData:o,updatedProp:"bounds"})}}updateElementBounds(t,e){let i=v(f({},e),{elementBounds:v(f({},e.elementBounds),{originalRect:t,expandedRect:Mt(t,e.elementBounds.hitSlop)})});this.elements.set(e.element,i),this.emit({type:"elementDataUpdated",timestamp:Date.now(),elementData:i,updatedProp:"bounds"})}handleScrollPrefetch(t,e){if(this._globalSettings.enableScrollPrediction){if(!t.elementBounds.originalRect||(this.scrollDirection=this.scrollDirection??function(i,o){let s=o.top-i.top,r=o.left-i.left;return s<-1?"down":s>1?"up":r<-1?"right":r>1?"left":"none"}(t.elementBounds.originalRect,e),this.scrollDirection==="none"))return;this.predictedScrollPoint=this.predictedScrollPoint??function(i,o,s){let{x:r,y:l}=i,a={x:r,y:l};switch(o){case"down":a.y+=s;break;case"up":a.y-=s;break;case"left":a.x-=s;break;case"right":a.x+=s}return a}(this.trajectoryPositions.currentPoint,this.scrollDirection,this._globalSettings.scrollMargin),Ct(this.trajectoryPositions.currentPoint,this.predictedScrollPoint,t?.elementBounds.expandedRect)&&this.callCallback(t,{kind:"scroll",subType:this.scrollDirection}),this.emit({type:"scrollTrajectoryUpdate",timestamp:Date.now(),currentPoint:this.trajectoryPositions.currentPoint,predictedPoint:this.predictedScrollPoint})}else Pt(this.trajectoryPositions.currentPoint,t.elementBounds.expandedRect)&&this.callCallback(t,{kind:"mouse",subType:"hover"})}initializeGlobalListeners(){if(this.isSetup||typeof window>"u"||typeof document>"u")return;this.globalListenersController=new AbortController;let{signal:t}=this.globalListenersController;document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("keydown",this.handleKeyDown,{signal:t}),document.addEventListener("focusin",this.handleFocusIn,{signal:t}),this.domObserver=new MutationObserver(this.handleDomMutations),this.domObserver.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1}),this.positionObserver=new ce(this.handlePositionChange),this.isSetup=!0}removeGlobalListeners(){this.isSetup=!1,this.globalListenersController?.abort(),this.globalListenersController=null,this.domObserver?.disconnect(),this.domObserver=null,this.positionObserver?.disconnect(),this.positionObserver=null}};var ue=[],_t=(()=>{class n{router;trees=ue;constructor(e){this.router=e}add(e){this.trees.push(e)}shouldPrefetch(e){let i=this.router.parseUrl(e);return this.trees.some(pe.bind(null,i))}static \u0275fac=function(i){return new(i||n)(D(P))};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ge(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>t[e]===n[e])}function pe(n,t){return ge(t.queryParams,n.queryParams)&&K(t.root,n.root,n.root.segments)}function K(n,t,e){if(n.segments.length>e.length){let i=n.segments.slice(0,e.length);return!(!W(i,e)||t.hasChildren())}else if(n.segments.length===e.length){if(!W(n.segments,e))return!1;if(!t.hasChildren())return!0;for(let i in t.children){if(!n.children[i])break;if(K(n.children[i],t.children[i],t.children[i].segments))return!0}return!1}else{let i=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!W(n.segments,i)||!n.children[_]?!1:K(n.children[_],t,o)}}function W(n,t){return n.length!==t.length?!1:n.every((e,i)=>e.path===t[i].path||e.path.startsWith(":")||t[i].path.startsWith(":"))}var $t=(()=>{class n{elementRef;router=z(P);registry=z(_t);preloader=z(bt);routerLink="";href="";constructor(e){this.elementRef=e}ngOnInit(){x.instance.register({element:this.elementRef.nativeElement,callback:()=>{if(!this.routerLink&&!this.href)return;let e=this.router.parseUrl(this.routerLink||this.href);this.registry.add(e),this.preloader.preload().subscribe(()=>{})}})}static \u0275fac=function(i){return new(i||n)(st(it))};static \u0275dir=nt({type:n,selectors:[["","foresightjs",""]],inputs:{routerLink:"routerLink",href:"href"},standalone:!0})}return n})(),me=(n,t)=>{n=n.slice();let e=new Map,i=new Set;for(;n.length;){let r=n.shift();if(!r)continue;if(i.add(r),r===t)break;let l=r.children||[],a=r._loadedRoutes||[];for(let c of a)c&&c.children&&(l=l.concat(c.children));l.forEach(c=>{i.has(c)||(e.set(c,r),n.push(c))})}let o="",s=t;for(;s;)be(s)?o=`/${s.path}${o}`:o=`/(${s.outlet}:${s.path}${o})`,s=e.get(s);return o.replace(/[\/]+/,"/")};function be(n){return n.outlet===_||!n.outlet}var Bt=(()=>{class n{registry;router;loading=new Set;constructor(e,i){this.registry=e,this.router=i}preload(e,i){if(this.loading.has(e))return O;if(e.data&&e.data.preload===!1)return O;let o=me(this.router.config,e);return this.registry.shouldPrefetch(o)?(this.loading.add(e),i()):O}static \u0275fac=function(i){return new(i||n)(D(_t),D(P))};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ht={providers:[gt({eventCoalescing:!0}),ft(St,yt(Bt))]};var Nt=n=>(t=>(e=>e!=null&&typeof e=="object"||!1)(t)&&typeof t.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(e=>t.nodeType===e)||!1)(n)&&n.nodeType===1||!1,fe=["all","intersecting","update"],Vt="PositionObserver Error",ye=class{entries;static version="1.1.0";_t;_r;_cm;_w;_h;_rm;_th;_c;constructor(t,e){if(typeof t!="function")throw new Error(`${Vt}: ${t} is not a function.`);this.entries=new Map,this._c=t,this._t=0;let i=Nt(e?.root)?e.root:document?.documentElement;this._r=i,this._rm=e?.rootMargin,this._th=e?.threshold,this._cm=fe.indexOf(e?.callbackMode||"intersecting"),this._w=i.clientWidth,this._h=i.clientHeight}observe=t=>{if(!Nt(t))throw new Error(`${Vt}: ${t} is not an instance of Element.`);this._r.contains(t)&&this._n(t).then(e=>{e.boundingClientRect&&!this.getEntry(t)&&this.entries.set(t,e),this._t||(this._t=requestAnimationFrame(this._rc))})};unobserve=t=>{this.entries.has(t)&&this.entries.delete(t)};_rc=()=>{if(!this.entries.size)return void(this._t=0);let{clientWidth:t,clientHeight:e}=this._r,i=new Promise(o=>{let s=[];this.entries.forEach(({target:r,boundingClientRect:l,isIntersecting:a})=>{this._r.contains(r)&&this._n(r).then(c=>{if(!c.isIntersecting){if(this._cm===1)return;if(this._cm===2)return void(a&&(this.entries.set(r,c),s.push(c)))}let{left:h,top:d}=c.boundingClientRect;l.top===d&&l.left===h&&this._w===t&&this._h===e||(this.entries.set(r,c),s.push(c))})}),this._w=t,this._h=e,o(s)});this._t=requestAnimationFrame(()=>tt(this,null,function*(){let o=yield i;o.length&&this._c(o,this),this._rc()}))};_n=t=>new Promise(e=>{new IntersectionObserver(([i],o)=>{o.disconnect(),e(i)},{threshold:this._th,rootMargin:this._rm}).observe(t)});getEntry=t=>this.entries.get(t);disconnect=()=>{cancelAnimationFrame(this._t),this.entries.clear(),this._t=0}},Gt=(n,t=2)=>{let e=" ".repeat(t);if(typeof n=="object"&&n!==null&&!Array.isArray(n)){let i=Object.entries(n);return i.length===0?"{}":`{
${i.map(([o,s])=>`${e}  ${o}: ${Gt(s,t+2)}`).join(`,
`)}
${e}}`}return typeof n=="string"?`'${n}'`:typeof n=="boolean"||typeof n=="number"?String(n):n===null?"null":n===void 0?"undefined":Array.isArray(n)?JSON.stringify(n):String(n)};function y(n,t,e){let i=document.createElement(n);return e.id&&(i.id=e.id),e.className&&(i.className=e.className),e.data&&i.setAttribute("data-value",e.data),t.appendChild(i)}function Wt(n,t,e){let i=document.createElement("style");return i.textContent=n,i.id=e,t.appendChild(i)}var Ft=n=>n?"\u{1F441}\uFE0F":"\u{1F6AB}",Y=!0,At="points",J="tabs",X="ms",qt='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',Ut="<em>No elements registered.</em>",Q=class n{constructor(t,e){this.elementListItemsContainer=null,this.elementCountSpan=null,this.callbackCountSpan=null,this.elementListItems=new Map,this.trajectoryEnabledCheckbox=null,this.tabEnabledCheckbox=null,this.scrollEnabledCheckbox=null,this.historySizeSlider=null,this.historyValueSpan=null,this.predictionTimeSlider=null,this.predictionValueSpan=null,this.tabOffsetSlider=null,this.tabOffsetValueSpan=null,this.scrollMarginSlider=null,this.scrollMarginValueSpan=null,this.showNameTagsCheckbox=null,this.sortOptionsPopup=null,this.sortButton=null,this.containerMinimizeButton=null,this.allSettingsSectionsContainer=null,this.debuggerElementsSection=null,this.isContainerMinimized=!1,this.isMouseSettingsMinimized=!0,this.isKeyboardSettingsMinimized=!0,this.isScrollSettingsMinimized=!0,this.isGeneralSettingsMinimized=!0,this.SESSION_STORAGE_KEY="jsforesightDebuggerSectionStates",this.copySettingsButton=null,this.minimizedElementCount=null,this.copyTimeoutId=null,this.closeSortDropdownHandler=null,this.foresightManagerInstance=t,this.debuggerInstance=e}static initialize(t,e,i,o){n.isInitiated||(n.debuggerControlPanelInstance=new n(t,e));let s=n.debuggerControlPanelInstance;return s._setupDOMAndListeners(i,o),s}_setupDOMAndListeners(t,e){this.controlsContainer||(this.shadowRoot=t,this.isContainerMinimized=e.isControlPanelDefaultMinimized,this.controlsContainer=this.createControlContainer(),this.shadowRoot.appendChild(this.controlsContainer),this.controlPanelStyleElement=Wt(this.getStyles(),this.shadowRoot,"debug-control-panel"),this.queryDOMElements(),this.originalSectionStates(),this.setupEventListeners(),this.updateContainerVisibilityState(),this.updateControlsState(this.foresightManagerInstance.getManagerData.globalSettings,e))}static get isInitiated(){return!!n.debuggerControlPanelInstance}loadSectionStatesFromSessionStorage(){let t=sessionStorage.getItem(this.SESSION_STORAGE_KEY),e={};return t&&(e=JSON.parse(t)),this.isMouseSettingsMinimized=e.mouse??!0,this.isKeyboardSettingsMinimized=e.keyboard??!0,this.isScrollSettingsMinimized=e.scroll??!0,this.isGeneralSettingsMinimized=e.general??!0,e}saveSectionStatesToSessionStorage(){let t={mouse:this.isMouseSettingsMinimized,keyboard:this.isKeyboardSettingsMinimized,scroll:this.isScrollSettingsMinimized,general:this.isGeneralSettingsMinimized};try{sessionStorage.setItem(this.SESSION_STORAGE_KEY,JSON.stringify(t))}catch(e){console.error("Foresight Debugger: Could not save section states to session storage.",e)}}queryDOMElements(){this.trajectoryEnabledCheckbox=this.controlsContainer.querySelector("#trajectory-enabled"),this.tabEnabledCheckbox=this.controlsContainer.querySelector("#tab-enabled"),this.scrollEnabledCheckbox=this.controlsContainer.querySelector("#scroll-enabled"),this.historySizeSlider=this.controlsContainer.querySelector("#history-size"),this.historyValueSpan=this.controlsContainer.querySelector("#history-value"),this.predictionTimeSlider=this.controlsContainer.querySelector("#prediction-time"),this.predictionValueSpan=this.controlsContainer.querySelector("#prediction-value"),this.tabOffsetSlider=this.controlsContainer.querySelector("#tab-offset"),this.tabOffsetValueSpan=this.controlsContainer.querySelector("#tab-offset-value"),this.scrollMarginSlider=this.controlsContainer.querySelector("#scroll-margin"),this.scrollMarginValueSpan=this.controlsContainer.querySelector("#scroll-margin-value"),this.elementListItemsContainer=this.controlsContainer.querySelector("#element-list-items-container"),this.showNameTagsCheckbox=this.controlsContainer.querySelector("#toggle-name-tags"),this.sortOptionsPopup=this.controlsContainer.querySelector("#sort-options-popup"),this.sortButton=this.controlsContainer.querySelector(".sort-button"),this.elementCountSpan=this.controlsContainer.querySelector("#element-count"),this.callbackCountSpan=this.controlsContainer.querySelector("#callback-count"),this.containerMinimizeButton=this.controlsContainer.querySelector(".minimize-button"),this.allSettingsSectionsContainer=this.controlsContainer.querySelector(".all-settings-sections-container"),this.debuggerElementsSection=this.controlsContainer.querySelector(".debugger-elements"),this.copySettingsButton=this.controlsContainer.querySelector(".copy-settings-button"),this.minimizedElementCount=this.controlsContainer.querySelector(".minimized-element-count")}handleCopySettings(){var t,e;this.copySettingsButton&&navigator.clipboard.writeText((t=this.foresightManagerInstance.getManagerData.globalSettings,e="ForesightManager.initialize",`${e}({
${Object.entries(t).filter(([i])=>String(i)!=="resizeScrollThrottleDelay").map(([i,o])=>`  ${String(i)}: ${Gt(o)}`).join(`,
`)}
})`)).then(()=>{this.copySettingsButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',this.copyTimeoutId&&clearTimeout(this.copyTimeoutId),this.copyTimeoutId=setTimeout(()=>{this.copySettingsButton&&(this.copySettingsButton.innerHTML=qt),this.copyTimeoutId=null},3e3)}).catch(i=>{console.error("Foresight Debugger: Could not copy settings to clipboard",i)})}createInputEventListener(t,e,i,o){t&&e&&t.addEventListener("input",s=>{let r=parseInt(s.target.value,10);e.textContent=`${r} ${i}`,this.foresightManagerInstance.alterGlobalSettings({[o]:r})})}createChangeEventListener(t,e){if(!t)return;let i=this.debuggerInstance.getDebuggerData.settings;t.addEventListener("change",o=>{let s=o.target.checked;e in i?this.debuggerInstance.alterDebuggerSettings({[e]:s}):this.foresightManagerInstance.alterGlobalSettings({[e]:s})})}createSectionVisibilityToggleEventListener(t,e){t?.querySelector(".debugger-section-header")?.addEventListener("click",o=>{o.stopPropagation(),this.toggleMinimizeSection(t,this[e]=!this[e])})}setupEventListeners(){this.createChangeEventListener(this.trajectoryEnabledCheckbox,"enableMousePrediction"),this.createChangeEventListener(this.tabEnabledCheckbox,"enableTabPrediction"),this.createChangeEventListener(this.scrollEnabledCheckbox,"enableScrollPrediction"),this.createChangeEventListener(this.showNameTagsCheckbox,"showNameTags"),this.createInputEventListener(this.historySizeSlider,this.historyValueSpan,At,"positionHistorySize"),this.createInputEventListener(this.predictionTimeSlider,this.predictionValueSpan,X,"trajectoryPredictionTime"),this.createInputEventListener(this.tabOffsetSlider,this.tabOffsetValueSpan,J,"tabOffset"),this.createInputEventListener(this.scrollMarginSlider,this.scrollMarginValueSpan,"px","scrollMargin"),this.sortButton?.addEventListener("click",t=>{t.stopPropagation(),this.sortOptionsPopup?.classList.toggle("active")}),this.sortOptionsPopup?.addEventListener("click",t=>{let e=t.target.closest("[data-sort]");if(!e)return;let i=e.dataset.sort;this.debuggerInstance.alterDebuggerSettings({sortElementList:i}),this.sortAndReorderElements(),this.updateSortOptionUI(i),this.sortOptionsPopup?.classList.remove("active")}),this.closeSortDropdownHandler=t=>{this.sortOptionsPopup?.classList.contains("active")&&!this.sortButton?.contains(t.target)&&this.sortOptionsPopup.classList.remove("active")},document.addEventListener("click",this.closeSortDropdownHandler),this.containerMinimizeButton?.addEventListener("click",()=>{this.isContainerMinimized=!this.isContainerMinimized,this.updateContainerVisibilityState()}),this.copySettingsButton?.addEventListener("click",this.handleCopySettings.bind(this)),this.createSectionVisibilityToggleEventListener(this.controlsContainer.querySelector(".mouse-settings-section"),"isMouseSettingsMinimized"),this.createSectionVisibilityToggleEventListener(this.controlsContainer.querySelector(".keyboard-settings-section"),"isKeyboardSettingsMinimized"),this.createSectionVisibilityToggleEventListener(this.controlsContainer.querySelector(".scroll-settings-section"),"isScrollSettingsMinimized"),this.createSectionVisibilityToggleEventListener(this.controlsContainer.querySelector(".general-settings-section"),"isGeneralSettingsMinimized")}toggleMinimizeSection(t,e){if(!t)return;let i=t.querySelector(".debugger-section-content"),o=t.querySelector(".section-minimize-button");i&&o&&(e?(i.style.display="none",o.textContent="+"):(i.style.display="flex",o.textContent="-")),this.saveSectionStatesToSessionStorage()}originalSectionStates(){let t=this.loadSectionStatesFromSessionStorage();this.toggleMinimizeSection(this.controlsContainer.querySelector(".mouse-settings-section"),t.mouse??!0),this.toggleMinimizeSection(this.controlsContainer.querySelector(".keyboard-settings-section"),t.keyboard??!0),this.toggleMinimizeSection(this.controlsContainer.querySelector(".scroll-settings-section"),t.scroll??!0),this.toggleMinimizeSection(this.controlsContainer.querySelector(".general-settings-section"),t.general??!0);let e=this.debuggerElementsSection?.querySelector(".debugger-section-content");e&&(e.style.display="flex")}updateContainerVisibilityState(){this.containerMinimizeButton&&(this.isContainerMinimized?(this.controlsContainer.classList.add("minimized"),this.containerMinimizeButton.textContent="+",this.allSettingsSectionsContainer&&(this.allSettingsSectionsContainer.style.display="none"),this.debuggerElementsSection&&(this.debuggerElementsSection.style.display="none"),this.copySettingsButton&&(this.copySettingsButton.style.display="none"),this.minimizedElementCount&&(this.minimizedElementCount.style.display="")):(this.controlsContainer.classList.remove("minimized"),this.containerMinimizeButton.textContent="-",this.allSettingsSectionsContainer&&(this.allSettingsSectionsContainer.style.display=""),this.debuggerElementsSection&&(this.debuggerElementsSection.style.display=""),this.copySettingsButton&&(this.copySettingsButton.style.display=""),this.minimizedElementCount&&(this.minimizedElementCount.style.display="none")))}updateSortOptionUI(t){this.sortOptionsPopup?.querySelectorAll("[data-sort]").forEach(e=>{let i=e;i.dataset.sort===t?i.classList.add("active-sort-option"):i.classList.remove("active-sort-option")})}updateControlsState(t,e){this.trajectoryEnabledCheckbox&&(this.trajectoryEnabledCheckbox.checked=t.enableMousePrediction),this.tabEnabledCheckbox&&(this.tabEnabledCheckbox.checked=t.enableTabPrediction),this.scrollEnabledCheckbox&&(this.scrollEnabledCheckbox.checked=t.enableScrollPrediction),this.showNameTagsCheckbox&&(this.showNameTagsCheckbox.checked=e.showNameTags),this.updateSortOptionUI(e.sortElementList??"visibility"),this.historySizeSlider&&this.historyValueSpan&&(this.historySizeSlider.value=t.positionHistorySize.toString(),this.historyValueSpan.textContent=`${t.positionHistorySize} ${At}`),this.predictionTimeSlider&&this.predictionValueSpan&&(this.predictionTimeSlider.value=t.trajectoryPredictionTime.toString(),this.predictionValueSpan.textContent=`${t.trajectoryPredictionTime} ${X}`),this.tabOffsetSlider&&this.tabOffsetValueSpan&&(this.tabOffsetSlider.value=t.tabOffset.toString(),this.tabOffsetValueSpan.textContent=`${t.tabOffset} ${J}`),this.scrollMarginSlider&&this.scrollMarginValueSpan&&(this.scrollMarginSlider.value=t.scrollMargin.toString(),this.scrollMarginValueSpan.textContent=`${t.scrollMargin} px`)}refreshRegisteredElementCountDisplay(t){if(!this.elementCountSpan||!this.callbackCountSpan)return;let e=0;t.forEach(c=>{c.isIntersectingWithViewport&&e++});let i=t.size,{tab:o,mouse:s,scroll:r,total:l}=this.foresightManagerInstance.getManagerData.globalCallbackHits,a=["Element Visibility Status","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",`Visible in Viewport: ${e}`,"Not in Viewport: "+(i-e),`Total Registered Elements: ${i}`,"","Note: Only elements visible in the viewport","are actively tracked by intersection observers."];this.minimizedElementCount&&(this.minimizedElementCount.textContent=`${e}/${i}`,this.minimizedElementCount.title=a.join(`
`)),this.elementCountSpan.textContent=`Visible: ${e}/${i} ~ `,this.elementCountSpan.title=a.join(`
`),this.callbackCountSpan.textContent=`Mouse: ${s.hover+s.trajectory} Tab: ${o.forwards+o.reverse} Scroll: ${r.down+r.left+r.right+r.up}`,this.callbackCountSpan.title=["Callback Execution Stats","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Mouse Callbacks",`   \u2022 Trajectory: ${s.trajectory}`,`   \u2022 Hover: ${s.hover}`,`   \u2022 Subtotal: ${s.hover+s.trajectory}`,"","Keyboard Callbacks:",`   \u2022 Tab Forward: ${o.forwards}`,`   \u2022 Tab Reverse: ${o.reverse}`,`   \u2022 Subtotal: ${o.forwards+o.reverse}`,"","Scroll Callbacks:",`   \u2022 Up: ${r.up} | Down: ${r.down}`,`   \u2022 Left: ${r.left} | Right: ${r.right}`,`   \u2022 Subtotal: ${r.up+r.down+r.left+r.right}`,"","Total Callbacks: "+l].join(`
`)}removeElementFromList(t){if(!this.elementListItemsContainer)return;let e=this.elementListItems.get(t.element);if(e){e.remove(),this.elementListItems.delete(t.element);let i=this.foresightManagerInstance.registeredElements;this.refreshRegisteredElementCountDisplay(i),this.elementListItems.size===0&&(this.elementListItemsContainer.innerHTML=Ut)}}updateElementVisibilityStatus(t){if(!this.elementListItemsContainer)return;let e=this.elementListItems.get(t.element);if(!e)return void this.addElementToList(t);e.classList.toggle("not-in-viewport",!t.isIntersectingWithViewport);let i=e.querySelector(".intersecting-indicator");if(i){let o=Ft(t.isIntersectingWithViewport);i.textContent=o}this.refreshRegisteredElementCountDisplay(this.foresightManagerInstance.registeredElements),this.sortAndReorderElements()}sortAndReorderElements(){if(!this.elementListItemsContainer)return;let t=this.debuggerInstance.getDebuggerData.settings.sortElementList??"visibility",e=Array.from(this.foresightManagerInstance.registeredElements.values());if(t!=="insertionOrder"){let o=(s,r)=>{let l=s.element.compareDocumentPosition(r.element);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0};t==="visibility"?e.sort((s,r)=>s.isIntersectingWithViewport!==r.isIntersectingWithViewport?s.isIntersectingWithViewport?-1:1:o(s,r)):t==="documentOrder"&&e.sort(o)}let i=document.createDocumentFragment();e.length&&(e.forEach(o=>{let s=this.elementListItems.get(o.element);s&&i.appendChild(s)}),this.elementListItemsContainer.innerHTML="",this.elementListItemsContainer.appendChild(i))}addElementToList(t,e=!0){if(!this.elementListItemsContainer||(this.elementListItemsContainer.innerHTML===Ut&&(this.elementListItemsContainer.innerHTML=""),this.elementListItems.has(t.element)))return;let i=document.createElement("div");i.className="element-list-item",this.updateListItemContent(i,t),this.elementListItemsContainer.appendChild(i),this.elementListItems.set(t.element,i),this.refreshRegisteredElementCountDisplay(this.foresightManagerInstance.registeredElements)}updateListItemContent(t,e){let i=Ft(e.isIntersectingWithViewport);t.classList.toggle("not-in-viewport",!e.isIntersectingWithViewport);let o="N/A";if(e.elementBounds.hitSlop){let{top:r,right:l,bottom:a,left:c}=e.elementBounds.hitSlop;o=`T:${r} R:${l} B:${a} L:${c}`}let s=[`${e.name||"Unnamed Element"}`,"\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Viewport Status:",e.isIntersectingWithViewport?"   \u2713 In viewport - actively tracked by observers":"   \u2717 Not in viewport - not being tracked","","Hit Slop:",e.elementBounds.hitSlop?[`     Top: ${e.elementBounds.hitSlop.top}px, Bottom: ${e.elementBounds.hitSlop.bottom}px `,`     Right: ${e.elementBounds.hitSlop.right}px, Left: ${e.elementBounds.hitSlop.left}px`].join(`
`):"   \u2022 Not defined - using element's natural boundaries",""].join(`
`);t.title=s,t.innerHTML=`
    <span class="intersecting-indicator">${i}</span>
    <span class="element-name">${e.name||"Unnamed Element"}</span>
    <span class="hit-slop">${o}</span>
  `}cleanup(){this.controlsContainer?.remove(),this.controlPanelStyleElement?.remove(),this.copyTimeoutId&&(clearTimeout(this.copyTimeoutId),this.copyTimeoutId=null),this.closeSortDropdownHandler&&(document.removeEventListener("click",this.closeSortDropdownHandler),this.closeSortDropdownHandler=null),this.controlsContainer=null,this.controlPanelStyleElement=null,this.elementListItemsContainer=null,this.elementCountSpan=null,this.callbackCountSpan=null,this.elementListItems.clear(),this.containerMinimizeButton=null,this.allSettingsSectionsContainer=null,this.debuggerElementsSection=null,this.trajectoryEnabledCheckbox=null,this.tabEnabledCheckbox=null,this.scrollEnabledCheckbox=null,this.historySizeSlider=null,this.historyValueSpan=null,this.predictionTimeSlider=null,this.predictionValueSpan=null,this.tabOffsetSlider=null,this.tabOffsetValueSpan=null,this.scrollMarginSlider=null,this.scrollMarginValueSpan=null,this.showNameTagsCheckbox=null,this.sortOptionsPopup=null,this.sortButton=null,this.copySettingsButton=null}createControlContainer(){let t=document.createElement("div");return t.id="debug-controls",t.innerHTML=`
      <div class="debugger-title-container">
        <button class="minimize-button">-</button>
        <div class="title-group">
          <h2>Foresight Debugger</h2>
         <span class="info-icon" title="${["Foresight Debugger Information","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Session-Only Changes:","All adjustments made here apply only to the","current browser session and won't persist.","","Permanent Configuration:","To make lasting changes, update the initial","values in your ForesightManager.initialize().","","You can copy the current debugger settings","with the button on the right"].join(`
`)}">i</span>
        </div>
           <button class="copy-settings-button" title="${["Copy Settings to Clipboard","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Copies the current configuration as a","formatted method call that you can paste","directly into your code."].join(`
`)}">
          ${qt}
        </button>
        <span class="minimized-element-count">
        </span>
      </div>

      <div class="all-settings-sections-container">
        <div class="debugger-section mouse-settings-section">
          <div class="debugger-section-header collapsible">
            <h3>Mouse Settings</h3>
            <button class="section-minimize-button">-</button>
          </div>
          <div class="debugger-section-content mouse-settings-content">
            <div class="control-row">
             <label for="trajectory-enabled">
                Enable Mouse Prediction
                <span class="info-icon" title="${["Mouse Prediction Control","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","When enabled: Predicts mouse movement","trajectory and triggers callbacks before","the cursor reaches the target element.","","When disabled: Only direct hover events","trigger actions (next to tab/scroll).","","Property: enableMousePrediction"].join(`
`)}">i</span>
              </label>
              <input type="checkbox" id="trajectory-enabled">
            </div>
            <div class="control-row">
             <label for="history-size">
                History Size
                <span class="info-icon" title="${["Position History","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Controls how many past mouse positions","are stored for velocity calculations.","","Higher values:","   \u2022 More accurate trajectory predictions","   \u2022 Smoother movement detection","   \u2022 Slightly increased processing overhead","","Lower values:","   \u2022 Faster response to direction changes","   \u2022 Less memory usage","   \u2022 May be less accurate for fast movements","","Property: positionHistorySize"].join(`
`)}">i</span>
              </label>
              <input type="range" id="history-size" min="2" max="30">
              <span id="history-value"></span>
            </div>
            <div class="control-row">
            <label for="prediction-time">
                Prediction Time
                <span class="info-icon" title="${["Trajectory Prediction Time","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",`How far into the future (in ${X})`,"to calculate the mouse trajectory path.","","Larger values:","   \u2022 Elements are detected sooner","   \u2022 More time for preloading/preparation","   \u2022 May trigger false positives for curved paths","","Smaller values:","   \u2022 More precise targeting","   \u2022 Reduced false positive rate","   \u2022 Less time for preparation","","Property: trajectoryPredictionTime"].join(`
`)}">i</span>
              </label>
              <input type="range" id="prediction-time" min="10" max="200" step="10">
              <span id="prediction-value"></span>
            </div>
          </div>
        </div>

        <div class="debugger-section keyboard-settings-section">
          <div class="debugger-section-header collapsible">
            <h3>Keyboard Settings</h3>
            <button class="section-minimize-button">-</button>
          </div>
          <div class="debugger-section-content keyboard-settings-content">
            <div class="control-row">
             <label for="tab-enabled">
                Enable Tab Prediction
                <span class="info-icon" title="${["Tab Navigation Prediction","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","When enabled: Callbacks are executed when",`the user is ${this.foresightManagerInstance.getManagerData.globalSettings.tabOffset} (tabOffset) ${J} away from`,"a registered element during tab navigation.","","(works with Shift+Tab too).","","Property: enableTabPrediction"].join(`
`)}">i</span>
              </label>
              <input type="checkbox" id="tab-enabled">
            </div>
            <div class="control-row">
               <label for="tab-offset">
                Tab Offset
                <span class="info-icon" title="${["Tab Offset","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Number of tabbable elements to look ahead","when predicting tab navigation targets.","","How it works:","   \u2022 Tracks the current focused element","   \u2022 Looks ahead by the specified offset","   \u2022 Triggers callbacks for registered elements","     within that range","","Property: tabOffset"].join(`
`)}">i</span>
              </label>
              <input type="range" id="tab-offset" min="0" max="20" step="1">
              <span id="tab-offset-value"></span>
            </div>
          </div>
        </div>

        <div class="debugger-section scroll-settings-section">
          <div class="debugger-section-header collapsible">
            <h3>Scroll Settings</h3>
            <button class="section-minimize-button">-</button>
          </div>
        <div class="debugger-section-content scroll-settings-content">
          <div class="control-row">
          <label for="scroll-enabled">
              Enable Scroll Prediction
              <span class="info-icon" title="${["Scroll Prediction","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Enables predictive scrolling based on mouse","position and scroll direction.","","When enabled, calculates scroll direction from","mouse movement and triggers callbacks for","elements that intersect the predicted path.","","Property: enableScrollPrediction"].join(`
`)}">i</span>
            </label>
            <input type="checkbox" id="scroll-enabled">
          </div>
          <div class="control-row">
            <label for="scroll-margin">
              Scroll Margin
              <span class="info-icon" title="${["Scroll Margin","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Sets the pixel distance to check from the","mouse position in the scroll direction.","","Higher values check further ahead, allowing","earlier detection of elements that will come","into view during scrolling.","","Property: scrollMargin"].join(`
`)}">i</span>
            </label>
            <input type="range" id="scroll-margin" min="30" max="300" step="10">
            <span id="scroll-margin-value"></span>
          </div>
        </div>

        <div class="debugger-section general-settings-section">
          <div class="debugger-section-header collapsible">
            <h3>General Settings</h3>
            <button class="section-minimize-button">-</button>
          </div>
          <div class="debugger-section-content general-settings-content">
           <div class="control-row">
              <label for="toggle-name-tags">
                Show Name Tags
                <span class="info-icon" title="${["Visual Debug Name Tags","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","When enabled: Displays name tags over","each registered element in debug mode.","","Property: debuggerSettings.showNameTags"].join(`
`)}">i</span>
              </label>
              <input type="checkbox" id="toggle-name-tags">
            </div>
          </div>
        </div>
      </div>

      <div class="debugger-section debugger-elements">
        <div class="debugger-section-header elements-list-header">
          <h3>Elements <span id="element-count"></span> <span id="callback-count"></span></h3>
          <div class="header-controls">
            <div class="sort-control-container">
              <button class="sort-button" title="Change element list sort order">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              </button>
              <div id="sort-options-popup">
              <button
                data-sort="visibility"
                title="${["Sort by Visibility","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Sorts elements by their viewport visibility","(visible elements first), with a secondary","sort by their order in the document.","","Property: debuggerSettings.sortElementList","Value: 'visibility'"].join(`
`)}">
                  Visibility
                </button>
                <button
                  data-sort="documentOrder"
                  title="${["Sort by Document Order","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Sorts elements based on their order of","appearance in the document's structure","(matching the HTML source).","","Property: debuggerSettings.sortElementList","Value: 'documentOrder'"].join(`
`)}"
                >
                  Document Order
                </button>
                <button
                  data-sort="insertionOrder"
                  title="${["Sort by Insertion Order","\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501","Sorts elements based on the order they","were registered with the ForesightManager.","","Property: debuggerSettings.sortElementList","Value: 'insertionOrder'"].join(`
`)}"
                >
                  Insertion Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="debugger-section-content element-list">
          <div id="element-list-items-container">
          </div>
        </div>
      </div>
    `,t}getStyles(){return`
      #debug-controls {
        position: fixed; bottom: 10px; right: 10px;
        background-color: rgba(0, 0, 0, 0.90); color: white; padding: 12px;
        border-radius: 5px; font-family: Arial, sans-serif; font-size: 13px;
        z-index: 10001; pointer-events: auto; display: flex; flex-direction: column; gap: 8px;
        width: 400px;
        transition: width 0.3s ease, height 0.3s ease;
      }
      #debug-controls.minimized {
        width: 250px;
        overflow: hidden;
        padding: 12px 0; 
      }
      #debug-controls.minimized .debugger-title-container {
        padding-left: 10px; 
        padding-right: 10px;
        gap: 10px; 
      }
      #debug-controls.minimized .debugger-title-container h2 {
        display: inline;
        font-size: 14px;
        margin: 0;
        white-space: nowrap;
      }
      #debug-controls.minimized .info-icon {
        display: none;
      }

      #element-count,#callback-count {
        font-size: 12px;
        color: #9e9e9e;
      }

      .debugger-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        padding: 0 0px; 
      }
      .title-group { 
        display: flex;
        align-items: center;
        gap: 8px; 

      }
      .minimize-button {
        background: none; border: none; color: white;
        font-size: 22px; cursor: pointer;
        line-height: 1;
        padding-inline: 0px;
      }
      .debugger-title-container h2 { margin: 0; font-size: 15px; }

      .copy-settings-button {
        background: none; border: none; color: white;
        cursor: pointer; padding: 0;
        display: flex; align-items: center; justify-content: center;
      }

      .copy-settings-button svg {
        width: 16px; height: 16px;
        stroke: white;
      }

      .minimized-element-count {
         font-size: 14px;
         min-width: 30px;
         text-align: right;
      }

      .all-settings-sections-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .debugger-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
        margin-bottom: 2px;
        padding-bottom: 2px;
        border-bottom: 1px solid #444;
      }
      .debugger-section-header.collapsible {
        cursor: pointer;
      }
      .debugger-section-header h3 {
         margin: 0;
         font-size: 14px;
         font-weight: bold;
         color: #b0c4de;
         flex-grow: 1;
      }

      .section-minimize-button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0px;
        line-height: 1;
      }

      #debug-controls .control-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      #debug-controls label {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }
      #debug-controls .control-row:has(input[type="checkbox"]) label {
        flex-grow: 1;
      }
      #debug-controls .control-row input[type="checkbox"] {
        appearance: none; -webkit-appearance: none; -moz-appearance: none;
        position: relative; width: 40px; height: 18px;
        background-color: #555; border-radius: 10px; cursor: pointer;
        outline: none; transition: background-color 0.2s ease;
        vertical-align: middle; flex-shrink: 0; margin: 0;
      }
      #debug-controls .control-row input[type="checkbox"]::before {
        content: ""; position: absolute; width: 14px; height: 14px;
        border-radius: 50%; background-color: white; top: 2px; left: 2px;
        transition: transform 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.4);
      }
      #debug-controls .control-row input[type="checkbox"]:checked {
        background-color: #b0c4de;
      }
      #debug-controls .control-row input[type="checkbox"]:checked::before {
        transform: translateX(22px);
      }
      #debug-controls .control-row:has(input[type="range"]) label {
        flex-basis: 170px; flex-shrink: 0;
      }
      #debug-controls input[type="range"] {
        flex-grow: 1; margin: 0; cursor: pointer; -webkit-appearance: none;
        appearance: none; background: transparent; height: 18px; vertical-align: middle;
      }
      #debug-controls input[type="range"]::-webkit-slider-runnable-track {
        height: 6px; background: #555; border-radius: 3px;
      }
      #debug-controls input[type="range"]::-moz-range-track {
        height: 6px; background: #555; border-radius: 3px;
      }
      #debug-controls input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none; margin-top: -5px;
        background: #b0c4de; height: 16px; width: 16px;
        border-radius: 50%; border: 1px solid #333;
      }
      #debug-controls input[type="range"]::-moz-range-thumb {
        background: #b0c4de; height: 16px; width: 16px;
        border-radius: 50%; border: 1px solid #333; border: none;
      }
      #debug-controls .control-row:has(input[type="range"]) span:not(.info-icon) {
        width: 55px; min-width: 55px; text-align: right; flex-shrink: 0;
      }
      .info-icon {
        display: inline-flex; align-items: center; justify-content: center;
        width: 16px; height: 16px; border-radius: 50%;
        background-color: #555; color: white; font-size: 10px;
        font-style: italic; font-weight: bold; font-family: 'Georgia', serif;
        cursor: help; user-select: none; flex-shrink: 0;
      }
      .debugger-section {
        display: flex; flex-direction: column; gap: 6px;
      }
      .debugger-section-content {
        display: none; flex-direction: column; gap: 8px;
      }

      /* Element List Styles */
      .elements-list-header { cursor: default; }
      .header-controls {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .sort-control-container {
        position: relative;
      }
      .sort-button {
        background: none; border: none; color: white; cursor: pointer;
        padding: 0; display: flex; align-items: center; justify-content: center;
      }
      .sort-button svg {
        width: 16px; height: 16px; stroke: #b0c4de; transition: stroke 0.2s;
      }
      .sort-button:hover svg { stroke: white; }
      
      #sort-options-popup {
        position: absolute;
        bottom: calc(100% + 5px);
        right: -5px;
        z-index: 10;
        display: none;
        flex-direction: column;
        gap: 4px;
        background-color: #3a3a3a;
        border: 1px solid #555;
        border-radius: 4px;
        padding: 3px;
        width: 200px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      }
      #sort-options-popup.active {
        display: flex;
      }
      #sort-options-popup button {
        background: none; border: none; color: #ccc;
        font-size: 12px; text-align: left; padding: 5px 8px;
        cursor: pointer; border-radius: 3px;
        transition: background-color 0.2s, color 0.2s;
        display: flex;
        align-items: center;
        height: 26px;
      }
      #sort-options-popup button:hover {
        background-color: #555;
        color: white;
      }
      #sort-options-popup button.active-sort-option {
        color: #b0c4de;
        font-weight: bold;
      }
      #sort-options-popup button.active-sort-option::before {
        content: '\u2713';
        margin-right: 6px;
        width: 10px;
      }
      #sort-options-popup button::before {
        content: '';
        margin-right: 6px;
        width: 10px;
      }

      .element-list { /* Scroll container */
        min-height: 237px;
        max-height: 237px; 
        overflow-y: auto;
        background-color: rgba(20, 20, 20, 0.5);
        border-radius: 3px;
        padding: 0;
        display: flex;
      }

      /* Modern Scrollbar Styling */
      .element-list::-webkit-scrollbar { width: 8px; }
      .element-list::-webkit-scrollbar-track { background: rgba(30, 30, 30, 0.5); border-radius: 4px; }
      .element-list::-webkit-scrollbar-thumb { background-color: rgba(176, 196, 222, 0.5); border-radius: 4px; border: 2px solid rgba(0, 0, 0, 0.2); }
      .element-list::-webkit-scrollbar-thumb:hover { background-color: rgba(176, 196, 222, 0.7); }
      .element-list { scrollbar-width: thin; scrollbar-color: rgba(176, 196, 222, 0.5) rgba(30, 30, 30, 0.5); }

      #element-list-items-container { 
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 6px;
        min-height: 225px;
        box-sizing: border-box;
        align-content: flex-start;
      }
      #element-list-items-container > em {
        flex-basis: 100%;
        text-align: center;
        padding: 10px 0;
        font-style: italic;
        color: #ccc;
        font-size: 12px;
      }
      .element-list-item {
        flex-basis: calc((100% - (0 * 3px)) / 1);
        flex-grow: 0;
        flex-shrink: 0;
        height: 35px;
        box-sizing: border-box;
        padding: 3px 5px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: rgba(50,50,50,0.7);
        transition: background-color 0.2s ease, opacity 0.2s ease;
        font-size: 11px; 
        overflow: hidden;
      }
      
      /* Viewport intersection styling */
      .element-list-item.not-in-viewport { opacity: 0.4; }
      
      .element-list-item .element-name {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px; 
        font-weight: bold;
      }
      .element-list-item .intersecting-indicator {
        font-size: 12px;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
      }
      .element-list-item .hit-behavior,
      .element-list-item .hit-slop {
        font-size: 10px; 
        color: #b0b0b0;
        padding: 2px 5px; 
        border-radius: 3px; 
        background-color: rgba(0,0,0,0.2);
        flex-shrink: 0;
      }
    `}};function Zt(n,t,e){let{expandedOverlay:i,nameLabel:o}=n,{expandedRect:s}=t.elementBounds,r=s.right-s.left,l=s.bottom-s.top;i.style.width=`${r}px`,i.style.height=`${l}px`,i.style.transform=`translate3d(${s.left}px, ${s.top}px, 0)`,i.style.display="block",o.textContent=t.name,t.name!==""&&e?(o.style.display="block",o.style.transform=`translate3d(${s.left}px, ${s.top-25}px, 0)`):o.style.display="none"}function N(n,t){return n!==void 0&&n!==t}var V=class n{constructor(t){this.callbackAnimations=new Map,this._debuggerSettings={showDebugger:!0,isControlPanelDefaultMinimized:!1,showNameTags:Y,sortElementList:"visibility"},this.debugElementOverlays=new Map,this.predictedMouseIndicator=null,this.mouseTrajectoryLine=null,this.scrollTrajectoryLine=null,this.managerSubscriptionsController=null,this.animationPositionObserver=null,this.handleAnimationPositionChange=e=>{for(let i of e){let o=this.callbackAnimations.get(i.target);if(o){let s=i.boundingClientRect,{hitSlop:r,overlay:l}=o,a=s.left-r.left,c=s.top-r.top,h=s.width+r.left+r.right,d=s.height+r.top+r.bottom;l.style.transform=`translate3d(${a}px, ${c}px, 0)`,l.style.width=`${h}px`,l.style.height=`${d}px`}}},this.handleElementDataUpdated=e=>{switch(e.updatedProp){case"bounds":this.createOrUpdateElementOverlay(e.elementData);break;case"visibility":e.elementData.isIntersectingWithViewport||this.removeElementOverlay(e.elementData),this.controlPanel?.updateElementVisibilityStatus(e.elementData)}},this.handleUnregisterElement=e=>{this.controlPanel?.removeElementFromList(e.elementData),this.removeElementOverlay(e.elementData)},this.handleCallbackFired=e=>{this.showCallbackAnimation(e.elementData)},this.handleRegisterElement=e=>{this.createOrUpdateElementOverlay(e.elementData),this.controlPanel.addElementToList(e.elementData)},this.handleMouseTrajectoryUpdate=e=>{if(!this.shadowRoot||!this.debugContainer||!this.predictedMouseIndicator||!this.mouseTrajectoryLine)return;this.scrollTrajectoryLine&&(this.scrollTrajectoryLine.style.display="none");let{predictedPoint:i,currentPoint:o}=e.trajectoryPositions;if(this.predictedMouseIndicator.style.transform=`translate3d(${i.x}px, ${i.y}px, 0) translate3d(-50%, -50%, 0)`,this.predictedMouseIndicator.style.display=e.predictionEnabled?"block":"none",i.x===0&&i.y===0)return void(this.predictedMouseIndicator.style.display="none");if(!e.predictionEnabled)return void(this.mouseTrajectoryLine.style.display="none");let s=i.x-o.x,r=i.y-o.y,l=Math.sqrt(s*s+r*r),a=180*Math.atan2(r,s)/Math.PI;this.mouseTrajectoryLine.style.transform=`translate3d(${o.x}px, ${o.y}px, 0) rotate(${a}deg)`,this.mouseTrajectoryLine.style.width=`${l}px`,this.mouseTrajectoryLine.style.display="block"},this.handleScrollTrajectoryUpdate=e=>{if(!this.scrollTrajectoryLine)return;let i=e.predictedPoint.x-e.currentPoint.x,o=e.predictedPoint.y-e.currentPoint.y,s=Math.sqrt(i*i+o*o),r=180*Math.atan2(o,i)/Math.PI;this.scrollTrajectoryLine.style.transform=`translate3d(${e.currentPoint.x}px, ${e.currentPoint.y}px, 0) rotate(${r}deg)`,this.scrollTrajectoryLine.style.width=`${s}px`,this.scrollTrajectoryLine.style.display="block"},this.handleSettingsChanged=e=>{this.controlPanel?.updateControlsState(e.managerData.globalSettings,this._debuggerSettings)},this.foresightManagerInstance=t}get getDebuggerData(){return{settings:this._debuggerSettings}}static initialize(t,e){if(typeof window>"u"||typeof window>"u"||"ontouchstart"in window)return null;n.isInitiated||(n.debuggerInstance=new n(t));let i=n.debuggerInstance;return i.subscribeToManagerEvents(),i.alterDebuggerSettings(e),i.shadowHost||i._setupDOM(),i}static get instance(){if(!n.debuggerInstance)throw new Error("ForesightDebugger has not been initialized. Call ForesightDebugger.initialize() first.");return n.debuggerInstance}_setupDOM(){this.shadowHost||(this.shadowHost=y("div",document.body,{id:"jsforesight-debugger-shadow-host"}),this.shadowRoot=this.shadowHost.attachShadow({mode:"open"}),this.debugContainer=y("div",this.shadowRoot,{id:"jsforesight-debug-container"}),this.predictedMouseIndicator=y("div",this.debugContainer,{className:"jsforesight-mouse-predicted"}),this.mouseTrajectoryLine=y("div",this.debugContainer,{className:"jsforesight-trajectory-line"}),this.scrollTrajectoryLine=y("div",this.debugContainer,{className:"jsforesight-scroll-trajectory-line"}),this.controlPanel=Q.initialize(this.foresightManagerInstance,n.debuggerInstance,this.shadowRoot,this._debuggerSettings),Wt(ve,this.shadowRoot,"screen-visuals"),this.animationPositionObserver=new ye(this.handleAnimationPositionChange))}static get isInitiated(){return!!n.debuggerInstance}alterDebuggerSettings(t){N(t?.showNameTags,this._debuggerSettings.showNameTags)&&(this._debuggerSettings.showNameTags=t.showNameTags,this.toggleNameTagVisibility()),N(t?.isControlPanelDefaultMinimized,this._debuggerSettings.isControlPanelDefaultMinimized)&&(this._debuggerSettings.isControlPanelDefaultMinimized=t.isControlPanelDefaultMinimized),N(t?.sortElementList,this._debuggerSettings.sortElementList)&&(this._debuggerSettings.sortElementList=t.sortElementList),N(t?.showDebugger,this._debuggerSettings.showDebugger)&&(this._debuggerSettings.showDebugger=t.showDebugger,this._debuggerSettings.showDebugger?n.initialize(this.foresightManagerInstance):this.cleanup())}subscribeToManagerEvents(){this.managerSubscriptionsController=new AbortController;let t=this.managerSubscriptionsController.signal,e=this.foresightManagerInstance;e.addEventListener("elementRegistered",this.handleRegisterElement,{signal:t}),e.addEventListener("elementUnregistered",this.handleUnregisterElement,{signal:t}),e.addEventListener("elementDataUpdated",this.handleElementDataUpdated,{signal:t}),e.addEventListener("mouseTrajectoryUpdate",this.handleMouseTrajectoryUpdate,{signal:t}),e.addEventListener("scrollTrajectoryUpdate",this.handleScrollTrajectoryUpdate,{signal:t}),e.addEventListener("managerSettingsChanged",this.handleSettingsChanged,{signal:t}),e.addEventListener("callbackFired",this.handleCallbackFired,{signal:t})}createElementOverlays(t){let e={expandedOverlay:y("div",this.debugContainer,{className:"jsforesight-expanded-overlay",data:t.name}),nameLabel:y("div",this.debugContainer,{className:"jsforesight-name-label"})};return this.debugElementOverlays.set(t.element,e),e}createOrUpdateElementOverlay(t){if(!this.debugContainer||!this.shadowRoot)return;let e=this.debugElementOverlays.get(t.element);e||(e=this.createElementOverlays(t)),Zt(e,t,this._debuggerSettings.showNameTags??Y)}toggleNameTagVisibility(){this.foresightManagerInstance.registeredElements.forEach(t=>{let e=this.debugElementOverlays.get(t.element);e&&Zt(e,t,this._debuggerSettings.showNameTags??Y)})}removeElementOverlay(t){let e=this.debugElementOverlays.get(t.element);e&&(e.expandedOverlay.remove(),e.nameLabel.remove(),this.debugElementOverlays.delete(t.element))}showCallbackAnimation(t){let{element:e,elementBounds:i}=t,o=this.callbackAnimations.get(e);o&&(clearTimeout(o.timeoutId),o.overlay.remove(),this.animationPositionObserver?.unobserve(e),this.callbackAnimations.delete(e));let s=y("div",this.debugContainer,{className:"jsforesight-callback-indicator"}),{left:r,top:l,right:a,bottom:c}=i.expandedRect,h=a-r,d=c-l;s.style.display="block",s.style.transform=`translate3d(${r}px, ${l}px, 0)`,s.style.width=`${h}px`,s.style.height=`${d}px`,s.classList.add("animate");let m=setTimeout(()=>{s.remove(),this.callbackAnimations.delete(e),this.animationPositionObserver?.unobserve(e)},500);this.callbackAnimations.set(e,{hitSlop:t.elementBounds.hitSlop,overlay:s,timeoutId:m}),this.animationPositionObserver?.observe(e)}cleanup(){this.managerSubscriptionsController?.abort(),this.controlPanel?.cleanup(),this.shadowHost?.remove(),this.debugElementOverlays.clear(),this.shadowHost=null,this.shadowRoot=null,this.debugContainer=null,this.predictedMouseIndicator=null,this.mouseTrajectoryLine=null,this.scrollTrajectoryLine=null,this.controlPanel=null}},ve=`
      #jsforesight-debug-container { 
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: 9999;
      }

      .jsforesight-expanded-overlay, 
      .jsforesight-name-label, 
      .jsforesight-callback-indicator,
      .jsforesight-mouse-predicted,
      .jsforesight-scroll-trajectory-line,
      .jsforesight-trajectory-line {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform; 
      }
      .jsforesight-trajectory-line{
        display: none;
      }
      .jsforesight-expanded-overlay {
        border: 1px dashed rgba(100, 116, 139, 0.4);
        background-color: rgba(100, 116, 139, 0.05);
        box-sizing: border-box;
        border-radius: 8px;
      }
      .jsforesight-mouse-predicted {
        display: none !important;
        /* transform is now set dynamically via JS for performance */
      }
      .jsforesight-trajectory-line {
        height: 4px;
        background: linear-gradient(90deg, #3b82f6, rgba(59, 130, 246, 0.4));
        transform-origin: left center;
        z-index: 9999;
        border-radius: 2px;
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        position: relative;
        /* width and transform are set dynamically via JS for performance */
      }
      .jsforesight-trajectory-line::after {
        content: '';
        position: absolute;
        right: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid #3b82f6;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6));
      }
      .jsforesight-name-label {
        background-color: rgba(27, 31, 35, 0.85);
        backdrop-filter: blur(4px);
        color: white;
        padding: 4px 8px;
        font-size: 11px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        border-radius: 4px;
        z-index: 10001;
        white-space: nowrap;
        pointer-events: none;
      }
      .jsforesight-callback-indicator {
        border: 4px solid oklch(65% 0.22 280); 
        border-radius: 8px;
        box-sizing: border-box;
        pointer-events: none;
        opacity: 0;
        z-index: 10002;
        display: none; 
      }
      .jsforesight-callback-indicator.animate {
        animation: jsforesight-callback-pulse 0.5s ease-out forwards;
      }
        
      .jsforesight-scroll-trajectory-line {
      height: 4px;
      background: repeating-linear-gradient(
        90deg,
        #22c55e 0px,
        #22c55e 8px,
        transparent 8px,
        transparent 16px
      );
      transform-origin: left center;
      z-index: 9999;
      border-radius: 2px;
      display: none;
      animation: scroll-dash-flow 1.5s linear infinite;
      position: relative;
      box-shadow: 0 0 12px rgba(34, 197, 94, 0.4);
      }

      .jsforesight-scroll-trajectory-line::after {
      content: '';
      position: absolute;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid #22c55e;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.6));
      animation: scroll-arrow-pulse 1.5s ease-in-out infinite;
      }

      @keyframes scroll-dash-flow {
      0% { background-position: 0px 0px; }
      100% { background-position: 16px 0px; }
      }

      @keyframes scroll-arrow-pulse {
      0%, 100% { 
        transform: translateY(-50%) scale(1);
        filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.6));
      }
      50% {
        transform: translateY(-50%) scale(1.2);
        filter: drop-shadow(0 0 12px rgba(34, 197, 94, 0.8));
      }
      }


  
      @keyframes jsforesight-callback-pulse {
        0% {
          opacity: 1;
          box-shadow: 0 0 15px oklch(65% 0.22 280 / 0.7);
        }
        100% {
          opacity: 0;
          box-shadow: 0 0 25px oklch(65% 0.22 280 / 0);
        }
      }
    `;var Se=(n,t)=>t.title,xe=()=>({title:"Explore the Docs",link:"https://angular.dev"}),we=()=>({title:"Learn with Tutorials",link:"https://angular.dev/tutorials"}),Ce=()=>({title:"CLI Docs",link:"https://angular.dev/tools/cli"}),ke=()=>({title:"Angular Language Service",link:"https://angular.dev/tools/language-service"}),Me=()=>({title:"Angular DevTools",link:"https://angular.dev/tools/devtools"}),Ee=(n,t,e,i,o)=>[n,t,e,i,o];function Pe(n,t){if(n&1&&(u(0,"a",25)(1,"span"),S(2),g(),C(),u(3,"svg",36),p(4,"path",37),g()()),n&2){let e=t.$implicit;rt("href",e.link,ot),R(2),ct(e.title)}}x.initialize({enableMousePrediction:!0,positionHistorySize:8,trajectoryPredictionTime:80,defaultHitSlop:10,enableTabPrediction:!0,tabOffset:3,enableScrollPrediction:!0,scrollMargin:150});V.initialize(x.instance,{showDebugger:!0,isControlPanelDefaultMinimized:!0,showNameTags:!0,sortElementList:"visibility"});var F=class n{title="ng.foresightJS";ngAfterViewInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=et({type:n,selectors:[["app-root"]],standalone:!0,features:[dt],decls:47,vars:12,consts:[[1,"main"],[1,"content"],[1,"left-side"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 982 239","fill","none",1,"angular-logo"],["clip-path","url(#a)"],["fill","url(#b)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["fill","url(#c)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["id","c","cx","0","cy","0","r","1","gradientTransform","rotate(118.122 171.182 60.81) scale(205.794)","gradientUnits","userSpaceOnUse"],["stop-color","#FF41F8"],["offset",".707","stop-color","#FF41F8","stop-opacity",".5"],["offset","1","stop-color","#FF41F8","stop-opacity","0"],["id","b","x1","0","x2","982","y1","192","y2","192","gradientUnits","userSpaceOnUse"],["stop-color","#F0060B"],["offset","0","stop-color","#F0070C"],["offset",".526","stop-color","#CC26D5"],["offset","1","stop-color","#7702FF"],["id","a"],["fill","#fff","d","M0 0h982v239H0z"],[1,"pill-group-horizontal"],["href","/feature1","foresightjs","",1,"pill"],["href","/feature2","foresightjs","",1,"pill"],["href","/feature3","foresightjs","",1,"pill"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],["target","_blank","rel","noopener","foresightjs","",1,"pill",3,"href"],[1,"social-links"],["href","https://github.com/angular/angular","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://twitter.com/angular","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"]],template:function(e,i){e&1&&(u(0,"main",0)(1,"div",1)(2,"div",2),C(),u(3,"svg",3)(4,"g",4),p(5,"path",5)(6,"path",6),g(),u(7,"defs")(8,"radialGradient",7),p(9,"stop",8)(10,"stop",9)(11,"stop",10),g(),u(12,"linearGradient",11),p(13,"stop",12)(14,"stop",13)(15,"stop",14)(16,"stop",15),g(),u(17,"clipPath",16),p(18,"path",17),g()()(),E(),u(19,"h1"),S(20),g(),u(21,"p"),S(22,"Congratulations! Your app is running. \u{1F389}"),g(),u(23,"div",18)(24,"a",19),S(25,"Feature 1"),g(),u(26,"a",20),S(27,"Feature 2"),g(),u(28,"a",21),S(29,"Feature 3"),g()(),p(30,"router-outlet"),g(),p(31,"div",22),u(32,"div",23)(33,"div",24),lt(34,Pe,5,2,"a",25,Se),g(),u(36,"div",26)(37,"a",27),C(),u(38,"svg",28),p(39,"path",29),g()(),E(),u(40,"a",30),C(),u(41,"svg",31),p(42,"path",32),g()(),E(),u(43,"a",33),C(),u(44,"svg",34),p(45,"path",35),g()()()()()(),E(),p(46,"router-outlet")),e&2&&(R(20),ht("Hello, ",i.title,""),R(14),at(ut(6,Ee,k(1,xe),k(2,we),k(3,Ce),k(4,ke),k(5,Me))))},dependencies:[mt,vt,$t],styles:['[_nghost-%COMP%]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient(180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--red-to-pink-to-purple-horizontal-gradient: linear-gradient(90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-%COMP%]{margin:0;color:var(--gray-700)}main[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1px;background:var(--red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill-group-horizontal[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:start;flex-wrap:wrap;gap:1.25rem;margin-top:1.5rem}.pill[_ngcontent-%COMP%]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--pill-accent) 5%,transparent);color:var(--pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 15%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+1){--pill-accent: var(--bright-blue)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+2){--pill-accent: var(--french-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+5){--pill-accent: var(--hot-red)}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--gray-400)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--gray-900)}@media screen and (max-width: 650px){.content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}']})};pt(F,Ht).catch(n=>console.error(n));
