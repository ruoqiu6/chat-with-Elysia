import{S as T,i as D,s as L,e as k,c as S,h as m,D as r,k as h,l as w,n as E,F as j,q as v,f as G,J as P,a9 as Ee,N as Ne,R as x,m as N,G as $,I as Z,d as z,j as ee,E as le,o as B,b as A,p as F,t as C,K as ze,x as J,v as K,w as Y}from"./index.22481e4a.js";import{E as Re}from"./Image.18438718.js";import{c as Ie}from"./csv.27f5436c.js";import{d as Pe}from"./dsv.7fe76a93.js";import{E as Be}from"./Model3D.9e501e78.js";var Fe=Pe("	"),Ve=Fe.parseRows;function qe(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function Ge(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Oe extends T{constructor(e){super(),D(this,e,Ge,qe,L,{value:0,type:1,selected:2})}}function We(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1w9463b"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function Je(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Ke extends T{constructor(e){super(),D(this,e,Je,We,L,{value:0,type:1,selected:2})}}function Ye(s){let e,l=s[0].toLocaleString()+"",t;return{c(){e=k("div"),t=S(l),m(e,"class","svelte-6fcyt9"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){h(n,e,a),w(e,t)},p(n,[a]){a&1&&l!==(l=n[0].toLocaleString()+"")&&E(t,l),a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:j,o:j,d(n){n&&v(e)}}}function Ze(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Qe extends T{constructor(e){super(),D(this,e,Ze,Ye,L,{value:0,type:1,selected:2})}}function te(s,e,l){const t=s.slice();return t[3]=e[l],t[5]=l,t}function ne(s){let e;return{c(){e=S(",\xA0")},m(l,t){h(l,e,t)},d(l){l&&v(e)}}}function ie(s){let e=s[3].toLocaleString()+"",l,t,n=s[5]!==s[0].length-1&&ne();return{c(){l=S(e),n&&n.c(),t=G()},m(a,i){h(a,l,i),n&&n.m(a,i),h(a,t,i)},p(a,i){i&1&&e!==(e=a[3].toLocaleString()+"")&&E(l,e),a[5]!==a[0].length-1?n||(n=ne(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(a){a&&v(l),n&&n.d(a),a&&v(t)}}}function Ue(s){let e,l=s[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=ie(te(s,l,n));return{c(){e=k("div");for(let n=0;n<t.length;n+=1)t[n].c();m(e,"class","svelte-1x3lfds"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){h(n,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(n,[a]){if(a&1){l=n[0];let i;for(i=0;i<l.length;i+=1){const f=te(n,l,i);t[i]?t[i].p(f,a):(t[i]=ie(f),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:j,o:j,d(n){n&&v(e),P(t,n)}}}function Xe(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class xe extends T{constructor(e){super(),D(this,e,Xe,Ue,L,{value:0,type:1,selected:2})}}function $e(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function el(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ll extends T{constructor(e){super(),D(this,e,el,$e,L,{value:0,type:1,selected:2})}}function tl(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function nl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class il extends T{constructor(e){super(),D(this,e,nl,tl,L,{value:0,type:1,selected:2})}}function sl(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function al(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class fl extends T{constructor(e){super(),D(this,e,al,sl,L,{value:0,type:1,selected:2})}}function cl(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function rl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class ul extends T{constructor(e){super(),D(this,e,rl,cl,L,{value:0,type:1,selected:2})}}function ol(s){let e,l,t,n;return{c(){e=k("video"),e.muted=!0,e.playsInline=!0,x(e.src,l=s[3]+s[2])||m(e,"src",l),m(e,"class","svelte-b57nop"),r(e,"table",s[0]==="table"),r(e,"gallery",s[0]==="gallery"),r(e,"selected",s[1])},m(a,i){h(a,e,i),s[5](e),t||(n=[N(e,"mouseover",function(){$(s[4].play)&&s[4].play.apply(this,arguments)}),N(e,"mouseout",function(){$(s[4].pause)&&s[4].pause.apply(this,arguments)})],t=!0)},p(a,i){s=a,i&12&&!x(e.src,l=s[3]+s[2])&&m(e,"src",l),i&1&&r(e,"table",s[0]==="table"),i&1&&r(e,"gallery",s[0]==="gallery"),i&2&&r(e,"selected",s[1])},d(a){a&&v(e),s[5](null),t=!1,Z(n)}}}function _l(s){let e;function l(a,i){return ol}let n=l()(s);return{c(){n.c(),e=G()},m(a,i){n.m(a,i),h(a,e,i)},p(a,[i]){n.p(a,i)},i:j,o:j,d(a){n.d(a),a&&v(e)}}}function dl(s,e,l){let{type:t}=e,{selected:n=!1}=e,{value:a}=e,{samples_dir:i}=e,f;async function c(){l(4,f.muted=!0,f),l(4,f.playsInline=!0,f),l(4,f.controls=!1,f),f.setAttribute("muted",""),await f.play(),f.pause()}Ee(()=>{c()});function _(g){Ne[g?"unshift":"push"](()=>{f=g,l(4,f)})}return s.$$set=g=>{"type"in g&&l(0,t=g.type),"selected"in g&&l(1,n=g.selected),"value"in g&&l(2,a=g.value),"samples_dir"in g&&l(3,i=g.samples_dir)},[t,n,a,i,f,_]}class ml extends T{constructor(e){super(),D(this,e,dl,_l,L,{type:0,selected:1,value:2,samples_dir:3})}}function gl(s){let e,l=(Array.isArray(s[0])?s[0].join(", "):s[0])+"",t;return{c(){e=k("div"),t=S(l),m(e,"class","svelte-198wwl3"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(n,a){h(n,e,a),w(e,t)},p(n,[a]){a&1&&l!==(l=(Array.isArray(n[0])?n[0].join(", "):n[0])+"")&&E(t,l),a&2&&r(e,"table",n[1]==="table"),a&2&&r(e,"gallery",n[1]==="gallery"),a&4&&r(e,"selected",n[2])},i:j,o:j,d(n){n&&v(e)}}}function hl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class vl extends T{constructor(e){super(),D(this,e,hl,gl,L,{value:0,type:1,selected:2})}}function se(s,e,l){const t=s.slice();return t[10]=e[l],t[12]=l,t}function ae(s,e,l){const t=s.slice();return t[13]=e[l],t[15]=l,t}function fe(s){let e,l,t;function n(f,c){return typeof f[6]=="string"?yl:bl}let a=n(s),i=a(s);return{c(){e=k("div"),i.c(),m(e,"class","svelte-2ubd30"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(f,c){h(f,e,c),i.m(e,null),l||(t=[N(e,"mouseenter",s[8]),N(e,"mouseleave",s[9])],l=!0)},p(f,c){a===(a=n(f))&&i?i.p(f,c):(i.d(1),i=a(f),i&&(i.c(),i.m(e,null))),c&2&&r(e,"table",f[1]==="table"),c&2&&r(e,"gallery",f[1]==="gallery"),c&4&&r(e,"selected",f[2])},d(f){f&&v(e),i.d(),l=!1,Z(t)}}}function bl(s){let e,l,t=s[6].slice(0,3),n=[];for(let i=0;i<t.length;i+=1)n[i]=ue(se(s,t,i));let a=s[0].length>3&&oe(s);return{c(){e=k("table");for(let i=0;i<n.length;i+=1)n[i].c();l=z(),a&&a.c(),m(e,"class"," svelte-2ubd30")},m(i,f){h(i,e,f);for(let c=0;c<n.length;c+=1)n[c].m(e,null);w(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=i[6].slice(0,3);let c;for(c=0;c<t.length;c+=1){const _=se(i,t,c);n[c]?n[c].p(_,f):(n[c]=ue(_),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[0].length>3?a?a.p(i,f):(a=oe(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&v(e),P(n,i),a&&a.d()}}}function yl(s){let e;return{c(){e=S(s[6])},m(l,t){h(l,e,t)},p(l,t){t&64&&E(e,l[6])},d(l){l&&v(e)}}}function ce(s){let e,l=s[13]+"",t;return{c(){e=k("td"),t=S(l),m(e,"class","svelte-2ubd30")},m(n,a){h(n,e,a),w(e,t)},p(n,a){a&64&&l!==(l=n[13]+"")&&E(t,l)},d(n){n&&v(e)}}}function re(s){let e;return{c(){e=k("td"),e.textContent="\u2026",m(e,"class","svelte-2ubd30")},m(l,t){h(l,e,t)},d(l){l&&v(e)}}}function ue(s){let e,l,t=s[10].slice(0,3),n=[];for(let i=0;i<t.length;i+=1)n[i]=ce(ae(s,t,i));let a=s[10].length>3&&re();return{c(){e=k("tr");for(let i=0;i<n.length;i+=1)n[i].c();l=z(),a&&a.c(),m(e,"class","svelte-2ubd30")},m(i,f){h(i,e,f);for(let c=0;c<n.length;c+=1)n[c].m(e,null);w(e,l),a&&a.m(e,null)},p(i,f){if(f&64){t=i[10].slice(0,3);let c;for(c=0;c<t.length;c+=1){const _=ae(i,t,c);n[c]?n[c].p(_,f):(n[c]=ce(_),n[c].c(),n[c].m(e,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}i[10].length>3?a||(a=re(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&v(e),P(n,i),a&&a.d()}}}function oe(s){let e;return{c(){e=k("div"),m(e,"class","overlay svelte-2ubd30"),r(e,"odd",s[3]%2!=0),r(e,"even",s[3]%2==0),r(e,"button",s[1]==="gallery")},m(l,t){h(l,e,t)},p(l,t){t&8&&r(e,"odd",l[3]%2!=0),t&8&&r(e,"even",l[3]%2==0),t&2&&r(e,"button",l[1]==="gallery")},d(l){l&&v(e)}}}function kl(s){let e,l=s[4]&&fe(s);return{c(){l&&l.c(),e=G()},m(t,n){l&&l.m(t,n),h(t,e,n)},p(t,[n]){t[4]?l?l.p(t,n):(l=fe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:j,o:j,d(t){l&&l.d(t),t&&v(e)}}}function wl(s,e,l){let{value:t}=e,{samples_dir:n}=e,{type:a}=e,{selected:i=!1}=e,{index:f}=e,c=!1,_=t,g=Array.isArray(_);const o=()=>l(5,c=!0),M=()=>l(5,c=!1);return s.$$set=u=>{"value"in u&&l(0,t=u.value),"samples_dir"in u&&l(7,n=u.samples_dir),"type"in u&&l(1,a=u.type),"selected"in u&&l(2,i=u.selected),"index"in u&&l(3,f=u.index)},s.$$.update=()=>{s.$$.dirty&145&&!g&&typeof t=="string"&&/\.[a-zA-Z]+$/.test(t)&&fetch(n+t).then(u=>u.text()).then(u=>{try{if(t.endsWith("csv")){const y=u.split(`
`).slice(0,4).map(d=>d.split(",").slice(0,4).join(",")).join(`
`);l(6,_=Ie(y))}else if(t.endsWith("tsv")){const y=u.split(`
`).slice(0,4).map(d=>d.split("	").slice(0,4).join("	")).join(`
`);l(6,_=Ve(y))}else throw new Error("Incorrect format, only CSV and TSV files are supported");l(4,g=!0)}catch(y){console.error(y)}}).catch(u=>{l(6,_=t),l(4,g=!0)})},[t,a,i,f,g,c,_,n,o,M]}class jl extends T{constructor(e){super(),D(this,e,wl,kl,L,{value:0,samples_dir:7,type:1,selected:2,index:3})}}function pl(s){let e;return{c(){e=k("div"),ee(e,"background-color",s[0]),m(e,"class","svelte-188nwnl"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){h(l,e,t)},p(l,[t]){t&1&&ee(e,"background-color",l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:j,o:j,d(l){l&&v(e)}}}function Ml(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Cl extends T{constructor(e){super(),D(this,e,Ml,pl,L,{value:0,type:1,selected:2})}}function Hl(s){let e,l;return{c(){e=k("div"),l=S(s[0]),m(e,"class","svelte-1i18mgb"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(t,n){h(t,e,n),w(e,l)},p(t,[n]){n&1&&E(l,t[0]),n&2&&r(e,"table",t[1]==="table"),n&2&&r(e,"gallery",t[1]==="gallery"),n&4&&r(e,"selected",t[2])},i:j,o:j,d(t){t&&v(e)}}}function Sl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Al extends T{constructor(e){super(),D(this,e,Sl,Hl,L,{value:0,type:1,selected:2})}}function Tl(s){let e;return{c(){e=k("div"),m(e,"class","prose svelte-9f83do"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){h(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:j,o:j,d(l){l&&v(e)}}}function Dl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class Ll extends T{constructor(e){super(),D(this,e,Dl,Tl,L,{value:0,type:1,selected:2})}}function El(s){let e;return{c(){e=k("div"),m(e,"class","prose svelte-9f83do"),r(e,"table",s[1]==="table"),r(e,"gallery",s[1]==="gallery"),r(e,"selected",s[2])},m(l,t){h(l,e,t),e.innerHTML=s[0]},p(l,[t]){t&1&&(e.innerHTML=l[0]),t&2&&r(e,"table",l[1]==="table"),t&2&&r(e,"gallery",l[1]==="gallery"),t&4&&r(e,"selected",l[2])},i:j,o:j,d(l){l&&v(e)}}}function Nl(s,e,l){let{value:t}=e,{type:n}=e,{selected:a=!1}=e;return s.$$set=i=>{"value"in i&&l(0,t=i.value),"type"in i&&l(1,n=i.type),"selected"in i&&l(2,a=i.selected)},[t,n,a]}class zl extends T{constructor(e){super(),D(this,e,Nl,El,L,{value:0,type:1,selected:2})}}const V={dropdown:Ke,checkbox:Qe,checkboxgroup:xe,number:Oe,slider:ll,radio:il,image:Re,textbox:fl,audio:ul,video:ml,file:vl,dataframe:jl,model3d:Be,colorpicker:Cl,timeseries:Al,markdown:Ll,html:zl};function _e(s,e,l){const t=s.slice();return t[29]=e[l],t}function de(s,e,l){const t=s.slice();return t[32]=e[l],t[34]=l,t}function me(s,e,l){const t=s.slice();return t[0]=e[l].value,t[36]=e[l].component,t[38]=l,t}function ge(s,e,l){const t=s.slice();return t[39]=e[l],t}function he(s,e,l){const t=s.slice();return t[32]=e[l],t[34]=l,t}function Rl(s){let e,l,t,n,a,i,f,c=s[3],_=[];for(let u=0;u<c.length;u+=1)_[u]=ve(ge(s,c,u));let g=s[11],o=[];for(let u=0;u<g.length;u+=1)o[u]=ke(de(s,g,u));const M=u=>A(o[u],1,1,()=>{o[u]=null});return{c(){e=k("div"),l=k("table"),t=k("thead"),n=k("tr");for(let u=0;u<_.length;u+=1)_[u].c();a=z(),i=k("tbody");for(let u=0;u<o.length;u+=1)o[u].c();m(n,"class","tr-head svelte-opdjbj"),m(l,"class","svelte-opdjbj"),m(e,"class","table-wrap svelte-opdjbj")},m(u,y){h(u,e,y),w(e,l),w(l,t),w(t,n);for(let d=0;d<_.length;d+=1)_[d].m(n,null);w(l,a),w(l,i);for(let d=0;d<o.length;d+=1)o[d].m(i,null);f=!0},p(u,y){if(y[0]&8){c=u[3];let d;for(d=0;d<c.length;d+=1){const p=ge(u,c,d);_[d]?_[d].p(p,y):(_[d]=ve(p),_[d].c(),_[d].m(n,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=c.length}if(y[0]&224451){g=u[11];let d;for(d=0;d<g.length;d+=1){const p=de(u,g,d);o[d]?(o[d].p(p,y),C(o[d],1)):(o[d]=ke(p),o[d].c(),C(o[d],1),o[d].m(i,null))}for(B(),d=g.length;d<o.length;d+=1)M(d);F()}},i(u){if(!f){for(let y=0;y<g.length;y+=1)C(o[y]);f=!0}},o(u){o=o.filter(Boolean);for(let y=0;y<o.length;y+=1)A(o[y]);f=!1},d(u){u&&v(e),P(_,u),P(o,u)}}}function Il(s){let e,l,t=s[8],n=[];for(let i=0;i<t.length;i+=1)n[i]=je(he(s,t,i));const a=i=>A(n[i],1,1,()=>{n[i]=null});return{c(){e=k("div");for(let i=0;i<n.length;i+=1)n[i].c();m(e,"class","gallery svelte-opdjbj")},m(i,f){h(i,e,f);for(let c=0;c<n.length;c+=1)n[c].m(e,null);l=!0},p(i,f){if(f[0]&224707){t=i[8];let c;for(c=0;c<t.length;c+=1){const _=he(i,t,c);n[c]?(n[c].p(_,f),C(n[c],1)):(n[c]=je(_),n[c].c(),C(n[c],1),n[c].m(e,null))}for(B(),c=t.length;c<n.length;c+=1)a(c);F()}},i(i){if(!l){for(let f=0;f<t.length;f+=1)C(n[f]);l=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)A(n[f]);l=!1},d(i){i&&v(e),P(n,i)}}}function ve(s){let e,l=s[39]+"",t,n;return{c(){e=k("th"),t=S(l),n=z(),m(e,"class","svelte-opdjbj")},m(a,i){h(a,e,i),w(e,t),w(e,n)},p(a,i){i[0]&8&&l!==(l=a[39]+"")&&E(t,l)},d(a){a&&v(e)}}}function be(s){let e,l,t;var n=s[36];function a(i){return{props:{value:i[0],samples_dir:i[14],type:"table",selected:i[10]===i[34],index:i[34]}}}return n&&(l=new n(a(s))),{c(){e=k("td"),l&&K(l.$$.fragment),m(e,"class","svelte-opdjbj")},m(i,f){h(i,e,f),l&&Y(l,e,null),t=!0},p(i,f){const c={};if(f[0]&2048&&(c.value=i[0]),f[0]&1024&&(c.selected=i[10]===i[34]),n!==(n=i[36])){if(l){B();const _=l;A(_.$$.fragment,1,0,()=>{J(_,1)}),F()}n?(l=new n(a(i)),K(l.$$.fragment),C(l.$$.fragment,1),Y(l,e,null)):l=null}else n&&l.$set(c)},i(i){t||(l&&C(l.$$.fragment,i),t=!0)},o(i){l&&A(l.$$.fragment,i),t=!1},d(i){i&&v(e),l&&J(l)}}}function ye(s){let e,l,t=s[1][s[38]]!==void 0&&V[s[1][s[38]]]!==void 0&&be(s);return{c(){t&&t.c(),e=G()},m(n,a){t&&t.m(n,a),h(n,e,a),l=!0},p(n,a){n[1][n[38]]!==void 0&&V[n[1][n[38]]]!==void 0?t?(t.p(n,a),a[0]&2&&C(t,1)):(t=be(n),t.c(),C(t,1),t.m(e.parentNode,e)):t&&(B(),A(t,1,1,()=>{t=null}),F())},i(n){l||(C(t),l=!0)},o(n){A(t),l=!1},d(n){t&&t.d(n),n&&v(e)}}}function ke(s){let e,l,t,n,a,i=s[32],f=[];for(let o=0;o<i.length;o+=1)f[o]=ye(me(s,i,o));const c=o=>A(f[o],1,1,()=>{f[o]=null});function _(){return s[25](s[34])}function g(){return s[26](s[34])}return{c(){e=k("tr");for(let o=0;o<f.length;o+=1)f[o].c();l=z(),m(e,"class","tr-body svelte-opdjbj")},m(o,M){h(o,e,M);for(let u=0;u<f.length;u+=1)f[u].m(e,null);w(e,l),t=!0,n||(a=[N(e,"click",_),N(e,"mouseenter",g),N(e,"mouseleave",s[27])],n=!0)},p(o,M){if(s=o,M[0]&19458){i=s[32];let u;for(u=0;u<i.length;u+=1){const y=me(s,i,u);f[u]?(f[u].p(y,M),C(f[u],1)):(f[u]=ye(y),f[u].c(),C(f[u],1),f[u].m(e,l))}for(B(),u=i.length;u<f.length;u+=1)c(u);F()}},i(o){if(!t){for(let M=0;M<i.length;M+=1)C(f[M]);t=!0}},o(o){f=f.filter(Boolean);for(let M=0;M<f.length;M+=1)A(f[M]);t=!1},d(o){o&&v(e),P(f,o),n=!1,Z(a)}}}function we(s){let e,l,t;var n=s[11][0][0].component;function a(i){return{props:{value:i[32][0],samples_dir:i[14],type:"gallery",selected:i[10]===i[34],index:i[34]}}}return n&&(e=new n(a(s))),{c(){e&&K(e.$$.fragment),l=G()},m(i,f){e&&Y(e,i,f),h(i,l,f),t=!0},p(i,f){const c={};if(f[0]&256&&(c.value=i[32][0]),f[0]&1024&&(c.selected=i[10]===i[34]),n!==(n=i[11][0][0].component)){if(e){B();const _=e;A(_.$$.fragment,1,0,()=>{J(_,1)}),F()}n?(e=new n(a(i)),K(e.$$.fragment),C(e.$$.fragment,1),Y(e,l.parentNode,l)):e=null}else n&&e.$set(c)},i(i){t||(e&&C(e.$$.fragment,i),t=!0)},o(i){e&&A(e.$$.fragment,i),t=!1},d(i){i&&v(l),e&&J(e,i)}}}function je(s){let e,l=Object.keys(V).includes(s[1][0])&&V[s[1][0]],t,n,a,i,f=l&&we(s);function c(){return s[22](s[34])}function _(){return s[23](s[34])}return{c(){e=k("button"),f&&f.c(),t=z(),m(e,"class","button svelte-opdjbj")},m(g,o){h(g,e,o),f&&f.m(e,null),w(e,t),n=!0,a||(i=[N(e,"click",c),N(e,"mouseenter",_),N(e,"mouseleave",s[24])],a=!0)},p(g,o){s=g,o[0]&2&&(l=Object.keys(V).includes(s[1][0])&&V[s[1][0]]),l?f?(f.p(s,o),o[0]&2&&C(f,1)):(f=we(s),f.c(),C(f,1),f.m(e,t)):f&&(B(),A(f,1,1,()=>{f=null}),F())},i(g){n||(C(f),n=!0)},o(g){A(f),n=!1},d(g){g&&v(e),f&&f.d(),a=!1,Z(i)}}}function Pl(s){let e,l,t=s[9],n=[];for(let a=0;a<t.length;a+=1)n[a]=pe(_e(s,t,a));return{c(){e=k("div"),l=S(`Pages:
			`);for(let a=0;a<n.length;a+=1)n[a].c();m(e,"class","paginate svelte-opdjbj")},m(a,i){h(a,e,i),w(e,l);for(let f=0;f<n.length;f+=1)n[f].m(e,null)},p(a,i){if(i[0]&640){t=a[9];let f;for(f=0;f<t.length;f+=1){const c=_e(a,t,f);n[f]?n[f].p(c,i):(n[f]=pe(c),n[f].c(),n[f].m(e,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=t.length}},d(a){a&&v(e),P(n,a)}}}function Bl(s){let e,l=s[29]+1+"",t,n,a,i;function f(){return s[28](s[29])}return{c(){e=k("button"),t=S(l),n=z(),m(e,"class","svelte-opdjbj"),r(e,"current-page",s[7]===s[29])},m(c,_){h(c,e,_),w(e,t),w(e,n),a||(i=N(e,"click",f),a=!0)},p(c,_){s=c,_[0]&512&&l!==(l=s[29]+1+"")&&E(t,l),_[0]&640&&r(e,"current-page",s[7]===s[29])},d(c){c&&v(e),a=!1,i()}}}function Fl(s){let e;return{c(){e=k("div"),e.textContent="..."},m(l,t){h(l,e,t)},p:j,d(l){l&&v(e)}}}function pe(s){let e;function l(a,i){return a[29]===-1?Fl:Bl}let t=l(s),n=t(s);return{c(){n.c(),e=G()},m(a,i){n.m(a,i),h(a,e,i)},p(a,i){t===(t=l(a))&&n?n.p(a,i):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},d(a){n.d(a),a&&v(e)}}}function Vl(s){let e,l,t,n,a,i,f,c,_,g,o;const M=[Il,Rl],u=[];function y(p,H){return p[12]?0:1}c=y(s),_=u[c]=M[c](s);let d=s[15]&&Pl(s);return{c(){e=k("div"),l=k("div"),t=le("svg"),n=le("path"),a=z(),i=S(s[2]),f=z(),_.c(),g=z(),d&&d.c(),m(n,"fill","currentColor"),m(n,"d","M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),m(t,"aria-hidden","true"),m(t,"role","img"),m(t,"width","1em"),m(t,"height","1em"),m(t,"preserveAspectRatio","xMidYMid meet"),m(t,"viewBox","0 0 32 32"),m(t,"class","svelte-opdjbj"),m(l,"class","label svelte-opdjbj"),m(e,"id",s[4]),m(e,"class","wrap svelte-opdjbj"),r(e,"hide",!s[5])},m(p,H){h(p,e,H),w(e,l),w(l,t),w(t,n),w(l,a),w(l,i),w(e,f),u[c].m(e,null),w(e,g),d&&d.m(e,null),o=!0},p(p,H){(!o||H[0]&4)&&E(i,p[2]);let q=c;c=y(p),c===q?u[c].p(p,H):(B(),A(u[q],1,1,()=>{u[q]=null}),F(),_=u[c],_?_.p(p,H):(_=u[c]=M[c](p),_.c()),C(_,1),_.m(e,g)),p[15]&&d.p(p,H),(!o||H[0]&16)&&m(e,"id",p[4]),H[0]&32&&r(e,"hide",!p[5])},i(p){o||(C(_),o=!0)},o(p){A(_),o=!1},d(p){p&&v(e),u[c].d(),d&&d.d()}}}function ql(s,e,l){let t,n,{components:a}=e,{label:i="Examples"}=e,{headers:f}=e,{samples:c}=e,{elem_id:_=""}=e,{visible:g=!0}=e,{value:o=null}=e,{root:M}=e,{root_url:u}=e,{samples_per_page:y=10}=e;const d=ze();let p=u?"proxy="+u+"file=":M+"file=",H=0,q=c.length>y,O,W,I=[],Q=-1;function U(b){l(10,Q=b)}function X(){l(10,Q=-1)}const Me=b=>{l(0,o=b+H*y),d("click",o)},Ce=b=>U(b),He=()=>X(),Se=b=>{l(0,o=b+H*y),d("click",o)},Ae=b=>U(b),Te=()=>X(),De=b=>l(7,H=b);return s.$$set=b=>{"components"in b&&l(1,a=b.components),"label"in b&&l(2,i=b.label),"headers"in b&&l(3,f=b.headers),"samples"in b&&l(18,c=b.samples),"elem_id"in b&&l(4,_=b.elem_id),"visible"in b&&l(5,g=b.visible),"value"in b&&l(0,o=b.value),"root"in b&&l(19,M=b.root),"root_url"in b&&l(20,u=b.root_url),"samples_per_page"in b&&l(6,y=b.samples_per_page)},s.$$.update=()=>{s.$$.dirty[0]&2&&l(12,t=a.length<2),s.$$.dirty[0]&236e4&&(q?(l(9,I=[]),l(8,O=c.slice(H*y,(H+1)*y)),l(21,W=Math.ceil(c.length/y)),[0,H,W-1].forEach(b=>{for(let R=b-2;R<=b+2;R++)R>=0&&R<W&&!I.includes(R)&&(I.length>0&&R-I[I.length-1]>1&&I.push(-1),I.push(R))})):l(8,O=c.slice())),s.$$.dirty[0]&258&&l(11,n=O.map(b=>b.map((R,Le)=>({value:R,component:V[a[Le]]}))))},[o,a,i,f,_,g,y,H,O,I,Q,n,t,d,p,q,U,X,c,M,u,W,Me,Ce,He,Se,Ae,Te,De]}class Gl extends T{constructor(e){super(),D(this,e,ql,Vl,L,{components:1,label:2,headers:3,samples:18,elem_id:4,visible:5,value:0,root:19,root_url:20,samples_per_page:6},null,[-1,-1])}}var Zl=Gl;const Ql=["dynamic"],Ul=()=>({type:"number",description:"index of selected row",example_data:0});export{Zl as Component,Ul as document,Ql as modes};
//# sourceMappingURL=index.75e27dfd.js.map