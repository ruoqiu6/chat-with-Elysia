import{S as P,i as R,s as V,E as U,h as _,k as L,l as w,F as X,q as E,e as Y,d as D,c as J,j as N,aa as ye,ag as we,n as K,J as G,f as I,T as ze,G as Le,K as de,a9 as Ee,a1 as W,B as Ae,v as q,w as H,t as S,b as j,x as O,y as Te,z as Ce,A as Me,C as Be,o as ve,p as pe}from"./index.06513bff.js";import{U as Se}from"./Upload.23e28831.js";import{M as je}from"./ModifyUpload.068550fb.js";import{B as Ue}from"./BlockLabel.fb118289.js";import{E as Fe}from"./Empty.70be3570.js";import{g as Ne}from"./color.06264fd3.js";import{_ as Z,m as Q,Z as $}from"./linear.955f0731.js";import{a as qe}from"./csv.27f5436c.js";import{U as He}from"./UploadText.1944d8b5.js";/* empty css                                                   */import"./dsv.7fe76a93.js";function Oe(l){let e,n,t;return{c(){e=U("svg"),n=U("path"),t=U("path"),_(n,"d","M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z"),_(n,"fill","currentColor"),_(t,"d","M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z"),_(t,"fill","currentColor"),_(e,"width","1em"),_(e,"height","1em"),_(e,"viewBox","0 0 32 32")},m(o,a){L(o,e,a),w(e,n),w(e,t)},p:X,i:X,o:X,d(o){o&&E(e)}}}class be extends P{constructor(e){super(),R(this,e,null,Oe,V,{})}}function x(l){let e;return Array.isArray(l)?e=l.reduce((n,{values:t})=>[...n,...t.map(({y:o})=>o)],[]):e=l.values,[Math.min(...e),Math.max(...e)]}function ee(l,e,n){const t=Object.entries(l[0]).reduce((o,a,r)=>(!e&&r===0||e&&a[0]===e?o.x.name=a[0]:(!n||n&&n.includes(a[0]))&&o.y.push({name:a[0],values:[]}),o),{x:{name:"",values:[]},y:[]});for(let o=0;o<l.length;o++){const a=Object.entries(l[o]);for(let r=0;r<a.length;r++){let[s,f]=a[r];s===t.x.name?t.x.values.push(parseFloat(f)):t.y[r-1].values.push({y:parseFloat(a[r][1]),x:parseFloat(a[0][1])})}}return t}function Xe(l){let e,n,t,o,a;return{c(){e=Y("div"),n=Y("span"),t=D(),o=J(l[0]),N(n,"background",l[3]),_(n,"class","svelte-1dxe5k5"),N(e,"top",l[2]-l[5]/2+"px"),N(e,"left",l[1]-l[4]-7+"px"),_(e,"class","svelte-1dxe5k5"),ye(()=>l[6].call(e))},m(r,s){L(r,e,s),w(e,n),w(e,t),w(e,o),a=we(e,l[6].bind(e))},p(r,[s]){s&8&&N(n,"background",r[3]),s&1&&K(o,r[0]),s&36&&N(e,"top",r[2]-r[5]/2+"px"),s&18&&N(e,"left",r[1]-r[4]-7+"px")},i:X,o:X,d(r){r&&E(e),a()}}}function Ye(l,e,n){let{text:t}=e,{x:o}=e,{y:a}=e,{color:r}=e,s,f;function v(){s=this.offsetWidth,f=this.offsetHeight,n(4,s),n(5,f)}return l.$$set=g=>{"text"in g&&n(0,t=g.text),"x"in g&&n(1,o=g.x),"y"in g&&n(2,a=g.y),"color"in g&&n(3,r=g.color)},[t,o,a,r,s,f,v]}class De extends P{constructor(e){super(),R(this,e,Ye,Xe,V,{text:0,x:1,y:2,color:3})}}function Ge(l,{color:e,text:n}){let t;function o(f){return t=new De({props:{text:n,x:f.pageX,y:f.pageY,color:e},target:document.body}),f}function a(f){t.$set({x:f.pageX,y:f.pageY})}function r(){t.$destroy()}const s=l;return s.addEventListener("mouseover",o),s.addEventListener("mouseleave",r),s.addEventListener("mousemove",a),{destroy(){s.removeEventListener("mouseover",o),s.removeEventListener("mouseleave",r),s.removeEventListener("mousemove",a)}}}function le(l,e,n){const t=l.slice();t[16]=e[n].name,t[17]=e[n].values;const o=t[8][t[16]];return t[18]=o,t}function te(l,e,n){const t=l.slice();return t[0]=e[n].x,t[1]=e[n].y,t}function ne(l,e,n){const t=l.slice();t[16]=e[n].name,t[17]=e[n].values;const o=t[8][t[16]];return t[18]=o,t}function oe(l,e,n){const t=l.slice();return t[0]=e[n].x,t[1]=e[n].y,t}function re(l,e,n){const t=l.slice();return t[27]=e[n],t}function ae(l,e,n){const t=l.slice();return t[27]=e[n],t}function se(l,e,n){const t=l.slice();return t[16]=e[n].name,t}function ie(l){let e,n,t,o=l[16]+"",a,r;return{c(){e=Y("div"),n=Y("span"),t=D(),a=J(o),r=D(),_(n,"class","legend-box svelte-67nz6t"),N(n,"background-color",l[8][l[16]]),_(e,"class","legend-item svelte-67nz6t")},m(s,f){L(s,e,f),w(e,n),w(e,t),w(e,a),w(e,r)},p(s,f){f[0]&260&&N(n,"background-color",s[8][s[16]]),f[0]&4&&o!==(o=s[16]+"")&&K(a,o)},d(s){s&&E(e)}}}function fe(l){let e,n,t,o,a,r,s=l[27]+"",f,v,g;return{c(){e=U("line"),r=U("text"),f=J(s),_(e,"stroke-width","0.5"),_(e,"x1",n=l[5](l[27])),_(e,"x2",t=l[5](l[27])),_(e,"y1",o=l[4](l[9][0]<l[6][0]?l[9][0]:l[6][0])+10),_(e,"y2",a=l[4](l[6][1]>l[9][l[9].length-1]?l[6][1]:l[9][l[9].length-1])),_(e,"stroke","#aaa"),_(r,"class","label-text svelte-67nz6t"),_(r,"text-anchor","middle"),_(r,"x",v=l[5](l[27])),_(r,"y",g=l[4](l[9][0])+30)},m(i,h){L(i,e,h),L(i,r,h),w(r,f)},p(i,h){h[0]&1056&&n!==(n=i[5](i[27]))&&_(e,"x1",n),h[0]&1056&&t!==(t=i[5](i[27]))&&_(e,"x2",t),h[0]&592&&o!==(o=i[4](i[9][0]<i[6][0]?i[9][0]:i[6][0])+10)&&_(e,"y1",o),h[0]&592&&a!==(a=i[4](i[6][1]>i[9][i[9].length-1]?i[6][1]:i[9][i[9].length-1]))&&_(e,"y2",a),h[0]&1024&&s!==(s=i[27]+"")&&K(f,s),h[0]&1056&&v!==(v=i[5](i[27]))&&_(r,"x",v),h[0]&528&&g!==(g=i[4](i[9][0])+30)&&_(r,"y",g)},d(i){i&&E(e),i&&E(r)}}}function _e(l){let e,n,t,o,a,r,s=l[27]+"",f,v,g;return{c(){e=U("line"),r=U("text"),f=J(s),_(e,"stroke-width","0.5"),_(e,"y1",n=l[4](l[27])),_(e,"y2",t=l[4](l[27])),_(e,"x1",o=l[5](l[10][0]<l[7][0]?l[10][0]:l[7][0])-10),_(e,"x2",a=l[5](l[7][1]>l[10][l[10].length-1]?l[7][1]:l[10][l[10].length-1])),_(e,"stroke","#aaa"),_(r,"class","label-text svelte-67nz6t"),_(r,"text-anchor","end"),_(r,"y",v=l[4](l[27])+4),_(r,"x",g=l[5](l[10][0])-20)},m(i,h){L(i,e,h),L(i,r,h),w(r,f)},p(i,h){h[0]&528&&n!==(n=i[4](i[27]))&&_(e,"y1",n),h[0]&528&&t!==(t=i[4](i[27]))&&_(e,"y2",t),h[0]&1184&&o!==(o=i[5](i[10][0]<i[7][0]?i[10][0]:i[7][0])-10)&&_(e,"x1",o),h[0]&1184&&a!==(a=i[5](i[7][1]>i[10][i[10].length-1]?i[7][1]:i[10][i[10].length-1]))&&_(e,"x2",a),h[0]&512&&s!==(s=i[27]+"")&&K(f,s),h[0]&528&&v!==(v=i[4](i[27])+4)&&_(r,"y",v),h[0]&1056&&g!==(g=i[5](i[10][0])-20)&&_(r,"x",g)},d(i){i&&E(e),i&&E(r)}}}function ue(l){let e,n,t,o,a,r,s=l[6][1]+"",f,v,g;return{c(){e=U("line"),r=U("text"),f=J(s),_(e,"stroke-width","0.5"),_(e,"y1",n=l[4](l[6][1])),_(e,"y2",t=l[4](l[6][1])),_(e,"x1",o=l[5](l[10][0])),_(e,"x2",a=l[5](l[7][1])),_(e,"stroke","#aaa"),_(r,"class","label-text svelte-67nz6t"),_(r,"text-anchor","end"),_(r,"y",v=l[4](l[6][1])+4),_(r,"x",g=l[5](l[10][0])-20)},m(i,h){L(i,e,h),L(i,r,h),w(r,f)},p(i,h){h[0]&80&&n!==(n=i[4](i[6][1]))&&_(e,"y1",n),h[0]&80&&t!==(t=i[4](i[6][1]))&&_(e,"y2",t),h[0]&1056&&o!==(o=i[5](i[10][0]))&&_(e,"x1",o),h[0]&160&&a!==(a=i[5](i[7][1]))&&_(e,"x2",a),h[0]&64&&s!==(s=i[6][1]+"")&&K(f,s),h[0]&80&&v!==(v=i[4](i[6][1])+4)&&_(r,"y",v),h[0]&1056&&g!==(g=i[5](i[10][0])-20)&&_(r,"x",g)},d(i){i&&E(e),i&&E(r)}}}function ce(l){let e,n,t,o;return{c(){e=U("circle"),_(e,"r","3.5"),_(e,"cx",n=l[5](l[0])),_(e,"cy",t=l[4](l[1])),_(e,"stroke-width","1.5"),_(e,"stroke",o=l[18]),_(e,"fill","none")},m(a,r){L(a,e,r)},p(a,r){r[0]&36&&n!==(n=a[5](a[0]))&&_(e,"cx",n),r[0]&20&&t!==(t=a[4](a[1]))&&_(e,"cy",t),r[0]&260&&o!==(o=a[18])&&_(e,"stroke",o)},d(a){a&&E(e)}}}function me(l){let e,n,t,o=l[17],a=[];for(let r=0;r<o.length;r+=1)a[r]=ce(oe(l,o,r));return{c(){for(let r=0;r<a.length;r+=1)a[r].c();e=U("path"),_(e,"d",n=Z().curve(Q)(l[17].map(l[13]))),_(e,"fill","none"),_(e,"stroke",t=l[18]),_(e,"stroke-width","3")},m(r,s){for(let f=0;f<a.length;f+=1)a[f].m(r,s);L(r,e,s)},p(r,s){if(s[0]&308){o=r[17];let f;for(f=0;f<o.length;f+=1){const v=oe(r,o,f);a[f]?a[f].p(v,s):(a[f]=ce(v),a[f].c(),a[f].m(e.parentNode,e))}for(;f<a.length;f+=1)a[f].d(1);a.length=o.length}s[0]&52&&n!==(n=Z().curve(Q)(r[17].map(r[13])))&&_(e,"d",n),s[0]&260&&t!==(t=r[18])&&_(e,"stroke",t)},d(r){G(a,r),r&&E(e)}}}function he(l){let e,n,t,o,a,r;return{c(){e=U("circle"),_(e,"r","7"),_(e,"cx",n=l[5](l[0])),_(e,"cy",t=l[4](l[1])),_(e,"stroke","black"),_(e,"fill","black"),N(e,"cursor","pointer"),N(e,"opacity","0")},m(s,f){L(s,e,f),a||(r=ze(o=Ge.call(null,e,{color:l[18],text:`(${l[0]}, ${l[1]})`})),a=!0)},p(s,f){l=s,f[0]&36&&n!==(n=l[5](l[0]))&&_(e,"cx",n),f[0]&20&&t!==(t=l[4](l[1]))&&_(e,"cy",t),o&&Le(o.update)&&f[0]&260&&o.update.call(null,{color:l[18],text:`(${l[0]}, ${l[1]})`})},d(s){s&&E(e),a=!1,r()}}}function ge(l){let e,n=l[17],t=[];for(let o=0;o<n.length;o+=1)t[o]=he(te(l,n,o));return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=I()},m(o,a){for(let r=0;r<t.length;r+=1)t[r].m(o,a);L(o,e,a)},p(o,a){if(a[0]&308){n=o[17];let r;for(r=0;r<n.length;r+=1){const s=te(o,n,r);t[r]?t[r].p(s,a):(t[r]=he(s),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},d(o){G(t,o),o&&E(e)}}}function Ie(l){let e,n,t,o,a,r,s,f,v,g,i=l[3].name+"",h,A=l[2],m=[];for(let c=0;c<A.length;c+=1)m[c]=ie(se(l,A,c));let p=l[10],k=[];for(let c=0;c<p.length;c+=1)k[c]=fe(ae(l,p,c));let F=l[9],y=[];for(let c=0;c<F.length;c+=1)y[c]=_e(re(l,F,c));let b=l[6][1]>l[9][l[9].length-1]&&ue(l),T=l[2],C=[];for(let c=0;c<T.length;c+=1)C[c]=me(ne(l,T,c));let d=l[2],z=[];for(let c=0;c<d.length;c+=1)z[c]=ge(le(l,d,c));return{c(){e=Y("div"),n=Y("div");for(let c=0;c<m.length;c+=1)m[c].c();t=D(),o=U("svg"),a=U("g");for(let c=0;c<k.length;c+=1)k[c].c();r=I();for(let c=0;c<y.length;c+=1)y[c].c();s=I(),b&&b.c();for(let c=0;c<C.length;c+=1)C[c].c();f=I();for(let c=0;c<z.length;c+=1)z[c].c();v=D(),g=Y("div"),h=J(i),_(n,"class","legend svelte-67nz6t"),_(o,"class","w-full svelte-67nz6t"),_(o,"viewBox","-70 -20 700 420"),_(g,"class","main-label svelte-67nz6t"),_(e,"class","wrap svelte-67nz6t")},m(c,M){L(c,e,M),w(e,n);for(let u=0;u<m.length;u+=1)m[u].m(n,null);w(e,t),w(e,o),w(o,a);for(let u=0;u<k.length;u+=1)k[u].m(a,null);w(a,r);for(let u=0;u<y.length;u+=1)y[u].m(a,null);w(a,s),b&&b.m(a,null);for(let u=0;u<C.length;u+=1)C[u].m(o,null);w(o,f);for(let u=0;u<z.length;u+=1)z[u].m(o,null);w(e,v),w(e,g),w(g,h)},p(c,M){if(M[0]&260){A=c[2];let u;for(u=0;u<A.length;u+=1){const B=se(c,A,u);m[u]?m[u].p(B,M):(m[u]=ie(B),m[u].c(),m[u].m(n,null))}for(;u<m.length;u+=1)m[u].d(1);m.length=A.length}if(M[0]&1648){p=c[10];let u;for(u=0;u<p.length;u+=1){const B=ae(c,p,u);k[u]?k[u].p(B,M):(k[u]=fe(B),k[u].c(),k[u].m(a,r))}for(;u<k.length;u+=1)k[u].d(1);k.length=p.length}if(M[0]&1712){F=c[9];let u;for(u=0;u<F.length;u+=1){const B=re(c,F,u);y[u]?y[u].p(B,M):(y[u]=_e(B),y[u].c(),y[u].m(a,s))}for(;u<y.length;u+=1)y[u].d(1);y.length=F.length}if(c[6][1]>c[9][c[9].length-1]?b?b.p(c,M):(b=ue(c),b.c(),b.m(a,null)):b&&(b.d(1),b=null),M[0]&308){T=c[2];let u;for(u=0;u<T.length;u+=1){const B=ne(c,T,u);C[u]?C[u].p(B,M):(C[u]=me(B),C[u].c(),C[u].m(o,f))}for(;u<C.length;u+=1)C[u].d(1);C.length=T.length}if(M[0]&308){d=c[2];let u;for(u=0;u<d.length;u+=1){const B=le(c,d,u);z[u]?z[u].p(B,M):(z[u]=ge(B),z[u].c(),z[u].m(o,null))}for(;u<z.length;u+=1)z[u].d(1);z.length=d.length}M[0]&8&&i!==(i=c[3].name+"")&&K(h,i)},i:X,o:X,d(c){c&&E(e),G(m,c),G(k,c),G(y,c),b&&b.d(),G(C,c),G(z,c)}}}function Je(l,e,n){let t,o,a,r,s,f,v,g,{value:i}=e,{x:h=void 0}=e,{y:A=void 0}=e,{colors:m=[]}=e;const p=de();let k;function F(b){let T=m[b%m.length];return T&&T in W?W[T]?.primary:T||W[Ne(b)].primary}Ee(()=>{p("process",{x:t,y:o})});const y=({x:b,y:T})=>[s(b),f(T)];return l.$$set=b=>{"value"in b&&n(11,i=b.value),"x"in b&&n(0,h=b.x),"y"in b&&n(1,A=b.y),"colors"in b&&n(12,m=b.colors)},l.$$.update=()=>{l.$$.dirty[0]&2051&&n(3,{x:t,y:o}=ee(typeof i=="string"?qe(i):i,h,A),t,(n(2,o),n(11,i),n(0,h),n(1,A))),l.$$.dirty[0]&8&&n(7,a=x(t)),l.$$.dirty[0]&4&&n(6,r=x(o)),l.$$.dirty[0]&128&&n(5,s=$(a,[0,600]).nice()),l.$$.dirty[0]&64&&n(4,f=$(r,[350,0]).nice()),l.$$.dirty[0]&32&&n(10,v=s.ticks(8)),l.$$.dirty[0]&16&&n(9,g=f.ticks(8)),l.$$.dirty[0]&4&&n(8,k=o.reduce((b,T,C)=>({...b,[T.name]:F(C)}),{}))},[h,A,o,t,f,s,r,a,k,g,v,i,m,y]}class ke extends P{constructor(e){super(),R(this,e,Je,Ie,V,{value:11,x:0,y:1,colors:12},null,[-1,-1])}}function Ke(l){let e,n;return e=new Se({props:{filetype:"text/csv",include_file_metadata:!1,$$slots:{default:[Ve]},$$scope:{ctx:l}}}),e.$on("load",l[15]),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Pe(l){let e,n,t,o,a;return n=new je({}),n.$on("clear",l[13]),o=new ke({props:{value:l[10],y:l[3],x:l[4],colors:l[8]}}),o.$on("process",l[14]),{c(){e=Y("div"),q(n.$$.fragment),t=D(),q(o.$$.fragment),_(e,"class","chart svelte-1iv4v2u")},m(r,s){L(r,e,s),H(n,e,null),w(e,t),H(o,e,null),a=!0},p(r,s){const f={};s&1024&&(f.value=r[10]),s&8&&(f.y=r[3]),s&16&&(f.x=r[4]),s&256&&(f.colors=r[8]),o.$set(f)},i(r){a||(S(n.$$.fragment,r),S(o.$$.fragment,r),a=!0)},o(r){j(n.$$.fragment,r),j(o.$$.fragment,r),a=!1},d(r){r&&E(e),O(n),O(o)}}}function Re(l){let e,n,t,o;const a=[Ze,We],r=[];function s(f,v){return f[11]?0:1}return e=s(l),n=r[e]=a[e](l),{c(){n.c(),t=I()},m(f,v){r[e].m(f,v),L(f,t,v),o=!0},p(f,v){let g=e;e=s(f),e===g?r[e].p(f,v):(ve(),j(r[g],1,1,()=>{r[g]=null}),pe(),n=r[e],n?n.p(f,v):(n=r[e]=a[e](f),n.c()),S(n,1),n.m(t.parentNode,t))},i(f){o||(S(n),o=!0)},o(f){j(n),o=!1},d(f){r[e].d(f),f&&E(t)}}}function Ve(l){let e,n;return e=new He({props:{type:"csv"}}),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p:X,i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function We(l){let e,n;return e=new Fe({props:{size:"large",unpadded_box:!0,$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ze(l){let e,n;return e=new ke({props:{value:l[11],colors:l[8]}}),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,o){const a={};o&2048&&(a.value=t[11]),o&256&&(a.colors=t[8]),e.$set(a)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Qe(l){let e,n;return e=new be({}),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function $e(l){let e,n,t,o,a,r,s,f;e=new Ue({props:{show_label:l[7],Icon:be,label:l[6]||"TimeSeries"}});const v=[l[9]];let g={};for(let m=0;m<v.length;m+=1)g=Te(g,v[m]);t=new Ce({props:g});const i=[Re,Pe,Ke],h=[];function A(m,p){return m[5]==="static"?0:m[10]?1:m[0]===void 0||m[0]===null?2:-1}return~(a=A(l))&&(r=h[a]=i[a](l)),{c(){q(e.$$.fragment),n=D(),q(t.$$.fragment),o=D(),r&&r.c(),s=I()},m(m,p){H(e,m,p),L(m,n,p),H(t,m,p),L(m,o,p),~a&&h[a].m(m,p),L(m,s,p),f=!0},p(m,p){const k={};p&128&&(k.show_label=m[7]),p&64&&(k.label=m[6]||"TimeSeries"),e.$set(k);const F=p&512?Me(v,[Be(m[9])]):{};t.$set(F);let y=a;a=A(m),a===y?~a&&h[a].p(m,p):(r&&(ve(),j(h[y],1,1,()=>{h[y]=null}),pe()),~a?(r=h[a],r?r.p(m,p):(r=h[a]=i[a](m),r.c()),S(r,1),r.m(s.parentNode,s)):r=null)},i(m){f||(S(e.$$.fragment,m),S(t.$$.fragment,m),S(r),f=!0)},o(m){j(e.$$.fragment,m),j(t.$$.fragment,m),j(r),f=!1},d(m){O(e,m),m&&E(n),O(t,m),m&&E(o),~a&&h[a].d(m),m&&E(s)}}}function xe(l){let e,n;return e=new Ae({props:{visible:l[2],variant:l[5]==="dynamic"&&!l[10]?"dashed":"solid",color:"grey",padding:!1,elem_id:l[1],$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,[o]){const a={};o&4&&(a.visible=t[2]),o&1056&&(a.variant=t[5]==="dynamic"&&!t[10]?"dashed":"solid"),o&2&&(a.elem_id=t[1]),o&528377&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function el(l){return l.data.map(e=>e.reduce((n,t,o)=>({...n,[l.headers[o]]:t}),{}))}function ll(l){const e=atob(l.split(",")[1]),n=l.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(e.length),o=new Uint8Array(t);for(let a=0;a<e.length;a++)o[a]=e.charCodeAt(a);return new Blob([t],{type:n})}function tl(l,e){const n=[],t=[];n.push(l.name),e.forEach(({name:o})=>n.push(o));for(let o=0;o<l.values.length;o++){let a=[];a.push(l.values[o]),e.forEach(({values:r})=>a.push(r[o].y)),t.push(a)}return{headers:n,data:t}}function nl(l,e,n){let t;const o=de();let{elem_id:a=""}=e,{visible:r=!0}=e,{value:s}=e,{y:f}=e,{x:v}=e,{mode:g}=e,{label:i}=e,{show_label:h}=e,{colors:A}=e,{loading_status:m}=e,p;function k(d){const z=new FileReader;z.addEventListener("loadend",c=>{n(10,p=c.srcElement.result)}),z.readAsText(d)}function F(d){d.headers&&n(10,p=d.headers.join(",")),d.data.forEach(c=>{n(10,p=p+`
`),n(10,p=p+c.join(","))})}function y(d){return n(0,s={data:d}),d}function b({detail:d}){n(0,s=null),o("change"),o("clear")}const T=({detail:{x:d,y:z}})=>n(0,s=tl(d,z)),C=({detail:d})=>y(d);return l.$$set=d=>{"elem_id"in d&&n(1,a=d.elem_id),"visible"in d&&n(2,r=d.visible),"value"in d&&n(0,s=d.value),"y"in d&&n(3,f=d.y),"x"in d&&n(4,v=d.x),"mode"in d&&n(5,g=d.mode),"label"in d&&n(6,i=d.label),"show_label"in d&&n(7,h=d.show_label),"colors"in d&&n(8,A=d.colors),"loading_status"in d&&n(9,m=d.loading_status)},l.$$.update=()=>{l.$$.dirty&1&&(s&&s.data&&typeof s.data=="string"?s?k(ll(s.data)):n(10,p=null):s&&s.data&&typeof s.data!="string"&&(s||n(10,p=null),F(s))),l.$$.dirty&1025&&n(10,p=s==null?null:p),l.$$.dirty&33&&n(11,t=g==="static"&&s&&el(s)),l.$$.dirty&1&&o("change")},[s,a,r,f,v,g,i,h,A,m,p,t,y,b,T,C]}class ol extends P{constructor(e){super(),R(this,e,nl,xe,V,{elem_id:1,visible:2,value:0,y:3,x:4,mode:5,label:6,show_label:7,colors:8,loading_status:9})}}var dl=ol;const vl=["static","dynamic"],pl=l=>({type:"{data: Array<Array<number>> | string; headers?: Array<string>;}",description:"dataset of series"});export{dl as Component,pl as document,vl as modes};
//# sourceMappingURL=index.db065dc8.js.map
