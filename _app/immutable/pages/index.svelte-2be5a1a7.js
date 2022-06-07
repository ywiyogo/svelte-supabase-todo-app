import{S as F,i as I,s as M,e as $,t as w,k as x,c as v,a as y,h as S,d as b,m as T,b as h,g as O,F as m,N as U,H as A,O as Q,E as B,P as C,j as V,w as H,x as R,y as j,q as k,o as N,B as G,p as W,Q as z,G as J,n as K}from"../chunks/index-d933d993.js";import{a as D,t as X,d as Y,b as Z}from"../chunks/TodoStore-ba17db93.js";import{s as ee,u as te}from"../chunks/AuthStore-94daa87b.js";import"../chunks/index-13129d7e.js";function oe(c){let e,o,t,d,n,i,g,f,r,_,s;return{c(){e=$("form"),o=$("div"),t=$("label"),d=w("Todo"),n=x(),i=$("input"),g=x(),f=$("button"),r=w("Submit"),this.h()},l(l){e=v(l,"FORM",{action:!0,class:!0});var a=y(e);o=v(a,"DIV",{class:!0});var u=y(o);t=v(u,"LABEL",{for:!0,class:!0});var p=y(t);d=S(p,"Todo"),p.forEach(b),n=T(u),i=v(u,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),g=T(u),f=v(u,"BUTTON",{type:!0,class:!0});var E=y(f);r=S(E,"Submit"),E.forEach(b),u.forEach(b),a.forEach(b),this.h()},h(){h(t,"for","todo"),h(t,"class","font-bold mb-2 text-gray-800"),h(i,"type","text"),h(i,"name","todo"),h(i,"placeholder","Write your tasks here"),h(i,"class","border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "),h(f,"type","submit"),h(f,"class","border w-full py-2 px-4 shadow-sm text-white bg-teal-500 hover:bg-orange-700"),h(o,"class","flex flex-col mb-6"),h(e,"action",""),h(e,"class","my-6")},m(l,a){O(l,e,a),m(e,o),m(o,t),m(t,d),m(o,n),m(o,i),U(i,c[0]),m(o,g),m(o,f),m(f,r),_||(s=[A(i,"input",c[2]),A(e,"submit",Q(c[1]))],_=!0)},p(l,[a]){a&1&&i.value!==l[0]&&U(i,l[0])},i:B,o:B,d(l){l&&b(e),_=!1,C(s)}}}function se(c,e,o){let t="";const d=()=>{ee.auth.user()?D(t,te.id):D(t),o(0,t=""),console.log("submitting")};function n(){t=this.value,o(0,t)}return[t,d,n]}class le extends F{constructor(e){super(),I(this,e,se,oe,M,{})}}function ae(c){let e,o,t,d,n,i=c[0].text+"",g,f,r,_,s,l,a;return{c(){e=$("li"),o=$("input"),d=x(),n=$("span"),g=w(i),r=x(),_=$("button"),s=w("Delete"),this.h()},l(u){e=v(u,"LI",{class:!0});var p=y(e);o=v(p,"INPUT",{type:!0,name:!0,class:!0}),d=T(p),n=v(p,"SPAN",{class:!0});var E=y(n);g=S(E,i),E.forEach(b),r=T(p),_=v(p,"BUTTON",{type:!0,class:!0});var P=y(_);s=S(P,"Delete"),P.forEach(b),p.forEach(b),this.h()},h(){h(o,"type","checkbox"),h(o,"name","completed"),o.checked=t=c[0].completed,h(o,"class","mr-2 form-checkbox h-5 w-5"),h(n,"class",f=`flex-1 text-gray-800 ${c[0].completed?"line-through":""}`),h(_,"type","button"),h(_,"class","bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"),h(e,"class","bg-white flex item-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4")},m(u,p){O(u,e,p),m(e,o),m(e,d),m(e,n),m(n,g),m(e,r),m(e,_),m(_,s),l||(a=[A(o,"change",c[1]),A(_,"click",c[2])],l=!0)},p(u,[p]){p&1&&t!==(t=u[0].completed)&&(o.checked=t),p&1&&i!==(i=u[0].text+"")&&V(g,i),p&1&&f!==(f=`flex-1 text-gray-800 ${u[0].completed?"line-through":""}`)&&h(n,"class",f)},i:B,o:B,d(u){u&&b(e),l=!1,C(a)}}}function re(c,e,o){let{todo:t}=e;const d=()=>X(t.id,t.completed),n=()=>Y(t.id);return c.$$set=i=>{"todo"in i&&o(0,t=i.todo)},[t,d,n]}class ne extends F{constructor(e){super(),I(this,e,re,ae,M,{todo:0})}}function L(c,e,o){const t=c.slice();return t[1]=e[o],t}function q(c){let e,o;return e=new ne({props:{todo:c[1],index:c[1].id}}),{c(){H(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,d){j(e,t,d),o=!0},p(t,d){const n={};d&1&&(n.todo=t[1]),d&1&&(n.index=t[1].id),e.$set(n)},i(t){o||(k(e.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),o=!1},d(t){G(e,t)}}}function ce(c){let e,o,t,d,n,i,g;n=new le({});let f=c[0],r=[];for(let s=0;s<f.length;s+=1)r[s]=q(L(c,f,s));const _=s=>N(r[s],1,1,()=>{r[s]=null});return{c(){e=$("main"),o=$("h1"),t=w("My First Svelte Todo App"),d=x(),H(n.$$.fragment),i=x();for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=v(s,"MAIN",{});var l=y(e);o=v(l,"H1",{class:!0});var a=y(o);t=S(a,"My First Svelte Todo App"),a.forEach(b),d=T(l),R(n.$$.fragment,l),i=T(l);for(let u=0;u<r.length;u+=1)r[u].l(l);l.forEach(b),this.h()},h(){h(o,"class","text-2xl text-center font-bold text-gray-800 md:text-3xl")},m(s,l){O(s,e,l),m(e,o),m(o,t),m(e,d),j(n,e,null),m(e,i);for(let a=0;a<r.length;a+=1)r[a].m(e,null);g=!0},p(s,[l]){if(l&1){f=s[0];let a;for(a=0;a<f.length;a+=1){const u=L(s,f,a);r[a]?(r[a].p(u,l),k(r[a],1)):(r[a]=q(u),r[a].c(),k(r[a],1),r[a].m(e,null))}for(K(),a=f.length;a<r.length;a+=1)_(a);W()}},i(s){if(!g){k(n.$$.fragment,s);for(let l=0;l<f.length;l+=1)k(r[l]);g=!0}},o(s){N(n.$$.fragment,s),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)N(r[l]);g=!1},d(s){s&&b(e),G(n),z(r,s)}}}function ie(c,e,o){let t;return J(c,Z,d=>o(0,t=d)),[t]}class me extends F{constructor(e){super(),I(this,e,ie,ce,M,{})}}export{me as default};
