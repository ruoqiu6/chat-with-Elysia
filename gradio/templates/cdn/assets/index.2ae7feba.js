import{S as q,i as y,s as B,e as h,d as D,c as E,h as _,D as w,k as z,l as m,m as F,n as K,F as S,q as A,K as N,B as P,v as g,w as k,t as v,b as C,x as j,y as Q,z as T,N as U,U as G,A as H,C as I,Q as J,P as L}from"./index.06513bff.js";function M(s){let e,t,a,n,i,f,b;return{c(){e=h("label"),t=h("input"),a=D(),n=h("span"),i=E(s[2]),t.disabled=s[1],_(t,"type","checkbox"),_(t,"name","test"),_(t,"data-testid","checkbox"),_(t,"class","svelte-1623jum"),_(n,"class","ml-2 svelte-1623jum"),_(e,"class","svelte-1623jum"),w(e,"disabled",s[1])},m(o,c){z(o,e,c),m(e,t),t.checked=s[0],m(e,a),m(e,n),m(n,i),f||(b=F(t,"change",s[3]),f=!0)},p(o,[c]){c&2&&(t.disabled=o[1]),c&1&&(t.checked=o[0]),c&4&&K(i,o[2]),c&2&&w(e,"disabled",o[1])},i:S,o:S,d(o){o&&A(e),f=!1,b()}}}function O(s,e,t){let{value:a}=e,{disabled:n=!1}=e,{label:i}=e;const f=N();function b(c){f("change",c)}function o(){a=this.checked,t(0,a)}return s.$$set=c=>{"value"in c&&t(0,a=c.value),"disabled"in c&&t(1,n=c.disabled),"label"in c&&t(2,i=c.label)},s.$$.update=()=>{s.$$.dirty&1&&b(a)},[a,n,i,o]}class R extends q{constructor(e){super(),y(this,e,O,M,B,{value:0,disabled:1,label:2})}}function V(s){let e,t,a,n,i;const f=[s[6]];let b={};for(let l=0;l<f.length;l+=1)b=Q(b,f[l]);e=new T({props:b});function o(l){s[7](l)}let c={label:s[3],disabled:s[4]==="static"};return s[0]!==void 0&&(c.value=s[0]),a=new R({props:c}),U.push(()=>G(a,"value",o)),a.$on("change",s[8]),{c(){g(e.$$.fragment),t=D(),g(a.$$.fragment)},m(l,d){k(e,l,d),z(l,t,d),k(a,l,d),i=!0},p(l,d){const u=d&64?H(f,[I(l[6])]):{};e.$set(u);const r={};d&8&&(r.label=l[3]),d&16&&(r.disabled=l[4]==="static"),!n&&d&1&&(n=!0,r.value=l[0],J(()=>n=!1)),a.$set(r)},i(l){i||(v(e.$$.fragment,l),v(a.$$.fragment,l),i=!0)},o(l){C(e.$$.fragment,l),C(a.$$.fragment,l),i=!1},d(l){j(e,l),l&&A(t),j(a,l)}}}function W(s){let e,t;return e=new P({props:{visible:s[2],elem_id:s[1],disable:typeof s[5].container=="boolean"&&!s[5].container,$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},m(a,n){k(e,a,n),t=!0},p(a,[n]){const i={};n&4&&(i.visible=a[2]),n&2&&(i.elem_id=a[1]),n&32&&(i.disable=typeof a[5].container=="boolean"&&!a[5].container),n&601&&(i.$$scope={dirty:n,ctx:a}),e.$set(i)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function X(s,e,t){let{elem_id:a=""}=e,{visible:n=!0}=e,{value:i=!1}=e,{label:f="Checkbox"}=e,{mode:b}=e,{style:o={}}=e,{loading_status:c}=e;function l(u){i=u,t(0,i)}function d(u){L.call(this,s,u)}return s.$$set=u=>{"elem_id"in u&&t(1,a=u.elem_id),"visible"in u&&t(2,n=u.visible),"value"in u&&t(0,i=u.value),"label"in u&&t(3,f=u.label),"mode"in u&&t(4,b=u.mode),"style"in u&&t(5,o=u.style),"loading_status"in u&&t(6,c=u.loading_status)},[i,a,n,f,b,o,c,l,d]}class Y extends q{constructor(e){super(),y(this,e,X,W,B,{elem_id:1,visible:2,value:0,label:3,mode:4,style:5,loading_status:6})}}var p=Y;const x=["static","dynamic"],$=s=>({type:"boolean",description:"checked status",example_data:s.value??!0});export{p as Component,$ as document,x as modes};
//# sourceMappingURL=index.2ae7feba.js.map
