import{S as L,i as V,d as z,s as W,e as w,t as O,c as T,f as C,m as j,g,h as m,k as b,l as D,J as c,p as X,q as K,O as Z,u as P,Q as N,R,T as x,n as G,U as $,v as ee,N as te}from"../chunks/index-e6af642f.js";import{g as ne}from"../chunks/navigation-98e433f2.js";import"../chunks/singletons-4439d2b4.js";const{console:se}=te,k="C:/Users/Erkut/Desktop/coin-game/client/src/routes/signup.svelte";function J(n){let t,e;const f={c:function(){t=w("p"),e=O(n[2]),this.h()},l:function(a){t=T(a,"P",{class:!0});var s=C(t);e=j(s,n[2]),s.forEach(g),this.h()},h:function(){m(t,"class","text-center"),b(t,k,70,4,1360)},m:function(a,s){D(a,t,s),c(t,e)},p:function(a,s){s&4&&X(e,a[2])},d:function(a){a&&g(t)}};return z("SvelteRegisterBlock",{block:f,id:J.name,type:"if",source:"(70:2) {#if message}",ctx:n}),f}function Y(n){let t,e,f,_,a,s,r,S,u,U,d,I,p,i,v,B,A,F,l=n[2]&&J(n);const H={c:function(){t=K(),e=w("section"),f=w("h1"),_=O("KAYIT"),a=K(),l&&l.c(),s=K(),r=w("form"),S=O(`Kullan\u0131c\u0131 ad\u0131\r
    `),u=w("input"),U=O(`\r
    \u015Eifre\r
    `),d=w("input"),I=O(`\r
    Tekrar\r
    `),p=w("input"),i=K(),v=w("button"),B=O("Tamam"),this.h()},l:function(o){Z('[data-svelte="svelte-avuejq"]',document.head).forEach(g),t=P(o),e=T(o,"SECTION",{});var E=C(e);f=T(E,"H1",{class:!0});var M=C(f);_=j(M,"KAYIT"),M.forEach(g),a=P(E),l&&l.l(E),s=P(E),r=T(E,"FORM",{class:!0,action:!0});var h=C(r);S=j(h,`Kullan\u0131c\u0131 ad\u0131\r
    `),u=T(h,"INPUT",{class:!0,type:!0}),U=j(h,`\r
    \u015Eifre\r
    `),d=T(h,"INPUT",{class:!0,type:!0}),I=j(h,`\r
    Tekrar\r
    `),p=T(h,"INPUT",{class:!0,type:!0}),i=P(h),v=T(h,"BUTTON",{class:!0});var Q=C(v);B=j(Q,"Tamam"),Q.forEach(g),h.forEach(g),E.forEach(g),this.h()},h:function(){document.title="Kay\u0131t ol",m(f,"class","p-10"),b(f,k,68,2,1310),m(u,"class","p-2 rounded-xl"),m(u,"type","text"),u.autofocus=!0,b(u,k,74,4,1496),m(d,"class","p-2 rounded-xl"),m(d,"type","password"),b(d,k,76,4,1587),m(p,"class","p-2 rounded-xl"),m(p,"type","password"),b(p,k,78,4,1673),m(v,"class","bg-orange-500 text-white p-2 rounded-xl w-20"),b(v,k,79,4,1747),m(r,"class","flex flex-col p-10 gap-1 items-center"),m(r,"action",""),b(r,k,72,2,1409),b(e,k,67,0,1297)},m:function(o,y){D(o,t,y),D(o,e,y),c(e,f),c(f,_),c(e,a),l&&l.m(e,null),c(e,s),c(e,r),c(r,S),c(r,u),N(u,n[0]),c(r,U),c(r,d),N(d,n[1]),c(r,I),c(r,p),N(p,n[1]),c(r,i),c(r,v),c(v,B),u.focus(),A||(F=[R(u,"input",n[4]),R(d,"input",n[5]),R(p,"input",n[6]),R(v,"click",x(n[3]),!1,!0,!1)],A=!0)},p:function(o,[y]){o[2]?l?l.p(o,y):(l=J(o),l.c(),l.m(e,s)):l&&(l.d(1),l=null),y&1&&u.value!==o[0]&&N(u,o[0]),y&2&&d.value!==o[1]&&N(d,o[1]),y&2&&p.value!==o[1]&&N(p,o[1])},i:G,o:G,d:function(o){o&&g(t),o&&g(e),l&&l.d(),A=!1,$(F)}};return z("SvelteRegisterBlock",{block:H,id:Y.name,type:"component",source:"",ctx:n}),H}async function ae({session:n}){return n.user?{status:302,redirect:"/"}:{props:{user:n.user}}}function re(n,t,e){let{$$slots:f={},$$scope:_}=t;ee("Signup",f,[]);let a="",s="",r="";const S=async()=>{try{if((await fetch("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:s})})).status===200)return window.location.reload();e(2,r="B\xF6yle bir kullan\u0131c\u0131 zaten var aq.")}catch{}},u=async()=>{!a||!s||(await S(),e(0,a=""),e(1,s=""))},U=[];Object.keys(t).forEach(i=>{!~U.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&se.warn(`<Signup> was created with unknown prop '${i}'`)});function d(){a=this.value,e(0,a)}function I(){s=this.value,e(1,s)}function p(){s=this.value,e(1,s)}return n.$capture_state=()=>({load:ae,goto:ne,username:a,password:s,message:r,register:S,signUp:u}),n.$inject_state=i=>{"username"in i&&e(0,a=i.username),"password"in i&&e(1,s=i.password),"message"in i&&e(2,r=i.message)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[a,s,r,u,d,I,p]}class ue extends L{constructor(t){super(t),V(this,t,re,Y,W,{}),z("SvelteRegisterComponent",{component:this,tagName:"Signup",options:t,id:Y.name})}}export{ue as default,ae as load};
