import{S as Q,i as Y,d as J,s as A,e as v,t as N,c as y,f as R,m as j,g as _,h as p,k as w,l as B,J as u,p as V,q,O as W,u as C,Q as L,R as P,T as X,n as M,U as Z,v as x,N as $}from"../chunks/index-e6af642f.js";const{console:ee}=$,b="C:/Users/Erkut/Desktop/coin-game/client/src/routes/login.svelte";function G(s){let t,e;const f={c:function(){t=v("p"),e=N(s[2]),this.h()},l:function(o){t=y(o,"P",{class:!0});var a=R(t);e=j(a,s[2]),a.forEach(_),this.h()},h:function(){p(t,"class","text-center"),w(t,b,77,4,1696)},m:function(o,a){B(o,t,a),u(t,e)},p:function(o,a){a&4&&V(e,o[2])},d:function(o){o&&_(t)}};return J("SvelteRegisterBlock",{block:f,id:G.name,type:"if",source:"(77:2) {#if message}",ctx:s}),f}function D(s){let t,e,f,m,o,a,i,T,c,E,d,O,n,U,I,K,l=s[2]&&G(s);const z={c:function(){t=q(),e=v("section"),f=v("h1"),m=N("G\u0130R\u0130\u015E"),o=q(),l&&l.c(),a=q(),i=v("form"),T=N(`Kullan\u0131c\u0131 ad\u0131\r
    `),c=v("input"),E=N(`\r
    \u015Eifre\r
    `),d=v("input"),O=q(),n=v("button"),U=N("Tamam"),this.h()},l:function(r){W('[data-svelte="svelte-qm4m71"]',document.head).forEach(_),t=C(r),e=y(r,"SECTION",{});var k=R(e);f=y(k,"H1",{class:!0});var F=R(f);m=j(F,"G\u0130R\u0130\u015E"),F.forEach(_),o=C(k),l&&l.l(k),a=C(k),i=y(k,"FORM",{class:!0,action:!0});var g=R(i);T=j(g,`Kullan\u0131c\u0131 ad\u0131\r
    `),c=y(g,"INPUT",{class:!0,type:!0}),E=j(g,`\r
    \u015Eifre\r
    `),d=y(g,"INPUT",{class:!0,type:!0}),O=C(g),n=y(g,"BUTTON",{class:!0});var H=R(n);U=j(H,"Tamam"),H.forEach(_),g.forEach(_),k.forEach(_),this.h()},h:function(){document.title="Giri\u015F yap",p(f,"class","p-10"),w(f,b,75,2,1646),p(c,"class","p-2 rounded-xl"),p(c,"type","text"),c.autofocus=!0,w(c,b,81,4,1832),p(d,"class","p-2 rounded-xl"),p(d,"type","password"),w(d,b,83,4,1923),p(n,"class","bg-orange-500 text-white p-2 rounded-xl w-20"),w(n,b,84,4,1997),p(i,"class","flex flex-col p-10 gap-1 items-center"),p(i,"action",""),w(i,b,79,2,1745),w(e,b,74,0,1633)},m:function(r,h){B(r,t,h),B(r,e,h),u(e,f),u(f,m),u(e,o),l&&l.m(e,null),u(e,a),u(e,i),u(i,T),u(i,c),L(c,s[0]),u(i,E),u(i,d),L(d,s[1]),u(i,O),u(i,n),u(n,U),c.focus(),I||(K=[P(c,"input",s[4]),P(d,"input",s[5]),P(n,"click",X(s[3]),!1,!0,!1)],I=!0)},p:function(r,[h]){r[2]?l?l.p(r,h):(l=G(r),l.c(),l.m(e,a)):l&&(l.d(1),l=null),h&1&&c.value!==r[0]&&L(c,r[0]),h&2&&d.value!==r[1]&&L(d,r[1])},i:M,o:M,d:function(r){r&&_(t),r&&_(e),l&&l.d(),I=!1,Z(K)}};return J("SvelteRegisterBlock",{block:z,id:D.name,type:"component",source:"",ctx:s}),z}async function te({session:s}){return s.user?{status:302,redirect:"/"}:{props:{user:s.user}}}function ne(s,t,e){let{$$slots:f={},$$scope:m}=t;x("Login",f,[]);let o="",a="",i="";async function T(){if((await fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:a})})).status===200)return window.location.reload();e(2,i="Yanl\u0131\u015F yazd\u0131n aq.")}const c=async()=>{!o||!a||(await T(),e(1,a=""))},E=[];Object.keys(t).forEach(n=>{!~E.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&ee.warn(`<Login> was created with unknown prop '${n}'`)});function d(){o=this.value,e(0,o)}function O(){a=this.value,e(1,a)}return s.$capture_state=()=>({load:te,username:o,password:a,message:i,userLogin:T,logIn:c}),s.$inject_state=n=>{"username"in n&&e(0,o=n.username),"password"in n&&e(1,a=n.password),"message"in n&&e(2,i=n.message)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[o,a,i,c,d,O]}class ae extends Q{constructor(t){super(t),Y(this,t,ne,D,A,{}),J("SvelteRegisterComponent",{component:this,tagName:"Login",options:t,id:D.name})}}export{ae as default,te as load};
