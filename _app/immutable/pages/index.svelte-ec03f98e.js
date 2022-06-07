import{S as I,i as O,s as P,e as $,t as w,k as y,c as v,a as x,h as S,d as b,m as T,b as h,g as U,F as m,N as F,H as A,O as Q,E as B,P as H,j as V,w as M,x as R,y as j,q as k,o as N,B as G,p as W,Q as z,G as J,n as K}from"../chunks/index-d933d993.js";import{a as L,t as X,d as Y,b as Z}from"../chunks/TodoStore-ba17db93.js";import{s as ee,u as te}from"../chunks/AuthStore-94daa87b.js";import"../chunks/index-13129d7e.js";function oe(c){let e,o,t,d,r,i,g,f,n,_,s;return{c(){e=$("form"),o=$("div"),t=$("label"),d=w("Todo"),r=y(),i=$("input"),g=y(),f=$("button"),n=w("Submit"),this.h()},l(l){e=v(l,"FORM",{action:!0,class:!0});var a=x(e);o=v(a,"DIV",{class:!0});var u=x(o);t=v(u,"LABEL",{for:!0,class:!0});var p=x(t);d=S(p,"Todo"),p.forEach(b),r=T(u),i=v(u,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),g=T(u),f=v(u,"BUTTON",{type:!0,class:!0});var E=x(f);n=S(E,"Submit"),E.forEach(b),u.forEach(b),a.forEach(b),this.h()},h(){h(t,"for","todo"),h(t,"class","font-bold mb-2 text-gray-800"),h(i,"type","text"),h(i,"name","todo"),h(i,"placeholder","Write your tasks here"),h(i,"class","border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "),h(f,"type","submit"),h(f,"class","border w-full py-2 px-4 shadow-sm text-white bg-teal-500 hover:bg-orange-700"),h(o,"class","flex flex-col mb-6"),h(e,"action",""),h(e,"class","my-6")},m(l,a){U(l,e,a),m(e,o),m(o,t),m(t,d),m(o,r),m(o,i),F(i,c[0]),m(o,g),m(o,f),m(f,n),_||(s=[A(i,"input",c[2]),A(e,"submit",Q(c[1]))],_=!0)},p(l,[a]){a&1&&i.value!==l[0]&&F(i,l[0])},i:B,o:B,d(l){l&&b(e),_=!1,H(s)}}}function se(c,e,o){let t="";const d=()=>{ee.auth.user()?L(t,te.id):L(t),o(0,t=""),console.log("submitting")};function r(){t=this.value,o(0,t)}return[t,d,r]}class le extends I{constructor(e){super(),O(this,e,se,oe,P,{})}}function ae(c){let e,o,t,d,r,i=c[0].text+"",g,f,n,_,s,l,a;return{c(){e=$("li"),o=$("input"),d=y(),r=$("span"),g=w(i),n=y(),_=$("button"),s=w("Delete"),this.h()},l(u){e=v(u,"LI",{class:!0});var p=x(e);o=v(p,"INPUT",{type:!0,name:!0,class:!0}),d=T(p),r=v(p,"SPAN",{class:!0});var E=x(r);g=S(E,i),E.forEach(b),n=T(p),_=v(p,"BUTTON",{type:!0,class:!0});var D=x(_);s=S(D,"Delete"),D.forEach(b),p.forEach(b),this.h()},h(){h(o,"type","checkbox"),h(o,"name","completed"),o.checked=t=c[0].completed,h(o,"class","mr-2 form-checkbox h-5 w-5"),h(r,"class",f=`flex-1 text-gray-800 ${c[0].completed?"line-through":""}`),h(_,"type","button"),h(_,"class","bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"),h(e,"class","bg-white flex item-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4")},m(u,p){U(u,e,p),m(e,o),m(e,d),m(e,r),m(r,g),m(e,n),m(e,_),m(_,s),l||(a=[A(o,"change",c[1]),A(_,"click",c[2])],l=!0)},p(u,[p]){p&1&&t!==(t=u[0].completed)&&(o.checked=t),p&1&&i!==(i=u[0].text+"")&&V(g,i),p&1&&f!==(f=`flex-1 text-gray-800 ${u[0].completed?"line-through":""}`)&&h(r,"class",f)},i:B,o:B,d(u){u&&b(e),l=!1,H(a)}}}function ne(c,e,o){let{todo:t}=e;const d=()=>X(t.id,t.completed),r=()=>Y(t.id);return c.$$set=i=>{"todo"in i&&o(0,t=i.todo)},[t,d,r]}class re extends I{constructor(e){super(),O(this,e,ne,ae,P,{todo:0})}}function q(c,e,o){const t=c.slice();return t[1]=e[o],t}function C(c){let e,o;return e=new re({props:{todo:c[1],index:c[1].id}}),{c(){M(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,d){j(e,t,d),o=!0},p(t,d){const r={};d&1&&(r.todo=t[1]),d&1&&(r.index=t[1].id),e.$set(r)},i(t){o||(k(e.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),o=!1},d(t){G(e,t)}}}function ce(c){let e,o,t,d,r,i,g;r=new le({});let f=c[0],n=[];for(let s=0;s<f.length;s+=1)n[s]=C(q(c,f,s));const _=s=>N(n[s],1,1,()=>{n[s]=null});return{c(){e=$("main"),o=$("h1"),t=w("Svelte Todo App"),d=y(),M(r.$$.fragment),i=y();for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=v(s,"MAIN",{});var l=x(e);o=v(l,"H1",{class:!0});var a=x(o);t=S(a,"Svelte Todo App"),a.forEach(b),d=T(l),R(r.$$.fragment,l),i=T(l);for(let u=0;u<n.length;u+=1)n[u].l(l);l.forEach(b),this.h()},h(){h(o,"class","text-2xl text-center font-bold text-gray-800 md:text-3xl")},m(s,l){U(s,e,l),m(e,o),m(o,t),m(e,d),j(r,e,null),m(e,i);for(let a=0;a<n.length;a+=1)n[a].m(e,null);g=!0},p(s,[l]){if(l&1){f=s[0];let a;for(a=0;a<f.length;a+=1){const u=q(s,f,a);n[a]?(n[a].p(u,l),k(n[a],1)):(n[a]=C(u),n[a].c(),k(n[a],1),n[a].m(e,null))}for(K(),a=f.length;a<n.length;a+=1)_(a);W()}},i(s){if(!g){k(r.$$.fragment,s);for(let l=0;l<f.length;l+=1)k(n[l]);g=!0}},o(s){N(r.$$.fragment,s),n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)N(n[l]);g=!1},d(s){s&&b(e),G(r),z(n,s)}}}function ie(c,e,o){let t;return J(c,Z,d=>o(0,t=d)),[t]}class me extends I{constructor(e){super(),O(this,e,ie,ce,P,{})}}export{me as default};
