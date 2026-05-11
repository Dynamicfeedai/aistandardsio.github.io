var LitNavbar=function(a){"use strict";var gt=Object.defineProperty;var mt=(a,v,_)=>v in a?gt(a,v,{enumerable:!0,configurable:!0,writable:!0,value:_}):a[v]=_;var p=(a,v,_)=>mt(a,typeof v!="symbol"?v+"":v,_);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const v=globalThis,_=v.ShadowRoot&&(v.ShadyCSS===void 0||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),de=new WeakMap;let he=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=de.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&de.set(e,t))}return t}toString(){return this.cssText}};const Te=r=>new he(typeof r=="string"?r:r+"",void 0,J),V=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new he(e,r,J)},He=(r,t)=>{if(_)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=v.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},ue=_?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Te(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:Ne,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Re,getOwnPropertySymbols:je,getPrototypeOf:Ie}=Object,y=globalThis,pe=y.trustedTypes,Be=pe?pe.emptyScript:"",X=y.reactiveElementPolyfillSupport,H=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Be:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Q=(r,t)=>!De(r,t),ge={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Ne(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=ze(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){const l=n==null?void 0:n.call(this);o==null||o.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ge}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,i=[...Re(e),...je(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ue(n))}else t!==void 0&&e.push(ue(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){var o,s;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const l=i.getPropertyOptions(n),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:q;this._$Em=n;const g=c.fromAttribute(e,l.type);this[n]=g??((s=this._$Ej)==null?void 0:s.get(n))??g,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){var s;if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),i??(i=l.getPropertyOptions(t)),!((i.hasChanged??Q)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[H("elementProperties")]=new Map,P[H("finalized")]=new Map,X==null||X({ReactiveElement:P}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,me=r=>r,K=D.trustedTypes,be=K?K.createPolicy("lit-html",{createHTML:r=>r}):void 0,ve="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+w,Fe=`<${fe}>`,M=document,N=()=>M.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",ee=Array.isArray,Ge=r=>ee(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",te=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,_e=/>/g,k=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,we=/"/g,xe=/^(?:script|style|textarea|title)$/i,Ae=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),h=Ae(1),O=Ae(2),U=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Me=new WeakMap,E=M.createTreeWalker(M,129);function ke(r,t){if(!ee(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return be!==void 0?be.createHTML(t):t}const Ve=(r,t)=>{const e=r.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",s=R;for(let l=0;l<e;l++){const c=r[l];let g,m,u=-1,$=0;for(;$<c.length&&(s.lastIndex=$,m=s.exec(c),m!==null);)$=s.lastIndex,s===R?m[1]==="!--"?s=$e:m[1]!==void 0?s=_e:m[2]!==void 0?(xe.test(m[2])&&(n=RegExp("</"+m[2],"g")),s=k):m[3]!==void 0&&(s=k):s===k?m[0]===">"?(s=n??R,u=-1):m[1]===void 0?u=-2:(u=s.lastIndex-m[2].length,g=m[1],s=m[3]===void 0?k:m[3]==='"'?we:ye):s===we||s===ye?s=k:s===$e||s===_e?s=R:(s=k,n=void 0);const A=s===k&&r[l+1].startsWith("/>")?" ":"";o+=s===R?c+Fe:u>=0?(i.push(g),c.slice(0,u)+ve+c.slice(u)+w+A):c+w+(u===-2?l:A)}return[ke(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class j{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const l=t.length-1,c=this.parts,[g,m]=Ve(t,e);if(this.el=j.createElement(g,i),E.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=E.nextNode())!==null&&c.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(ve)){const $=m[s++],A=n.getAttribute(u).split(w),Z=/([.?@])?(.*)/.exec($);c.push({type:1,index:o,name:Z[2],strings:A,ctor:Z[1]==="."?Ke:Z[1]==="?"?We:Z[1]==="@"?Ye:W}),n.removeAttribute(u)}else u.startsWith(w)&&(c.push({type:6,index:o}),n.removeAttribute(u));if(xe.test(n.tagName)){const u=n.textContent.split(w),$=u.length-1;if($>0){n.textContent=K?K.emptyScript:"";for(let A=0;A<$;A++)n.append(u[A],N()),E.nextNode(),c.push({type:2,index:++o});n.append(u[$],N())}}}else if(n.nodeType===8)if(n.data===fe)c.push({type:2,index:o});else{let u=-1;for(;(u=n.data.indexOf(w,u+1))!==-1;)c.push({type:7,index:o}),u+=w.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function L(r,t,e=r,i){var s,l;if(t===U)return t;let n=i!==void 0?(s=e._$Co)==null?void 0:s[i]:e._$Cl;const o=z(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),o===void 0?n=void 0:(n=new o(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=L(r,n._$AS(r,t.values),n,i)),t}class qe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??M).importNode(e,!0);E.currentNode=n;let o=E.nextNode(),s=0,l=0,c=i[0];for(;c!==void 0;){if(s===c.index){let g;c.type===2?g=new I(o,o.nextSibling,this,t):c.type===1?g=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(g=new Ze(o,this,t)),this._$AV.push(g),c=i[++l]}s!==(c==null?void 0:c.index)&&(o=E.nextNode(),s++)}return E.currentNode=M,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),z(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(ke(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(e);else{const s=new qe(n,this),l=s.u(this.options);s.p(e),this.T(l),this._$AH=s}}_$AC(t){let e=Me.get(t.strings);return e===void 0&&Me.set(t.strings,e=new j(t)),e}k(t){ee(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new I(this.O(N()),this.O(N()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const n=me(t).nextSibling;me(t).remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(o===void 0)t=L(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const l=t;let c,g;for(t=o[0],c=0;c<o.length-1;c++)g=L(this,l[i+c],e,c),g===U&&(g=this._$AH[c]),s||(s=!z(g)||g!==this._$AH[c]),g===d?t=d:t!==d&&(t+=(g??"")+o[c+1]),this._$AH[c]=g}s&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ke extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class We extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ye extends W{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??d)===U)return;const i=this._$AH,n=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ze{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const ie=D.litHtmlPolyfillSupport;ie==null||ie(j,I),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.3.2");const Je=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new I(t.insertBefore(N(),o),o,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class S extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Je(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return U}}S._$litElement$=!0,S.finalized=!0,(Le=C.litElementHydrateSupport)==null||Le.call(C,{LitElement:S});const ne=C.litElementPolyfillSupport;ne==null||ne({LitElement:S}),(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Q},Qe=(r=Xe,t,e)=>{const{kind:i,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:s}=e;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,c,r,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,r,l),l}}}if(i==="setter"){const{name:s}=e;return function(l){const c=this[s];t.call(this,l),this.requestUpdate(s,c,r,!0,l)}}throw Error("Unsupported decorator location: "+i)};function b(r){return(t,e)=>typeof e=="object"?Qe(r,t,e):((i,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),s?Object.getOwnPropertyDescriptor(n,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(r){return b({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(r,t){return(e,i,n)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(r))??null};return et(e,i,{get(){return o(this)}})}}const oe=V`
  :host {
    /* Theme variables with defaults */
    --ln-primary: var(--lit-navbar-primary, #06b6d4);
    --ln-secondary: var(--lit-navbar-secondary, #8b5cf6);
    --ln-bg: var(--lit-navbar-bg, #0a0e1a);
    --ln-bg-elevated: var(--lit-navbar-bg-elevated, #111827);
    --ln-text: var(--lit-navbar-text, #e2e8f0);
    --ln-text-muted: var(--lit-navbar-text-muted, #64748b);
    --ln-border: var(--lit-navbar-border, #1e293b);
    --ln-title-gradient: var(--lit-navbar-title-gradient, linear-gradient(135deg, #06b6d4, #8b5cf6));

    /* Layout */
    --ln-height: 64px;
    --ln-z-index: 1000;

    display: block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  .gradient-text {
    background: var(--ln-title-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,tt=[oe,V`
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--ln-height);
      background: var(--ln-bg);
      border-bottom: 1px solid var(--ln-border);
      z-index: var(--ln-z-index);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Skip link for accessibility */
    .skip-link {
      position: absolute;
      top: -100%;
      left: 0;
      padding: 0.5rem 1rem;
      background: var(--ln-primary);
      color: var(--ln-bg);
      z-index: calc(var(--ln-z-index) + 1);
      transition: top 0.2s;
    }

    .skip-link:focus {
      top: 0;
    }

    /* Brand */
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--ln-text);
      transition: opacity 0.2s;
    }

    .nav-brand:hover {
      opacity: 0.9;
    }

    .nav-logo {
      width: 32px;
      height: 32px;
      border-radius: 6px;
    }

    .nav-title {
      display: flex;
      align-items: baseline;
    }

    .nav-title-light {
      font-weight: 400;
      color: var(--ln-text-muted);
    }

    /* Desktop links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.5rem 0.875rem;
      font-size: 0.9375rem;
      color: var(--ln-text-muted);
      border-radius: 6px;
      transition: color 0.2s, background-color 0.2s;
    }

    .nav-link:hover {
      color: var(--ln-text);
      background-color: var(--ln-bg-elevated);
    }

    .nav-link .chevron-icon {
      transition: transform 0.2s;
    }

    .nav-link[aria-expanded="true"] .chevron-icon {
      transform: rotate(180deg);
    }

    /* Dropdown */
    .nav-dropdown {
      position: relative;
    }

    .nav-dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 180px;
      padding: 0.5rem;
      background: var(--ln-bg-elevated);
      border: 1px solid var(--ln-border);
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .nav-dropdown.open .nav-dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(8px);
    }

    .nav-dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 0.75rem;
      font-size: 0.9375rem;
      color: var(--ln-text-muted);
      border-radius: 6px;
      transition: color 0.2s, background-color 0.2s;
    }

    .nav-dropdown-item:hover {
      color: var(--ln-text);
      background-color: rgba(255, 255, 255, 0.05);
    }

    .nav-dropdown-divider {
      height: 1px;
      margin: 0.5rem 0;
      background: var(--ln-border);
    }

    /* GitHub button */
    .nav-github {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      margin-left: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ln-text);
      background: var(--ln-bg-elevated);
      border: 1px solid var(--ln-border);
      border-radius: 6px;
      transition: border-color 0.2s, background-color 0.2s;
    }

    .nav-github:hover {
      border-color: var(--ln-primary);
      background: rgba(6, 182, 212, 0.1);
    }

    .nav-github .github-icon {
      width: 18px;
      height: 18px;
    }

    /* Mobile toggle */
    .nav-mobile-toggle {
      display: none;
      padding: 0.5rem;
      color: var(--ln-text);
    }

    .nav-mobile-toggle .close-icon {
      display: none;
    }

    .nav-mobile-toggle[aria-expanded="true"] .hamburger-icon {
      display: none;
    }

    .nav-mobile-toggle[aria-expanded="true"] .close-icon {
      display: block;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .nav-links {
        display: none;
      }

      .nav-mobile-toggle {
        display: flex;
      }
    }
  `],T=O`
  <svg class="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Y=O`
  <svg class="github-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
`,se=O`
  <svg class="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,ae=O`
  <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Ce=O`
  <svg class="rss-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.18" cy="17.82" r="2.18"/>
    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
  </svg>
`,Se=O`
  <svg class="external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;function le(r){switch(r){case"rss":return Ce;case"external":return Se;case"github":return Y;case"chevron":return T;case"hamburger":return se;case"close":return ae;default:return null}}const ce=["library","agent","application","specification"],F={library:"/libraries",agent:"/agents",application:"/applications",specification:"/specifications"},it={primaryColor:"#06b6d4",secondaryColor:"#8b5cf6",backgroundColor:"#0a0e1a",textColor:"#e2e8f0",mutedColor:"#64748b",borderColor:"#1e293b",titleGradient:"linear-gradient(135deg, #06b6d4, #8b5cf6)"},nt=[oe,V`
    .mega-menu {
      position: fixed;
      top: var(--ln-height);
      left: 0;
      right: 0;
      background: var(--ln-bg);
      border-bottom: 1px solid var(--ln-border);
      z-index: calc(var(--ln-z-index) - 1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-16px);
      transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
    }

    :host([open]) .mega-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .mega-menu-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    .mega-menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .mega-menu-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .mega-menu-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--ln-border);
    }

    .mega-menu-section-title {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ln-text-muted);
    }

    .mega-menu-section-link {
      font-size: 0.75rem;
      color: var(--ln-primary);
      transition: opacity 0.2s;
    }

    .mega-menu-section-link:hover {
      opacity: 0.8;
    }

    .mega-menu-products {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .mega-menu-product {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.75rem;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .mega-menu-product:hover {
      background: var(--ln-bg-elevated);
    }

    .mega-menu-product-name {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--ln-text);
    }

    .mega-menu-product.featured .mega-menu-product-name {
      color: var(--ln-primary);
    }

    .mega-menu-product-tagline {
      font-size: 0.8125rem;
      color: var(--ln-text-muted);
      line-height: 1.4;
    }

    .mega-menu-backdrop {
      position: fixed;
      top: var(--ln-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: calc(var(--ln-z-index) - 2);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }

    :host([open]) .mega-menu-backdrop {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 1024px) {
      .mega-menu {
        display: none;
      }
    }
  `];var Pe=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,ot=(r,t,e)=>t in r?Pe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,G=(r,t,e,i)=>{for(var n=i>1?void 0:i?rt(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&Pe(t,e,n),n},st=(r,t,e)=>ot(r,t+"",e);a.LitMegaMenu=class extends S{constructor(){super(...arguments);p(this,"open",!1);p(this,"data",null);p(this,"baseUrl","");p(this,"categoryPaths",F)}_handleBackdropClick(){this.dispatchEvent(new CustomEvent("close"))}render(){if(!this.data)return d;const e=ce.filter(i=>this.data.categories[i]);return h`
      <div
        class="mega-menu-backdrop"
        @click=${this._handleBackdropClick}
      ></div>
      <div class="mega-menu" role="menu">
        <div class="mega-menu-container">
          <div class="mega-menu-grid">
            ${e.map(i=>this._renderCategory(i))}
          </div>
        </div>
      </div>
    `}_renderCategory(e){const i=this.data.categories[e],n=this.data.products.filter(s=>s.category===e),o=this.categoryPaths[e]||`/${e}s`;return n.length===0?d:h`
      <div class="mega-menu-section">
        <div class="mega-menu-section-header">
          <span class="mega-menu-section-title">${i.label}</span>
          <a
            href="${this.baseUrl}${o}"
            class="mega-menu-section-link"
            @click=${()=>this.dispatchEvent(new CustomEvent("close"))}
          >
            View all
          </a>
        </div>
        <div class="mega-menu-products">
          ${n.map(s=>this._renderProduct(s))}
        </div>
      </div>
    `}_renderProduct(e){const i=e.docsUrl||`${this.baseUrl}/products/${e.slug}`;return h`
      <a
        href=${i}
        class="mega-menu-product ${e.featured?"featured":""}"
        @click=${()=>this.dispatchEvent(new CustomEvent("close"))}
      >
        <span class="mega-menu-product-name">${e.name}</span>
        <span class="mega-menu-product-tagline">${e.tagline}</span>
      </a>
    `}},st(a.LitMegaMenu,"styles",nt),G([b({type:Boolean,reflect:!0})],a.LitMegaMenu.prototype,"open",2),G([b({type:Object})],a.LitMegaMenu.prototype,"data",2),G([b({type:String})],a.LitMegaMenu.prototype,"baseUrl",2),G([b({type:Object})],a.LitMegaMenu.prototype,"categoryPaths",2),a.LitMegaMenu=G([re("lit-mega-menu")],a.LitMegaMenu);const at=[oe,V`
    .mobile-menu {
      position: fixed;
      top: var(--ln-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--ln-bg);
      z-index: calc(var(--ln-z-index) - 1);
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
      transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
      overflow-y: auto;
    }

    :host([open]) .mobile-menu {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    .mobile-menu-container {
      padding: 1.5rem;
    }

    .mobile-menu-section {
      padding: 1rem 0;
      border-bottom: 1px solid var(--ln-border);
    }

    .mobile-menu-section:last-child {
      border-bottom: none;
    }

    .mobile-menu-section-title {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ln-text-muted);
      margin-bottom: 0.75rem;
    }

    .mobile-menu-links {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .mobile-menu-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      font-size: 1rem;
      color: var(--ln-text);
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .mobile-menu-link:hover {
      background: var(--ln-bg-elevated);
    }

    .mobile-menu-link.active {
      color: var(--ln-primary);
    }

    .mobile-menu-accordion {
      display: flex;
      flex-direction: column;
    }

    .mobile-menu-accordion-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      color: var(--ln-text);
      text-align: left;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .mobile-menu-accordion-trigger:hover {
      background: var(--ln-bg-elevated);
    }

    .mobile-menu-accordion-trigger .chevron-icon {
      transition: transform 0.2s;
    }

    .mobile-menu-accordion-trigger[aria-expanded="true"] .chevron-icon {
      transform: rotate(180deg);
    }

    .mobile-menu-accordion-content {
      display: none;
      padding-left: 1rem;
    }

    .mobile-menu-accordion[open] .mobile-menu-accordion-content {
      display: block;
    }

    .mobile-menu-product {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.75rem;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .mobile-menu-product:hover {
      background: var(--ln-bg-elevated);
    }

    .mobile-menu-product-name {
      font-size: 0.9375rem;
      color: var(--ln-text);
    }

    .mobile-menu-product-tagline {
      font-size: 0.8125rem;
      color: var(--ln-text-muted);
    }

    .mobile-menu-github {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.875rem;
      margin-top: 1rem;
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--ln-text);
      background: var(--ln-bg-elevated);
      border: 1px solid var(--ln-border);
      border-radius: 8px;
      transition: border-color 0.2s;
    }

    .mobile-menu-github:hover {
      border-color: var(--ln-primary);
    }

    @media (min-width: 1025px) {
      :host {
        display: none;
      }
    }
  `];var Oe=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ct=(r,t,e)=>t in r?Oe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,x=(r,t,e,i)=>{for(var n=i>1?void 0:i?lt(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&Oe(t,e,n),n},dt=(r,t,e)=>ct(r,t+"",e);a.LitMobileMenu=class extends S{constructor(){super(...arguments);p(this,"open",!1);p(this,"data",null);p(this,"baseUrl","");p(this,"menuItems",[]);p(this,"github",null);p(this,"categoryPaths",F);p(this,"_expandedSections",new Set)}_toggleSection(e){const i=new Set(this._expandedSections);i.has(e)?i.delete(e):i.add(e),this._expandedSections=i}_close(){this.dispatchEvent(new CustomEvent("close"))}render(){return h`
      <div class="mobile-menu" role="navigation">
        <div class="mobile-menu-container">
          ${this._renderMenuItems()}
          ${this._renderProducts()}
          ${this._renderGitHub()}
        </div>
      </div>
    `}_renderMenuItems(){return this.menuItems.map(e=>{if(e.type==="link")return h`
          <div class="mobile-menu-section">
            <a
              href=${e.url}
              class="mobile-menu-link"
              target=${e.external?"_blank":d}
              rel=${e.external?"noopener noreferrer":d}
              @click=${this._close}
            >
              ${e.label}
            </a>
          </div>
        `;if(e.type==="dropdown"){const i=this._expandedSections.has(e.label);return h`
          <div class="mobile-menu-section">
            <div class="mobile-menu-accordion" ?open=${i}>
              <button
                class="mobile-menu-accordion-trigger"
                aria-expanded=${i}
                @click=${()=>this._toggleSection(e.label)}
              >
                ${e.label} ${T}
              </button>
              <div class="mobile-menu-accordion-content">
                <div class="mobile-menu-links">
                  ${e.items.map((n,o)=>h`
                      ${e.dividerAfter!==void 0&&o===e.dividerAfter+1?h`<div style="height: 1px; background: var(--ln-border); margin: 0.5rem 0;"></div>`:d}
                      <a
                        href=${n.url}
                        class="mobile-menu-link"
                        target=${n.external?"_blank":d}
                        rel=${n.external?"noopener noreferrer":d}
                        @click=${this._close}
                      >
                        ${n.icon?le(n.icon):d}
                        ${n.label}
                      </a>
                    `)}
                </div>
              </div>
            </div>
          </div>
        `}return d})}_renderProducts(){return this.data?ce.filter(i=>this.data.categories[i]).map(i=>{const n=this.data.categories[i],o=this.data.products.filter(l=>l.category===i),s=this._expandedSections.has(i);return o.length===0?d:h`
        <div class="mobile-menu-section">
          <div class="mobile-menu-accordion" ?open=${s}>
            <button
              class="mobile-menu-accordion-trigger"
              aria-expanded=${s}
              @click=${()=>this._toggleSection(i)}
            >
              ${n.label} ${T}
            </button>
            <div class="mobile-menu-accordion-content">
              <div class="mobile-menu-links">
                ${o.map(l=>{const c=l.docsUrl||`${this.baseUrl}/products/${l.slug}`;return h`
                    <a
                      href=${c}
                      class="mobile-menu-product"
                      @click=${this._close}
                    >
                      <span class="mobile-menu-product-name">${l.name}</span>
                      <span class="mobile-menu-product-tagline">${l.tagline}</span>
                    </a>
                  `})}
              </div>
            </div>
          </div>
        </div>
      `}):d}_renderGitHub(){return this.github?h`
      <a
        href=${this.github.url}
        class="mobile-menu-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${Y}
        ${this.github.label||"GitHub"}
      </a>
    `:d}},dt(a.LitMobileMenu,"styles",at),x([b({type:Boolean,reflect:!0})],a.LitMobileMenu.prototype,"open",2),x([b({type:Object})],a.LitMobileMenu.prototype,"data",2),x([b({type:String})],a.LitMobileMenu.prototype,"baseUrl",2),x([b({type:Array})],a.LitMobileMenu.prototype,"menuItems",2),x([b({type:Object})],a.LitMobileMenu.prototype,"github",2),x([b({type:Object})],a.LitMobileMenu.prototype,"categoryPaths",2),x([B()],a.LitMobileMenu.prototype,"_expandedSections",2),a.LitMobileMenu=x([re("lit-mobile-menu")],a.LitMobileMenu);var Ue=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,ut=(r,t,e)=>t in r?Ue(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,f=(r,t,e,i)=>{for(var n=i>1?void 0:i?ht(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&Ue(t,e,n),n},pt=(r,t,e)=>ut(r,t+"",e);return a.LitNavbar=class extends S{constructor(){super();p(this,"config",{brand:{title:"Navbar"},menu:[]});p(this,"configUrl","");p(this,"_data",null);p(this,"_megaMenuOpen",!1);p(this,"_mobileMenuOpen",!1);p(this,"_activeDropdown",null);p(this,"_mobileToggle");p(this,"_megaMenuTrigger");p(this,"_boundHandleKeydown");p(this,"_boundHandleClickOutside");this._boundHandleKeydown=this._handleKeydown.bind(this),this._boundHandleClickOutside=this._handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),this._loadConfig(),this._fetchProducts(),this._applyTheme(),document.addEventListener("keydown",this._boundHandleKeydown),document.addEventListener("mousedown",this._boundHandleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._boundHandleKeydown),document.removeEventListener("mousedown",this._boundHandleClickOutside)}updated(e){e.has("config")&&(this._applyTheme(),this._fetchProducts())}async _loadConfig(){if(this.configUrl)try{const e=await fetch(this.configUrl);if(!e.ok)throw new Error(`Failed to fetch config: ${e.status}`);this.config=await e.json()}catch(e){console.warn("LitNavbar: Failed to load config",e)}}async _fetchProducts(){const e=this.config.menu.find(n=>n.type==="mega-menu");if(!e||e.type!=="mega-menu")return;if(e.data){this._data=e.data;return}const i=e.dataUrl;if(i)try{const n=await fetch(i);if(!n.ok)throw new Error(`Failed to fetch: ${n.status}`);this._data=await n.json()}catch(n){console.warn("LitNavbar: Failed to load products data",n)}}_applyTheme(){const e=this.config.theme;if(!e)return;const i=this.style;e.primaryColor&&i.setProperty("--lit-navbar-primary",e.primaryColor),e.secondaryColor&&i.setProperty("--lit-navbar-secondary",e.secondaryColor),e.backgroundColor&&i.setProperty("--lit-navbar-bg",e.backgroundColor),e.textColor&&i.setProperty("--lit-navbar-text",e.textColor),e.mutedColor&&i.setProperty("--lit-navbar-text-muted",e.mutedColor),e.borderColor&&i.setProperty("--lit-navbar-border",e.borderColor),e.titleGradient&&i.setProperty("--lit-navbar-title-gradient",e.titleGradient)}_handleKeydown(e){var i,n;e.key==="Escape"&&(this._activeDropdown?this._activeDropdown=null:this._megaMenuOpen?(this._megaMenuOpen=!1,(i=this._megaMenuTrigger)==null||i.focus()):this._mobileMenuOpen&&(this._mobileMenuOpen=!1,(n=this._mobileToggle)==null||n.focus()))}_handleClickOutside(e){var o;if(!this._activeDropdown)return;const i=e.target,n=(o=this.shadowRoot)==null?void 0:o.querySelector(`[data-dropdown="${this._activeDropdown}"]`);n&&!n.contains(i)&&(this._activeDropdown=null)}_toggleMegaMenu(){this._activeDropdown=null,this._megaMenuOpen=!this._megaMenuOpen}_toggleDropdown(e){this._megaMenuOpen=!1,this._activeDropdown=this._activeDropdown===e?null:e}_toggleMobileMenu(){this._mobileMenuOpen=!this._mobileMenuOpen}_closeMegaMenu(){this._megaMenuOpen=!1}_closeMobileMenu(){this._mobileMenuOpen=!1}_closeDropdowns(){this._activeDropdown=null}render(){const e=this.config.baseUrl||"";return h`
      <nav class="nav" aria-label="Main navigation">
        <a href="#main-content" class="skip-link">Skip to main content</a>

        <div class="nav-container">
          ${this._renderBrand()}
          ${this._renderDesktopLinks()}
          ${this._renderMobileToggle()}
        </div>

        <lit-mega-menu
          ?open=${this._megaMenuOpen}
          .data=${this._data}
          .baseUrl=${e}
          .categoryPaths=${this.config.categoryPaths||F}
          @close=${this._closeMegaMenu}
        ></lit-mega-menu>

        <lit-mobile-menu
          ?open=${this._mobileMenuOpen}
          .data=${this._data}
          .baseUrl=${e}
          .menuItems=${this.config.menu}
          .github=${this.config.github||null}
          .categoryPaths=${this.config.categoryPaths||F}
          @close=${this._closeMobileMenu}
        ></lit-mobile-menu>
      </nav>
    `}_renderBrand(){const{brand:e,baseUrl:i=""}=this.config,n=e.homeUrl||i||"/";return h`
      <a href="${n}" class="nav-brand">
        ${e.logoUrl?h`<img src="${e.logoUrl}" alt="${e.logoAlt||e.title}" class="nav-logo" />`:d}
        <span class="nav-title">
          ${e.titleGradient?h`<span class="gradient-text">${e.title}</span>`:h`<span>${e.title}</span>`}
          ${e.titleSecondary?h`<span class="nav-title-light">${e.titleSecondary}</span>`:d}
        </span>
      </a>
    `}_renderDesktopLinks(){return h`
      <div class="nav-links">
        ${this.config.menu.map(e=>this._renderMenuItem(e))}
        ${this._renderGitHub()}
      </div>
    `}_renderMenuItem(e){return e.type==="mega-menu"?h`
        <button
          class="nav-link megamenu-trigger"
          aria-expanded=${this._megaMenuOpen}
          aria-haspopup="true"
          @click=${this._toggleMegaMenu}
        >
          ${e.label} ${T}
        </button>
      `:e.type==="link"?h`
        <a
          href=${e.url}
          class="nav-link"
          target=${e.external?"_blank":d}
          rel=${e.external?"noopener noreferrer":d}
        >
          ${e.label}
        </a>
      `:e.type==="dropdown"?this._renderDropdown(e):d}_renderDropdown(e){const i=this._activeDropdown===e.label;return h`
      <div class="nav-dropdown ${i?"open":""}" data-dropdown=${e.label}>
        <button
          class="nav-link"
          aria-expanded=${i}
          aria-haspopup="true"
          @click=${()=>this._toggleDropdown(e.label)}
        >
          ${e.label} ${T}
        </button>
        <div class="nav-dropdown-menu">
          ${e.items.map((n,o)=>h`
              ${e.dividerAfter!==void 0&&o===e.dividerAfter+1?h`<div class="nav-dropdown-divider"></div>`:d}
              <a
                href=${n.url}
                class="nav-dropdown-item"
                target=${n.external?"_blank":d}
                rel=${n.external?"noopener noreferrer":d}
                @click=${this._closeDropdowns}
              >
                ${n.icon?le(n.icon):d}
                ${n.label}
              </a>
            `)}
        </div>
      </div>
    `}_renderGitHub(){const{github:e}=this.config;return e?h`
      <a
        href="${e.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-github"
      >
        ${Y} ${e.label||"GitHub"}
      </a>
    `:d}_renderMobileToggle(){return h`
      <button
        class="nav-mobile-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded=${this._mobileMenuOpen}
        aria-controls="mobile-menu"
        @click=${this._toggleMobileMenu}
      >
        ${se} ${ae}
      </button>
    `}},pt(a.LitNavbar,"styles",tt),f([b({type:Object})],a.LitNavbar.prototype,"config",2),f([b({type:String})],a.LitNavbar.prototype,"configUrl",2),f([B()],a.LitNavbar.prototype,"_data",2),f([B()],a.LitNavbar.prototype,"_megaMenuOpen",2),f([B()],a.LitNavbar.prototype,"_mobileMenuOpen",2),f([B()],a.LitNavbar.prototype,"_activeDropdown",2),f([Ee(".nav-mobile-toggle")],a.LitNavbar.prototype,"_mobileToggle",2),f([Ee(".megamenu-trigger")],a.LitNavbar.prototype,"_megaMenuTrigger",2),a.LitNavbar=f([re("lit-navbar")],a.LitNavbar),a.DEFAULT_CATEGORY_ORDER=ce,a.DEFAULT_CATEGORY_PATHS=F,a.DEFAULT_THEME=it,a.chevronIcon=T,a.closeIcon=ae,a.externalIcon=Se,a.getIcon=le,a.githubIcon=Y,a.hamburgerIcon=se,a.rssIcon=Ce,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a}({});
//# sourceMappingURL=lit-navbar.js.map
