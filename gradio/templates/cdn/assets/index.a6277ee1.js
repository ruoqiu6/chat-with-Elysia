import{S as _e,i as de,s as he,e as M,h as m,D as E,k as T,a3 as ve,m as H,q as C,I as ge,d as Y,F as te,P as Ae,N as Q,c as $,n as pe,f as at,a5 as rt,l as L,U as le,t as B,v as V,w as G,b as S,x as W,o as X,p as j,Q as ne,K as Oe,Z as Ue,E as x,a6 as P,a7 as oe,a8 as ce,y as it,z as ut,A as ft,C as ot}from"./index.06513bff.js";import{U as ct}from"./Upload.23e28831.js";/* empty css                                                   */import{d as _t}from"./dsv.7fe76a93.js";var De=Object.prototype.hasOwnProperty;function se(s,e){var t,n;if(s===e)return!0;if(s&&e&&(t=s.constructor)===e.constructor){if(t===Date)return s.getTime()===e.getTime();if(t===RegExp)return s.toString()===e.toString();if(t===Array){if((n=s.length)===e.length)for(;n--&&se(s[n],e[n]););return n===-1}if(!t||typeof s=="object"){n=0;for(t in s)if(De.call(s,t)&&++n&&!De.call(e,t)||!(t in e)||!se(s[t],e[t]))return!1;return Object.keys(e).length===n}}return s!==s&&e!==e}function Ee(s){let e,t,n;return{c(){e=M("input"),m(e,"tabindex","-1"),m(e,"class","svelte-q8uklq"),E(e,"header",s[3])},m(l,r){T(l,e,r),ve(e,s[0]),s[8](e),t||(n=[H(e,"input",s[7]),H(e,"keydown",s[6]),H(e,"blur",pt)],t=!0)},p(l,r){r&1&&e.value!==l[0]&&ve(e,l[0]),r&8&&E(e,"header",l[3])},d(l){l&&C(e),s[8](null),t=!1,ge(n)}}}function dt(s){let e;return{c(){e=$(s[0])},m(t,n){T(t,e,n)},p(t,n){n&1&&pe(e,t[0])},d(t){t&&C(e)}}}function ht(s){let e,t;return{c(){e=new rt(!1),t=at(),e.a=t},m(n,l){e.m(s[0],n,l),T(n,t,l)},p(n,l){l&1&&e.p(n[0])},d(n){n&&C(t),n&&e.d()}}}function gt(s){let e,t,n,l,r=s[2]&&Ee(s);function _(i,g){return i[4]==="markdown"||i[4]==="html"?ht:dt}let d=_(s),f=d(s);return{c(){r&&r.c(),e=Y(),t=M("span"),f.c(),m(t,"tabindex","-1"),m(t,"role","button"),m(t,"class","svelte-q8uklq"),E(t,"edit",s[2])},m(i,g){r&&r.m(i,g),T(i,e,g),T(i,t,g),f.m(t,null),n||(l=H(t,"dblclick",s[5]),n=!0)},p(i,[g]){i[2]?r?r.p(i,g):(r=Ee(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),d===(d=_(i))&&f?f.p(i,g):(f.d(1),f=d(i),f&&(f.c(),f.m(t,null))),g&4&&E(t,"edit",i[2])},i:te,o:te,d(i){r&&r.d(i),i&&C(e),i&&C(t),f.d(),n=!1,l()}}}const pt=({currentTarget:s})=>s.setAttribute("tabindex","-1");function mt(s,e,t){let{edit:n}=e,{value:l=""}=e,{el:r}=e,{header:_=!1}=e,{datatype:d="str"}=e;function f(c){Ae.call(this,s,c)}function i(c){Ae.call(this,s,c)}function g(){l=this.value,t(0,l)}function y(c){Q[c?"unshift":"push"](()=>{r=c,t(1,r)})}return s.$$set=c=>{"edit"in c&&t(2,n=c.edit),"value"in c&&t(0,l=c.value),"el"in c&&t(1,r=c.el),"header"in c&&t(3,_=c.header),"datatype"in c&&t(4,d=c.datatype)},[l,r,n,_,d,f,i,g,y]}class He extends _e{constructor(e){super(),de(this,e,mt,gt,he,{edit:2,value:0,el:1,header:3,datatype:4})}}function Le(s,e,t){const n=s.slice();return n[52]=e[t],n[54]=t,n}function qe(s,e,t){const n=s.slice();return n[55]=e[t].value,n[56]=e[t].id,n[57]=e,n[58]=t,n}function Me(s,e,t){const n=s.slice();return n[55]=e[t].value,n[56]=e[t].id,n[59]=e,n[54]=t,n}function Te(s){let e,t;return{c(){e=M("p"),t=$(s[1]),m(e,"class","svelte-1sckpv1")},m(n,l){T(n,e,l),L(e,t)},p(n,l){l[0]&2&&pe(t,n[1])},d(n){n&&C(e)}}}function Ce(s){let e,t;return{c(){e=M("caption"),t=$(s[1]),m(e,"class","sr-only")},m(n,l){T(n,e,l),L(e,t)},p(n,l){l[0]&2&&pe(t,n[1])},d(n){n&&C(e)}}}function Be(s,e){let t,n,l,r,_,d,f,i,g,y,c,p=e[56],o,A,z;function u(N){e[30](N,e[56])}function k(){return e[31](e[56])}let q={value:e[55],edit:e[13]===e[56],header:!0};e[10][e[56]].input!==void 0&&(q.el=e[10][e[56]].input),l=new He({props:q}),Q.push(()=>le(l,"el",u)),l.$on("keydown",e[21]),l.$on("dblclick",k);function b(){return e[32](e[54])}const F=()=>e[33](t,p),K=()=>e[33](null,p);return{key:s,first:null,c(){t=M("th"),n=M("div"),V(l.$$.fragment),_=Y(),d=M("div"),f=x("svg"),i=x("path"),y=Y(),m(i,"d","M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"),m(f,"width","1em"),m(f,"height","1em"),m(f,"viewBox","0 0 9 7"),m(f,"fill","none"),m(f,"xmlns","http://www.w3.org/2000/svg"),m(f,"class","svelte-1sckpv1"),m(d,"class",g="sort-button "+e[11]+" svelte-1sckpv1"),E(d,"sorted",e[12]===e[54]),E(d,"des",e[12]===e[54]&&e[11]==="des"),m(n,"class","cell-wrap svelte-1sckpv1"),m(t,"aria-sort",c=e[15](e[55],e[12],e[11])),m(t,"class","svelte-1sckpv1"),E(t,"editing",e[13]===e[56]),this.first=t},m(N,R){T(N,t,R),L(t,n),G(l,n,null),L(n,_),L(n,d),L(d,f),L(f,i),L(t,y),F(),o=!0,A||(z=H(d,"click",b),A=!0)},p(N,R){e=N;const I={};R[0]&256&&(I.value=e[55]),R[0]&8448&&(I.edit=e[13]===e[56]),!r&&R[0]&1280&&(r=!0,I.el=e[10][e[56]].input,ne(()=>r=!1)),l.$set(I),(!o||R[0]&2048&&g!==(g="sort-button "+e[11]+" svelte-1sckpv1"))&&m(d,"class",g),R[0]&6400&&E(d,"sorted",e[12]===e[54]),R[0]&6400&&E(d,"des",e[12]===e[54]&&e[11]==="des"),(!o||R[0]&6400&&c!==(c=e[15](e[55],e[12],e[11])))&&m(t,"aria-sort",c),p!==e[56]&&(K(),p=e[56],F()),R[0]&8448&&E(t,"editing",e[13]===e[56])},i(N){o||(B(l.$$.fragment,N),o=!0)},o(N){S(l.$$.fragment,N),o=!1},d(N){N&&C(t),W(l),K(),A=!1,z()}}}function Fe(s,e){let t,n,l,r,_,d=e[56],f,i,g;function y(b){e[34](b,e[55],e[57],e[58])}function c(b){e[35](b,e[56])}let p={edit:e[6]===e[56],datatype:Array.isArray(e[0])?e[0][e[58]]:e[0]};e[55]!==void 0&&(p.value=e[55]),e[10][e[56]].input!==void 0&&(p.el=e[10][e[56]].input),l=new He({props:p}),Q.push(()=>le(l,"value",y)),Q.push(()=>le(l,"el",c));const o=()=>e[36](t,d),A=()=>e[36](null,d);function z(){return e[37](e[56])}function u(){return e[38](e[56])}function k(){return e[39](e[56])}function q(...b){return e[40](e[54],e[58],e[56],...b)}return{key:s,first:null,c(){t=M("td"),n=M("div"),V(l.$$.fragment),m(n,"class","cell-wrap svelte-1sckpv1"),E(n,"border-transparent",e[7]!==e[56]),m(t,"tabindex","0"),m(t,"class","svelte-1sckpv1"),this.first=t},m(b,F){T(b,t,F),L(t,n),G(l,n,null),o(),f=!0,i||(g=[H(t,"touchstart",z,{passive:!0}),H(t,"click",u),H(t,"dblclick",k),H(t,"keydown",q)],i=!0)},p(b,F){e=b;const K={};F[0]&576&&(K.edit=e[6]===e[56]),F[0]&513&&(K.datatype=Array.isArray(e[0])?e[0][e[58]]:e[0]),!r&&F[0]&512&&(r=!0,K.value=e[55],ne(()=>r=!1)),!_&&F[0]&1536&&(_=!0,K.el=e[10][e[56]].input,ne(()=>_=!1)),l.$set(K),F[0]&640&&E(n,"border-transparent",e[7]!==e[56]),d!==e[56]&&(A(),d=e[56],o())},i(b){f||(B(l.$$.fragment,b),f=!0)},o(b){S(l.$$.fragment,b),f=!1},d(b){b&&C(t),W(l),A(),i=!1,ge(g)}}}function Re(s,e){let t,n=[],l=new Map,r,_,d=e[52];const f=i=>i[56];for(let i=0;i<d.length;i+=1){let g=qe(e,d,i),y=f(g);l.set(y,n[i]=Fe(y,g))}return{key:s,first:null,c(){t=M("tr");for(let i=0;i<n.length;i+=1)n[i].c();r=Y(),m(t,"class","svelte-1sckpv1"),this.first=t},m(i,g){T(i,t,g);for(let y=0;y<n.length;y+=1)n[y].m(t,null);L(t,r),_=!0},p(i,g){e=i,g[0]&460481&&(d=e[52],X(),n=oe(n,g,f,1,e,d,l,t,ce,Fe,r,qe),j())},i(i){if(!_){for(let g=0;g<d.length;g+=1)B(n[g]);_=!0}},o(i){for(let g=0;g<n.length;g+=1)S(n[g]);_=!1},d(i){i&&C(t);for(let g=0;g<n.length;g+=1)n[g].d()}}}function bt(s){let e,t,n,l,r=[],_=new Map,d,f,i=[],g=new Map,y,c=s[1]&&s[1].length!==0&&Ce(s),p=s[8];const o=u=>u[56];for(let u=0;u<p.length;u+=1){let k=Me(s,p,u),q=o(k);_.set(q,r[u]=Be(q,k))}let A=s[9];const z=u=>u[52];for(let u=0;u<A.length;u+=1){let k=Le(s,A,u),q=z(k);g.set(q,i[u]=Re(q,k))}return{c(){e=M("table"),c&&c.c(),t=Y(),n=M("thead"),l=M("tr");for(let u=0;u<r.length;u+=1)r[u].c();d=Y(),f=M("tbody");for(let u=0;u<i.length;u+=1)i[u].c();m(l,"class","svelte-1sckpv1"),m(n,"class","svelte-1sckpv1"),m(f,"class","svelte-1sckpv1"),m(e,"class","svelte-1sckpv1"),E(e,"dragging",s[14])},m(u,k){T(u,e,k),c&&c.m(e,null),L(e,t),L(e,n),L(n,l);for(let q=0;q<r.length;q+=1)r[q].m(l,null);L(e,d),L(e,f);for(let q=0;q<i.length;q+=1)i[q].m(f,null);y=!0},p(u,k){u[1]&&u[1].length!==0?c?c.p(u,k):(c=Ce(u),c.c(),c.m(e,t)):c&&(c.d(1),c=null),k[0]&3718400&&(p=u[8],X(),r=oe(r,k,o,1,u,p,_,l,ce,Be,null,Me),j()),k[0]&460481&&(A=u[9],X(),i=oe(i,k,z,1,u,A,g,f,ce,Re,null,Le),j()),k[0]&16384&&E(e,"dragging",u[14])},i(u){if(!y){for(let k=0;k<p.length;k+=1)B(r[k]);for(let k=0;k<A.length;k+=1)B(i[k]);y=!0}},o(u){for(let k=0;k<r.length;k+=1)S(r[k]);for(let k=0;k<i.length;k+=1)S(i[k]);y=!1},d(u){u&&C(e),c&&c.d();for(let k=0;k<r.length;k+=1)r[k].d();for(let k=0;k<i.length;k+=1)i[k].d()}}}function Se(s){let e,t,n,l=s[3][1]==="dynamic"&&ze(s),r=s[2][1]==="dynamic"&&Ne(s);return{c(){e=M("div"),l&&l.c(),t=Y(),r&&r.c(),m(e,"class","controls-wrap svelte-1sckpv1")},m(_,d){T(_,e,d),l&&l.m(e,null),L(e,t),r&&r.m(e,null),n=!0},p(_,d){_[3][1]==="dynamic"?l?(l.p(_,d),d[0]&8&&B(l,1)):(l=ze(_),l.c(),B(l,1),l.m(e,t)):l&&(X(),S(l,1,1,()=>{l=null}),j()),_[2][1]==="dynamic"?r?(r.p(_,d),d[0]&4&&B(r,1)):(r=Ne(_),r.c(),B(r,1),r.m(e,null)):r&&(X(),S(r,1,1,()=>{r=null}),j())},i(_){n||(B(l),B(r),n=!0)},o(_){S(l),S(r),n=!1},d(_){_&&C(e),l&&l.d(),r&&r.d()}}}function ze(s){let e,t,n;return t=new Ue({props:{variant:"plain",size:"sm",$$slots:{default:[kt]},$$scope:{ctx:s}}}),t.$on("click",s[43]),{c(){e=M("span"),V(t.$$.fragment),m(e,"class","button-wrap svelte-1sckpv1")},m(l,r){T(l,e,r),G(t,e,null),n=!0},p(l,r){const _={};r[1]&536870912&&(_.$$scope={dirty:r,ctx:l}),t.$set(_)},i(l){n||(B(t.$$.fragment,l),n=!0)},o(l){S(t.$$.fragment,l),n=!1},d(l){l&&C(e),W(t)}}}function kt(s){let e,t,n;return{c(){e=x("svg"),t=x("path"),n=$(`
						New row`),m(t,"fill","currentColor"),m(t,"d","M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10l-1.41-1.41z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),m(e,"aria-hidden","true"),m(e,"role","img"),m(e,"width","1em"),m(e,"height","1em"),m(e,"preserveAspectRatio","xMidYMid meet"),m(e,"viewBox","0 0 32 32"),m(e,"class","svelte-1sckpv1")},m(l,r){T(l,e,r),L(e,t),T(l,n,r)},p:te,d(l){l&&C(e),l&&C(n)}}}function Ne(s){let e,t,n;return t=new Ue({props:{variant:"plain",size:"sm",$$slots:{default:[wt]},$$scope:{ctx:s}}}),t.$on("click",s[23]),{c(){e=M("span"),V(t.$$.fragment),m(e,"class","button-wrap svelte-1sckpv1")},m(l,r){T(l,e,r),G(t,e,null),n=!0},p(l,r){const _={};r[1]&536870912&&(_.$$scope={dirty:r,ctx:l}),t.$set(_)},i(l){n||(B(t.$$.fragment,l),n=!0)},o(l){S(t.$$.fragment,l),n=!1},d(l){l&&C(e),W(t)}}}function wt(s){let e,t,n;return{c(){e=x("svg"),t=x("path"),n=$(`
						New column`),m(t,"fill","currentColor"),m(t,"d","m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),m(e,"aria-hidden","true"),m(e,"role","img"),m(e,"width","1em"),m(e,"height","1em"),m(e,"preserveAspectRatio","xMidYMid meet"),m(e,"viewBox","0 0 32 32"),m(e,"class","svelte-1sckpv1")},m(l,r){T(l,e,r),L(e,t),T(l,n,r)},p:te,d(l){l&&C(e),l&&C(n)}}}function yt(s){let e,t,n,l,r,_,d,f,i,g=s[1]&&s[1].length!==0&&Te(s);function y(o){s[41](o)}let c={flex:!1,center:!1,boundedheight:!1,disable_click:!0,$$slots:{default:[bt]},$$scope:{ctx:s}};s[14]!==void 0&&(c.dragging=s[14]),l=new ct({props:c}),Q.push(()=>le(l,"dragging",y)),l.$on("load",s[42]);let p=s[4]&&Se(s);return{c(){e=M("div"),g&&g.c(),t=Y(),n=M("div"),V(l.$$.fragment),_=Y(),p&&p.c(),m(n,"class","table-wrap scroll-hide svelte-1sckpv1"),E(n,"dragging",s[14]),E(n,"no-wrap",!s[5]),m(e,"class","svelte-1sckpv1"),E(e,"label",s[1]&&s[1].length!==0)},m(o,A){T(o,e,A),g&&g.m(e,null),L(e,t),L(e,n),G(l,n,null),L(e,_),p&&p.m(e,null),d=!0,f||(i=[H(window,"click",s[24]),H(window,"touchstart",s[24])],f=!0)},p(o,A){o[1]&&o[1].length!==0?g?g.p(o,A):(g=Te(o),g.c(),g.m(e,t)):g&&(g.d(1),g=null);const z={};A[0]&32707|A[1]&536870912&&(z.$$scope={dirty:A,ctx:o}),!r&&A[0]&16384&&(r=!0,z.dragging=o[14],ne(()=>r=!1)),l.$set(z),A[0]&16384&&E(n,"dragging",o[14]),A[0]&32&&E(n,"no-wrap",!o[5]),o[4]?p?(p.p(o,A),A[0]&16&&B(p,1)):(p=Se(o),p.c(),B(p,1),p.m(e,null)):p&&(X(),S(p,1,1,()=>{p=null}),j()),A[0]&2&&E(e,"label",o[1]&&o[1].length!==0)},i(o){d||(B(l.$$.fragment,o),B(p),d=!0)},o(o){S(l.$$.fragment,o),S(p),d=!1},d(o){o&&C(e),g&&g.d(),W(l),p&&p.d(),f=!1,ge(i)}}}function vt(s,e){return e.filter(t);function t(n){var l=-1;return s.split(`
`).every(r);function r(_){if(!_)return!0;var d=_.split(n).length;return l<0&&(l=d),l===d&&d>1}}}function At(s){const e=atob(s.split(",")[1]),t=s.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),l=new Uint8Array(n);for(let r=0;r<e.length;r++)l[r]=e.charCodeAt(r);return new Blob([n],{type:t})}function Dt(s,e,t){let{datatype:n}=e,{label:l=null}=e,{headers:r=[]}=e,{values:_=[[]]}=e,{col_count:d}=e,{row_count:f}=e,{editable:i=!0}=e,{wrap:g=!1}=e;const y=Oe();let c=!1,p=!1,o={};function A(a){let h=a||[];if(d[1]==="fixed"&&h.length<d[0]){const w=Array(d[0]-h.length).fill("").map((v,D)=>`${D+h.length}`);h=h.concat(w)}return!h||h.length===0?Array(d[0]).fill(0).map((w,v)=>{const D=`h-${v}`;return t(10,o[D]={cell:null,input:null},o),{id:D,value:JSON.stringify(v+1)}}):h.map((w,v)=>{const D=`h-${v}`;return t(10,o[D]={cell:null,input:null},o),{id:D,value:w??""}})}function z(a){const h=a.length>0?a.length:f[0];return Array(f[1]==="fixed"||h<f[0]?f[0]:h).fill(0).map((w,v)=>Array(d[1]==="fixed"?d[0]:a[0].length).fill(0).map((D,U)=>{const Z=`${v}-${U}`;return t(10,o[Z]={input:null,cell:null},o),{value:a?.[v]?.[U]??"",id:Z}}))}let u=A(r),k;async function q(){typeof c=="string"?(await P(),o[c]?.input?.focus()):typeof p=="string"&&(await P(),o[p]?.input?.focus())}let b=[[]],F;function K(a,h,w){if(!h)return"none";if(r[h]===a){if(w==="asc")return"ascending";if(w==="des")return"descending"}}function N(a){return b.reduce((h,w,v)=>{const D=w.reduce((U,Z,ue)=>a===Z.id?ue:U,-1);return D===-1?h:[v,D]},[-1,-1])}async function R(a,h){if(!i||c===a)return;if(h){const[v,D]=N(a);t(9,b[v][D].value="",b)}t(6,c=a),await P();const{input:w}=o[a];w?.focus()}async function I(a,h,w,v){let D;switch(a.key){case"ArrowRight":if(c)break;a.preventDefault(),D=b[h][w+1],t(7,p=D?D.id:p);break;case"ArrowLeft":if(c)break;a.preventDefault(),D=b[h][w-1],t(7,p=D?D.id:p);break;case"ArrowDown":if(c)break;a.preventDefault(),D=b[h+1],t(7,p=D?D[w].id:p);break;case"ArrowUp":if(c)break;a.preventDefault(),D=b[h-1],t(7,p=D?D[w].id:p);break;case"Escape":if(!i)break;a.preventDefault(),t(7,p=c),t(6,c=!1);break;case"Enter":if(!i)break;if(a.preventDefault(),a.shiftKey){re(h),await P();const[st]=N(v);t(7,p=b[st+1][w].id)}else c===v?t(6,c=!1):R(v);break;case"Backspace":if(!i)break;c||(a.preventDefault(),t(9,b[h][w].value="",b));break;case"Delete":if(!i)break;c||(a.preventDefault(),t(9,b[h][w].value="",b));break;case"Tab":let U=a.shiftKey?-1:1,Z=b[h][w+U],ue=b?.[h+U]?.[U>0?0:u.length-1],fe=Z||ue;fe&&(a.preventDefault(),t(7,p=fe?fe.id:p)),t(6,c=!1);break;default:(!c||c&&c!==v)&&a.key.length===1&&R(v,!0);break}}async function me(a){c!==a&&p!==a&&(t(6,c=!1),t(7,p=a))}async function be(a,h){if(h==="edit"&&typeof a=="string"&&(await P(),o[a].input?.focus()),h==="edit"&&typeof a=="boolean"&&typeof p=="string"){let w=o[p]?.cell;await P(),w?.focus()}if(h==="select"&&typeof a=="string"){const{cell:w}=o[a];await P(),w?.focus()}}let J,ee;function Ke(a,h){h==="asc"?t(9,b=b.sort((w,v)=>w[a].value<v[a].value?-1:1)):h==="des"&&t(9,b=b.sort((w,v)=>w[a].value>v[a].value?-1:1))}function ke(a){typeof ee!="number"||ee!==a?(t(11,J="asc"),t(12,ee=a)):J==="asc"?t(11,J="des"):J==="des"&&t(11,J="asc"),Ke(a,J)}let O;function we(){if(typeof p=="string"){const a=o[p].input?.value;if(u.find(h=>h.id===p)){let h=u.find(w=>w.id===p);a&&(h.value=a)}else a&&u.push({id:p,value:a})}}async function ae(a,h){!i||d[1]!=="dynamic"||c===a||(t(13,O=a),await P(),o[a].input?.focus(),h&&o[a].input?.select())}function Pe(a){if(!!i)switch(a.key){case"Escape":case"Enter":case"Tab":a.preventDefault(),t(7,p=O),t(13,O=!1),we();break}}function re(a){f[1]==="dynamic"&&(b.splice(a?a+1:b.length,0,Array(b[0].length).fill(0).map((h,w)=>{const v=`${b.length}-${w}`;return t(10,o[v]={cell:null,input:null},o),{id:v,value:""}})),t(9,b),t(27,_),t(29,F),t(26,r))}async function Ye(){if(d[1]!=="dynamic")return;for(let h=0;h<b.length;h++){const w=`${h}-${b[h].length}`;t(10,o[w]={cell:null,input:null},o),b[h].push({id:w,value:""})}const a=`h-${u.length}`;t(10,o[a]={cell:null,input:null},o),u.push({id:a,value:`Header ${u.length+1}`}),t(9,b),t(27,_),t(29,F),t(26,r),t(8,u),t(26,r),t(28,k),t(27,_),await P(),ae(a,!0)}function Ze(a){typeof c=="string"&&o[c]&&o[c].cell!==a.target&&!o[c].cell?.contains(a?.target)&&t(6,c=!1),typeof O=="string"&&o[O]&&o[O].cell!==a.target&&!o[O].cell?.contains(a.target)&&(t(7,p=O),t(13,O=!1),we(),t(13,O=!1))}function ye(a){const h=new FileReader;function w(v){if(!v?.target?.result||typeof v.target.result!="string")return;const[D]=vt(v.target.result,[",","	"]),[U,...Z]=_t(D).parseRows(v.target.result);t(8,u=A(d[1]==="fixed"?U.slice(0,d[0]):U)),t(27,_=Z),h.removeEventListener("loadend",w)}h.addEventListener("loadend",w),h.readAsText(a)}let ie=!1;function Ie(a,h){s.$$.not_equal(o[h].input,a)&&(o[h].input=a,t(10,o))}const Je=a=>ae(a),Qe=a=>ke(a);function Ve(a,h){Q[a?"unshift":"push"](()=>{o[h].cell=a,t(10,o)})}function Ge(a,h,w,v){w[v].value=a,t(9,b),t(27,_),t(29,F),t(26,r)}function We(a,h){s.$$.not_equal(o[h].input,a)&&(o[h].input=a,t(10,o))}function Xe(a,h){Q[a?"unshift":"push"](()=>{o[h].cell=a,t(10,o)})}const je=a=>R(a),xe=a=>me(a),$e=a=>R(a),et=(a,h,w,v)=>I(v,a,h,w);function tt(a){ie=a,t(14,ie)}const lt=a=>ye(At(a.detail.data)),nt=()=>re();return s.$$set=a=>{"datatype"in a&&t(0,n=a.datatype),"label"in a&&t(1,l=a.label),"headers"in a&&t(26,r=a.headers),"values"in a&&t(27,_=a.values),"col_count"in a&&t(2,d=a.col_count),"row_count"in a&&t(3,f=a.row_count),"editable"in a&&t(4,i=a.editable),"wrap"in a&&t(5,g=a.wrap)},s.$$.update=()=>{s.$$.dirty[0]&201326592&&(_&&!Array.isArray(_)?(t(26,r=_.headers),t(27,_=_.data.length===0?[Array(r.length).fill("")]:_.data)):_===null?t(27,_=[Array(r.length).fill("")]):(t(27,_),t(26,r))),s.$$.dirty[0]&335544320&&(se(r,k)||(t(8,u=A(r)),t(28,k=r),q())),s.$$.dirty[0]&671088640&&(se(_,F)||(t(9,b=z(_)),t(29,F=_),q())),s.$$.dirty[0]&768&&u&&y("change",{data:b.map(a=>a.map(({value:h})=>h)),headers:u.map(a=>a.value)}),s.$$.dirty[0]&64&&be(c,"edit"),s.$$.dirty[0]&128&&be(p,"select")},[n,l,d,f,i,g,c,p,u,b,o,J,ee,O,ie,K,R,I,me,ke,ae,Pe,re,Ye,Ze,ye,r,_,k,F,Ie,Je,Qe,Ve,Ge,We,Xe,je,xe,$e,et,tt,lt,nt]}class Et extends _e{constructor(e){super(),de(this,e,Dt,yt,he,{datatype:0,label:1,headers:26,values:27,col_count:2,row_count:3,editable:4,wrap:5},null,[-1,-1])}}function Lt(s){let e,t,n,l,r;const _=[s[10]];let d={};for(let f=0;f<_.length;f+=1)d=it(d,_[f]);return t=new ut({props:d}),l=new Et({props:{label:s[7],row_count:s[6],col_count:s[5],values:s[0],headers:s[1],editable:s[4]==="dynamic",wrap:s[8],datatype:s[9]}}),l.$on("change",s[12]),{c(){e=M("div"),V(t.$$.fragment),n=Y(),V(l.$$.fragment),m(e,"id",s[2]),m(e,"class","relative overflow-hidden svelte-1nw9bhs"),E(e,"hide",!s[3])},m(f,i){T(f,e,i),G(t,e,null),L(e,n),G(l,e,null),r=!0},p(f,[i]){const g=i&1024?ft(_,[ot(f[10])]):{};t.$set(g);const y={};i&128&&(y.label=f[7]),i&64&&(y.row_count=f[6]),i&32&&(y.col_count=f[5]),i&1&&(y.values=f[0]),i&2&&(y.headers=f[1]),i&16&&(y.editable=f[4]==="dynamic"),i&256&&(y.wrap=f[8]),i&512&&(y.datatype=f[9]),l.$set(y),(!r||i&4)&&m(e,"id",f[2]),i&8&&E(e,"hide",!f[3])},i(f){r||(B(t.$$.fragment,f),B(l.$$.fragment,f),r=!0)},o(f){S(t.$$.fragment,f),S(l.$$.fragment,f),r=!1},d(f){f&&C(e),W(t),W(l)}}}function qt(s,e,t){let{headers:n=[]}=e,{elem_id:l=""}=e,{visible:r=!0}=e,{value:_={data:[["","",""]],headers:["1","2","3"]}}=e,{mode:d}=e,{col_count:f}=e,{row_count:i}=e,{label:g=null}=e,{wrap:y}=e,{datatype:c}=e;const p=Oe();let{loading_status:o}=e;async function A(u){t(0,_=u),await P(),p("change",u)}const z=({detail:u})=>A(u);return s.$$set=u=>{"headers"in u&&t(1,n=u.headers),"elem_id"in u&&t(2,l=u.elem_id),"visible"in u&&t(3,r=u.visible),"value"in u&&t(0,_=u.value),"mode"in u&&t(4,d=u.mode),"col_count"in u&&t(5,f=u.col_count),"row_count"in u&&t(6,i=u.row_count),"label"in u&&t(7,g=u.label),"wrap"in u&&t(8,y=u.wrap),"datatype"in u&&t(9,c=u.datatype),"loading_status"in u&&t(10,o=u.loading_status)},[_,n,l,r,d,f,i,g,y,c,o,A,z]}class Mt extends _e{constructor(e){super(),de(this,e,qt,Lt,he,{headers:1,elem_id:2,visible:3,value:0,mode:4,col_count:5,row_count:6,label:7,wrap:8,datatype:9,loading_status:10})}}var Rt=Mt;const St=["static","dynamic"],zt=s=>({type:" { data: Array<Array<string | number>>; headers: Array<string> }",description:"hex color code",example_data:s.value??"#000000"});export{Rt as Component,zt as document,St as modes};
//# sourceMappingURL=index.a6277ee1.js.map