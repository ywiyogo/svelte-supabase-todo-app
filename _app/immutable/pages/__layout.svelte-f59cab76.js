import{S as H,i as V,s as j,e as b,t as w,k as A,c as g,a as v,h as x,d as f,m as I,b as _,g as $,F as p,E as T,G as U,H as q,I as C,w as D,x as F,y as G,J,K,L as M,q as B,o as O,B as z}from"../chunks/index-d933d993.js";import{u as N,s as E}from"../chunks/AuthStore-94daa87b.js";import{p as P}from"../chunks/stores-0d309780.js";import{l as Q}from"../chunks/TodoStore-ba17db93.js";import{b as k}from"../chunks/singletons-1b661bce.js";import"../chunks/index-13129d7e.js";function R(c){let t,e,l,u,s,a,r,o,h;return{c(){t=b("a"),e=b("button"),l=w("Login"),s=A(),a=b("a"),r=b("button"),o=w("Sign Up"),this.h()},l(n){t=g(n,"A",{href:!0});var i=v(t);e=g(i,"BUTTON",{class:!0});var d=v(e);l=x(d,"Login"),d.forEach(f),i.forEach(f),s=I(n),a=g(n,"A",{href:!0});var m=v(a);r=g(m,"BUTTON",{class:!0});var y=v(r);o=x(y,"Sign Up"),y.forEach(f),m.forEach(f),this.h()},h(){_(e,"class",u=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${c[1].routeId==="auth"?"hidden":""}`),_(t,"href",k+"/login"),_(r,"class",h=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${c[1].routeId==="auth"?"hidden":""}`),_(a,"href",k+"/signup")},m(n,i){$(n,t,i),p(t,e),p(e,l),$(n,s,i),$(n,a,i),p(a,r),p(r,o)},p(n,i){i&2&&u!==(u=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${n[1].routeId==="auth"?"hidden":""}`)&&_(e,"class",u),i&2&&h!==(h=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${n[1].routeId==="auth"?"hidden":""}`)&&_(r,"class",h)},d(n){n&&f(t),n&&f(s),n&&f(a)}}}function W(c){let t,e,l,u;return{c(){t=b("button"),e=w("Logout"),this.h()},l(s){t=g(s,"BUTTON",{class:!0});var a=v(t);e=x(a,"Logout"),a.forEach(f),this.h()},h(){_(t,"class","rounded shadow-sm py-2 px-4 text-white bg-teal-500 hover:bg-teal-700")},m(s,a){$(s,t,a),p(t,e),l||(u=q(t,"click",c[2]),l=!0)},p:T,d(s){s&&f(t),l=!1,u()}}}function X(c){let t,e,l,u,s,a,r,o;function h(d,m){return d[0]?W:R}let n=h(c),i=n(c);return{c(){t=b("nav"),e=b("a"),l=w("Home"),u=A(),s=b("a"),a=w("About"),r=A(),o=b("div"),i.c(),this.h()},l(d){t=g(d,"NAV",{class:!0});var m=v(t);e=g(m,"A",{href:!0,class:!0});var y=v(e);l=x(y,"Home"),y.forEach(f),u=I(m),s=g(m,"A",{href:!0,class:!0});var L=v(s);a=x(L,"About"),L.forEach(f),r=I(m),o=g(m,"DIV",{class:!0});var S=v(o);i.l(S),S.forEach(f),m.forEach(f),this.h()},h(){_(e,"href",k),_(e,"class","mx-4"),_(s,"href",k+"/about"),_(s,"class","mx-4"),_(o,"class","my-4 flex-auto w-1/4 justify-end text-right"),_(t,"class","flex flex-row justify-center")},m(d,m){$(d,t,m),p(t,e),p(e,l),p(t,u),p(t,s),p(s,a),p(t,r),p(t,o),i.m(o,null)},p(d,[m]){n===(n=h(d))&&i?i.p(d,m):(i.d(1),i=n(d),i&&(i.c(),i.m(o,null)))},i:T,o:T,d(d){d&&f(t),i.d()}}}function Y(c,t,e){let l,u;return U(c,N,a=>e(0,l=a)),U(c,P,a=>e(1,u=a)),[l,u,()=>{E.auth.signOut()}]}class Z extends H{constructor(t){super(),V(this,t,Y,X,j,{})}}function tt(c){let t,e,l,u,s;l=new Z({});const a=c[1].default,r=C(a,c,c[0],null);return{c(){t=b("main"),e=b("div"),D(l.$$.fragment),u=A(),r&&r.c(),this.h()},l(o){t=g(o,"MAIN",{});var h=v(t);e=g(h,"DIV",{class:!0});var n=v(e);F(l.$$.fragment,n),u=I(n),r&&r.l(n),n.forEach(f),h.forEach(f),this.h()},h(){_(e,"class","container max-w-4xl mx-auto py-8")},m(o,h){$(o,t,h),p(t,e),G(l,e,null),p(e,u),r&&r.m(e,null),s=!0},p(o,[h]){r&&r.p&&(!s||h&1)&&J(r,a,o,o[0],s?M(a,o[0],h,null):K(o[0]),null)},i(o){s||(B(l.$$.fragment,o),B(r,o),s=!0)},o(o){O(l.$$.fragment,o),O(r,o),s=!1},d(o){o&&f(t),z(l),r&&r.d(o)}}}function et(c,t,e){let{$$slots:l={},$$scope:u}=t;return console.log(E),N.set(E.auth.user()),E.auth.onAuthStateChange((s,a)=>{N.set(a==null?void 0:a.user),a!=null&&a.user&&Q()}),c.$$set=s=>{"$$scope"in s&&e(0,u=s.$$scope)},[u,l]}class ut extends H{constructor(t){super(),V(this,t,et,tt,j,{})}}export{ut as default};