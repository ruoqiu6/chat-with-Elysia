import{S as b,i as g,s as w,e as v,v as x,h as o,k as _,l as p,w as I,m as j,t as d,b as h,q as k,x as C,P as E,E as m,j as c,F as f,d as L,D as $,o as B,p as q,K as y}from"./index.06513bff.js";/* empty css                                                   */function D(r){let e,l,t,s,n,a;return t=new r[0]({}),{c(){e=v("button"),l=v("div"),x(t.$$.fragment),o(l,"class","svelte-6wz9ny"),o(e,"aria-label",r[1]),o(e,"class","svelte-6wz9ny")},m(i,u){_(i,e,u),p(e,l),I(t,l,null),s=!0,n||(a=j(e,"click",r[2]),n=!0)},p(i,[u]){(!s||u&2)&&o(e,"aria-label",i[1])},i(i){s||(d(t.$$.fragment,i),s=!0)},o(i){h(t.$$.fragment,i),s=!1},d(i){i&&k(e),C(t),n=!1,a()}}}function P(r,e,l){let{Icon:t}=e,{label:s=""}=e;function n(a){E.call(this,r,a)}return r.$$set=a=>{"Icon"in a&&l(0,t=a.Icon),"label"in a&&l(1,s=a.label)},[t,s,n]}class M extends b{constructor(e){super(),g(this,e,P,D,w,{Icon:0,label:1})}}function S(r){let e,l,t,s;return{c(){e=m("svg"),l=m("g"),t=m("path"),s=m("path"),o(t,"d","M18,6L6.087,17.913"),c(t,"fill","none"),c(t,"fill-rule","nonzero"),c(t,"stroke-width","2px"),o(l,"transform","matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"),o(s,"d","M4.364,4.364L19.636,19.636"),c(s,"fill","none"),c(s,"fill-rule","nonzero"),c(s,"stroke-width","2px"),o(e,"width","100%"),o(e,"height","100%"),o(e,"viewBox","0 0 24 24"),o(e,"version","1.1"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(e,"xml:space","preserve"),o(e,"stroke","currentColor"),c(e,"fill-rule","evenodd"),c(e,"clip-rule","evenodd"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round")},m(n,a){_(n,e,a),p(e,l),p(l,t),p(e,s)},p:f,i:f,o:f,d(n){n&&k(e)}}}class F extends b{constructor(e){super(),g(this,e,null,S,w,{})}}function K(r){let e,l;return{c(){e=m("svg"),l=m("path"),o(l,"d","M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","100%"),o(e,"height","100%"),o(e,"viewBox","0 0 24 24"),o(e,"fill","none"),o(e,"stroke","currentColor"),o(e,"stroke-width","1.5"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class","feather feather-edit-2")},m(t,s){_(t,e,s),p(e,l)},p:f,i:f,o:f,d(t){t&&k(e)}}}class U extends b{constructor(e){super(),g(this,e,null,K,w,{})}}function z(r){let e,l;return e=new M({props:{Icon:U,label:"Edit"}}),e.$on("click",r[3]),{c(){x(e.$$.fragment)},m(t,s){I(e,t,s),l=!0},p:f,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function A(r){let e,l,t,s,n=r[0]&&z(r);return t=new M({props:{Icon:F,label:"Clear"}}),t.$on("click",r[4]),{c(){e=v("div"),n&&n.c(),l=L(),x(t.$$.fragment),o(e,"class","svelte-97wjeb"),$(e,"not-absolute",!r[1]),c(e,"position",r[1]?"absolute":"static",!1)},m(a,i){_(a,e,i),n&&n.m(e,null),p(e,l),I(t,e,null),s=!0},p(a,[i]){a[0]?n?(n.p(a,i),i&1&&d(n,1)):(n=z(a),n.c(),d(n,1),n.m(e,l)):n&&(B(),h(n,1,1,()=>{n=null}),q()),i&2&&$(e,"not-absolute",!a[1]),i&2&&c(e,"position",a[1]?"absolute":"static",!1)},i(a){s||(d(n),d(t.$$.fragment,a),s=!0)},o(a){h(n),h(t.$$.fragment,a),s=!1},d(a){a&&k(e),n&&n.d(),C(t)}}}function G(r,e,l){let{editable:t=!1}=e,{absolute:s=!0}=e;const n=y(),a=()=>n("edit"),i=u=>{n("clear"),u.stopPropagation()};return r.$$set=u=>{"editable"in u&&l(0,t=u.editable),"absolute"in u&&l(1,s=u.absolute)},[t,s,n,a,i]}class N extends b{constructor(e){super(),g(this,e,G,A,w,{editable:0,absolute:1})}}export{F as C,M as I,N as M};
//# sourceMappingURL=ModifyUpload.068550fb.js.map