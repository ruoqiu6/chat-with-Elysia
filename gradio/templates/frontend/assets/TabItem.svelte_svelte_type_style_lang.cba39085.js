import{S as A,i as B,s as E,f as S,k as v,q as k,r as K,e as y,d as T,h as b,D as q,l as h,a7 as M,u as N,g as V,a as j,t as z,b as F,V as G,K as H,an as J,am as L,ao as O,ap as P,c as D,m as Q,n as I}from"./index.22481e4a.js";function w(a,e,l){const t=a.slice();return t[11]=e[l],t[13]=l,t}function R(a){let e,l=a[11].name+"",t,r,o,i;function n(){return a[9](a[11])}return{c(){e=y("button"),t=D(l),r=T(),b(e,"class","svelte-710i53")},m(c,f){v(c,e,f),h(e,t),h(e,r),o||(i=Q(e,"click",n),o=!0)},p(c,f){a=c,f&4&&l!==(l=a[11].name+"")&&I(t,l)},d(c){c&&k(e),o=!1,i()}}}function U(a){let e,l=a[11].name+"",t,r;return{c(){e=y("button"),t=D(l),r=T(),b(e,"class","selected svelte-710i53")},m(o,i){v(o,e,i),h(e,t),h(e,r)},p(o,i){i&4&&l!==(l=o[11].name+"")&&I(t,l)},d(o){o&&k(e)}}}function C(a,e){let l,t;function r(n,c){return n[11].id===n[3]?U:R}let o=r(e),i=o(e);return{key:a,first:null,c(){l=S(),i.c(),t=S(),this.first=l},m(n,c){v(n,l,c),i.m(n,c),v(n,t,c)},p(n,c){e=n,o===(o=r(e))&&i?i.p(e,c):(i.d(1),i=o(e),i&&(i.c(),i.m(t.parentNode,t)))},d(n){n&&k(l),i.d(n),n&&k(t)}}}function W(a){let e,l,t=[],r=new Map,o,i,n=a[2];const c=s=>s[11].id;for(let s=0;s<n.length;s+=1){let u=w(a,n,s),m=c(u);r.set(m,t[s]=C(m,u))}const f=a[8].default,d=K(f,a,a[7],null);return{c(){e=y("div"),l=y("div");for(let s=0;s<t.length;s+=1)t[s].c();o=T(),d&&d.c(),b(l,"class","tab-nav scroll-hide svelte-710i53"),b(e,"class","tabs svelte-710i53"),b(e,"id",a[1]),q(e,"hide",!a[0])},m(s,u){v(s,e,u),h(e,l);for(let m=0;m<t.length;m+=1)t[m].m(l,null);h(e,o),d&&d.m(e,null),i=!0},p(s,[u]){u&44&&(n=s[2],t=M(t,u,c,1,s,n,r,l,L,C,null,w)),d&&d.p&&(!i||u&128)&&N(d,f,s,s[7],i?j(f,s[7],u,null):V(s[7]),null),(!i||u&2)&&b(e,"id",s[1]),u&1&&q(e,"hide",!s[0])},i(s){i||(z(d,s),i=!0)},o(s){F(d,s),i=!1},d(s){s&&k(e);for(let u=0;u<t.length;u+=1)t[u].d();d&&d.d(s)}}}const X={};function Y(a,e,l){let t,{$$slots:r={},$$scope:o}=e,{visible:i=!0}=e,{elem_id:n="id"}=e,{selected:c}=e,f=[];const d=O(!1);G(a,d,_=>l(3,t=_));const s=H();J(X,{register_tab:_=>{f.push({name:_.name,id:_.id}),d.update(p=>p??_.id),l(2,f)},unregister_tab:_=>{const p=f.findIndex(g=>g.id===_.id);f.splice(p,1),d.update(g=>g===_.id?f[p]?.id||f[f.length-1]?.id:g)},selected_tab:d});function u(_){l(6,c=_),P(d,t=_,t),s("change")}const m=_=>u(_.id);return a.$$set=_=>{"visible"in _&&l(0,i=_.visible),"elem_id"in _&&l(1,n=_.elem_id),"selected"in _&&l(6,c=_.selected),"$$scope"in _&&l(7,o=_.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&c!==null&&u(c)},[i,n,f,t,d,u,c,o,r,m]}class x extends A{constructor(e){super(),B(this,e,Y,W,E,{visible:0,elem_id:1,selected:6})}}export{x as T,X as a};
//# sourceMappingURL=TabItem.svelte_svelte_type_style_lang.cba39085.js.map