var dt=Object.defineProperty,pt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var ze=(s,e,t)=>e in s?dt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,I=(s,e)=>{for(var t in e||(e={}))Je.call(e,t)&&ze(s,t,e[t]);if(he)for(var t of he(e))Ke.call(e,t)&&ze(s,t,e[t]);return s},ie=(s,e)=>pt(s,ht(e));var We=(s,e)=>{var t={};for(var r in s)Je.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&he)for(var r of he(s))e.indexOf(r)<0&&Ke.call(s,r)&&(t[r]=s[r]);return t};import{s as ot,n as Ee,S as _t,i as mt,d as F,v as gt,a as Ye,b as Fe,o as _e,e as wt,c as bt,f as yt,g as z,h as Re,j as G,k as vt,l as J,t as kt,m as Et,p as Rt,q as St,r as D,u as Lt,w as Z,x as T,y as Q,z as B,A as ce,B as K,C as le,D as W,E as fe,F as ue,G as Y,H as Ge}from"./chunks/index-e6af642f.js";import{i as Pt}from"./chunks/singletons-4439d2b4.js";const te=[];function me(s,e=Ee){let t;const r=new Set;function l(u){if(ot(s,u)&&(s=u,t)){const a=!te.length;for(const n of r)n[1](),te.push(n,s);if(a){for(let n=0;n<te.length;n+=2)te[n][0](te[n+1]);te.length=0}}}function o(u){l(u(s))}function f(u,a=Ee){const n=[u,a];return r.add(n),r.size===1&&(t=e(l)||Ee),u(s),()=>{r.delete(n),r.size===0&&(t(),t=null)}}return{set:l,update:o,subscribe:f}}let Me="";function $t(s){Me=s.base,s.assets}const Ut="C:/Users/Erkut/Desktop/coin-game/client/.svelte-kit/generated/root.svelte";function rt(s){let e,t,r;const l=[s[1]||{}];var o=s[0][0];function f(a){let n={};for(let i=0;i<l.length;i+=1)n=ce(n,l[i]);return{props:n,$$inline:!0}}o&&(e=new o(f()));const u={c:function(){e&&K(e.$$.fragment),t=D()},l:function(n){e&&le(e.$$.fragment,n),t=D()},m:function(n,i){e&&W(e,n,i),J(n,t,i),r=!0},p:function(n,i){const g=i&2?fe(l,[ue(n[1]||{})]):{};if(o!==(o=n[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{Y(p,1)}),Q()}o?(e=new o(f()),K(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i:function(n){r||(e&&B(e.$$.fragment,n),r=!0)},o:function(n){e&&T(e.$$.fragment,n),r=!1},d:function(n){n&&z(t),e&&Y(e,n)}};return F("SvelteRegisterBlock",{block:u,id:rt.name,type:"else",source:"(46:0) {:else}",ctx:s}),u}function it(s){let e,t,r;const l=[s[1]||{}];var o=s[0][0];function f(a){let n={$$slots:{default:[ft]},$$scope:{ctx:a}};for(let i=0;i<l.length;i+=1)n=ce(n,l[i]);return{props:n,$$inline:!0}}o&&(e=new o(f(s)));const u={c:function(){e&&K(e.$$.fragment),t=D()},l:function(n){e&&le(e.$$.fragment,n),t=D()},m:function(n,i){e&&W(e,n,i),J(n,t,i),r=!0},p:function(n,i){const g=i&2?fe(l,[ue(n[1]||{})]):{};if(i&525&&(g.$$scope={dirty:i,ctx:n}),o!==(o=n[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{Y(p,1)}),Q()}o?(e=new o(f(n)),K(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i:function(n){r||(e&&B(e.$$.fragment,n),r=!0)},o:function(n){e&&T(e.$$.fragment,n),r=!1},d:function(n){n&&z(t),e&&Y(e,n)}};return F("SvelteRegisterBlock",{block:u,id:it.name,type:"if",source:"(36:0) {#if components[1]}",ctx:s}),u}function at(s){let e,t,r;const l=[s[2]||{}];var o=s[0][1];function f(a){let n={};for(let i=0;i<l.length;i+=1)n=ce(n,l[i]);return{props:n,$$inline:!0}}o&&(e=new o(f()));const u={c:function(){e&&K(e.$$.fragment),t=D()},l:function(n){e&&le(e.$$.fragment,n),t=D()},m:function(n,i){e&&W(e,n,i),J(n,t,i),r=!0},p:function(n,i){const g=i&4?fe(l,[ue(n[2]||{})]):{};if(o!==(o=n[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{Y(p,1)}),Q()}o?(e=new o(f()),K(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i:function(n){r||(e&&B(e.$$.fragment,n),r=!0)},o:function(n){e&&T(e.$$.fragment,n),r=!1},d:function(n){n&&z(t),e&&Y(e,n)}};return F("SvelteRegisterBlock",{block:u,id:at.name,type:"else",source:"(42:2) {:else}",ctx:s}),u}function ct(s){let e,t,r;const l=[s[2]||{}];var o=s[0][1];function f(a){let n={$$slots:{default:[lt]},$$scope:{ctx:a}};for(let i=0;i<l.length;i+=1)n=ce(n,l[i]);return{props:n,$$inline:!0}}o&&(e=new o(f(s)));const u={c:function(){e&&K(e.$$.fragment),t=D()},l:function(n){e&&le(e.$$.fragment,n),t=D()},m:function(n,i){e&&W(e,n,i),J(n,t,i),r=!0},p:function(n,i){const g=i&4?fe(l,[ue(n[2]||{})]):{};if(i&521&&(g.$$scope={dirty:i,ctx:n}),o!==(o=n[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{Y(p,1)}),Q()}o?(e=new o(f(n)),K(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i:function(n){r||(e&&B(e.$$.fragment,n),r=!0)},o:function(n){e&&T(e.$$.fragment,n),r=!1},d:function(n){n&&z(t),e&&Y(e,n)}};return F("SvelteRegisterBlock",{block:u,id:ct.name,type:"if",source:"(38:2) {#if components[2]}",ctx:s}),u}function lt(s){let e,t,r;const l=[s[3]||{}];var o=s[0][2];function f(a){let n={};for(let i=0;i<l.length;i+=1)n=ce(n,l[i]);return{props:n,$$inline:!0}}o&&(e=new o(f()));const u={c:function(){e&&K(e.$$.fragment),t=D()},l:function(n){e&&le(e.$$.fragment,n),t=D()},m:function(n,i){e&&W(e,n,i),J(n,t,i),r=!0},p:function(n,i){const g=i&8?fe(l,[ue(n[3]||{})]):{};if(o!==(o=n[0][2])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{Y(p,1)}),Q()}o?(e=new o(f()),K(e.$$.fragment),B(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i:function(n){r||(e&&B(e.$$.fragment,n),r=!0)},o:function(n){e&&T(e.$$.fragment,n),r=!1},d:function(n){n&&z(t),e&&Y(e,n)}};return F("SvelteRegisterBlock",{block:u,id:lt.name,type:"slot",source:"(39:3) <svelte:component this={components[1]} {...(props_1 || {})}>",ctx:s}),u}function ft(s){let e,t,r,l;const o=[ct,at],f=[];function u(n,i){return n[0][2]?0:1}e=u(s),t=f[e]=o[e](s);const a={c:function(){t.c(),r=D()},l:function(i){t.l(i),r=D()},m:function(i,g){f[e].m(i,g),J(i,r,g),l=!0},p:function(i,g){let p=e;e=u(i),e===p?f[e].p(i,g):(Z(),T(f[p],1,1,()=>{f[p]=null}),Q(),t=f[e],t?t.p(i,g):(t=f[e]=o[e](i),t.c()),B(t,1),t.m(r.parentNode,r))},i:function(i){l||(B(t),l=!0)},o:function(i){T(t),l=!1},d:function(i){f[e].d(i),i&&z(r)}};return F("SvelteRegisterBlock",{block:a,id:ft.name,type:"slot",source:"(37:1) <svelte:component this={components[0]} {...(props_0 || {})}>",ctx:s}),a}function Pe(s){let e,t=s[5]&&$e(s);const r={c:function(){e=wt("div"),t&&t.c(),this.h()},l:function(o){e=bt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var f=yt(e);t&&t.l(f),f.forEach(z),this.h()},h:function(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px"),vt(e,Ut,50,1,1140)},m:function(o,f){J(o,e,f),t&&t.m(e,null)},p:function(o,f){o[5]?t?t.p(o,f):(t=$e(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(o){o&&z(e),t&&t.d()}};return F("SvelteRegisterBlock",{block:r,id:Pe.name,type:"if",source:"(50:0) {#if mounted}",ctx:s}),r}function $e(s){let e;const t={c:function(){e=kt(s[6])},l:function(l){e=Et(l,s[6])},m:function(l,o){J(l,e,o)},p:function(l,o){o&64&&Rt(e,l[6])},d:function(l){l&&z(e)}};return F("SvelteRegisterBlock",{block:t,id:$e.name,type:"if",source:"(52:2) {#if navigated}",ctx:s}),t}function Ue(s){let e,t,r,l,o;const f=[it,rt],u=[];function a(g,p){return g[0][1]?0:1}e=a(s),t=u[e]=f[e](s);let n=s[4]&&Pe(s);const i={c:function(){t.c(),r=St(),n&&n.c(),l=D()},l:function(p){t.l(p),r=Lt(p),n&&n.l(p),l=D()},m:function(p,A){u[e].m(p,A),J(p,r,A),n&&n.m(p,A),J(p,l,A),o=!0},p:function(p,[A]){let V=e;e=a(p),e===V?u[e].p(p,A):(Z(),T(u[V],1,1,()=>{u[V]=null}),Q(),t=u[e],t?t.p(p,A):(t=u[e]=f[e](p),t.c()),B(t,1),t.m(r.parentNode,r)),p[4]?n?n.p(p,A):(n=Pe(p),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},i:function(p){o||(B(t),o=!0)},o:function(p){T(t),o=!1},d:function(p){u[e].d(p),p&&z(r),n&&n.d(p),p&&z(l)}};return F("SvelteRegisterBlock",{block:i,id:Ue.name,type:"component",source:"",ctx:s}),i}function At(s,e,t){let{$$slots:r={},$$scope:l}=e;gt("Root",r,[]);let{stores:o}=e,{page:f}=e,{components:u}=e,{props_0:a=null}=e,{props_1:n=null}=e,{props_2:i=null}=e;Ye("__svelte__",o),Fe(o.page.notify);let g=!1,p=!1,A=null;_e(()=>{const b=o.page.subscribe(()=>{g&&(t(5,p=!0),t(6,A=document.title||"untitled page"))});return t(4,g=!0),b});const V=["stores","page","components","props_0","props_1","props_2"];return Object.keys(e).forEach(b=>{!~V.indexOf(b)&&b.slice(0,2)}),s.$$set=b=>{"stores"in b&&t(7,o=b.stores),"page"in b&&t(8,f=b.page),"components"in b&&t(0,u=b.components),"props_0"in b&&t(1,a=b.props_0),"props_1"in b&&t(2,n=b.props_1),"props_2"in b&&t(3,i=b.props_2)},s.$capture_state=()=>({setContext:Ye,afterUpdate:Fe,onMount:_e,stores:o,page:f,components:u,props_0:a,props_1:n,props_2:i,mounted:g,navigated:p,title:A}),s.$inject_state=b=>{"stores"in b&&t(7,o=b.stores),"page"in b&&t(8,f=b.page),"components"in b&&t(0,u=b.components),"props_0"in b&&t(1,a=b.props_0),"props_1"in b&&t(2,n=b.props_1),"props_2"in b&&t(3,i=b.props_2),"mounted"in b&&t(4,g=b.mounted),"navigated"in b&&t(5,p=b.navigated),"title"in b&&t(6,A=b.title)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&384&&o.page.set(f)},[u,a,n,i,g,p,A,o,f]}class Ot extends _t{constructor(e){super(e),mt(this,e,At,Ue,ot,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3}),F("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:Ue.name});const{ctx:t}=this.$$,r=e.props||{};t[7]===void 0&&"stores"in r,t[8]===void 0&&"page"in r,t[0]===void 0&&"components"in r}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get props_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set props_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get props_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set props_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get props_2(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set props_2(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Nt="modulepreload",Xe={},jt="/_app/",H=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${jt}${r}`,r in Xe)return;Xe[r]=!0;const l=r.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Nt,l||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),l)return new Promise((u,a)=>{f.addEventListener("load",u),f.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Ct={},Oe=[()=>H(()=>import("./pages/__layout.svelte-0bcf441a.js"),["pages/__layout.svelte-0bcf441a.js","assets/pages/__layout.svelte-db91d96d.css","chunks/index-e6af642f.js"]),()=>H(()=>import("./error.svelte-cb4d7eb5.js"),["error.svelte-cb4d7eb5.js","chunks/index-e6af642f.js"]),()=>H(()=>import("./pages/index.svelte-03d8c588.js"),["pages/index.svelte-03d8c588.js","assets/pages/index.svelte-80770fe5.css","chunks/index-e6af642f.js"]),()=>H(()=>import("./pages/login.svelte-23e0366d.js"),["pages/login.svelte-23e0366d.js","chunks/index-e6af642f.js"]),()=>H(()=>import("./pages/signout.svelte-3a9e3d52.js"),["pages/signout.svelte-3a9e3d52.js","chunks/index-e6af642f.js","chunks/navigation-98e433f2.js","chunks/singletons-4439d2b4.js"]),()=>H(()=>import("./pages/signup.svelte-18a21420.js"),["pages/signup.svelte-18a21420.js","chunks/index-e6af642f.js","chunks/navigation-98e433f2.js","chunks/singletons-4439d2b4.js"]),()=>H(()=>import("./pages/wallet.svelte-7a236719.js"),["pages/wallet.svelte-7a236719.js","chunks/index-e6af642f.js"])],It={"":[[0,2],[1]],login:[[0,3],[1]],signout:[[0,4],[1]],signup:[[0,5],[1]],wallet:[[0,6],[1]]};function He(s){return s instanceof Error||s&&s.name&&s.message?s:new Error(JSON.stringify(s))}function Ze(s){if(s.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in s)throw new Error("maxage should be replaced with cache: { maxage }");const e=s.status&&s.status>=400&&s.status<=599&&!s.redirect;if(s.error||e){const t=s.status;if(!s.error&&e)return{status:t||500,error:new Error};const r=typeof s.error=="string"?new Error(s.error):s.error;return r instanceof Error?!t||t<400||t>599?{status:500,error:r}:{status:t,error:r}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof r}"`)}}if(s.redirect){if(!s.status||Math.floor(s.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof s.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(s.dependencies&&(!Array.isArray(s.dependencies)||s.dependencies.some(t=>typeof t!="string")))return{status:500,error:new Error('"dependencies" property returned from load() must be of type string[]')};if(s.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return s}function Dt(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function Tt(s){let e=5381,t=s.length;if(typeof s=="string")for(;t;)e=e*33^s.charCodeAt(--t);else for(;t;)e=e*33^s[--t];return(e>>>0).toString(36)}function Qe(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function Ae(){return{x:pageXOffset,y:pageYOffset}}function et(s){return s.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function tt(s){return s instanceof SVGAElement?new URL(s.href.baseVal,document.baseURI):new URL(s.href)}function nt(s){const e=me(s);let t=!0;function r(){t=!0,e.update(f=>f)}function l(f){t=!1,e.set(f)}function o(f){let u;return e.subscribe(a=>{(u===void 0||t&&a!==u)&&f(u=a)})}return{notify:r,set:l,subscribe:o}}function Bt(){const{set:s,subscribe:e}=me(!1);async function t(){return!1}return{subscribe:e,check:t}}function Vt(s,e){let r=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(r+=`[sveltekit\\:data-body="${Tt(e.body)}"]`);const l=document.querySelector(r);if(l&&l.textContent){const o=JSON.parse(l.textContent),{body:f}=o,u=We(o,["body"]);return Promise.resolve(new Response(f,u))}return fetch(s,e)}const qt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function xt(s){const e=[],t=[];let r=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${decodeURIComponent(s).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((o,f,u)=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push(a[1]),t.push(a[2]),"(?:/(.*))?";const n=f===u.length-1;return o&&"/"+o.split(/\[(.+?)\]/).map((i,g)=>{if(g%2){const[,p,A,V]=qt.exec(i);return e.push(A),t.push(V),p?"(.*?)":"([^/]+?)"}return n&&i.includes(".")&&(r=!1),i.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${r?"/?":""}$`),names:e,types:t}}function zt(s,e,t,r){const l={};for(let o=0;o<e.length;o+=1){const f=e[o],u=t[o],a=s[o+1]||"";if(u){const n=r[u];if(!n)throw new Error(`Missing "${u}" param matcher`);if(!n(a))return}l[f]=a}return l}function Jt(s,e,t){return Object.entries(e).map(([l,[o,f,u]])=>{const{pattern:a,names:n,types:i}=xt(l);return{id:l,exec:g=>{const p=a.exec(g);if(p)return zt(p,n,i,t)},a:o.map(g=>s[g]),b:f.map(g=>s[g]),has_shadow:!!u}})}const ut="sveltekit:scroll",M="sveltekit:index",Se=Jt(Oe,It,Ct),Kt=Oe[0](),Wt=Oe[1](),st={};let ae={};try{ae=JSON.parse(sessionStorage[ut])}catch{}function Le(s){ae[s]=Ae()}function Yt({target:s,session:e,base:t,trailing_slash:r}){var qe;const l=new Map,o=[],f={url:nt({}),page:nt({}),navigating:me(null),session:me(e),updated:Bt()},u={id:null,promise:null},a={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,stuff:st,url:null},i=!1,g=!0,p=!1,A=1,V=null,b,Ne,je=!1;f.session.subscribe(async c=>{Ne=c,je&&(A+=1,ye(new URL(location.href),[],!0))}),je=!0;let ee=!0,q=(qe=history.state)==null?void 0:qe[M];q||(q=Date.now(),history.replaceState(ie(I({},history.state),{[M]:q}),"",location.href));const ge=ae[q];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let we=!1,be,Ce;async function Ie(c,{noscroll:h=!1,replaceState:v=!1,keepfocus:d=!1,state:_={}},k){const m=new URL(c,Qe(document));if(ee)return ke({url:m,scroll:h?Ae():null,keepfocus:d,redirect_chain:k,details:{state:_,replaceState:v},accepted:()=>{},blocked:()=>{}});await oe(m)}async function De(c){const h=Ve(c);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return u.promise=Be(h,!1),u.id=h.id,u.promise}async function ye(c,h,v,d){var y,S,P;const _=Ve(c),k=Ce={};let m=_&&await Be(_,v);if(!m&&c.origin===location.origin&&c.pathname===location.pathname&&(m=await se({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!m)return await oe(c),!1;if(Ce!==k)return!1;if(o.length=0,m.redirect)if(h.length>10||h.includes(c.pathname))m=await se({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return ee?Ie(new URL(m.redirect,c).href,{},[...h,c.pathname]):await oe(new URL(m.redirect,location.href)),!1;else((S=(y=m.props)==null?void 0:y.page)==null?void 0:S.status)>=400&&await f.updated.check()&&await oe(c);if(p=!0,d&&d.details){const{details:L}=d,R=L.replaceState?0:1;L.state[M]=q+=R,history[L.replaceState?"replaceState":"pushState"](L.state,"",c)}if(i?(n=m.state,b.$set(m.props)):Te(m),d){const{scroll:L,keepfocus:R}=d;if(!R){const w=document.body,O=w.getAttribute("tabindex");(P=getSelection())==null||P.removeAllRanges(),w.tabIndex=-1,w.focus(),O!==null?w.setAttribute("tabindex",O):w.removeAttribute("tabindex")}if(await Ge(),g){const w=c.hash&&document.getElementById(c.hash.slice(1));L?scrollTo(L.x,L.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ge();u.promise=null,u.id=null,g=!0,p=!1,m.props.page&&(be=m.props.page);const E=m.state.branch[m.state.branch.length-1];return ee=(E==null?void 0:E.module.router)!==!1,!0}function Te(c){n=c.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),be=c.props.page,b=new Ot({target:s,props:ie(I({},c.props),{stores:f}),hydrate:!0}),i=!0,ee){const v={from:null,to:new URL(location.href)};a.after_navigate.forEach(d=>d(v))}}async function ve({url:c,params:h,stuff:v,branch:d,status:_,error:k,routeId:m}){var w,O;const E=d.filter(Boolean),y=E.find(U=>{var j;return(j=U.loaded)==null?void 0:j.redirect}),S={redirect:(w=y==null?void 0:y.loaded)==null?void 0:w.redirect,state:{url:c,params:h,branch:d,error:k,stuff:v,session_id:A},props:{components:E.map(U=>U.module.default)}};for(let U=0;U<E.length;U+=1){const j=E[U].loaded;S.props[`props_${U}`]=j?await j.props:null}if(!n.url||c.href!==n.url.href||n.error!==k||n.stuff!==v){S.props.page={error:k,params:h,routeId:m,status:_,stuff:v,url:c};const U=(j,$)=>{Object.defineProperty(S.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${$}`)}})};U("origin","origin"),U("path","pathname"),U("query","searchParams")}const L=E[E.length-1],R=(O=L==null?void 0:L.loaded)==null?void 0:O.cache;if(R){const U=c.pathname+c.search;let j=!1;const $=()=>{l.get(U)===S&&l.delete(U),C(),clearTimeout(N)},N=setTimeout($,R.maxage*1e3),C=f.session.subscribe(()=>{j&&$()});j=!0,l.set(U,S)}return S}async function ne({status:c,error:h,module:v,url:d,params:_,stuff:k,props:m,routeId:E}){const y={module:v,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:k};function S(R){const{href:w}=new URL(R,d);y.uses.dependencies.add(w)}m&&y.uses.dependencies.add(d.href);const P={};for(const R in _)Object.defineProperty(P,R,{get(){return y.uses.params.add(R),_[R]},enumerable:!0});const L=Ne;if(v.load){const R={routeId:E,params:P,props:m||{},get url(){return y.uses.url=!0,d},get session(){return y.uses.session=!0,L},get stuff(){return y.uses.stuff=!0,I({},k)},fetch(O,U){const j=typeof O=="string"?O:O.url;return S(j),i?fetch(O,U):Vt(O,U)},status:c!=null?c:null,error:h!=null?h:null};Object.defineProperty(R,"page",{get:()=>{throw new Error("`page` in `load` functions has been replaced by `url` and `params`")}});const w=await v.load.call(null,R);if(!w)throw new Error("load function must return a value");y.loaded=Ze(w),y.loaded.stuff&&(y.stuff=y.loaded.stuff),y.loaded.dependencies&&y.loaded.dependencies.forEach(S)}else m&&(y.loaded=Ze({props:m}));return y}async function Be({id:c,url:h,params:v,route:d},_){var O,U,j;if(u.id===c&&u.promise)return u.promise;if(!_){const $=l.get(c);if($)return $}const{a:k,b:m,has_shadow:E}=d,y=n.url&&{url:c!==n.url.pathname+n.url.search,params:Object.keys(v).filter($=>n.params[$]!==v[$]),session:A!==n.session_id};let S=[],P=st,L=!1,R=200,w=null;k.forEach($=>$().catch(()=>{}));e:for(let $=0;$<k.length;$+=1){let N;try{if(!k[$])continue;const C=await k[$](),x=n.branch[$];if(!x||C!==x.module||y.url&&x.uses.url||y.params.some(X=>x.uses.params.has(X))||y.session&&x.uses.session||Array.from(x.uses.dependencies).some(X=>o.some(pe=>pe(X)))||L&&x.uses.stuff){let X={};const pe=E&&$===k.length-1;if(pe){const re=await fetch(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`,{headers:{"x-sveltekit-load":"true"}});if(re.ok){const xe=re.headers.get("x-sveltekit-location");if(xe)return{redirect:xe,props:{},state:n};X=re.status===204?{}:await re.json()}else R=re.status,w=new Error("Failed to load data")}if(w||(N=await ne({module:C,url:h,params:v,props:X,stuff:P,routeId:d.id})),N&&(pe&&(N.uses.url=!0),N.loaded)){if(N.loaded.error&&(R=N.loaded.status,w=N.loaded.error),N.loaded.redirect)return{redirect:N.loaded.redirect,props:{},state:n};N.loaded.stuff&&(L=!0)}}else N=x}catch(C){R=500,w=He(C)}if(w){for(;$--;)if(m[$]){let C,x,de=$;for(;!(x=S[de]);)de-=1;try{if(C=await ne({status:R,error:w,module:await m[$](),url:h,params:v,stuff:x.stuff,routeId:d.id}),(O=C==null?void 0:C.loaded)!=null&&O.error)continue;(U=C==null?void 0:C.loaded)!=null&&U.stuff&&(P=I(I({},P),C.loaded.stuff)),S=S.slice(0,de+1).concat(C);break e}catch{continue}}return await se({status:R,error:w,url:h,routeId:d.id})}else(j=N==null?void 0:N.loaded)!=null&&j.stuff&&(P=I(I({},P),N.loaded.stuff)),S.push(N)}return await ve({url:h,params:v,stuff:P,branch:S,status:R,error:w,routeId:d.id})}async function se({status:c,error:h,url:v,routeId:d}){var E,y;const _={},k=await ne({module:await Kt,url:v,params:_,stuff:{},routeId:d}),m=await ne({status:c,error:h,module:await Wt,url:v,params:_,stuff:k&&k.loaded&&k.loaded.stuff||{},routeId:d});return await ve({url:v,params:_,stuff:I(I({},(E=k==null?void 0:k.loaded)==null?void 0:E.stuff),(y=m==null?void 0:m.loaded)==null?void 0:y.stuff),branch:[k,m],status:c,error:h,routeId:d})}function Ve(c){if(c.origin!==location.origin||!c.pathname.startsWith(t))return;const h=decodeURI(c.pathname.slice(t.length)||"/");for(const v of Se){const d=v.exec(h);if(d)return{id:c.pathname+c.search,route:v,params:d,url:c}}}async function ke({url:c,scroll:h,keepfocus:v,redirect_chain:d,details:_,accepted:k,blocked:m}){const E=n.url;let y=!1;const S={from:E,to:c,cancel:()=>y=!0};if(a.before_navigate.forEach(w=>w(S)),y){m();return}const P=Dt(c.pathname,r),L=new URL(c.origin+P+c.search+c.hash);if(Le(q),k(),i&&f.navigating.set({from:n.url,to:L}),await ye(L,d,!1,{scroll:h,keepfocus:v,details:_})){const w={from:E,to:L};a.after_navigate.forEach(O=>O(w)),f.navigating.set(null)}}function oe(c){return location.href=c.href,new Promise(()=>{})}return{after_navigate:c=>{_e(()=>(a.after_navigate.push(c),()=>{const h=a.after_navigate.indexOf(c);a.after_navigate.splice(h,1)}))},before_navigate:c=>{_e(()=>(a.before_navigate.push(c),()=>{const h=a.before_navigate.indexOf(c);a.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{if(i&&!p)throw new Error("Can only disable scroll handling during navigation");(p||!i)&&(g=!1)},goto:(c,h={})=>Ie(c,h,[]),invalidate:c=>{if(typeof c=="function")o.push(c);else{const{href:h}=new URL(c,location.href);o.push(v=>v===h)}return V||(V=Promise.resolve().then(async()=>{await ye(new URL(location.href),[],!0),V=null})),V},prefetch:async c=>{const h=new URL(c,Qe(document));await De(h)},prefetch_routes:async c=>{const v=(c?Se.filter(d=>c.some(_=>d.exec(_))):Se).map(d=>Promise.all(d.a.map(_=>_())));await Promise.all(v)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",d=>{let _=!1;const k={from:n.url,to:null,cancel:()=>_=!0};a.before_navigate.forEach(m=>m(k)),_?(d.preventDefault(),d.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(q);try{sessionStorage[ut]=JSON.stringify(ae)}catch{}}});const c=d=>{const _=et(d);_&&_.href&&_.hasAttribute("sveltekit:prefetch")&&De(tt(_))};let h;const v=d=>{clearTimeout(h),h=setTimeout(()=>{var _;(_=d.target)==null||_.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",c),addEventListener("mousemove",v),addEventListener("sveltekit:trigger_prefetch",c),addEventListener("click",d=>{if(!ee||d.button||d.which!==1||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||d.defaultPrevented)return;const _=et(d);if(!_||!_.href)return;const k=_ instanceof SVGAElement,m=tt(_);if(!k&&m.origin==="null")return;const E=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||E.includes("external")||_.hasAttribute("sveltekit:reload")||(k?_.target.baseVal:_.target))return;const[y,S]=m.href.split("#");if(S!==void 0&&y===location.href.split("#")[0]){we=!0,Le(q),f.page.set(ie(I({},be),{url:m})),f.page.notify();return}ke({url:m,scroll:_.hasAttribute("sveltekit:noscroll")?Ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>d.preventDefault(),blocked:()=>d.preventDefault()})}),addEventListener("popstate",d=>{if(d.state&&ee){if(d.state[M]===q)return;ke({url:new URL(location.href),scroll:ae[d.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{q=d.state[M]},blocked:()=>{const _=q-d.state[M];history.go(_)}})}}),addEventListener("hashchange",()=>{we&&(we=!1,history.replaceState(ie(I({},history.state),{[M]:++q}),"",location.href))})},_hydrate:async({status:c,error:h,nodes:v,params:d,routeId:_})=>{const k=new URL(location.href),m=[];let E={},y,S;try{for(let P=0;P<v.length;P+=1){const L=P===v.length-1;let R;if(L){const O=document.querySelector('script[sveltekit\\:data-type="props"]');O&&(R=JSON.parse(O.textContent))}const w=await ne({module:await v[P],url:k,params:d,stuff:E,status:L?c:void 0,error:L?h:void 0,props:R,routeId:_});if(R&&(w.uses.dependencies.add(k.href),w.uses.url=!0),m.push(w),w&&w.loaded)if(w.loaded.error){if(h)throw w.loaded.error;S={status:w.loaded.status,error:w.loaded.error,url:k,routeId:_}}else w.loaded.stuff&&(E=I(I({},E),w.loaded.stuff))}y=S?await se(S):await ve({url:k,params:d,stuff:E,branch:m,status:c,error:h,routeId:_})}catch(P){if(h)throw P;y=await se({status:500,error:He(P),url:k,routeId:_})}y.redirect&&await oe(new URL(y.redirect,location.href)),Te(y)}}}async function Xt({paths:s,target:e,session:t,route:r,spa:l,trailing_slash:o,hydrate:f}){const u=Yt({target:e,session:t,base:s.base,trailing_slash:o});Pt({client:u}),$t(s),f&&await u._hydrate(f),r&&(l&&u.goto(location.href,{replaceState:!0}),u._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Xt as start};
