import{A as St,B as Q,C as kt,D as Et,F as $t,G as Te,H as _t,I as ce,J as Tt,K as Pt,L as Mt,M as Ot,N as Lt,a as C,b as E,c as ke,d as I,e as Ee,f as We,h as $e,i as _e,j as ut,l as mt,m as X,n as le,o as bt,p as ft,q as Ze,r as vt,s as yt,t as wt,u as xt,v as x,w as S,x as T,y as U,z as Ct}from"./chunk-MF2HE74I.js";var Dt=[{path:"feature1",loadChildren:()=>import("./chunk-IS7AFBU6.js").then(t=>t.Feature1Module)},{path:"feature2",loadChildren:()=>import("./chunk-TRY2WW2S.js").then(t=>t.Feature2Module)},{path:"feature3",loadChildren:()=>import("./chunk-HN6FCJV5.js").then(t=>t.Feature3Module)}];var L=class{static intersect(t,e){let i=Math.max(t.left,e.left),n=Math.min(t.right,e.right),s=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(0,n-i),c=Math.max(0,o-s);return new DOMRect(i,s,r,c)}static clip(t,e){let i=E(C({},t.toJSON()),{top:t.top+e.top,left:t.left+e.left,bottom:t.bottom-e.bottom,right:t.right-e.right});return i.width=i.right-i.left,i.height=i.bottom-i.top,i}static clipOffsets(t,e){return{top:e.top-t.top,left:e.left-t.left,bottom:t.bottom-e.bottom,right:t.right-e.right}}static equals(t,e){return t==null||e==null?t===e:t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}static sizeEqual(t,e){return Math.round(t.width)===Math.round(e.width)&&Math.round(t.height)===Math.round(e.height)}},de=-1,It=1-de*2;function ki(t,e){let i=Math.max(t.width,It),n=Math.max(t.height,It),s=t.top-e.top-de,o=t.left-e.left-de,r=e.right-t.left-i-de,c=e.bottom-t.top-n-de;return`${-Math.round(s)}px ${-Math.round(r)}px ${-Math.round(c)}px ${-Math.round(o)}px`}var jt=[...Array.from({length:1e3},(t,e)=>e/1e3),1],Ei=class{constructor(t,e,i){this.#i=e,this.#t=i,this.#n=i.clientRect,this.#s(t)}#i;#e=void 0;#t;#n;#r=void 0;get visibleRect(){let t=this.#t.clip;return t?L.clip(this.#n,t):this.#n}get isIntersecting(){let{width:t,height:e}=this.visibleRect;return t>0&&e>0}#s(t){let{root:e,rootBounds:i}=this.#t,{visibleRect:n}=this;this.#e?.disconnect(),this.#e=new IntersectionObserver(this.#o,{root:e,rootMargin:ki(n,i),threshold:jt}),this.#e.observe(t)}#o=t=>{if(!this.#e)return;let e=t[t.length-1];if(e){let{intersectionRatio:i,boundingClientRect:n}=e,s=this.#n;this.#n=n;let o=this.#r,r=!L.equals(n,s);if(i!==this.#r||r){let c=this.#t.rootBounds,l=L.intersect(n,c),h=l.width>0&&l.height>0;if(!h)return;this.#r=i,(o!=null||r)&&(this.#i(new $i(e.target,n,e.intersectionRect,h,c),this),this.#s(e.target))}}};disconnect(){this.#e?.disconnect()}},$i=class{constructor(t,e,i,n,s){this.target=t,this.boundingClientRect=e,this.intersectionRect=i,this.isIntersecting=n,this.rootBounds=s}},_i=class{constructor(t,e){let i=Mi(t);if(Ti(i)){let n=i.ownerDocument??document;this.rootBounds=i.getBoundingClientRect(),this.#i=new ResizeObserver(s=>{for(let o of s){let[{inlineSize:r,blockSize:c}]=o.borderBoxSize;if(L.sizeEqual(this.rootBounds,{width:r,height:c}))continue;let l=o.target.getBoundingClientRect();this.rootBounds=l,e(l,this)}}),this.#i.observe(i),n.addEventListener("scroll",s=>{s.target&&s.target!==i&&Rt(s.target)&&s.target.contains(i)&&(this.rootBounds=i.getBoundingClientRect(),e(this.rootBounds,this))},{capture:!0,passive:!0,signal:this.#e.signal})}else{let n=i.visualViewport??i;this.rootBounds=At(i);let s=()=>{let o=At(i);L.equals(this.rootBounds,o)||(this.rootBounds=o,e(o,this))};n.addEventListener("resize",s,{signal:this.#e.signal})}}#i;#e=new AbortController;rootBounds;disconnect(){this.#i?.disconnect(),this.#e.abort()}};function At(t){let e=t.visualViewport?.width??t.innerWidth,i=t.visualViewport?.height??t.innerHeight;return new DOMRect(0,0,e,i)}function Rt(t){return"nodeType"in t}function Ti(t){return Rt(t)&&t.nodeType===Node.ELEMENT_NODE}function Pi(t){return t.nodeType===Node.DOCUMENT_NODE}function Mi(t){return!t||Pi(t)?t?.defaultView??window:t}var Oi=class{constructor(t,e){this.#t=e,this.#i=i=>{let n=[];for(let s of i){let o=this.intersections.get(s.target);this.intersections.set(s.target,s),(o?.isIntersecting!==s.isIntersecting||!L.equals(o?.intersectionRect,s.intersectionRect))&&n.push(s)}n.length>0&&t(n,this)}}#i;#e=new Map;#t;intersections=new WeakMap;observe(t){let e=t.ownerDocument;if(!e)return;let i=this.#e.get(e);i||(i=new IntersectionObserver(this.#i,E(C({},this.#t),{threshold:jt})),this.#e.set(e,i)),i.observe(t)}unobserve(t){let e=t.ownerDocument;if(!e)return;let i=this.#e.get(e);i&&(i.unobserve(t),this.intersections.delete(t))}disconnect(){for(let t of this.#e.values())t.disconnect();this.#e.clear()}},Ut=class{constructor(t,e){this.#i=t,this.#e=e,this.#s=new _i(e?.root,this.#c),this.#o=new Oi(this.#d,e),this.#n=new ResizeObserver(this.#p)}#i;#e;#t=new Map;#n;#r=new WeakMap;#s;#o;observe(t){this.#o.observe(t)}unobserve(t){t?(this.#t.get(t)?.disconnect(),this.#o.unobserve(t)):this.disconnect()}disconnect(){for(let t of this.#t.values())t.disconnect();this.#n.disconnect(),this.#s.disconnect(),this.#o.disconnect()}#a(t){let e=[];for(let i of t){let{target:n}=i,s=this.#r.get(n);Li(i,s)||(this.#r.set(n,i),e.push(i))}e.length>0&&this.#i(e)}#c=t=>{let e=[];for(let[i]of this.#t){let n=i.getBoundingClientRect(),s=this.#l(i,n);e.push(new Pe(i,n,s.visibleRect,s.isIntersecting,t))}this.#a(e)};#l(t,e){let i=this.#o;this.#t.get(t)?.disconnect();let n=new Ei(t,this.#h,{clientRect:e,root:this.#e?.root,rootBounds:this.#s.rootBounds,get clip(){let s=i.intersections.get(t);if(!s)return;let{intersectionRect:o,boundingClientRect:r}=s;return L.clipOffsets(r,o)}});return this.#t.set(t,n),n}#d=t=>{let e=[];for(let i of t){let{target:n,isIntersecting:s,boundingClientRect:o}=i;s?(this.#l(n,o),this.#n.observe(n)):(this.#t.get(n)?.disconnect(),this.#t.delete(n),this.#n.unobserve(n));let r=this.#t.get(n);e.push(new Pe(n,o,r?.visibleRect??i.intersectionRect,s,this.#s.rootBounds))}this.#a(e)};#h=(t,e)=>{this.#a([new Pe(t.target,t.boundingClientRect,e.visibleRect,t.isIntersecting,this.#s.rootBounds)])};#p=t=>{let e=[];for(let i of t){let{target:n,borderBoxSize:s}=i,o=this.#r.get(n);if(o){let[{inlineSize:l,blockSize:h}]=s;if(L.sizeEqual(o.boundingClientRect,{width:l,height:h}))continue}let r=n.getBoundingClientRect(),c=this.#l(n,r);e.push(new Pe(n,r,c.visibleRect,this.#o.intersections.get(n)?.isIntersecting??!1,this.#s.rootBounds))}this.#a(e)}},Pe=class{constructor(t,e,i,n,s){this.target=t,this.boundingClientRect=e,this.intersectionRect=i,this.isIntersecting=n,this.rootBounds=s}};function Li(t,e){return e==null?!1:t.target===e.target&&t.isIntersecting===e.isIntersecting&&L.equals(t.boundingClientRect,e.boundingClientRect)&&L.equals(t.intersectionRect,e.intersectionRect)}var Di=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Ge=Di.join(","),Nt=typeof Element>"u",he=Nt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Me=!Nt&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t?.ownerDocument},Oe=function t(e,i){var n;i===void 0&&(i=!0);var s=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"inert"),o=s===""||s==="true",r=o||i&&e&&t(e.parentNode);return r},Ii=function(e){var i,n=e==null||(i=e.getAttribute)===null||i===void 0?void 0:i.call(e,"contenteditable");return n===""||n==="true"},Ai=function(e,i,n){if(Oe(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(Ge));return i&&he.call(e,Ge)&&s.unshift(e),s=s.filter(n),s},ji=function t(e,i,n){for(var s=[],o=Array.from(e);o.length;){var r=o.shift();if(!Oe(r,!1))if(r.tagName==="SLOT"){var c=r.assignedElements(),l=c.length?c:r.children,h=t(l,!0,n);n.flatten?s.push.apply(s,h):s.push({scopeParent:r,candidates:h})}else{var v=he.call(r,Ge);v&&n.filter(r)&&(i||!e.includes(r))&&s.push(r);var y=r.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(r),$=!Oe(y,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(r));if(y&&$){var _=t(y===!0?r.children:y.children,!0,n);n.flatten?s.push.apply(s,_):s.push({scopeParent:r,candidates:_})}else o.unshift.apply(o,r.children)}}return s},Ft=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Bt=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Ii(e))&&!Ft(e)?0:e.tabIndex},Ri=function(e,i){var n=Bt(e);return n<0&&i&&!Ft(e)?0:n},Ui=function(e,i){return e.tabIndex===i.tabIndex?e.documentOrder-i.documentOrder:e.tabIndex-i.tabIndex},Ht=function(e){return e.tagName==="INPUT"},zi=function(e){return Ht(e)&&e.type==="hidden"},Vi=function(e){var i=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(n){return n.tagName==="SUMMARY"});return i},Ni=function(e,i){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===i)return e[n]},Fi=function(e){if(!e.name)return!0;var i=e.form||Me(e),n=function(c){return i.querySelectorAll('input[type="radio"][name="'+c+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=n(window.CSS.escape(e.name));else try{s=n(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var o=Ni(s,e.form);return!o||o===e},Bi=function(e){return Ht(e)&&e.type==="radio"},Hi=function(e){return Bi(e)&&!Fi(e)},qi=function(e){var i,n=e&&Me(e),s=(i=n)===null||i===void 0?void 0:i.host,o=!1;if(n&&n!==e){var r,c,l;for(o=!!((r=s)!==null&&r!==void 0&&(c=r.ownerDocument)!==null&&c!==void 0&&c.contains(s)||e!=null&&(l=e.ownerDocument)!==null&&l!==void 0&&l.contains(e));!o&&s;){var h,v,y;n=Me(s),s=(h=n)===null||h===void 0?void 0:h.host,o=!!((v=s)!==null&&v!==void 0&&(y=v.ownerDocument)!==null&&y!==void 0&&y.contains(s))}}return o},zt=function(e){var i=e.getBoundingClientRect(),n=i.width,s=i.height;return n===0&&s===0},Wi=function(e,i){var n=i.displayCheck,s=i.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=he.call(e,"details>summary:first-of-type"),r=o?e.parentElement:e;if(he.call(r,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof s=="function"){for(var c=e;e;){var l=e.parentElement,h=Me(e);if(l&&!l.shadowRoot&&s(l)===!0)return zt(e);e.assignedSlot?e=e.assignedSlot:!l&&h!==e.ownerDocument?e=h.host:e=l}e=c}if(qi(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return zt(e);return!1},Zi=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var i=e.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var n=0;n<i.children.length;n++){var s=i.children.item(n);if(s.tagName==="LEGEND")return he.call(i,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}i=i.parentElement}return!1},Gi=function(e,i){return!(i.disabled||Oe(i)||zi(i)||Wi(i,e)||Vi(i)||Zi(i))},Vt=function(e,i){return!(Hi(i)||Bt(i)<0||!Gi(e,i))},Ki=function(e){var i=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(i)||i>=0)},Yi=function t(e){var i=[],n=[];return e.forEach(function(s,o){var r=!!s.scopeParent,c=r?s.scopeParent:s,l=Ri(c,r),h=r?t(s.candidates):c;l===0?r?i.push.apply(i,h):i.push(c):n.push({documentOrder:o,tabIndex:l,item:s,isScope:r,content:h})}),n.sort(Ui).reduce(function(s,o){return o.isScope?s.push.apply(s,o.content):s.push(o.content),s},[]).concat(i)},qt=function(e,i){i=i||{};var n;return i.getShadowRoot?n=ji([e],i.includeContainer,{filter:Vt.bind(null,i),flatten:!1,getShadowRoot:i.getShadowRoot,shadowRootFilter:Ki}):n=Ai(e,i.includeContainer,Vt.bind(null,i)),Yi(n)};var Ji=class{constructor(t){if(this.head=0,this.count=0,t<=0)throw new Error("CircularBuffer capacity must be greater than 0");this.capacity=t,this.buffer=new Array(t)}add(t){this.buffer[this.head]=t,this.head=(this.head+1)%this.capacity,this.count<this.capacity&&this.count++}getFirst(){if(this.count!==0)return this.count<this.capacity?this.buffer[0]:this.buffer[this.head]}getLast(){if(this.count!==0){if(this.count<this.capacity)return this.buffer[this.count-1];{let t=(this.head-1+this.capacity)%this.capacity;return this.buffer[t]}}}getFirstLast(){if(this.count===0)return[void 0,void 0];if(this.count===1){let i=this.count<this.capacity?this.buffer[0]:this.buffer[this.head];return[i,i]}let t=this.getFirst(),e=this.getLast();return[t,e]}resize(t){if(t<=0)throw new Error("CircularBuffer capacity must be greater than 0");if(t===this.capacity)return;let e=this.getAllItems();if(this.capacity=t,this.buffer=new Array(t),this.head=0,this.count=0,e.length>t){let i=e.slice(-t);for(let n of i)this.add(n)}else for(let i of e)this.add(i)}getAllItems(){if(this.count===0)return[];let t=new Array(this.count);if(this.count<this.capacity)for(let e=0;e<this.count;e++)t[e]=this.buffer[e];else{let e=this.head;for(let i=0;i<this.capacity;i++){let n=(e+i)%this.capacity;t[i]=this.buffer[n]}}return t}clear(){this.head=0,this.count=0}get length(){return this.count}get size(){return this.capacity}get isFull(){return this.count===this.capacity}get isEmpty(){return this.count===0}};function ee(t,e,i,n){return t<e?console.warn(`ForesightJS: "${n}" value ${t} is below minimum bound ${e}, clamping to ${e}`):t>i&&console.warn(`ForesightJS: "${n}" value ${t} is above maximum bound ${i}, clamping to ${i}`),Math.min(Math.max(t,e),i)}function Xi(t){let e=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight;return t.top<i&&t.bottom>0&&t.left<e&&t.right>0}function Wt(t){if(typeof t=="number"){let e=ee(t,0,2e3,"hitslop");return{top:e,left:e,right:e,bottom:e}}return{top:ee(t.top,0,2e3,"hitslop - top"),left:ee(t.left,0,2e3,"hitslop - left"),right:ee(t.right,0,2e3,"hitslop - right"),bottom:ee(t.bottom,0,2e3,"hitslop - bottom")}}function Ke(t,e){return{left:t.left-e.left,right:t.right+e.right,top:t.top-e.top,bottom:t.bottom+e.bottom}}function Zt(t,e){return!t||!e?t===e:t.left===e.left&&t.right===e.right&&t.top===e.top&&t.bottom===e.bottom}function Jt(t,e){return t.x>=e.left&&t.x<=e.right&&t.y>=e.top&&t.y<=e.bottom}function Qi(){let t=en(),e=tn();return{isTouchDevice:t,isLimitedConnection:e,shouldRegister:!t&&!e}}function en(){return window.matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0}function tn(){let t=navigator.connection;return t?/2g/.test(t.effectiveType)||t.saveData:!1}function Gt(t,e){return t!==void 0&&e!==t}function Xt(t,e,i){let n=0,s=1,o=e.x-t.x,r=e.y-t.y,c=(l,h)=>{if(l===0){if(h<0)return!1}else{let v=h/l;if(l<0){if(v>s)return!1;v>n&&(n=v)}else{if(v<n)return!1;v<s&&(s=v)}}return!0};return!c(-o,t.x-i.left)||!c(o,i.right-t.x)||!c(-r,t.y-i.top)||!c(r,i.bottom-t.y)?!1:n<=s}function nn(t,e,i){let n=performance.now(),s={point:t,time:n},{x:o,y:r}=t;if(e.add(s),e.length<2)return{x:o,y:r};let[c,l]=e.getFirstLast();if(!c||!l)return{x:o,y:r};let h=(l.time-c.time)*.001;if(h===0)return{x:o,y:r};let v=l.point.x-c.point.x,y=l.point.y-c.point.y,$=v/h,_=y/h,F=i*.001,Ci=o+$*F,Si=r+_*F;return{x:Ci,y:Si}}var Ye=class{constructor(t){this.elements=t.dependencies.elements,this.callCallback=t.dependencies.callCallback,this.emit=t.dependencies.emit,this.abortController=new AbortController}abort(){this.abortController.abort()}handleError(t,e){console.error(`${this.constructor.name} error in ${e}:`,t)}},sn=class extends Ye{constructor(t){super(t),this.pendingMouseEvent=null,this.rafId=null,this.handleMouseMove=e=>{this.pendingMouseEvent=e,!this.rafId&&(this.rafId=requestAnimationFrame(()=>{this.pendingMouseEvent&&this.processMouseMovement(this.pendingMouseEvent),this.rafId=null}))},this.enableMousePrediction=t.settings.enableMousePrediction,this.trajectoryPredictionTime=t.settings.trajectoryPredictionTime,this.positionHistorySize=t.settings.positionHistorySize,this.trajectoryPositions=t.trajectoryPositions,this.initializeListeners()}initializeListeners(){let{signal:t}=this.abortController;document.addEventListener("mousemove",this.handleMouseMove,{signal:t})}updatePointerState(t){let e={x:t.clientX,y:t.clientY};this.trajectoryPositions.currentPoint=e,this.enableMousePrediction?this.trajectoryPositions.predictedPoint=nn(e,this.trajectoryPositions.positions,this.trajectoryPredictionTime):this.trajectoryPositions.predictedPoint=e}cleanup(){this.abort(),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.pendingMouseEvent=null}processMouseMovement(t){try{this.updatePointerState(t);for(let e of this.elements.values()){if(!e.isIntersectingWithViewport)continue;let i=e.elementBounds.expandedRect;if(this.enableMousePrediction)Xt(this.trajectoryPositions.currentPoint,this.trajectoryPositions.predictedPoint,i)&&this.callCallback(e,{kind:"mouse",subType:"trajectory"});else if(Jt(this.trajectoryPositions.currentPoint,i)){this.callCallback(e,{kind:"mouse",subType:"hover"});return}}this.emit({type:"mouseTrajectoryUpdate",predictionEnabled:this.enableMousePrediction,trajectoryPositions:this.trajectoryPositions})}catch(e){this.handleError(e,"processMouseMovement")}}};function on(t,e){let i=e.top-t.top,n=e.left-t.left;return i<-1?"down":i>1?"up":n<-1?"right":n>1?"left":"none"}function rn(t,e,i){let{x:n,y:s}=t,o={x:n,y:s};switch(e){case"down":o.y+=i;break;case"up":o.y-=i;break;case"left":o.x-=i;break;case"right":o.x+=i;break;case"none":break;default:}return o}var Kt=class extends Ye{constructor(t){super(t),this.predictedScrollPoint=null,this.scrollDirection=null,this.scrollMargin=t.settings.scrollMargin,this.trajectoryPositions=t.trajectoryPositions}initializeListeners(){}cleanup(){this.abort(),this.resetScrollProps()}resetScrollProps(){this.scrollDirection=null,this.predictedScrollPoint=null}handleScrollPrefetch(t,e){if(t.isIntersectingWithViewport)try{if(this.scrollDirection=this.scrollDirection??on(t.elementBounds.originalRect,e),this.scrollDirection==="none")return;this.predictedScrollPoint=this.predictedScrollPoint??rn(this.trajectoryPositions.currentPoint,this.scrollDirection,this.scrollMargin),Xt(this.trajectoryPositions.currentPoint,this.predictedScrollPoint,t.elementBounds.expandedRect)&&this.callCallback(t,{kind:"scroll",subType:this.scrollDirection}),this.emit({type:"scrollTrajectoryUpdate",currentPoint:this.trajectoryPositions.currentPoint,predictedPoint:this.predictedScrollPoint,scrollDirection:this.scrollDirection})}catch(i){this.handleError(i,"handleScrollPrefetch")}}handleError(t,e){super.handleError(t,e),this.emit({type:"scrollTrajectoryUpdate",currentPoint:this.trajectoryPositions.currentPoint,predictedPoint:this.trajectoryPositions.currentPoint,scrollDirection:"none"})}};function an(t,e,i,n){if(e!==null&&e>-1){let s=t?e-1:e+1;if(s>=0&&s<i.length&&i[s]===n)return s}return i.findIndex(s=>s===n)}var Yt=class extends Ye{constructor(t){super(t),this.lastKeyDown=null,this.tabbableElementsCache=[],this.lastFocusedIndex=null,this.handleKeyDown=e=>{e.key==="Tab"&&(this.lastKeyDown=e)},this.handleFocusIn=e=>{try{if(!this.lastKeyDown)return;let i=e.target;if(!(i instanceof HTMLElement))return;(!this.tabbableElementsCache.length||this.lastFocusedIndex===-1)&&(this.tabbableElementsCache=qt(document.documentElement));let n=this.lastKeyDown.shiftKey,s=an(n,this.lastFocusedIndex,this.tabbableElementsCache,i);this.lastFocusedIndex=s,this.lastKeyDown=null;let o=[];for(let r=0;r<=this.tabOffset;r++){let c=n?s-r:s+r,l=this.tabbableElementsCache[c];l&&l instanceof Element&&this.elements.has(l)&&o.push(l)}o.forEach(r=>{let c=this.elements.get(r);c&&this.callCallback(c,{kind:"tab",subType:n?"reverse":"forwards"})})}catch(i){this.handleError(i,"handleFocusIn")}},this.tabOffset=t.settings.tabOffset,this.initializeListeners()}initializeListeners(){let{signal:t}=this.abortController;document.addEventListener("keydown",this.handleKeyDown,{signal:t}),document.addEventListener("focusin",this.handleFocusIn,{signal:t})}invalidateCache(){this.tabbableElementsCache=[],this.lastFocusedIndex=null}cleanup(){this.abort(),this.tabbableElementsCache=[],this.lastFocusedIndex=null,this.lastKeyDown=null}},f=class te{constructor(){this.elements=new Map,this.trajectoryPositions={positions:new Ji(8),currentPoint:{x:0,y:0},predictedPoint:{x:0,y:0}},this.isSetup=!1,this._globalCallbackHits={mouse:{hover:0,trajectory:0},tab:{forwards:0,reverse:0},scroll:{down:0,left:0,right:0,up:0},total:0},this._globalSettings={debug:!1,enableMousePrediction:!0,enableScrollPrediction:!0,positionHistorySize:8,trajectoryPredictionTime:120,scrollMargin:150,defaultHitSlop:{top:0,left:0,right:0,bottom:0},enableTabPrediction:!0,tabOffset:2},this.domObserver=null,this.positionObserver=null,this.eventListeners=new Map,this.mousePredictor=null,this.tabPredictor=null,this.scrollPredictor=null,this.handleDomMutations=e=>{e.length&&this.tabPredictor?.invalidateCache();for(let i of e)if(i.type==="childList"&&i.removedNodes.length>0)for(let n of this.elements.keys())n.isConnected||this.unregister(n,"disconnected")},this.handlePositionChange=e=>{for(let i of e){let n=this.elements.get(i.target);n&&(this._globalSettings.enableScrollPrediction?this.scrollPredictor?.handleScrollPrefetch(n,i.boundingClientRect):Jt(this.trajectoryPositions.currentPoint,n.elementBounds.expandedRect)&&this.callCallback(n,{kind:"mouse",subType:"hover"}),this.handlePositionChangeDataUpdates(n,i))}this._globalSettings.enableScrollPrediction&&this.scrollPredictor?.resetScrollProps()},this.handlePositionChangeDataUpdates=(e,i)=>{let n=[],s=i.isIntersecting;e.isIntersectingWithViewport!==s&&(n.push("visibility"),e.isIntersectingWithViewport=s),s&&(n.push("bounds"),e.elementBounds={hitSlop:e.elementBounds.hitSlop,originalRect:i.boundingClientRect,expandedRect:Ke(i.boundingClientRect,e.elementBounds.hitSlop)}),n.length&&this.emit({type:"elementDataUpdated",elementData:e,updatedProps:n})}}static initialize(e){return this.isInitiated||(te.manager=new te),e!==void 0&&te.manager.alterGlobalSettings(e),te.manager}addEventListener(e,i,n){if(n?.signal?.aborted)return()=>{};let s=this.eventListeners.get(e)??[];s.push(i),this.eventListeners.set(e,s),n?.signal?.addEventListener("abort",()=>this.removeEventListener(e,i))}removeEventListener(e,i){let n=this.eventListeners.get(e);if(!n)return;let s=n.indexOf(i);s>-1&&n.splice(s,1)}emit(e){let i=this.eventListeners.get(e.type);i&&i.forEach((n,s)=>{try{n(e)}catch(o){console.error(`Error in ForesightManager event listener ${s} for ${e.type}:`,o)}})}get getManagerData(){return{registeredElements:this.elements,globalSettings:this._globalSettings,globalCallbackHits:this._globalCallbackHits,eventListeners:this.eventListeners,historyPositions:this.trajectoryPositions}}static get isInitiated(){return!!te.manager}static get instance(){return this.initialize()}get registeredElements(){return this.elements}register({element:e,callback:i,hitSlop:n,name:s}){let{shouldRegister:o,isTouchDevice:r,isLimitedConnection:c}=Qi();if(!o)return{isLimitedConnection:c,isTouchDevice:r,isRegistered:!1,unregister:()=>{}};this.isSetup||this.initializeGlobalListeners();let l=e.getBoundingClientRect(),h=n?Wt(n):this._globalSettings.defaultHitSlop,v={element:e,callback:i,elementBounds:{originalRect:l,expandedRect:Ke(l,h),hitSlop:h},isHovering:!1,trajectoryHitData:{isTrajectoryHit:!1,trajectoryHitTime:0,trajectoryHitExpirationTimeoutId:void 0},name:s||e.id||"unnamed",isIntersectingWithViewport:Xi(l),isRunningCallback:!1,registerCount:(this.registeredElements.get(e)?.registerCount??0)+1};return this.elements.set(e,v),this.positionObserver?.observe(e),this.emit({type:"elementRegistered",timestamp:Date.now(),elementData:v}),{isTouchDevice:r,isLimitedConnection:c,isRegistered:!0,unregister:()=>this.unregister(e,"apiCall")}}unregister(e,i){if(!this.elements.has(e))return;let n=this.elements.get(e);n?.trajectoryHitData.trajectoryHitExpirationTimeoutId&&clearTimeout(n.trajectoryHitData.trajectoryHitExpirationTimeoutId),this.positionObserver?.unobserve(e),this.elements.delete(e);let s=this.elements.size===0&&this.isSetup;s&&this.removeGlobalListeners(),n&&this.emit({type:"elementUnregistered",elementData:n,timestamp:Date.now(),unregisterReason:i,wasLastElement:s})}updateNumericSettings(e,i,n,s){return Gt(e,this._globalSettings[i])?(this._globalSettings[i]=ee(e,n,s,i),!0):!1}updateBooleanSetting(e,i){return Gt(e,this._globalSettings[i])?(this._globalSettings[i]=e,!0):!1}alterGlobalSettings(e){let i=[],n=this._globalSettings.trajectoryPredictionTime;this.updateNumericSettings(e?.trajectoryPredictionTime,"trajectoryPredictionTime",10,200)&&i.push({setting:"trajectoryPredictionTime",oldValue:n,newValue:this._globalSettings.trajectoryPredictionTime});let s=this._globalSettings.positionHistorySize;this.updateNumericSettings(e?.positionHistorySize,"positionHistorySize",2,30)&&(i.push({setting:"positionHistorySize",oldValue:s,newValue:this._globalSettings.positionHistorySize}),this.trajectoryPositions.positions.resize(this._globalSettings.positionHistorySize));let o=this._globalSettings.scrollMargin;if(this.updateNumericSettings(e?.scrollMargin,"scrollMargin",30,300)){let v=this._globalSettings.scrollMargin;this.scrollPredictor&&(this.scrollPredictor.scrollMargin=v),i.push({setting:"scrollMargin",oldValue:o,newValue:v})}let r=this._globalSettings.tabOffset;this.updateNumericSettings(e?.tabOffset,"tabOffset",0,20)&&(this.tabPredictor&&(this.tabPredictor.tabOffset=this._globalSettings.tabOffset),i.push({setting:"tabOffset",oldValue:r,newValue:this._globalSettings.tabOffset}));let c=this._globalSettings.enableMousePrediction;this.updateBooleanSetting(e?.enableMousePrediction,"enableMousePrediction")&&i.push({setting:"enableMousePrediction",oldValue:c,newValue:this._globalSettings.enableMousePrediction});let l=this._globalSettings.enableScrollPrediction;this.updateBooleanSetting(e?.enableScrollPrediction,"enableScrollPrediction")&&(this._globalSettings.enableScrollPrediction?this.scrollPredictor=new Kt({dependencies:{callCallback:this.callCallback.bind(this),emit:this.emit.bind(this),elements:this.elements},settings:{scrollMargin:this._globalSettings.scrollMargin},trajectoryPositions:this.trajectoryPositions}):(this.scrollPredictor?.cleanup(),this.scrollPredictor=null),i.push({setting:"enableScrollPrediction",oldValue:l,newValue:this._globalSettings.enableScrollPrediction}));let h=this._globalSettings.enableTabPrediction;if(this.updateBooleanSetting(e?.enableTabPrediction,"enableTabPrediction")&&(i.push({setting:"enableTabPrediction",oldValue:h,newValue:this._globalSettings.enableTabPrediction}),this._globalSettings.enableTabPrediction?this.tabPredictor=new Yt({dependencies:{callCallback:this.callCallback.bind(this),emit:this.emit.bind(this),elements:this.elements},settings:{tabOffset:this._globalSettings.tabOffset}}):(this.tabPredictor?.cleanup(),this.tabPredictor=null)),e?.defaultHitSlop!==void 0){let v=this._globalSettings.defaultHitSlop,y=Wt(e.defaultHitSlop);Zt(v,y)||(this._globalSettings.defaultHitSlop=y,i.push({setting:"defaultHitSlop",oldValue:v,newValue:y}),this.forceUpdateAllElementBounds())}i.length>0&&this.emit({type:"managerSettingsChanged",timestamp:Date.now(),managerData:this.getManagerData,updatedSettings:i})}updateHitCounters(e){switch(e.kind){case"mouse":this._globalCallbackHits.mouse[e.subType]++;break;case"tab":this._globalCallbackHits.tab[e.subType]++;break;case"scroll":this._globalCallbackHits.scroll[e.subType]++;break;default:}this._globalCallbackHits.total++}callCallback(e,i){if(e.isRunningCallback)return;let n=()=>I(this,null,function*(){this.updateHitCounters(i),this.emit({type:"callbackInvoked",timestamp:Date.now(),elementData:e,hitType:i});let s=performance.now();try{yield e.callback(),this.emit({type:"callbackCompleted",timestamp:Date.now(),elementData:e,hitType:i,elapsed:performance.now()-s,status:"success"})}catch(o){let r=o instanceof Error?o.message:String(o);console.error(`Error in callback for element ${e.name} (${e.element.tagName}):`,o),this.emit({type:"callbackCompleted",timestamp:Date.now(),elementData:e,hitType:i,elapsed:performance.now()-s,status:"error",errorMessage:r})}this.unregister(e.element,"callbackHit")});e.isRunningCallback=!0,n()}initializeGlobalListeners(){if(this.isSetup||typeof window>"u"||typeof document>"u")return;let e=this._globalSettings,i={callCallback:this.callCallback.bind(this),emit:this.emit.bind(this),elements:this.elements};e.enableTabPrediction&&(this.tabPredictor=new Yt({dependencies:i,settings:{tabOffset:e.tabOffset}})),e.enableScrollPrediction&&(this.scrollPredictor=new Kt({dependencies:i,settings:{scrollMargin:e.scrollMargin},trajectoryPositions:this.trajectoryPositions})),this.mousePredictor=new sn({dependencies:i,settings:{enableMousePrediction:e.enableMousePrediction,trajectoryPredictionTime:e.trajectoryPredictionTime,positionHistorySize:e.positionHistorySize},trajectoryPositions:this.trajectoryPositions}),this.domObserver=new MutationObserver(this.handleDomMutations),this.domObserver.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1}),this.positionObserver=new Ut(this.handlePositionChange),this.isSetup=!0}removeGlobalListeners(){this.isSetup=!1,this.domObserver?.disconnect(),this.domObserver=null,this.positionObserver?.disconnect(),this.positionObserver=null,this.mousePredictor?.cleanup(),this.tabPredictor?.cleanup(),this.scrollPredictor?.cleanup()}forceUpdateAllElementBounds(){for(let[,e]of this.elements)e.isIntersectingWithViewport&&this.forceUpdateElementBounds(e)}forceUpdateElementBounds(e){let i=e.element.getBoundingClientRect(),n=Ke(i,e.elementBounds.hitSlop);if(!Zt(n,e.elementBounds.expandedRect)){let s=E(C({},e),{elementBounds:E(C({},e.elementBounds),{originalRect:i,expandedRect:n})});this.elements.set(e.element,s),this.emit({type:"elementDataUpdated",elementData:s,updatedProps:["bounds"]})}}};var dn=[],Qt=(()=>{class t{router;trees=dn;constructor(i){this.router=i}add(i){this.trees.push(i)}shouldPrefetch(i){let n=this.router.parseUrl(i);return this.trees.some(pn.bind(null,n))}static \u0275fac=function(n){return new(n||t)($e(ce))};static \u0275prov=We({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hn(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(i=>e[i]===t[i])}function pn(t,e){return hn(e.queryParams,t.queryParams)&&Xe(e.root,t.root,t.root.segments)}function Xe(t,e,i){if(t.segments.length>i.length){let n=t.segments.slice(0,i.length);return!(!Je(n,i)||e.hasChildren())}else if(t.segments.length===i.length){if(!Je(t.segments,i))return!1;if(!e.hasChildren())return!0;for(let n in e.children){if(!t.children[n])break;if(Xe(t.children[n],e.children[n],e.children[n].segments))return!0}return!1}else{let n=i.slice(0,t.segments.length),s=i.slice(t.segments.length);return!Je(t.segments,n)||!t.children[Te]?!1:Xe(t.children[Te],e,s)}}function Je(t,e){return t.length!==e.length?!1:t.every((i,n)=>i.path===e[n].path||i.path.startsWith(":")||e[n].path.startsWith(":"))}var ei=(()=>{class t{elementRef;router=_e(ce);registry=_e(Qt);preloader=_e(Pt);routerLink="";href="";name=void 0;unregisterRef=()=>{};constructor(i){this.elementRef=i}ngOnInit(){let{unregister:i}=f.instance.register({element:this.elementRef.nativeElement,name:this.name,callback:()=>{if(!this.routerLink&&!this.href)return;let n=this.router.parseUrl(this.routerLink||this.href);this.registry.add(n),this.preloader.preload().subscribe(()=>{})}});this.unregisterRef=i}ngOnDestroy(){this.unregisterRef()}static \u0275fac=function(n){return new(n||t)(vt(bt))};static \u0275dir=mt({type:t,selectors:[["","foresightjs",""],["","registerForesight",""]],inputs:{routerLink:"routerLink",href:"href",name:[0,"registerForesight","name"]},standalone:!0})}return t})(),gn=(t,e)=>{t=t.slice();let i=new Map,n=new Set;for(;t.length;){let r=t.shift();if(!r)continue;if(n.add(r),r===e)break;let c=r.children||[],l=r._loadedRoutes||[];for(let h of l)h&&h.children&&(c=c.concat(h.children));c.forEach(h=>{n.has(h)||(i.set(h,r),t.push(h))})}let s="",o=e;for(;o;)un(o)?s=`/${o.path}${s}`:s=`/(${o.outlet}:${o.path}${s})`,o=i.get(o);return s.replace(/[\/]+/,"/")};function un(t){return t.outlet===Te||!t.outlet}var ti=(()=>{class t{registry;router;loading=new Set;constructor(i,n){this.registry=i,this.router=n}preload(i,n){if(this.loading.has(i))return Ee;if(i.data&&i.data.preload===!1)return Ee;let s=gn(this.router.config,i);return this.registry.shouldPrefetch(s)?(this.loading.add(i),n()):Ee}static \u0275fac=function(n){return new(n||t)($e(Qt),$e(ce))};static \u0275prov=We({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ii={providers:[Et({eventCoalescing:!0}),Mt(Dt,Ot(ti))]};var Le=globalThis,De=Le.ShadowRoot&&(Le.ShadyCSS===void 0||Le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ni=new WeakMap,pe=class{constructor(e,i,n){if(this._$cssResult$=!0,n!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(De&&e===void 0){let n=i!==void 0&&i.length===1;n&&(e=ni.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ni.set(i,e))}return e}toString(){return this.cssText}},si=t=>new pe(typeof t=="string"?t:t+"",void 0,Qe),m=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new pe(i,t,Qe)},oi=(t,e)=>{if(De)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let n=document.createElement("style"),s=Le.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}},et=De?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let n of e.cssRules)i+=n.cssText;return si(i)})(t):t;var{is:mn,defineProperty:bn,getOwnPropertyDescriptor:fn,getOwnPropertyNames:vn,getOwnPropertySymbols:yn,getPrototypeOf:wn}=Object,Ie=globalThis,ri=Ie.trustedTypes,xn=ri?ri.emptyScript:"",Cn=Ie.reactiveElementPolyfillSupport,ge=(t,e)=>t,ue={toAttribute(t,e){switch(e){case Boolean:t=t?xn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ae=(t,e)=>!mn(t,e),ai={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:Ae};Symbol.metadata??=Symbol("metadata"),Ie.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=ai){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(e,n,i);s!==void 0&&bn(this.prototype,e,s)}}static getPropertyDescriptor(e,i,n){let{get:s,set:o}=fn(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get:s,set(r){let c=s?.call(this);o?.call(this,r),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ai}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let e=wn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let i=this.properties,n=[...vn(i),...yn(i)];for(let s of n)this.createProperty(s,i[s])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[n,s]of i)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[i,n]of this.elementProperties){let s=this._$Eu(i,n);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)i.unshift(et(s))}else e!==void 0&&i.push(et(e));return i}static _$Eu(e,i){let n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$ET(e,i){let n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:ue).toAttribute(i,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,i){let n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=n.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ue;this._$Em=s;let c=r.fromAttribute(i,o.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,i,n){if(e!==void 0){let s=this.constructor,o=this[e];if(n??=s.getPropertyOptions(e),!((n.hasChanged??Ae)(o,i)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:n,reflect:s,wrapped:o},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??i??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(i=void 0),this._$AL.set(e,i)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}_$EP(){return I(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,o]of n){let{wrapped:r}=o,c=this[s];r!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(i)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[ge("elementProperties")]=new Map,A[ge("finalized")]=new Map,Cn?.({ReactiveElement:A}),(Ie.reactiveElementVersions??=[]).push("2.1.1");var at=globalThis,je=at.trustedTypes,li=je?je.createPolicy("lit-html",{createHTML:t=>t}):void 0,ui="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,mi="?"+z,Sn=`<${mi}>`,q=document,be=()=>q.createComment(""),fe=t=>t===null||typeof t!="object"&&typeof t!="function",lt=Array.isArray,kn=t=>lt(t)||typeof t?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ci=/-->/g,di=/>/g,B=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hi=/'/g,pi=/"/g,bi=/^(?:script|style|textarea|title)$/i,ct=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),d=ct(1),qs=ct(2),Ws=ct(3),M=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),gi=new WeakMap,H=q.createTreeWalker(q,129);function fi(t,e){if(!lt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return li!==void 0?li.createHTML(e):e}var En=(t,e)=>{let i=t.length-1,n=[],s,o=e===2?"<svg>":e===3?"<math>":"",r=me;for(let c=0;c<i;c++){let l=t[c],h,v,y=-1,$=0;for(;$<l.length&&(r.lastIndex=$,v=r.exec(l),v!==null);)$=r.lastIndex,r===me?v[1]==="!--"?r=ci:v[1]!==void 0?r=di:v[2]!==void 0?(bi.test(v[2])&&(s=RegExp("</"+v[2],"g")),r=B):v[3]!==void 0&&(r=B):r===B?v[0]===">"?(r=s??me,y=-1):v[1]===void 0?y=-2:(y=r.lastIndex-v[2].length,h=v[1],r=v[3]===void 0?B:v[3]==='"'?pi:hi):r===pi||r===hi?r=B:r===ci||r===di?r=me:(r=B,s=void 0);let _=r===B&&t[c+1].startsWith("/>")?" ":"";o+=r===me?l+Sn:y>=0?(n.push(h),l.slice(0,y)+ui+l.slice(y)+z+_):l+z+(y===-2?c:_)}return[fi(t,o+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ve=class t{constructor({strings:e,_$litType$:i},n){let s;this.parts=[];let o=0,r=0,c=e.length-1,l=this.parts,[h,v]=En(e,i);if(this.el=t.createElement(h,n),H.currentNode=this.el.content,i===2||i===3){let y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(s=H.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let y of s.getAttributeNames())if(y.endsWith(ui)){let $=v[r++],_=s.getAttribute(y).split(z),F=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:F[2],strings:_,ctor:F[1]==="."?nt:F[1]==="?"?st:F[1]==="@"?ot:ne}),s.removeAttribute(y)}else y.startsWith(z)&&(l.push({type:6,index:o}),s.removeAttribute(y));if(bi.test(s.tagName)){let y=s.textContent.split(z),$=y.length-1;if($>0){s.textContent=je?je.emptyScript:"";for(let _=0;_<$;_++)s.append(y[_],be()),H.nextNode(),l.push({type:2,index:++o});s.append(y[$],be())}}}else if(s.nodeType===8)if(s.data===mi)l.push({type:2,index:o});else{let y=-1;for(;(y=s.data.indexOf(z,y+1))!==-1;)l.push({type:7,index:o}),y+=z.length-1}o++}}static createElement(e,i){let n=q.createElement("template");return n.innerHTML=e,n}};function ie(t,e,i=t,n){if(e===M)return e;let s=n!==void 0?i._$Co?.[n]:i._$Cl,o=fe(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(t),s._$AT(t,i,n)),n!==void 0?(i._$Co??=[])[n]=s:i._$Cl=s),s!==void 0&&(e=ie(t,s._$AS(t,e.values),s,n)),e}var it=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:i},parts:n}=this._$AD,s=(e?.creationScope??q).importNode(i,!0);H.currentNode=s;let o=H.nextNode(),r=0,c=0,l=n[0];for(;l!==void 0;){if(r===l.index){let h;l.type===2?h=new ye(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new rt(o,this,e)),this._$AV.push(h),l=n[++c]}r!==l?.index&&(o=H.nextNode(),r++)}return H.currentNode=q,s}p(e){let i=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}},ye=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,n,s){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ie(this,e,i),fe(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):kn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){let{values:i,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ve.createElement(fi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(i);else{let o=new it(s,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}_$AC(e){let i=gi.get(e.strings);return i===void 0&&gi.set(e.strings,i=new ve(e)),i}k(e){lt(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,n,s=0;for(let o of e)s===i.length?i.push(n=new t(this.O(be()),this.O(be()),this,this.options)):n=i[s],n._$AI(o),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ne=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,n,s,o){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,i=this,n,s){let o=this.strings,r=!1;if(o===void 0)e=ie(this,e,i,0),r=!fe(e)||e!==this._$AH&&e!==M,r&&(this._$AH=e);else{let c=e,l,h;for(e=o[0],l=0;l<o.length-1;l++)h=ie(this,c[n+l],i,l),h===M&&(h=this._$AH[l]),r||=!fe(h)||h!==this._$AH[l],h===k?e=k:e!==k&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},nt=class extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},st=class extends ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},ot=class extends ne{constructor(e,i,n,s,o){super(e,i,n,s,o),this.type=5}_$AI(e,i=this){if((e=ie(this,e,i,0)??k)===M)return;let n=this._$AH,s=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==k&&(n===k||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},rt=class{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}};var $n=at.litHtmlPolyfillSupport;$n?.(ve,ye),(at.litHtmlVersions??=[]).push("3.3.1");var vi=(t,e,i)=>{let n=i?.renderBefore??e,s=n._$litPart$;if(s===void 0){let o=i?.renderBefore??null;n._$litPart$=s=new ye(e.insertBefore(be(),o),o,void 0,i??{})}return s._$AI(t),s};var dt=globalThis,g=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vi(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};g._$litElement$=!0,g.finalized=!0,dt.litElementHydrateSupport?.({LitElement:g});var _n=dt.litElementPolyfillSupport;_n?.({LitElement:g});(dt.litElementVersions??=[]).push("4.2.1");var b=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Tn={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ae},Pn=(t=Tn,e,i)=>{let{kind:n,metadata:s}=i,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),n==="accessor"){let{name:r}=i;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(r,l,t)},init(c){return c!==void 0&&this.C(r,void 0,t,c),c}}}if(n==="setter"){let{name:r}=i;return function(c){let l=this[r];e.call(this,c),this.requestUpdate(r,l,t)}}throw Error("Unsupported decorator location: "+n)};function p(t){return(e,i)=>typeof i=="object"?Pn(t,e,i):((n,s,o)=>{let r=s.hasOwnProperty(o);return s.constructor.createProperty(o,n),r?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,i)}function u(t){return p(E(C({},t),{state:!0,attribute:!1}))}var W=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function yi(t,e){return(i,n,s)=>{let o=r=>r.renderRoot?.querySelector(t)??null;if(e){let{get:r,set:c}=typeof n=="object"?i:s??(()=>{let l=Symbol();return{get(){return this[l]},set(h){this[l]=h}}})();return W(i,n,{get(){let l=r.call(this);return l===void 0&&(l=o(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return W(i,n,{get(){return o(this)}})}}var Re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=t=>(...e)=>({_$litDirective$:t,values:e}),se=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};var ze=Ue(class extends se{constructor(t){if(super(t),t.type!==Re.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let i=t.element.classList;for(let n of this.st)n in e||(i.remove(n),this.st.delete(n));for(let n in e){let s=!!e[n];s===this.st.has(n)||this.nt?.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return M}});function*Ve(t,e){if(t!==void 0){let i=0;for(let n of t)yield e(n,i++)}}var wi="important",Mn=" !"+wi,Ne=Ue(class extends se{constructor(t){if(super(t),t.type!==Re.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){let{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(let n in e){let s=e[n];if(s!=null){this.ft.add(n);let o=typeof s=="string"&&s.endsWith(Mn);n.includes("-")||o?i.setProperty(n,o?s.slice(0,-11):s,o?wi:""):i[n]=s}}return M}});var On=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,a=(t,e,i,n)=>{for(var s=n>1?void 0:n?Ln(e,i):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&On(e,i,s),s},ht=class extends g{render(){return d`
      <div class="tab-bar-elements">
        <div class="tab-bar-info">
          <div class="stats-chips">
            <slot name="chips"></slot>
          </div>
        </div>
        <div class="tab-bar-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `}};ht.styles=[m`
      :host {
      }
      .tab-bar-info {
        display: flex;
        gap: 12px;
        align-items: center;
        flex: 1;
      }

      .stats-chips {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .chip {
        font-size: 11px;
        font-weight: 500;
        padding: 4px 8px;
        border: 1px solid #555;
        white-space: nowrap;
        letter-spacing: 0.3px;
        background: rgba(40, 40, 40, 0.7);
        color: #b0c4de;
      }

      .tab-bar-actions {
        display: flex;
        gap: 6px;
        align-items: center;
        position: relative;
        flex-direction: row;
      }
      .tab-bar-elements {
        display: flex;
        justify-content: space-between;
        padding: 4px 0 4px 0;
        border-bottom: 1px solid #444;
        position: sticky;
        top: 0;
        z-index: 5;
        min-height: 36px;
      }
    `],ht=a([b("tab-header")],ht);var we=class extends g{constructor(){super(...arguments),this.noContentMessage="No content available.",this.hasContent=!0}render(){return d`
      <div class="content-container">
        ${this.hasContent?d`<slot></slot>`:d`<div class="no-content-message">${this.noContentMessage}</div>`}
      </div>
    `}};we.styles=[m`
      :host {
        overflow: hidden;
      }

      .content-container::-webkit-scrollbar {
        width: 8px;
      }

      .content-container::-webkit-scrollbar-track {
        background: rgba(30, 30, 30, 0.5);
      }

      .content-container::-webkit-scrollbar-thumb {
        background-color: rgba(176, 196, 222, 0.5);
        border: 2px solid rgba(0, 0, 0, 0.2);
      }

      .content-container::-webkit-scrollbar-thumb:hover {
        background-color: rgba(176, 196, 222, 0.7);
      }

      .content-container {
        height: 100%;
        min-height: 150px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: rgba(176, 196, 222, 0.5) rgba(30, 30, 30, 0.5);
      }

      .no-content-message {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #afafaf;
        font-style: italic;
        font-family: "Courier New", monospace;
      }
    `],a([p({type:String,attribute:"no-content-message"})],we.prototype,"noContentMessage",2),a([p({type:Boolean})],we.prototype,"hasContent",2),we=a([b("tab-content")],we);var Se=class j extends g{constructor(){super(...arguments),this.isDropdownOpen=!1,this.dropdownOptions=[],this._toggleDropdown=e=>{e.stopPropagation(),this.isDropdownOpen?this._closeDropdown():(j.currentlyOpen&&j.currentlyOpen!==this&&j.currentlyOpen._closeDropdown(),this.isDropdownOpen=!0,j.currentlyOpen=this,requestAnimationFrame(()=>{this._positionDropdown()}))},this._handleOutsideClick=e=>{this.isDropdownOpen&&(e.composedPath().includes(this)||this._closeDropdown())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick),j.currentlyOpen===this&&(j.currentlyOpen=null)}_closeDropdown(){this.isDropdownOpen=!1,j.currentlyOpen===this&&(j.currentlyOpen=null)}_positionDropdown(){let e=this.shadowRoot?.querySelector(".trigger-button"),i=this.shadowRoot?.querySelector(".dropdown-menu");if(e&&i){let n=e.getBoundingClientRect(),s=i.offsetHeight||200,o=n.bottom+5,r=window.innerWidth-n.right;window.innerHeight-n.bottom<s&&n.top>s?i.style.top=`${n.top-s-5}px`:i.style.top=`${o}px`,i.style.right=`${r}px`}}render(){let e=`trigger-button ${this.isDropdownOpen?"active":""}`,i=`dropdown-menu ${this.isDropdownOpen?"active":""}`;return d`
      <div class="dropdown-container">
        <button
          class="${e}"
          title="${this._getTriggerTitle()}"
          @click="${this._toggleDropdown}"
          aria-haspopup="true"
          aria-expanded="${this.isDropdownOpen}"
          aria-controls="dropdown-menu"
          aria-label="${this._getTriggerLabel()}"
        >
          ${this._getTriggerIcon()}
          <svg
            class="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="${i}" id="dropdown-menu" role="menu">
          ${this.dropdownOptions.map(n=>d`
              <button
                value="${n.value}"
                title="${n.title}"
                class="${this._isOptionSelected(n)?"active":""}"
                @click="${()=>this._handleOptionClick(n)}"
                role="menuitem"
              >
                ${n.label}
              </button>
            `)}
        </div>
      </div>
    `}};Se.currentlyOpen=null,Se.styles=[m`
      :host {
        display: inline-block;
      }

      .dropdown-container {
        position: relative;
        display: inline-block;
      }

      .trigger-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: all 0.2s ease;
      }

      .trigger-button svg {
        width: 16px;
        height: 16px;
        stroke: white;
        transition: stroke 0.2s;
      }

      .trigger-button .arrow-icon {
        width: 10px;
        height: 10px;
        stroke: white;
        fill: none;
        stroke-width: 2;
        transition:
          transform 0.2s ease,
          stroke 0.2s;
      }

      .trigger-button:hover {
        background-color: rgba(176, 196, 222, 0.1);
      }

      .trigger-button:hover svg,
      .trigger-button:hover .arrow-icon {
        stroke: #b0c4de;
      }

      .trigger-button.active {
        background-color: rgba(176, 196, 222, 0.2);
      }

      .trigger-button.active svg {
        stroke: #b0c4de;
      }

      .trigger-button.active .arrow-icon {
        transform: rotate(180deg);
        stroke: #b0c4de;
      }

      .dropdown-menu {
        position: fixed;
        z-index: 9999;
        display: none;
        flex-direction: column;
        background-color: #3a3a3a;
        border: 1px solid #555;
        min-width: 200px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }

      .dropdown-menu.active {
        display: flex;
      }

      .dropdown-menu button {
        background: none;
        border: none;
        color: #ccc;
        font-size: 12px;
        text-align: left;
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }

      .dropdown-menu button:hover {
        background-color: #555;
        color: white;
      }

      .dropdown-menu button.active {
        color: #b0c4de;
        font-weight: bold;
        background-color: rgba(176, 196, 222, 0.1);
      }

      .dropdown-menu button.active::after {
        content: "✓";
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        color: #b0c4de;
        font-weight: bold;
      }
    `],a([u()],Se.prototype,"isDropdownOpen",2),a([p({type:Array})],Se.prototype,"dropdownOptions",2);var gt=Se,Fe=class extends gt{constructor(){super(...arguments),this.selectedOptionValue=""}connectedCallback(){super.connectedCallback(),this.dropdownOptions.length>0&&!this.selectedOptionValue&&(this.selectedOptionValue=this.dropdownOptions[0].value)}willUpdate(t){t.has("dropdownOptions")&&this.dropdownOptions.length>0&&!this.selectedOptionValue&&(this.selectedOptionValue=this.dropdownOptions[0].value)}_handleOptionClick(t){t.value!==this.selectedOptionValue&&(this.selectedOptionValue=t.value,this.onSelectionChange?.(t.value)),this._closeDropdown()}_getTriggerIcon(){let t=this._getSelectedOption();return t?t.icon:d``}_isOptionSelected(t){return t.value===this.selectedOptionValue}_getTriggerTitle(){let t=this._getSelectedOption();return t?t.title:"Change selection"}_getTriggerLabel(){let t=this._getSelectedOption();return t?`Current selection: ${t.label}`:"No selection"}_getSelectedOption(){return this.dropdownOptions.find(t=>t.value===this.selectedOptionValue)}};a([p({type:String})],Fe.prototype,"selectedOptionValue",2),a([p({type:Function})],Fe.prototype,"onSelectionChange",2),Fe=a([b("single-select-dropdown")],Fe);var Be=class extends g{constructor(){super(...arguments),this.title=""}render(){return d`
      <span class="chip" title="${this.title}">
        <slot></slot>
      </span>
    `}};Be.styles=[m`
      :host {
        display: inline-block;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        padding: 3px 8px;
        background-color: rgba(255, 255, 255, 0.05);
        color: #e8e8e8;
        font-size: 10px;
        font-weight: 500;
        white-space: nowrap;
        border: 1px solid rgba(255, 255, 255, 0.1);
        font-family: "SF Mono", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace;
        letter-spacing: 0.02em;
        line-height: 1.2;
        transition: all 0.2s ease;
      }
    `],a([p({type:String})],Be.prototype,"title",2),Be=a([b("chip-element")],Be);var Dn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="2" y="2" width="20" height="15" rx="2" ry="2"></rect>
    <line x1="2" y1="17" x2="22" y2="17"></line>
    <line x1="7" y1="21" x2="17" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
`,In=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
`,An=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
`,jn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2v8" />
    <path d="M12 10l-6 6" />
    <path d="M12 10l6 6" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
`,Rn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
`,Un=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
`,zn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
`,R=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </svg>
`,Vn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
`,Nn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
`,Fn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
`,Bn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    ></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
`,Hn=d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="12" r="3"></circle>
    <path d="M9 12h6"></path>
    <path d="M15 9l3 3-3 3"></path>
    <circle cx="12" cy="6" r="2"></circle>
    <circle cx="12" cy="18" r="2"></circle>
    <path d="M10 8l2-2 2 2"></path>
    <path d="M14 16l-2 2-2-2"></path>
  </svg>
`,Z=class extends g{constructor(){super(...arguments),this.title="Copy to clipboard",this.isCopied=!1,this.copyTimeout=null}handleClick(t){return I(this,null,function*(){if(!this.isCopied){if(this.onCopy)try{yield this.onCopy(t)}catch(e){console.error("Error in onCopy function:",e)}this.isCopied=!0,this.copyTimeout&&clearTimeout(this.copyTimeout),this.copyTimeout=setTimeout(()=>{this.isCopied=!1,this.copyTimeout=null},2e3)}})}disconnectedCallback(){super.disconnectedCallback(),this.copyTimeout&&(clearTimeout(this.copyTimeout),this.copyTimeout=null)}render(){return d`
      <button
        class="copy-button ${this.isCopied?"copied":""}"
        title="${this.title}"
        @click=${this.handleClick}
      >
        ${this.isCopied?Fn:Nn}
      </button>
    `}};Z.styles=m`
    .copy-button {
      background: transparent;
      border: 0px;
      cursor: pointer;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      transition:
        opacity 0.2s ease,
        background-color 0.2s ease;
    }

    :host([positioned]) .copy-button {
      position: absolute;
      top: 10px;
      right: 1px;
    }

    .copy-button:hover {
      background-color: rgba(176, 196, 222, 0.1);
    }

    .copy-button:hover svg {
      stroke: #b0c4de;
    }

    .copy-button svg {
      width: 14px;
      height: 14px;
      stroke: #ddd;
      stroke-width: 2.5;
    }

    .copy-button.copied svg {
      stroke: #4caf50;
    }
  `,a([p({type:String})],Z.prototype,"title",2),a([p({type:Function})],Z.prototype,"onCopy",2),a([u()],Z.prototype,"isCopied",2),a([u()],Z.prototype,"copyTimeout",2),Z=a([b("copy-icon")],Z);var V=class extends g{constructor(){super(...arguments),this.borderColor="#555",this.showCopyButton=!1,this.itemId="",this.isExpanded=!1}toggleExpand(){this.onToggle&&this.onToggle(this.itemId)}handleCopy(t){return I(this,null,function*(){t.stopPropagation();let e=this.shadowRoot?.querySelector('slot[name="details"]');if(e){let i=e.assignedNodes().map(n=>n.textContent).join("");try{yield navigator.clipboard.writeText(i)}catch(n){console.error("Failed to copy text: ",n)}}})}render(){return this.style.setProperty("--border-color",this.borderColor),d`
      <div class="item-entry ${this.isExpanded?"expanded":""}">
        <div class="item-header ${this.isExpanded?"expanded":""}" @click="${this.toggleExpand}">
          <div class="item-content">
            <slot name="content"></slot>
          </div>
          <span class="item-toggle ${this.isExpanded?"expanded":""}">
            <svg viewBox="0 0 24 24">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </span>
        </div>
        ${this.isExpanded?d`
              <div class="item-details">
                <copy-icon
                  positioned
                  title="Copy Details"
                  .onCopy=${t=>this.handleCopy(t)}
                ></copy-icon>
                <pre class="item-data">
                  <slot name="details"></slot>
                </pre>
              </div>
            `:""}
      </div>
    `}};V.styles=[m`
      :host {
        display: block;
      }

      .item-entry {
        margin-bottom: 2px;
        font-size: 11px;
        line-height: 1.3;
        overflow: hidden;
        transition: all 0.2s ease;
        border-left: 2px solid var(--border-color, #555);
        padding-left: 6px;
      }

      .item-entry:hover:not(.expanded) {
        background-color: rgba(255, 255, 255, 0.02);
      }

      .item-entry.expanded {
        background-color: rgba(255, 255, 255, 0.03);
      }

      .item-header {
        display: flex;
        align-items: center;
        padding: 3px 4px;
        cursor: pointer;
        transition: background-color 0.2s ease;
        gap: 8px;
        min-height: 20px;
      }

      .item-header:hover:not(.expanded) {
        background-color: rgba(255, 255, 255, 0.03);
      }

      .item-details {
        position: relative;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .item-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin-left: 4px;
        user-select: none;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 2px;
      }

      .item-toggle:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .item-toggle svg {
        width: 12px;
        height: 12px;
        fill: none;
        stroke: #b0c4de;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: all 0.2s ease;
      }

      .item-toggle:hover svg {
        stroke: #d4e4f4;
      }

      .item-toggle.expanded svg {
        transform: rotate(90deg);
      }

      .item-content {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        overflow: hidden;
      }

      .item-data {
        color: #e0e0e0;
        white-space: pre;
        font-size: 11px;
        margin: 0;
        padding: 0;
        font-family: "Courier New", monospace;
        line-height: 1.3;
        display: block;
        overflow-x: auto;
      }
    `],a([p()],V.prototype,"borderColor",2),a([p()],V.prototype,"showCopyButton",2),a([p()],V.prototype,"itemId",2),a([p()],V.prototype,"isExpanded",2),a([p()],V.prototype,"onToggle",2),V=a([b("expandable-item")],V);var G=class extends g{constructor(){super(...arguments),this.isActive=!1,this.isExpanded=!1}getBorderColor(){return this.isActive?"#ffeb3b":this.elementData.isIntersectingWithViewport?"#4caf50":"#666"}getStatusIndicatorClass(){return this.isActive?"prefetching":this.elementData.isIntersectingWithViewport?"visible":"hidden"}formatElementDetails(){let t={tagName:this.elementData.element.tagName.toLowerCase(),isIntersecting:this.elementData.isIntersectingWithViewport,registerCount:this.elementData.registerCount,hitSlop:{top:this.elementData.elementBounds.hitSlop.top,right:this.elementData.elementBounds.hitSlop.right,bottom:this.elementData.elementBounds.hitSlop.bottom,left:this.elementData.elementBounds.hitSlop.left}};return JSON.stringify(t,null,2)}render(){return d`
      <expandable-item
        .borderColor=${this.getBorderColor()}
        .showCopyButton=${!0}
        .itemId=${this.elementData.elementId}
        .isExpanded=${this.isExpanded}
        .onToggle=${this.onToggle}
      >
        <div slot="content" class="element-content">
          <div class="status-indicator ${this.getStatusIndicatorClass()}"></div>
          <span class="element-name ${this.isActive?"callback-active":""}">
            ${this.elementData.name||"unnamed"}
          </span>
        </div>
        <div slot="details">${this.formatElementDetails()}</div>
      </expandable-item>
    `}};G.styles=[m`
      :host {
        display: block;
      }

      .element-content {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
      }

      .status-indicator {
        width: 8px;
        height: 8px;
        flex-shrink: 0;
        transition: all 0.3s ease;
      }

      .status-indicator.visible {
        background-color: #4caf50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
      }

      .status-indicator.hidden {
        background-color: #666;
        box-shadow: 0 0 0 2px rgba(102, 102, 102, 0.2);
      }

      .status-indicator.prefetching {
        background-color: #ffeb3b;
        box-shadow: 0 0 0 2px rgba(255, 235, 59, 0.4);
      }

      .element-name {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 11px;
        font-weight: 500;
        color: #e8e8e8;
      }

      .element-name.callback-active {
        color: #fff;
        font-weight: 600;
      }
    `],a([p()],G.prototype,"elementData",2),a([p()],G.prototype,"isActive",2),a([p()],G.prototype,"isExpanded",2),a([p()],G.prototype,"onToggle",2),G=a([b("single-element")],G);var P=class extends g{constructor(){super(),this.hitCount={mouse:{hover:0,trajectory:0},scroll:{down:0,left:0,right:0,up:0},tab:{forwards:0,reverse:0},total:0},this.visibleElementsCount=0,this.totalElementsCount=0,this.elementListItems=new Map,this.noContentMessage="No Elements Registered To The Foresight Manager",this.activeCallbacks=new Set,this.expandedElementIds=new Set,this.elementIdCounter=0,this._abortController=null,this.handleSortChange=t=>{this.sortOrder=t},this.handleElementToggle=t=>{let e=new Set(this.expandedElementIds);e.has(t)?e.delete(t):e.add(t),this.expandedElementIds=e},this.sortByDocumentPosition=(t,e)=>{let i=t.element.compareDocumentPosition(e.element);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0},this.sortOrder=w.instance.devtoolsSettings.sortElementList,this.sortDropdown=[{value:"visibility",label:"Visibility",title:"Sort by Visibility",icon:Rn},{value:"documentOrder",label:"Document Order",title:"Sort by Document Order",icon:Un},{value:"insertionOrder",label:"Insertion Order",title:"Sort by Insertion Order",icon:zn}]}generateElementId(){return(++this.elementIdCounter).toString()}updateVisibilityCounts(){let t=0,e=0;this.elementListItems.forEach(i=>{e++,i.isIntersectingWithViewport&&t++}),this.visibleElementsCount=t,this.totalElementsCount=e,this.dispatchEvent(new CustomEvent("visibility-count-updated",{detail:{visibleCount:t,totalCount:e},bubbles:!0,composed:!0}))}_generateHitsChipTitle(t){let e=[];return e.push(`Total Hits: ${t.total}`),e.push(""),e.push(`Mouse: Trajectory: ${t.mouse.trajectory}, Hover: ${t.mouse.hover}`),e.push(`Scroll: Up: ${t.scroll.up}, Down: ${t.scroll.down}, Left: ${t.scroll.left}, Right: ${t.scroll.right}`),e.push(`Tab: Forwards: ${t.tab.forwards}, Reverse: ${t.tab.reverse}`),e.join(`
`)}connectedCallback(){super.connectedCallback(),this._abortController=new AbortController;let{signal:t}=this._abortController;this.updateElementListFromManager(),this.updateVisibilityCounts(),f.instance.addEventListener("elementRegistered",e=>{let i=E(C({},e.elementData),{elementId:this.generateElementId()});this.elementListItems.set(e.elementData.element,i),this.updateVisibilityCounts()},{signal:t}),f.instance.addEventListener("elementDataUpdated",e=>{let i=this.elementListItems.get(e.elementData.element);if(i){let n=E(C({},e.elementData),{elementId:i.elementId});this.elementListItems.set(e.elementData.element,n),this.updateVisibilityCounts(),this.requestUpdate()}},{signal:t}),f.instance.addEventListener("elementUnregistered",e=>{this.elementListItems.delete(e.elementData.element),this.updateVisibilityCounts(),this.elementListItems.size||(this.noContentMessage="No Elements Registered To The Foresight Manager"),this.requestUpdate(),this.activeCallbacks.delete(e.elementData.element)},{signal:t}),f.instance.addEventListener("callbackInvoked",e=>{this.activeCallbacks.add(e.elementData.element),this.requestUpdate()},{signal:t}),f.instance.addEventListener("callbackCompleted",e=>{this.handleCallbackCompleted(e.hitType),this.activeCallbacks.delete(e.elementData.element)},{signal:t})}disconnectedCallback(){super.disconnectedCallback(),this._abortController?.abort(),this._abortController=null}updateElementListFromManager(){let t=new Map;f.instance.registeredElements.forEach((e,i)=>{t.set(i,E(C({},e),{elementId:this.generateElementId()}))}),this.elementListItems=t}handleCallbackCompleted(t){switch(t.kind){case"mouse":this.hitCount.mouse[t.subType]++;break;case"tab":this.hitCount.tab[t.subType]++;break;case"scroll":this.hitCount.scroll[t.subType]++;break;default:}this.hitCount.total++,this.requestUpdate()}getSortedElements(){let t=Array.from(this.elementListItems.values());switch(this.sortOrder){case"insertionOrder":return t;case"documentOrder":return t.sort(this.sortByDocumentPosition);case"visibility":return t.sort((e,i)=>e.isIntersectingWithViewport!==i.isIntersectingWithViewport?e.isIntersectingWithViewport?-1:1:this.sortByDocumentPosition(e,i));default:return this.sortOrder,t}}render(){return d`
      <tab-header>
        <div slot="chips" class="chips-container">
          <chip-element title="Number of visible registered elements / total registered elements">
            ${this.visibleElementsCount}/${this.totalElementsCount} visible
          </chip-element>
          <chip-element title="${this._generateHitsChipTitle(this.hitCount)}">
            ${this.hitCount.total} hits
          </chip-element>
        </div>
        <div slot="actions">
          <single-select-dropdown
            .dropdownOptions="${this.sortDropdown}"
            .selectedOptionValue="${this.sortOrder}"
            .onSelectionChange="${this.handleSortChange}"
          ></single-select-dropdown>
        </div>
      </tab-header>
      <tab-content
        .noContentMessage=${this.noContentMessage}
        .hasContent=${!!this.elementListItems.size}
      >
        ${Ve(this.getSortedElements(),t=>d`
            <single-element
              .elementData=${t}
              .isActive=${this.activeCallbacks.has(t.element)}
              .isExpanded=${this.expandedElementIds.has(t.elementId)}
              .onToggle=${this.handleElementToggle}
            ></single-element>
          `)}
      </tab-content>
    `}};P.styles=m`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .chips-container {
      display: flex;
      gap: 8px;
    }

    .element-content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    .status-indicator.visible {
      background-color: #4caf50;
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
    }

    .status-indicator.hidden {
      background-color: #666;
      box-shadow: 0 0 0 2px rgba(102, 102, 102, 0.2);
    }

    .status-indicator.prefetching {
      background-color: #ffeb3b;
      box-shadow: 0 0 0 2px rgba(255, 235, 59, 0.4);
    }

    .element-name {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 11px;
      font-weight: 500;
      color: #e8e8e8;
    }

    .element-name.callback-active {
      color: #fff;
      font-weight: 600;
    }
  `,a([u()],P.prototype,"hitCount",2),a([u()],P.prototype,"visibleElementsCount",2),a([u()],P.prototype,"totalElementsCount",2),a([u()],P.prototype,"sortDropdown",2),a([u()],P.prototype,"sortOrder",2),a([u()],P.prototype,"elementListItems",2),a([u()],P.prototype,"noContentMessage",2),a([u()],P.prototype,"activeCallbacks",2),a([u()],P.prototype,"expandedElementIds",2),P=a([b("element-tab")],P);var He=class extends g{constructor(){super(...arguments),this.activeTab="settings",this.tabs=["settings","elements","logs"]}_handleTabClick(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t},bubbles:!0,composed:!0}))}render(){return d`
      <div class="tab-selector-wrapper">
        ${this.tabs.map(t=>d`
            <button
              class="tab-button ${this.activeTab===t?"active":""}"
              @click="${()=>this._handleTabClick(t)}"
              data-tab="${t}"
            >
              ${t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          `)}
      </div>
    `}};He.styles=m`
    .tab-selector-wrapper {
      border-bottom: 2px solid #444;
      margin-top: 12px;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    .tab-button {
      background: none;
      border: none;
      color: #9e9e9e;
      flex: 1;
      padding: 8px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      font-size: 13px;
      font-weight: 500;
      text-align: center;
    }
    .tab-button:hover {
      color: #b0c4de;
      background-color: rgba(176, 196, 222, 0.1);
    }

    .tab-button.active {
      color: #b0c4de;
      border-bottom-color: #b0c4de;
    }
  `,a([p({type:String})],He.prototype,"activeTab",2),He=a([b("tab-selector")],He);function qn(t,e){let i={};t.eventListeners.forEach((s,o)=>{i[o]=s.length});let n=[];return t.registeredElements.forEach((s,o)=>{let l=s,{element:r}=l,c=ke(l,["element"]);n.push(E(C({},c),{elementInfo:`${o.tagName.toLowerCase()}${o.id?`#${o.id}`:""}${o.className?`.${o.className.replace(/\s+/g,".")}`:""}`}))}),{type:"managerDataPayload",warning:"this is a lot easier to view in the console",logId:e,globalCallbackHits:t.globalCallbackHits,localizedTimestamp:new Date().toLocaleTimeString(),eventListenerCount:i,managerSettings:t.globalSettings,registeredElements:n,summary:`${n.length} elements, ${Object.values(i).flat().length} listeners,
  ${t.globalCallbackHits.total} hits`}}function Wn(t,e){try{switch(t.type){case"elementRegistered":return{type:"elementRegistered",name:t.elementData.name,id:t.elementData.element.id||"",registerCount:t.elementData.registerCount,hitslop:t.elementData.elementBounds.hitSlop,localizedTimestamp:new Date(t.timestamp).toLocaleTimeString(),logId:e,summary:t.elementData.registerCount===1?t.elementData.name:`${t.elementData.name} - ${Gn(t.elementData.registerCount)} time`};case"elementUnregistered":return{type:"elementUnregistered",name:t.elementData.name,id:t.elementData.element.id||"",registerCount:t.elementData.registerCount,unregisterReason:t.unregisterReason,wasLastElement:t.wasLastElement,localizedTimestamp:new Date(t.timestamp).toLocaleTimeString(),logId:e,summary:`${t.elementData.name} - ${t.unregisterReason}`};case"elementDataUpdated":return{type:"elementDataUpdated",name:t.elementData.name,updatedProps:t.updatedProps||[],isIntersecting:t.elementData.isIntersectingWithViewport,localizedTimestamp:new Date().toLocaleTimeString(),logId:e,summary:`${t.elementData.name} - ${t.updatedProps.toString()}`};case"callbackInvoked":return{type:"callbackInvoked",name:t.elementData.name,hitType:t.hitType,localizedTimestamp:new Date(t.timestamp).toLocaleTimeString(),logId:e,summary:`${t.elementData.name} - ${t.hitType.kind}`};case"callbackCompleted":{let i=Zn(t.elapsed);return E(C({type:"callbackCompleted"},t.status==="error"?{status:"error",errorMessage:t.errorMessage}:{status:"success"}),{name:t.elementData.name,hitType:t.hitType,callbackRunTimeFormatted:i,callbackRunTimeRaw:t.elapsed,localizedTimestamp:new Date(t.timestamp).toLocaleTimeString(),logId:e,summary:`${t.elementData.name} - ${i}`})}case"mouseTrajectoryUpdate":return{type:"mouseTrajectoryUpdate",currentPoint:t.trajectoryPositions?.currentPoint,predictedPoint:t.trajectoryPositions?.predictedPoint,positionCount:t.trajectoryPositions?.positions?.length||0,mousePredictionEnabled:t.predictionEnabled,localizedTimestamp:new Date().toLocaleTimeString(),logId:e,summary:""};case"scrollTrajectoryUpdate":return{type:"scrollTrajectoryUpdate",currentPoint:t.currentPoint,predictedPoint:t.predictedPoint,scrollDirection:t.scrollDirection,localizedTimestamp:new Date().toLocaleTimeString(),logId:e,summary:t.scrollDirection};case"managerSettingsChanged":return{type:"managerSettingsChanged",globalSettings:t.managerData?.globalSettings||{},settingsChanged:t.updatedSettings,localizedTimestamp:new Date(t.timestamp).toLocaleTimeString(),logId:e,summary:t.updatedSettings.map(i=>i.setting).join(", ")};default:return{type:"serializationError",error:"Failed to serialize event data",errorMessage:JSON.stringify(t),localizedTimestamp:new Date().toLocaleTimeString(),logId:e,summary:""}}}catch(i){return{type:"serializationError",error:"Failed to serialize event data",localizedTimestamp:new Date().toLocaleTimeString(),errorMessage:i instanceof Error?i.message:String(i),logId:e,summary:""}}}function Zn(t){return`${(t/1e3).toFixed(4)} s`}function Gn(t){let e=["th","st","nd","rd"],i=t%100;return t+(e[(i-20)%10]||e[i]||e[0])}var xe=class extends gt{constructor(){super(...arguments),this.selectedValues=[]}_handleOptionClick(t){let e=this.selectedValues.includes(t.value);e?this.selectedValues=this.selectedValues.filter(n=>n!==t.value):this.selectedValues=[...this.selectedValues,t.value];let i=!e;this.onSelectionChange?.(t.value,i)}_getTriggerIcon(){return R}_isOptionSelected(t){return this.selectedValues.includes(t.value)}_getTriggerTitle(){let t=this.selectedValues.length;return t===0?"No items selected":t===1?"1 item selected":`${t} items selected`}_getTriggerLabel(){return`Filter options: ${this.selectedValues.length} selected`}render(){let t=`trigger-button ${this.isDropdownOpen?"active":""}`,e=`dropdown-menu ${this.isDropdownOpen?"active":""}`;return d`
      <div class="dropdown-container">
        <button
          class="${t}"
          title="${this._getTriggerTitle()}"
          @click="${this._toggleDropdown}"
          aria-haspopup="true"
          aria-expanded="${this.isDropdownOpen}"
          aria-controls="dropdown-menu"
          aria-label="${this._getTriggerLabel()}"
        >
          ${this._getTriggerIcon()}
          <span class="selected-count">${this.selectedValues.length}</span>
          <svg
            class="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="${e}" id="dropdown-menu" role="menu">
          ${this.dropdownOptions.map(i=>d`
              <button
                value="${i.value}"
                title="${i.title}"
                class="${this._isOptionSelected(i)?"active":""}"
                @click="${()=>this._handleOptionClick(i)}"
                role="menuitem"
              >
                ${i.label}
              </button>
            `)}
        </div>
      </div>
    `}};xe.styles=[...gt.styles,m`
      .dropdown-menu button.active::after {
        content: "✓";
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        color: #b0c4de;
        font-weight: bold;
      }

      .selected-count {
        font-size: 10px;
        color: #b0c4de;
        margin-left: 2px;
      }
    `],a([p({type:Array})],xe.prototype,"selectedValues",2),a([p()],xe.prototype,"onSelectionChange",2),xe=a([b("multi-select-dropdown")],xe);var oe=class extends g{constructor(t){super(),this.isExpanded=!1,this.log=t}updated(t){if(t.has("log")&&this.log){let e=this.log,i=e.type==="callbackCompleted"&&"status"in e&&e.status==="error",n=i?"#f44336":this.getLogTypeColor(e.type),s=i?"rgba(244, 67, 54, 0.1)":"transparent";this.style.setProperty("--log-color",n),this.style.setProperty("--log-background-color",s)}}serializeLogDataWithoutSummary(t){let n=t,{summary:e}=n,i=ke(n,["summary"]);return JSON.stringify(i,null,2)}getLogTypeColor(t){return{elementRegistered:"#2196f3",callbackInvoked:"#00bcd4",callbackCompleted:"#4caf50",elementDataUpdated:"#ffc107",elementUnregistered:"#ff9800",managerSettingsChanged:"#f44336",mouseTrajectoryUpdate:"#78909c",scrollTrajectoryUpdate:"#607d8b"}[t]||"#555"}getEventDisplayName(t){return{elementRegistered:"Registered",elementUnregistered:"Unregistered",elementDataUpdated:"Data Updated",callbackInvoked:"Invoked",callbackCompleted:"Completed",mouseTrajectoryUpdate:"Mouse",scrollTrajectoryUpdate:"Scroll",managerSettingsChanged:"Settings",managerDataPayload:"ManagerData"}[t]||t}truncateLogSummary(t,e=50){return t.length<=e?t:t.substring(0,e)+"..."}render(){let t=this.log,e=t.type==="callbackCompleted"&&"status"in t&&t.status==="error"?"#f44336":this.getLogTypeColor(t.type);return d`
      <expandable-item
        .borderColor=${e}
        .itemId=${t.logId}
        .isExpanded=${this.isExpanded}
        .onToggle=${this.onToggle}
      >
        <div slot="content">
          <div class="log-content">
            <span class="log-time">${t.localizedTimestamp}</span>
            <span class="log-type-badge">${this.getEventDisplayName(t.type)}</span>
            <span class="log-summary">${this.truncateLogSummary(t.summary)}</span>
          </div>
        </div>
        <div slot="details">${this.serializeLogDataWithoutSummary(t)}</div>
      </expandable-item>
    `}};oe.styles=[m`
      :host {
        display: block;
        /*
         * The background color is now driven by a CSS variable.
         * This allows us to set it from TypeScript without touching the class.
         */
        background-color: var(--log-background-color, transparent);
      }

      .log-time {
        color: #b8b8b8;
        font-weight: 500;
        font-size: 10px;
        font-family: "SF Mono", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace;
        min-width: 70px;
        max-width: 70px;
        text-align: left;
        letter-spacing: 0.02em;
        flex-shrink: 0;
      }

      .log-type-badge {
        display: inline-flex;
        align-items: center;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        /* The color is driven by a CSS variable set in updated() */
        color: var(--log-color, #b0c4de);
        min-width: 90px;
        max-width: 90px;
        white-space: nowrap;
        text-align: left;
        margin-left: 10px;
        flex-shrink: 0;
      }

      .log-summary {
        flex: 1;
        color: #ccc;
        font-size: 11px;
        opacity: 0.9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 6px;
        font-weight: 400;
        min-width: 0;
      }

      .log-content {
        display: flex;
        align-items: center;
        width: 100%;
        min-width: 0;
      }

      /*
       * The :host(.error-status) selector is no longer needed,
       * as all styling is now handled by setting CSS variables below.
       * This makes the component's styling more self-contained.
       */
    `],a([p({attribute:!1})],oe.prototype,"log",2),a([p({type:Boolean})],oe.prototype,"isExpanded",2),a([p()],oe.prototype,"onToggle",2),oe=a([b("single-log")],oe);var D=class extends g{constructor(){super(),this.logs=[],this.expandedLogIds=new Set,this.MAX_LOGS=100,this.logIdCounter=0,this.noContentMessage="No logs available",this._abortController=null,this._eventListeners=new Map,this.handleLogLocationChange=s=>{this.logLocation=s},this.handleFilterChange=(s,o)=>{this.eventsEnabled=E(C({},this.eventsEnabled),{[s]:o}),o?this.addForesightEventListener(s):this.removeForesightEventListener(s)},this.handleLogToggle=s=>{let o=new Set(this.expandedLogIds);o.has(s)?o.delete(s):o.add(s),this.expandedLogIds=o};let{logging:i}=w.instance.devtoolsSettings,n=i,{logLocation:t}=n,e=ke(n,["logLocation"]);this.eventsEnabled=e,this.logLocation=t,this.logDropdown=[{value:"controlPanel",label:"Control Panel",title:"Log only to the control panel",icon:Dn},{value:"console",label:"Console",title:"Log only to the console",icon:In},{value:"both",label:"Both",title:"Log to both the control panel and the console",icon:jn},{value:"none",label:"None",title:"Dont log anywhere",icon:An}],this.filterDropdown=[{value:"elementRegistered",label:"Element Registered",title:"Show element registration events",icon:R},{value:"elementUnregistered",label:"Element Unregistered",title:"Show element unregistration events",icon:R},{value:"elementDataUpdated",label:"Element Data Updated",title:"Show element data update events",icon:R},{value:"callbackInvoked",label:"Callback Invoked",title:"Show callback invoked events",icon:R},{value:"callbackCompleted",label:"Callback Completed",title:"Show callback completed events",icon:R},{value:"mouseTrajectoryUpdate",label:"Mouse Trajectory Update",title:"Show mouse trajectory update events",icon:R},{value:"scrollTrajectoryUpdate",label:"Scroll Trajectory Update",title:"Show scroll trajectory update events",icon:R},{value:"managerSettingsChanged",label:"Manager Settings Changed",title:"Show manager settings change events",icon:R}]}getSelectedEventFilters(){return Object.entries(this.eventsEnabled).filter(([,t])=>t).map(([t])=>t)}shouldShowPerformanceWarning(){let t=this.logLocation==="console"||this.logLocation==="both",e=this.eventsEnabled.mouseTrajectoryUpdate||this.eventsEnabled.scrollTrajectoryUpdate||this.eventsEnabled.elementDataUpdated;return t&&e}getNoLogsMessage(){return Object.values(this.eventsEnabled).filter(Boolean).length===0?"Logging for all events is turned off":this.logLocation==="console"?"No logs to display. Logging location is set to console - check browser console for events.":this.logLocation==="none"?"No logs to display. Logging location is set to none":"Interact with Foresight to generate events."}clearLogs(){this.logs=[],this.expandedLogIds.clear(),this.noContentMessage="Logs cleared"}connectedCallback(){super.connectedCallback(),this._abortController=new AbortController,this.setupDynamicEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this._abortController?.abort(),this.removeAllEventListeners()}setupDynamicEventListeners(){Object.entries(this.eventsEnabled).forEach(([t,e])=>{e&&this.addForesightEventListener(t)})}addForesightEventListener(t){if(this._eventListeners.has(t))return;let e=i=>{this.handleEvent(t,i)};this._eventListeners.set(t,e),f.instance.addEventListener(t,e,{signal:this._abortController?.signal})}removeForesightEventListener(t){let e=this._eventListeners.get(t);e&&(f.instance.removeEventListener(t,e),this._eventListeners.delete(t))}removeAllEventListeners(){this._eventListeners.forEach((t,e)=>{f.instance.removeEventListener(e,t)}),this._eventListeners.clear()}getEventColor(t){return{elementRegistered:"#2196f3",callbackInvoked:"#00bcd4",callbackCompleted:"#4caf50",elementDataUpdated:"#ffc107",elementUnregistered:"#ff9800",managerSettingsChanged:"#f44336",mouseTrajectoryUpdate:"#78909c",scrollTrajectoryUpdate:"#607d8b"}[t]||"#ffffff"}handleEvent(t,e){if(this.logLocation!=="none"){if(this.logLocation==="console"||this.logLocation==="both"){let i=this.getEventColor(t);console.log(`%c[ForesightJS] ${t}`,`color: ${i}; font-weight: bold;`,e)}(this.logLocation==="controlPanel"||this.logLocation==="both")&&this.addEventLog(e)}}addLog(t){this.logs.unshift(t),this.logs.length>this.MAX_LOGS&&this.logs.pop(),this.requestUpdate()}logManagerData(){this.logLocation!=="none"&&((this.logLocation==="console"||this.logLocation==="both")&&console.log(f.instance.getManagerData),(this.logLocation==="controlPanel"||this.logLocation==="both")&&this.addManagerLog())}addManagerLog(){let t=qn(f.instance.getManagerData,(++this.logIdCounter).toString());this.addLog(t)}addEventLog(t){let e=Wn(t,(++this.logIdCounter).toString());if(e.type==="serializationError"){console.error(e.error,e.errorMessage);return}this.addLog(e)}render(){return d`
      <tab-header>
        <div slot="chips" class="chips-container">
          <chip-element title="Number of logged events (Max ${this.MAX_LOGS})">
            ${this.logs.length} events
          </chip-element>
        </div>
        <div slot="actions">
          ${this.shouldShowPerformanceWarning()?d`
                <div
                  class="warning-container"
                  title="Console logging can be slow with frequent trajectory events.
Consider using 'Control Panel' only for better performance."
                >
                  ${Bn}
                </div>
              `:""}
          <single-select-dropdown
            .dropdownOptions="${this.logDropdown}"
            .selectedOptionValue="${this.logLocation}"
            .onSelectionChange="${this.handleLogLocationChange}"
          ></single-select-dropdown>

          <multi-select-dropdown
            .dropdownOptions="${this.filterDropdown}"
            .selectedValues="${this.getSelectedEventFilters()}"
            .onSelectionChange="${this.handleFilterChange}"
          ></multi-select-dropdown>
          <button
            class="single-button"
            title="Log the state from the manager"
            @click="${this.logManagerData}"
          >
            ${Hn}
          </button>
          <button
            class="single-button"
            title="Clear all logs"
            ?disabled="${this.logs.length===0}"
            @click="${this.clearLogs}"
          >
            ${Vn}
          </button>
        </div>
      </tab-header>
      <tab-content .noContentMessage=${this.noContentMessage} .hasContent=${!!this.logs.length}>
        ${this.logs.length===0?d`<div class="no-items">${this.getNoLogsMessage()}</div>`:Ve(this.logs,t=>d`
                <single-log
                  .log=${t}
                  .isExpanded=${this.expandedLogIds.has(t.logId)}
                  .onToggle=${this.handleLogToggle}
                ></single-log>
              `)}
      </tab-content>
    `}};D.styles=[m`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .chips-container {
        display: flex;
        gap: 4px;
      }

      .single-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        vertical-align: top;
      }

      .single-button svg {
        width: 16px;
        height: 16px;
        stroke: white;
        transition: stroke 0.2s;
      }

      .single-button:hover {
        background-color: rgba(176, 196, 222, 0.1);
      }

      .single-button:hover svg {
        stroke: #b0c4de;
      }

      .single-button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .single-button:disabled:hover {
        background: none;
      }

      .single-button:disabled svg {
        stroke: #666;
      }

      .no-items {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        text-align: center;
        font-family: "Courier New", monospace;
        font-style: italic;
        padding: 20px;
        color: #999;
      }

      .warning-container {
        background: none;
        border: none;
        color: #ffc107;
        cursor: help;
        padding: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        vertical-align: top;
      }

      .warning-container svg {
        width: 16px;
        height: 16px;
        stroke: #ffc107;
        fill: none;
        transition: stroke 0.2s;
      }

      .warning-container:hover {
        background-color: rgba(255, 193, 7, 0.1);
      }

      .warning-container:hover svg {
        stroke: #ffdc3e;
      }
    `],a([u()],D.prototype,"logDropdown",2),a([u()],D.prototype,"filterDropdown",2),a([u()],D.prototype,"logLocation",2),a([u()],D.prototype,"eventsEnabled",2),a([u()],D.prototype,"logs",2),a([u()],D.prototype,"expandedLogIds",2),a([p()],D.prototype,"noContentMessage",2),D=a([b("log-tab")],D);var xi="points",Kn="px",Yn="tabs",Jn="ms",Ce=class extends g{constructor(){super(...arguments),this.header="",this.description=""}render(){return d`<div class="setting-item">
      <label>
        <span class="setting-header">${this.header}</span>
        <span class="setting-description"> ${this.description} </span>
      </label>
      <div class="setting-controls">
        <slot name="controls"></slot>
      </div>
    </div>`}};Ce.styles=[m`
      .setting-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(80, 80, 80, 0.2);
      }

      .setting-item:last-child {
        border-bottom: none;
      }
      .setting-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }
      .setting-description {
        font-size: 11px;
        color: #9e9e9e;
        line-height: 1.3;
        font-weight: normal;
      }
      .setting-item label {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-weight: 500;
        color: #fff;
        font-size: 13px;
        cursor: pointer;
        min-width: 180px;
      }
      .setting-header {
        font-weight: 500;
        color: #fff;
        font-size: 13px;
      }
    `],a([p({type:String})],Ce.prototype,"header",2),a([p({type:String})],Ce.prototype,"description",2),Ce=a([b("setting-item")],Ce);var K=class extends g{constructor(){super(...arguments),this.isChecked=!1,this.header="",this.description="",this.setting="enableMousePrediction"}handleCheckboxChange(t){let e=t.target;if(e instanceof HTMLInputElement){let i=e.checked;this.setting==="showNameTags"?this.dispatchEvent(new CustomEvent("setting-changed",{detail:{setting:this.setting,value:i},bubbles:!0})):f.instance.alterGlobalSettings({[this.setting]:i})}}render(){return d`<setting-item header=${this.header} description=${this.description}>
      <input
        slot="controls"
        type="checkbox"
        .checked=${this.isChecked}
        @change=${this.handleCheckboxChange}
      />
    </setting-item>`}};K.styles=[m`
      input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        width: 44px;
        height: 22px;
        background-color: #444;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease;
        vertical-align: middle;
        flex-shrink: 0;
        margin: 0;
        border: 2px solid #555;
      }

      input[type="checkbox"]::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: white;
        top: 1px;
        left: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }

      input[type="checkbox"]:checked {
        background-color: #b0c4de;
        border-color: #b0c4de;
      }

      input[type="checkbox"]:checked::before {
        transform: translateX(22px);
        background-color: white;
      }

      input[type="checkbox"]:hover {
        box-shadow: 0 0 0 3px rgba(176, 196, 222, 0.1);
      }
    `],a([p({type:Boolean})],K.prototype,"isChecked",2),a([p({type:String})],K.prototype,"header",2),a([p({type:String})],K.prototype,"description",2),a([p({type:String})],K.prototype,"setting",2),K=a([b("setting-item-checkbox")],K);var O=class extends g{constructor(){super(...arguments),this.minValue=0,this.maxValue=100,this.currentValue=50,this.unit="px",this.header="",this.description="",this.setting="tabOffset",this.displayValue=50}handleRangeInput(t){let e=t.target;e instanceof HTMLInputElement&&(this.displayValue=parseInt(e.value,10))}handleRangeChange(t){let e=t.target;if(e instanceof HTMLInputElement){let i=parseInt(e.value,10);this.displayValue=i,f.instance.alterGlobalSettings({[this.setting]:i})}}willUpdate(t){super.willUpdate(t),t.has("currentValue")&&(this.displayValue=this.currentValue)}render(){return d`<setting-item header=${this.header} description=${this.description}>
      <div slot="controls" class="range-wrapper">
        <input
          slot="controls"
          type="range"
          min="${this.minValue}"
          max="${this.maxValue}"
          step="1"
          .value=${this.displayValue}
          @input=${this.handleRangeInput}
          @change=${this.handleRangeChange}
        />
        <span class="setting-range-value">${this.displayValue} ${this.unit}</span>
      </div>
    </setting-item>`}};O.styles=[m`
      .setting-range-value {
        font-size: 12px;
        color: #b0c4de;
        font-weight: 500;
        min-width: 45px;
        text-align: right;
      }

      .range-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
      }

      input[type="range"] {
        margin: 0;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        height: 22px;
        vertical-align: middle;
        width: 100px;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        height: 6px;
        background: #444;
        border: 1px solid #555;
      }

      input[type="range"]::-moz-range-track {
        height: 6px;
        background: #444;
        border: 1px solid #555;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -7px;
        background: #b0c4de;
        height: 20px;
        width: 20px;
        border: 2px solid #333;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        transition: all 0.2s ease;
      }

      input[type="range"]::-moz-range-thumb {
        background: #b0c4de;
        height: 20px;
        width: 20px;
        border: 2px solid #333;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        transition: all 0.2s ease;
      }

      input[type="range"]:hover::-webkit-slider-thumb {
        transform: scale(1.1);
        box-shadow: 0 0 0 4px rgba(176, 196, 222, 0.2);
      }

      input[type="range"]:hover::-moz-range-thumb {
        transform: scale(1.1);
        box-shadow: 0 0 0 4px rgba(176, 196, 222, 0.2);
      }
    `],a([p({type:Number})],O.prototype,"minValue",2),a([p({type:Number})],O.prototype,"maxValue",2),a([p({type:Number})],O.prototype,"currentValue",2),a([p({type:String})],O.prototype,"unit",2),a([p({type:String})],O.prototype,"header",2),a([p({type:String})],O.prototype,"description",2),a([p({type:String})],O.prototype,"setting",2),a([u()],O.prototype,"displayValue",2),O=a([b("setting-item-range")],O);var Y=class extends g{constructor(){super(),this.changedSettings=[],this._abortController=null;let t=w.instance.devtoolsSettings,e=f.instance.getManagerData.globalSettings;this.devtoolsSettings=Object.assign({},t),this.managerSettings=Object.assign({},e),this.initialSettings={devtools:Object.assign({},t),manager:Object.assign({},e)}}connectedCallback(){super.connectedCallback(),this._abortController=new AbortController;let{signal:t}=this._abortController;f.instance.addEventListener("managerSettingsChanged",e=>{this.managerSettings=e.managerData.globalSettings,this._updateChangedSettings()},{signal:t}),this._updateChangedSettings()}disconnectedCallback(){super.disconnectedCallback(),this._abortController?.abort(),this._abortController=null}_updateChangedSettings(){let t=[];this._checkManagerSettingsChanges(t),this._checkDevtoolsSettingsChanges(t),this.changedSettings=t}_checkManagerSettingsChanges(t){let e=["enableMousePrediction","enableTabPrediction","enableScrollPrediction","trajectoryPredictionTime","positionHistorySize","tabOffset","scrollMargin"];for(let i of e){let n=this.initialSettings.manager[i],s=this.managerSettings[i];n!==s&&t.push({setting:i,oldValue:n,newValue:s})}}_checkDevtoolsSettingsChanges(t){let e=["showNameTags"];for(let i of e){let n=this.initialSettings.devtools[i],s=this.devtoolsSettings[i];n!==s&&t.push({setting:i,oldValue:n,newValue:s})}}_handleDevtoolsSettingChange(t){let{setting:e,value:i}=t.detail;e==="showNameTags"&&(this.devtoolsSettings=E(C({},this.devtoolsSettings),{showNameTags:i}),w.instance.alterDevtoolsSettings({showNameTags:i}),this._updateChangedSettings())}handleCopySettings(){return I(this,null,function*(){if(this.managerSettings)try{let t=this.generateSettingsCode(this.managerSettings);navigator.clipboard&&navigator.clipboard.writeText&&(yield navigator.clipboard.writeText(t))}catch(t){console.error("Failed to copy settings code:",t)}})}generateSettingsCode(t){let e={enableMousePrediction:t.enableMousePrediction,enableTabPrediction:t.enableTabPrediction,enableScrollPrediction:t.enableScrollPrediction,positionHistorySize:t.positionHistorySize,trajectoryPredictionTime:t.trajectoryPredictionTime,tabOffset:t.tabOffset,scrollMargin:t.scrollMargin};return`ForesightManager.initialize(${JSON.stringify(e,null,2)})`}render(){if(!this.managerSettings||!this.devtoolsSettings)return d`<tab-content
        .noContentMessage=${"Loading settings..."}
        .hasContent=${!1}
      ></tab-content>`;let t=this.managerSettings,e=this.changedSettings.length>0?`Settings that have been changed this session compared to your initialized settings.
Click on the copy icon to easely copy the new setting into your project

`+this.changedSettings.map(i=>`${i.setting}: ${JSON.stringify(i.oldValue)} -> ${JSON.stringify(i.newValue)}`).join(`
`):"No settings changed from initial values";return d`
      <tab-header>
        <div slot="chips" class="chips-container">
          <chip-element .title=${e}> ${this.changedSettings.length} changed </chip-element>
        </div>
        <div slot="actions">
          <copy-icon
            title="Copy current settings as code"
            .onCopy=${()=>this.handleCopySettings()}
          ></copy-icon>
        </div>
      </tab-header>

      <tab-content .hasContent=${!0}>
        <div class="settings-content">
          <div class="settings-section">
            <div class="settings-group">
              <h4>Mouse Prediction</h4>
              <setting-item-checkbox
                .isChecked=${t.enableMousePrediction}
                header="Enable Mouse Prediction"
                description="Execute callbacks when mouse is ${t.trajectoryPredictionTime}ms away from registered elements in mouse direction"
                setting="enableMousePrediction"
              ></setting-item-checkbox>
              <setting-item-range
                .currentValue=${t.trajectoryPredictionTime}
                .maxValue=${200}
                .minValue=${10}
                .unit=${Jn}
                header="Prediction Time"
                description="How far into the future to calculate mouse trajectory path"
                setting="trajectoryPredictionTime"
              ></setting-item-range>
              <setting-item-range
                .currentValue=${t.positionHistorySize}
                .maxValue=${30}
                .minValue=${2}
                .unit=${xi}
                header="Position History Size"
                description="How far into the future, in ${xi}, to calculate mouse trajectory path"
                setting="positionHistorySize"
              >
              </setting-item-range>
            </div>
            <div class="settings-group">
              <h4>Keyboard Navigation</h4>
              <setting-item-checkbox
                .isChecked=${t.enableTabPrediction}
                header="Enable Tab Prediction"
                description="Execute callbacks when user ${t.tabOffset} tabbable elements away from registered elements in tab direction"
                setting="enableTabPrediction"
              >
              </setting-item-checkbox>
              <setting-item-range
                .currentValue=${t.tabOffset}
                .maxValue=${20}
                .minValue=${0}
                .unit=${Yn}
                header="Tab Offset"
                description="Number of tabbable elements to look ahead when predicting navigation"
                setting="tabOffset"
              >
              </setting-item-range>
            </div>

            <div class="settings-group">
              <h4>Scroll Prediction</h4>
              <setting-item-checkbox
                .isChecked=${t.enableScrollPrediction}
                header="Enable Scroll Prediction"
                description="Execute callbacks when user is ${t.scrollMargin}px away from registered elements in scroll direction"
                setting="enableScrollPrediction"
              ></setting-item-checkbox>
              <setting-item-range
                .currentValue=${t.scrollMargin}
                .maxValue=${300}
                .minValue=${30}
                .unit=${Kn}
                header="Scroll Margin"
                description="Pixel distance to check from mouse position in scroll direction"
                setting="scrollMargin"
              ></setting-item-range>
            </div>

            <!-- Developer Tools Group -->
            <div class="settings-group">
              <h4>Developer Tools</h4>
              <setting-item-checkbox
                .isChecked=${this.devtoolsSettings.showNameTags}
                header="Show Name Tags"
                description="Display name tags over each registered element in the debugger"
                setting="showNameTags"
                @setting-changed=${this._handleDevtoolsSettingChange}
              ></setting-item-checkbox>
            </div>
          </div>
        </div>
      </tab-content>
    `}};Y.styles=m`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .settings-content {
      display: block;
    }

    .settings-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .settings-group {
      background: rgba(30, 30, 30, 0.6);
      padding: 16px;
      border: 1px solid rgba(176, 196, 222, 0.1);
    }

    .settings-group h4 {
      margin: 0 0 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: #b0c4de;
      border-bottom: 1px solid rgba(176, 196, 222, 0.2);
      padding-bottom: 8px;
    }
  `,a([u()],Y.prototype,"managerSettings",2),a([u()],Y.prototype,"initialSettings",2),a([u()],Y.prototype,"devtoolsSettings",2),a([u()],Y.prototype,"changedSettings",2),Y=a([b("settings-tab")],Y);var N=class extends g{constructor(){super(),this.isMinimized=!1,this.visibleCount=0,this.totalCount=0,this.localStorageSelectedTabKey="foresight-devtools-control-panel-tab",this._handleVisibilityCountChange=e=>{let i=e;this.visibleCount=i.detail.visibleCount,this.totalCount=i.detail.totalCount};let t=localStorage.getItem(this.localStorageSelectedTabKey);this.activeTab=t||"logs"}_handleTabChange(t){this.activeTab=t.detail.tab,localStorage.setItem(this.localStorageSelectedTabKey,this.activeTab)}connectedCallback(){super.connectedCallback(),this.addEventListener("visibility-count-updated",this._handleVisibilityCountChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("visibility-count-updated",this._handleVisibilityCountChange)}render(){return d`
      <div class="control-wrapper ${this.isMinimized?"minimized":""}">
        <div class="title-wrapper">
          <button @click="${()=>this.isMinimized=!this.isMinimized}" class="minimize-button">
            -
          </button>
          <h1>Foresight DevTools</h1>
          <span
            title="Number of visible registered elements / total registered elements"
            class="title-element-count"
            >${this.visibleCount}/${this.totalCount}</span
          >
        </div>

        <div class="tab-container ${this.isMinimized?"hidden":""}">
          <tab-selector
            .activeTab="${this.activeTab}"
            @tab-change="${this._handleTabChange}"
          ></tab-selector>

          <div class="tab-content">
            <log-tab class=${ze({active:this.activeTab==="logs"})}></log-tab>
            <element-tab class=${ze({active:this.activeTab==="elements"})}></element-tab>
            <settings-tab
              class=${ze({active:this.activeTab==="settings"})}
            ></settings-tab>
          </div>
        </div>
      </div>
    `}};N.styles=m`
    .control-wrapper {
      padding: 12px;
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
      font-family: Arial, sans-serif;
      font-size: 13px;
      z-index: 10001;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      width: 450px;
      height: 450px;
      transition:
        width 0.3s ease,
        height 0.3s ease;
      box-sizing: border-box;
    }
    .control-wrapper.minimized {
      width: 230px;
      height: 45px;
    }

    .title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      flex-shrink: 0;
    }

    .title-wrapper h1 {
      margin: 0;
      font-size: 15px;
    }

    .title-element-count {
      font-size: 14px;
      text-align: right;
    }

    .minimize-button {
      background: none;
      border: none;
      color: white;
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
      padding: 0;
    }

    .tab-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
    }

    .tab-container.hidden {
      display: none;
    }

    .tab-content {
      flex: 1;
      position: relative;
    }

    .tab-content > * {
      display: none;
    }

    .tab-content > .active {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,a([u()],N.prototype,"activeTab",2),a([u()],N.prototype,"isMinimized",2),a([u()],N.prototype,"visibleCount",2),a([u()],N.prototype,"totalCount",2),N=a([b("control-panel")],N);customElements.get("control-panel")||customElements.define("control-panel",N);var re=class extends g{constructor(){super(...arguments),this.overlayMap=new Map,this.callbackAnimations=new Map,this._abortController=null}connectedCallback(){super.connectedCallback(),this._abortController=new AbortController;let{signal:t}=this._abortController;f.instance.addEventListener("elementRegistered",e=>{e.elementData.isIntersectingWithViewport&&this.createOrUpdateElementOverlay(e.elementData)},{signal:t}),f.instance.addEventListener("elementUnregistered",e=>{this.removeElementOverlay(e.elementData)},{signal:t}),f.instance.addEventListener("elementDataUpdated",e=>{e.updatedProps.includes("bounds")&&this.createOrUpdateElementOverlay(e.elementData),e.updatedProps.includes("visibility")&&(e.elementData.isIntersectingWithViewport||this.removeElementOverlay(e.elementData))},{signal:t}),f.instance.addEventListener("callbackInvoked",e=>{this.highlightElementCallback(e.elementData,e.hitType)},{signal:t}),f.instance.addEventListener("callbackCompleted",e=>{this.unhighlightElementCallback(e.elementData)},{signal:t}),document.addEventListener("showNameTagsChanged",e=>{let i=e;this.updateNameTagVisibility(i.detail.showNameTags)},{signal:t})}createElementOverlays(t){let e=document.createElement("div");e.className="expanded-overlay";let i=document.createElement("div");i.className="name-label",this.containerElement.appendChild(e),this.containerElement.appendChild(i);let n={expandedOverlay:e,nameLabel:i};return this.overlayMap.set(t.element,n),n}updateElementOverlays(t,e){let{expandedOverlay:i,nameLabel:n}=t,{expandedRect:s}=e.elementBounds,o=s.right-s.left,r=s.bottom-s.top;i.style.width=`${o}px`,i.style.height=`${r}px`,i.style.transform=`translate3d(${s.left}px, ${s.top}px, 0)`,w.instance.devtoolsSettings.showNameTags?(n.textContent=e.name,n.style.display="block",n.style.transform=`translate3d(${s.left}px, ${s.top-25}px, 0)`):n.style.display="none"}createOrUpdateElementOverlay(t){let e=this.overlayMap.get(t.element);e||(e=this.createElementOverlays(t)),this.updateElementOverlays(e,t)}removeElementOverlay(t){let e=this.overlayMap.get(t.element);e&&(e.expandedOverlay.remove(),e.nameLabel.remove(),this.overlayMap.delete(t.element)),this.clearCallbackAnimationTimeout(t.element)}clearCallbackAnimationTimeout(t){let e=this.callbackAnimations.get(t);e&&(clearTimeout(e.timeoutId),this.callbackAnimations.delete(t))}highlightElementCallback(t,e){let i=this.overlayMap.get(t.element);if(i)switch(this.clearCallbackAnimationTimeout(t.element),e.kind){case"mouse":i.expandedOverlay.classList.add("invoked-by-mouse");break;case"scroll":i.expandedOverlay.classList.add("invoked-by-scroll");break;case"tab":i.expandedOverlay.classList.add("invoked-by-tab");break;default:}}unhighlightElementCallback(t){let e=this.overlayMap.get(t.element);if(!e)return;let i=setTimeout(()=>{e.expandedOverlay.classList.remove("callback-invoked"),this.callbackAnimations.delete(t.element)},400);this.callbackAnimations.set(t.element,{element:t.element,timeoutId:i})}updateNameTagVisibility(t){this.overlayMap.forEach(e=>{let i=e.nameLabel;t?i.style.display="block":i.style.display="none"})}disconnectedCallback(){super.disconnectedCallback(),this._abortController?.abort(),this._abortController=null}render(){return d` <div id="overlays-container"></div> `}};re.styles=[m`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
      }

      .expanded-overlay {
        position: absolute;
        will-change: transform, box-shadow;
        border: 1px dashed rgba(100, 116, 139, 0.4);
        background-color: rgba(100, 116, 139, 0.05);
        transition: border-color 0.2s ease, background-color 0.2s ease;
      }

      .expanded-overlay.invoked-by-scroll {
        --glow-color-rgb: 234, 179, 8;
        border-color: #eab308;
        background-color: rgba(var(--glow-color-rgb), 0.1);
        animation: callback-glow 2s ease-in-out infinite;
      }

      .expanded-overlay.invoked-by-mouse {
        --glow-color-rgb: 59, 130, 246;
        border-color: #3b82f6;
        background-color: rgba(var(--glow-color-rgb), 0.1);
        animation: callback-glow 2s ease-in-out infinite;
      }

      .expanded-overlay.invoked-by-tab {
        --glow-color-rgb: 249, 115, 22;
        border-color: #f97316;
        background-color: rgba(var(--glow-color-rgb), 0.1);
        animation: callback-glow 2s ease-in-out infinite;
      }
      @keyframes callback-glow {
        0% {
          box-shadow: 0 0 5px 2px rgba(var(--glow-color-rgb), 0.3);
        }
        50% {
          box-shadow: 0 0 15px 4px rgba(var(--glow-color-rgb), 0.6);
        }
        100% {
          box-shadow: 0 0 5px 2px rgba(var(--glow-color-rgb), 0.3);
        }
      }

      .name-label {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform;
        background-color: rgba(27, 31, 35, 0.85);
        backdrop-filter: blur(4px);
        color: white;
        padding: 4px 8px;
        font-size: 11px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
          sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        z-index: 10001;
        white-space: nowrap;
        pointer-events: none;
      }
    `],a([u()],re.prototype,"overlayMap",2),a([u()],re.prototype,"callbackAnimations",2),a([yi("#overlays-container")],re.prototype,"containerElement",2),re=a([b("element-overlays")],re);var ae=class extends g{constructor(){super(...arguments),this._abortController=new AbortController,this._mousePredictionIsEnabled=f.instance.getManagerData.globalSettings.enableMousePrediction,this._isVisible=!1,this._trajectoryStyles={},this.handleElementUnregistered=t=>{t.wasLastElement&&(this._isVisible=!1)},this.handleSettingsChange=t=>{let e=t.managerData.globalSettings.enableMousePrediction;this._mousePredictionIsEnabled=e,e||(this._isVisible=!1),this.requestUpdate()},this.handleTrajectoryUpdate=t=>{if(!this._mousePredictionIsEnabled)return;this._isVisible=!0;let{currentPoint:e,predictedPoint:i}=t.trajectoryPositions,n=i.x-e.x,s=i.y-e.y,o=Math.sqrt(n*n+s*s),r=Math.atan2(s,n)*57.29577951308232;this._trajectoryStyles={transform:`translate3d(${e.x}px, ${e.y}px, 0) rotate(${r}deg)`,width:`${o}px`}}}connectedCallback(){super.connectedCallback();let{signal:t}=this._abortController;f.instance.addEventListener("mouseTrajectoryUpdate",this.handleTrajectoryUpdate,{signal:t}),f.instance.addEventListener("elementUnregistered",this.handleElementUnregistered,{signal:t}),f.instance.addEventListener("scrollTrajectoryUpdate",()=>{this._isVisible=!1},{signal:t}),f.instance.addEventListener("managerSettingsChanged",this.handleSettingsChange,{signal:t})}disconnectedCallback(){super.disconnectedCallback(),this._abortController.abort()}render(){let t=C({display:this._isVisible?"block":"none"},this._trajectoryStyles);return d` <div class="trajectory-line" style=${Ne(t)}></div> `}};ae.styles=[m`
      :host {
        display: block;
      }

      .trajectory-line {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform, width;
        transform-origin: left center;
        height: 4px;
        background: linear-gradient(90deg, #3b82f6, rgba(59, 130, 246, 0.4));
        z-index: 9999;
        border-radius: 2px;
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
      }

      .trajectory-line::after {
        content: "";
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
    `],a([u()],ae.prototype,"_mousePredictionIsEnabled",2),a([u()],ae.prototype,"_isVisible",2),a([u()],ae.prototype,"_trajectoryStyles",2),ae=a([b("mouse-trajectory")],ae);var J=class extends g{constructor(){super(...arguments),this._abortController=new AbortController,this._scrollPredictionIsEnabled=f.instance.getManagerData.globalSettings.enableScrollPrediction,this._scrollMargin=f.instance.getManagerData.globalSettings.scrollMargin,this._isVisible=!1,this._trajectoryStyles={},this._isUpdateScheduled=!1,this._latestScrollTrajectory=null,this.handleElementUnregistered=t=>{t.wasLastElement&&(this._isVisible=!1)},this.handleSettingsChange=t=>{let e=t.managerData.globalSettings.enableScrollPrediction;this._scrollPredictionIsEnabled=e,e||(this._isVisible=!1);let i=t.updatedSettings.find(n=>n.setting==="scrollMargin");i&&(this._scrollMargin=i.newValue)},this.handleScrollUpdate=t=>{this._scrollPredictionIsEnabled&&(this._isVisible=!0,this._latestScrollTrajectory={currentPoint:t.currentPoint,predictedPoint:t.predictedPoint},this._isUpdateScheduled||(this._isUpdateScheduled=!0,requestAnimationFrame(this.renderScrollTrajectory)))},this.renderScrollTrajectory=()=>{if(!this._latestScrollTrajectory){this._isUpdateScheduled=!1;return}let{currentPoint:t,predictedPoint:e}=this._latestScrollTrajectory,i=e.x-t.x,n=e.y-t.y,s=Math.atan2(n,i)*180/Math.PI;this._trajectoryStyles={transform:`translate(${t.x}px, ${t.y}px) rotate(${s}deg)`},this._isUpdateScheduled=!1,this.requestUpdate()}}connectedCallback(){super.connectedCallback();let{signal:t}=this._abortController;f.instance.addEventListener("scrollTrajectoryUpdate",this.handleScrollUpdate,{signal:t}),f.instance.addEventListener("mouseTrajectoryUpdate",()=>{this._isVisible=!1},{signal:t}),f.instance.addEventListener("elementUnregistered",this.handleElementUnregistered,{signal:t}),f.instance.addEventListener("managerSettingsChanged",this.handleSettingsChange,{signal:t})}disconnectedCallback(){super.disconnectedCallback(),this._abortController.abort()}render(){let t=C({display:this._isVisible?"block":"none",width:`${this._scrollMargin}px`},this._trajectoryStyles);return d` <div class="scroll-trajectory-line" style=${Ne(t)}></div> `}};J.styles=[m`
      :host {
        display: block;
      }

      .scroll-trajectory-line {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform, width;
        transform-origin: left center;
        height: 4px;
        background: repeating-linear-gradient(
          90deg,
          #eab308 0px,
          #eab308 8px,
          transparent 8px,
          transparent 16px
        );
        z-index: 9999;
        border-radius: 2px;
        animation: scroll-dash-flow 1.5s linear infinite;
        box-shadow: 0 0 12px rgba(234, 179, 8, 0.4);
      }

      .scroll-trajectory-line::after {
        content: "";
        position: absolute;
        right: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid #eab308;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        filter: drop-shadow(0 0 6px rgba(234, 179, 8, 0.6));
        animation: scroll-arrow-pulse 1.5s ease-in-out infinite;
      }

      @keyframes scroll-dash-flow {
        0% {
          background-position: 0px 0px;
        }
        100% {
          background-position: 16px 0px;
        }
      }

      @keyframes scroll-arrow-pulse {
        0%,
        100% {
          transform: translateY(-50%) scale(1);
          filter: drop-shadow(0 0 6px rgba(234, 179, 8, 0.6));
        }
        50% {
          transform: translateY(-50%) scale(1.2);
          filter: drop-shadow(0 0 12px rgba(234, 179, 8, 0.8));
        }
      }
    `],a([u()],J.prototype,"_scrollPredictionIsEnabled",2),a([u()],J.prototype,"_scrollMargin",2),a([u()],J.prototype,"_isVisible",2),a([u()],J.prototype,"_trajectoryStyles",2),J=a([b("scroll-trajectory")],J);var pt=class extends g{render(){return d`
      <div id="overlay-container">
        <mouse-trajectory></mouse-trajectory>
        <scroll-trajectory></scroll-trajectory>
        <element-overlays></element-overlays>
      </div>
    `}};pt.styles=[m`
      :host {
        display: block;
      }
      #overlay-container {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
      }
    `],pt=a([b("debug-overlay")],pt);var w=class extends g{constructor(){super(),this.isInitialized=!1,this.devtoolsSettings={showDebugger:!0,isControlPanelDefaultMinimized:!1,showNameTags:!0,sortElementList:"visibility",logging:{logLocation:"controlPanel",callbackCompleted:!0,callbackInvoked:!0,elementDataUpdated:!1,elementRegistered:!1,elementUnregistered:!1,managerSettingsChanged:!0,mouseTrajectoryUpdate:!1,scrollTrajectoryUpdate:!1}}}static createAndAppendInstance(){typeof window>"u"||typeof document>"u"||(w._instance=document.createElement("foresight-devtools"),document.body.appendChild(w._instance))}static initialize(t){if(w._instance||w.createAndAppendInstance(),!w._instance)return w._instance;let e=w._instance;return e.isInitialized=!0,t!==void 0&&e.alterDevtoolsSettings(t),e}static get instance(){return w._instance?w._instance:w.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}shouldUpdateSetting(t,e){return t!==void 0&&t!==e}alterDevtoolsSettings(t){t&&(this.shouldUpdateSetting(t.showNameTags,this.devtoolsSettings.showNameTags)&&(this.devtoolsSettings.showNameTags=t.showNameTags,this.dispatchEvent(new CustomEvent("showNameTagsChanged",{detail:{showNameTags:t.showNameTags},bubbles:!0}))),this.shouldUpdateSetting(t.showDebugger,this.devtoolsSettings.showDebugger)&&(this.devtoolsSettings.showDebugger=t.showDebugger,this.requestUpdate()),this.shouldUpdateSetting(t.isControlPanelDefaultMinimized,this.devtoolsSettings.isControlPanelDefaultMinimized)&&(this.devtoolsSettings.isControlPanelDefaultMinimized=t.isControlPanelDefaultMinimized),this.shouldUpdateSetting(t.sortElementList,this.devtoolsSettings.sortElementList)&&(this.devtoolsSettings.sortElementList=t.sortElementList),t.logging&&(this.shouldUpdateSetting(t.logging.logLocation,this.devtoolsSettings.logging.logLocation)&&(this.devtoolsSettings.logging.logLocation=t.logging.logLocation),this.shouldUpdateSetting(t.logging.callbackCompleted,this.devtoolsSettings.logging.callbackCompleted)&&(this.devtoolsSettings.logging.callbackCompleted=t.logging.callbackCompleted),this.shouldUpdateSetting(t.logging.callbackInvoked,this.devtoolsSettings.logging.callbackInvoked)&&(this.devtoolsSettings.logging.callbackInvoked=t.logging.callbackInvoked),this.shouldUpdateSetting(t.logging.elementDataUpdated,this.devtoolsSettings.logging.elementDataUpdated)&&(this.devtoolsSettings.logging.elementDataUpdated=t.logging.elementDataUpdated),this.shouldUpdateSetting(t.logging.elementRegistered,this.devtoolsSettings.logging.elementRegistered)&&(this.devtoolsSettings.logging.elementRegistered=t.logging.elementRegistered),this.shouldUpdateSetting(t.logging.elementUnregistered,this.devtoolsSettings.logging.elementUnregistered)&&(this.devtoolsSettings.logging.elementUnregistered=t.logging.elementUnregistered),this.shouldUpdateSetting(t.logging.managerSettingsChanged,this.devtoolsSettings.logging.managerSettingsChanged)&&(this.devtoolsSettings.logging.managerSettingsChanged=t.logging.managerSettingsChanged),this.shouldUpdateSetting(t.logging.mouseTrajectoryUpdate,this.devtoolsSettings.logging.mouseTrajectoryUpdate)&&(this.devtoolsSettings.logging.mouseTrajectoryUpdate=t.logging.mouseTrajectoryUpdate),this.shouldUpdateSetting(t.logging.scrollTrajectoryUpdate,this.devtoolsSettings.logging.scrollTrajectoryUpdate)&&(this.devtoolsSettings.logging.scrollTrajectoryUpdate=t.logging.scrollTrajectoryUpdate)))}cleanup(){this.requestUpdate()}render(){return!this.isInitialized||!this.devtoolsSettings.showDebugger?d``:d`<control-panel></control-panel> <debug-overlay></debug-overlay>`}};w.styles=[m`
      :host {
        display: block;
      }
    `],w._instance=null,a([u()],w.prototype,"isInitialized",2),w=a([b("foresight-devtools")],w);var Xn=(t,e)=>e.title,Qn=()=>({title:"Explore the Docs",link:"https://angular.dev"}),es=()=>({title:"Learn with Tutorials",link:"https://angular.dev/tutorials"}),ts=()=>({title:"CLI Docs",link:"https://angular.dev/tools/cli"}),is=()=>({title:"Angular Language Service",link:"https://angular.dev/tools/language-service"}),ns=()=>({title:`Angular
        DevTools`,link:"https://angular.dev/tools/devtools"}),ss=(t,e,i,n,s)=>[t,e,i,n,s];function os(t,e){if(t&1&&(x(0,"a",27)(1,"span"),U(2),S(),X(),x(3,"svg",38),T(4,"path",39),S()()),t&2){let i=e.$implicit;yt("href",i.link,ft)("registerForesight",i.title),Ze(2),Ct(i.title)}}f.initialize({enableMousePrediction:!0,positionHistorySize:8,trajectoryPredictionTime:80,defaultHitSlop:10,enableTabPrediction:!0,tabOffset:3,enableScrollPrediction:!0,scrollMargin:150});w.initialize({showDebugger:!0,isControlPanelDefaultMinimized:!0,showNameTags:!0,sortElementList:"visibility"});var qe=class t{ngAfterViewInit(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=ut({type:t,selectors:[["app-root"]],standalone:!0,features:[St],decls:49,vars:11,consts:[[1,"main"],[1,"content"],[1,"left-side"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 982 239","fill","none",1,"angular-logo"],["clip-path","url(#a)"],["fill","url(#b)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["fill","url(#c)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["id","c","cx","0","cy","0","r","1","gradientTransform","rotate(118.122 171.182 60.81) scale(205.794)","gradientUnits","userSpaceOnUse"],["stop-color","#FF41F8"],["offset",".707","stop-color","#FF41F8","stop-opacity",".5"],["offset","1","stop-color","#FF41F8","stop-opacity","0"],["id","b","x1","0","x2","982","y1","192","y2","192","gradientUnits","userSpaceOnUse"],["stop-color","#F0060B"],["offset","0","stop-color","#F0070C"],["offset",".526","stop-color","#CC26D5"],["offset","1","stop-color","#7702FF"],["id","a"],["fill","#fff","d","M0 0h982v239H0z"],[2,"max-width","300px"],["href","https://foresightjs.com/",2,"color","inherit"],[1,"pill-group-horizontal"],["routerLink","./feature1","registerForesight","Feature 1",1,"pill"],["routerLink","./feature2","registerForesight","Feature 2",1,"pill"],["routerLink","./feature3","registerForesight","Feature 3",1,"pill"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],["target","_blank","rel","noopener",1,"pill",3,"href","registerForesight"],[1,"social-links"],["href","https://github.com/angular/angular","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://twitter.com/angular","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"]],template:function(i,n){i&1&&(x(0,"main",0)(1,"div",1)(2,"div",2),X(),x(3,"svg",3)(4,"g",4),T(5,"path",5)(6,"path",6),S(),x(7,"defs")(8,"radialGradient",7),T(9,"stop",8)(10,"stop",9)(11,"stop",10),S(),x(12,"linearGradient",11),T(13,"stop",12)(14,"stop",13)(15,"stop",14)(16,"stop",15),S(),x(17,"clipPath",16),T(18,"path",17),S()()(),le(),x(19,"h1",18)(20,"a",19),U(21,"foresightJS"),S(),U(22," preloading strategy For Angular "),S(),x(23,"p"),U(24,"Congratulations! Your app is running. \u{1F389}"),S(),x(25,"div",20)(26,"a",21),U(27,"Feature 1"),S(),x(28,"a",22),U(29,"Feature 2"),S(),x(30,"a",23),U(31,"Feature 3"),S()(),T(32,"router-outlet"),S(),T(33,"div",24),x(34,"div",25)(35,"div",26),wt(36,os,5,3,"a",27,Xn),S(),x(38,"div",28)(39,"a",29),X(),x(40,"svg",30),T(41,"path",31),S()(),le(),x(42,"a",32),X(),x(43,"svg",33),T(44,"path",34),S()(),le(),x(45,"a",35),X(),x(46,"svg",36),T(47,"path",37),S()()()()()(),le(),T(48,"router-outlet")),i&2&&(Ze(36),xt(kt(5,ss,Q(0,Qn),Q(1,es),Q(2,ts),Q(3,is),Q(4,ns))))},dependencies:[_t,Lt,Tt,ei],styles:['[_nghost-%COMP%]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient(180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--red-to-pink-to-purple-horizontal-gradient: linear-gradient(90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-%COMP%]{margin:0;color:var(--gray-700)}main[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1px;background:var(--red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill-group-horizontal[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:start;flex-wrap:wrap;gap:1.25rem;margin-top:2.5rem}.pill[_ngcontent-%COMP%]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--pill-accent) 5%,transparent);color:var(--pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 15%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+1){--pill-accent: var(--bright-blue)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+2){--pill-accent: var(--french-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+5){--pill-accent: var(--hot-red)}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}.right-side[_ngcontent-%COMP%]{margin-top:2rem}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--gray-400)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--gray-900)}@media screen and (max-width: 650px){.content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}']})};$t(qe,ii).catch(t=>console.error(t));
