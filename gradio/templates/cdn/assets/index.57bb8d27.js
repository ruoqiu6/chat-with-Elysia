import{S as $,i as x,s as ee,aa as le,v as R,w as j,t as p,b as A,x as q,d as I,f as de,k as C,m as L,o as M,p as T,q as D,Y as we,a6 as ke,N as U,e as G,R as E,h as b,j as V,D as B,l as z,c as te,n as ne,J as ie,I as ve,ag as ye,B as pe,y as ze,z as Ae,A as Be,C as Ge}from"./index.06513bff.js";import{B as Ce}from"./BlockLabel.fb118289.js";import{E as De}from"./Empty.70be3570.js";/* empty css                                                   */import{M as Ie}from"./ModifyUpload.068550fb.js";import{n as Y}from"./utils.83c1ef65.js";import{I as se}from"./Image.a50d00a1.js";function F(t,e,l){const n=t.slice();return n[27]=e[l][0],n[28]=e[l][1],n[30]=l,n}function K(t,e,l){const n=t.slice();return n[27]=e[l],n[31]=e,n[30]=l,n}function O(t){let e,l;return e=new Ce({props:{show_label:t[0],Icon:se,label:t[1]||"Gallery",disable:typeof t[3].container=="boolean"&&!t[3].container}}),{c(){R(e.$$.fragment)},m(n,i){j(e,n,i),l=!0},p(n,i){const r={};i[0]&1&&(r.show_label=n[0]),i[0]&2&&(r.label=n[1]||"Gallery"),i[0]&8&&(r.disable=typeof n[3].container=="boolean"&&!n[3].container),e.$set(r)},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}function Ne(t){let e,l,n,i,r,_=t[4]!==null&&P(t),f=t[7],o=[];for(let a=0;a<f.length;a+=1)o[a]=Z(F(t,f,a));return{c(){_&&_.c(),e=I(),l=G("div"),n=G("div");for(let a=0;a<o.length;a+=1)o[a].c();b(n,"class","grid-container svelte-ywf5u7"),b(n,"style",t[10]),B(n,"pt-6",t[0]),b(l,"class","grid-wrap svelte-ywf5u7"),le(()=>t[24].call(l)),B(l,"fixed-height",t[3].height!=="auto")},m(a,u){_&&_.m(a,u),C(a,e,u),C(a,l,u),z(l,n);for(let c=0;c<o.length;c+=1)o[c].m(n,null);i=ye(l,t[24].bind(l)),r=!0},p(a,u){if(a[4]!==null?_?(_.p(a,u),u[0]&16&&p(_,1)):(_=P(a),_.c(),p(_,1),_.m(e.parentNode,e)):_&&(M(),A(_,1,1,()=>{_=null}),T()),u[0]&2192){f=a[7];let c;for(c=0;c<f.length;c+=1){const s=F(a,f,c);o[c]?o[c].p(s,u):(o[c]=Z(s),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=f.length}(!r||u[0]&1024)&&b(n,"style",a[10]),u[0]&1&&B(n,"pt-6",a[0]),u[0]&8&&B(l,"fixed-height",a[3].height!=="auto")},i(a){r||(p(_),r=!0)},o(a){A(_),r=!1},d(a){_&&_.d(a),a&&D(e),a&&D(l),ie(o,a),i()}}}function Re(t){let e,l;return e=new De({props:{size:"large",unpadded_box:!0,$$slots:{default:[je]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(n,i){j(e,n,i),l=!0},p(n,i){const r={};i[1]&2&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}function P(t){let e,l,n,i,r,_,f,o,a,u,c,s,d;l=new Ie({}),l.$on("clear",t[18]);let h=t[7][t[4]][1]&&Q(t),w=t[7],y=[];for(let m=0;m<w.length;m+=1)y[m]=W(K(t,w,m));return{c(){e=G("div"),R(l.$$.fragment),n=I(),i=G("img"),o=I(),h&&h.c(),a=I(),u=G("div");for(let m=0;m<y.length;m+=1)y[m].c();E(i.src,r=t[7][t[4]][0].data)||b(i,"src",r),b(i,"alt",_=t[7][t[4]][1]||""),b(i,"title",f=t[7][t[4]][1]||null),V(i,"height","calc(100% - "+(t[7][t[4]][1]?"80px":"60px")+")"),b(i,"class","svelte-ywf5u7"),B(i,"with-caption",!!t[7][t[4]][1]),b(u,"class","thumbnails scroll-hide svelte-ywf5u7"),b(e,"class","preview svelte-ywf5u7"),B(e,"fixed-height",t[3].height!=="auto")},m(m,k){C(m,e,k),j(l,e,null),z(e,n),z(e,i),z(e,o),h&&h.m(e,null),z(e,a),z(e,u);for(let v=0;v<y.length;v+=1)y[v].m(u,null);t[22](u),c=!0,s||(d=[L(i,"click",t[19]),L(e,"keydown",t[13])],s=!0)},p(m,k){if((!c||k[0]&144&&!E(i.src,r=m[7][m[4]][0].data))&&b(i,"src",r),(!c||k[0]&144&&_!==(_=m[7][m[4]][1]||""))&&b(i,"alt",_),(!c||k[0]&144&&f!==(f=m[7][m[4]][1]||null))&&b(i,"title",f),(!c||k[0]&144)&&V(i,"height","calc(100% - "+(m[7][m[4]][1]?"80px":"60px")+")"),k[0]&144&&B(i,"with-caption",!!m[7][m[4]][1]),m[7][m[4]][1]?h?h.p(m,k):(h=Q(m),h.c(),h.m(e,a)):h&&(h.d(1),h=null),k[0]&400){w=m[7];let v;for(v=0;v<w.length;v+=1){const N=K(m,w,v);y[v]?y[v].p(N,k):(y[v]=W(N),y[v].c(),y[v].m(u,null))}for(;v<y.length;v+=1)y[v].d(1);y.length=w.length}k[0]&8&&B(e,"fixed-height",m[3].height!=="auto")},i(m){c||(p(l.$$.fragment,m),c=!0)},o(m){A(l.$$.fragment,m),c=!1},d(m){m&&D(e),q(l),h&&h.d(),ie(y,m),t[22](null),s=!1,ve(d)}}}function Q(t){let e,l=t[7][t[4]][1]+"",n;return{c(){e=G("div"),n=te(l),b(e,"class","caption svelte-ywf5u7")},m(i,r){C(i,e,r),z(e,n)},p(i,r){r[0]&144&&l!==(l=i[7][i[4]][1]+"")&&ne(n,l)},d(i){i&&D(e)}}}function W(t){let e,l,n,i,r,_,f=t[30],o,a;const u=()=>t[20](e,f),c=()=>t[20](null,f);function s(){return t[21](t[30])}return{c(){e=G("button"),l=G("img"),_=I(),E(l.src,n=t[27][0].data)||b(l,"src",n),b(l,"title",i=t[27][1]||null),b(l,"alt",r=t[27][1]||null),b(l,"class","svelte-ywf5u7"),b(e,"class","thumbnail-item thumbnail-small  svelte-ywf5u7"),B(e,"selected",t[4]===t[30])},m(d,h){C(d,e,h),z(e,l),z(e,_),u(),o||(a=L(e,"click",s),o=!0)},p(d,h){t=d,h[0]&128&&!E(l.src,n=t[27][0].data)&&b(l,"src",n),h[0]&128&&i!==(i=t[27][1]||null)&&b(l,"title",i),h[0]&128&&r!==(r=t[27][1]||null)&&b(l,"alt",r),f!==t[30]&&(c(),f=t[30],u()),h[0]&16&&B(e,"selected",t[4]===t[30])},d(d){d&&D(e),c(),o=!1,a()}}}function X(t){let e,l=t[28]+"",n;return{c(){e=G("div"),n=te(l),b(e,"class","caption-label svelte-ywf5u7")},m(i,r){C(i,e,r),z(e,n)},p(i,r){r[0]&128&&l!==(l=i[28]+"")&&ne(n,l)},d(i){i&&D(e)}}}function Z(t){let e,l,n,i,r,_,f,o,a=t[28]&&X(t);function u(){return t[23](t[30])}return{c(){e=G("button"),l=G("img"),r=I(),a&&a.c(),_=I(),b(l,"alt",n=t[28]||""),E(l.src,i=typeof t[27]=="string"?t[27]:t[27].data)||b(l,"src",i),b(l,"class","svelte-ywf5u7"),b(e,"class","thumbnail-item thumbnail-lg svelte-ywf5u7"),B(e,"selected",t[4]===t[30])},m(c,s){C(c,e,s),z(e,l),z(e,r),a&&a.m(e,null),z(e,_),f||(o=L(e,"click",u),f=!0)},p(c,s){t=c,s[0]&128&&n!==(n=t[28]||"")&&b(l,"alt",n),s[0]&128&&!E(l.src,i=typeof t[27]=="string"?t[27]:t[27].data)&&b(l,"src",i),t[28]?a?a.p(t,s):(a=X(t),a.c(),a.m(e,_)):a&&(a.d(1),a=null),s[0]&16&&B(e,"selected",t[4]===t[30])},d(c){c&&D(e),a&&a.d(),f=!1,o()}}}function je(t){let e,l;return e=new se({}),{c(){R(e.$$.fragment)},m(n,i){j(e,n,i),l=!0},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}function qe(t){let e,l,n,i,r,_,f;le(t[17]);let o=t[0]&&O(t);const a=[Re,Ne],u=[];function c(s,d){return s[2]===null||s[7]===null||s[7].length===0?0:1}return l=c(t),n=u[l]=a[l](t),{c(){o&&o.c(),e=I(),n.c(),i=de()},m(s,d){o&&o.m(s,d),C(s,e,d),u[l].m(s,d),C(s,i,d),r=!0,_||(f=L(window,"resize",t[17]),_=!0)},p(s,d){s[0]?o?(o.p(s,d),d[0]&1&&p(o,1)):(o=O(s),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(M(),A(o,1,1,()=>{o=null}),T());let h=l;l=c(s),l===h?u[l].p(s,d):(M(),A(u[h],1,1,()=>{u[h]=null}),T(),n=u[l],n?n.p(s,d):(n=u[l]=a[l](s),n.c()),p(n,1),n.m(i.parentNode,i))},i(s){r||(p(o),p(n),r=!0)},o(s){A(o),A(n),r=!1},d(s){o&&o.d(s),s&&D(e),u[l].d(s),s&&D(i),_=!1,f()}}}function Ee(t,e,l){let n,i,r,_,f,{show_label:o=!0}=e,{label:a}=e,{root:u=""}=e,{root_url:c=null}=e,{value:s=null}=e,{style:d={grid:[2],height:"auto"}}=e,h=null,w=null;function y(g){switch(g.code){case"Escape":g.preventDefault(),l(4,w=null);break;case"ArrowLeft":g.preventDefault(),l(4,w=i);break;case"ArrowRight":g.preventDefault(),l(4,w=r);break}}let m=[],k;async function v(g){if(typeof g!="number")return;await ke(),m[g].focus();const{left:H,width:ge}=k.getBoundingClientRect(),{left:he,width:be}=m[g].getBoundingClientRect(),J=he-H+be/2-ge/2+k.scrollLeft;k.scrollTo({left:J<0?0:J,behavior:"smooth"})}let N=0,S=0;function oe(){l(6,S=window.innerHeight)}const ae=()=>l(4,w=null),re=()=>l(4,w=r);function fe(g,H){U[g?"unshift":"push"](()=>{m[H]=g,l(8,m)})}const ue=g=>l(4,w=g);function _e(g){U[g?"unshift":"push"](()=>{k=g,l(9,k)})}const ce=g=>l(4,w=_?g:w);function me(){N=this.clientHeight,l(5,N)}return t.$$set=g=>{"show_label"in g&&l(0,o=g.show_label),"label"in g&&l(1,a=g.label),"root"in g&&l(14,u=g.root),"root_url"in g&&l(15,c=g.root_url),"value"in g&&l(2,s=g.value),"style"in g&&l(3,d=g.style)},t.$$.update=()=>{t.$$.dirty[0]&49156&&l(7,n=s===null?null:s.map(g=>Array.isArray(g)?[Y(g[0],u,c),g[1]]:[Y(g,u,c),null])),t.$$.dirty[0]&65556&&h!==s&&(l(4,w=w!==null&&s!==null&&w<s.length?w:null),l(16,h=s)),t.$$.dirty[0]&144&&(i=((w??0)+(n?.length??0)-1)%(n?.length??0)),t.$$.dirty[0]&144&&l(12,r=((w??0)+1)%(n?.length??0)),t.$$.dirty[0]&16&&v(w),t.$$.dirty[0]&96&&l(11,_=S>=N),t.$$.dirty[0]&8&&l(10,{styles:f}=we(d,["grid"]),f)},[o,a,s,d,w,N,S,n,m,k,f,_,r,y,u,c,h,oe,ae,re,fe,ue,_e,ce,me]}class Le extends ${constructor(e){super(),x(this,e,Ee,qe,ee,{show_label:0,label:1,root:14,root_url:15,value:2,style:3},null,[-1,-1])}}function Se(t){let e,l,n,i;const r=[t[0]];let _={};for(let f=0;f<r.length;f+=1)_=ze(_,r[f]);return e=new Ae({props:_}),n=new Le({props:{label:t[2],value:t[7],style:t[8],show_label:t[1],root:t[3],root_url:t[4]}}),{c(){R(e.$$.fragment),l=I(),R(n.$$.fragment)},m(f,o){j(e,f,o),C(f,l,o),j(n,f,o),i=!0},p(f,o){const a=o&1?Be(r,[Ge(f[0])]):{};e.$set(a);const u={};o&4&&(u.label=f[2]),o&128&&(u.value=f[7]),o&256&&(u.style=f[8]),o&2&&(u.show_label=f[1]),o&8&&(u.root=f[3]),o&16&&(u.root_url=f[4]),n.$set(u)},i(f){i||(p(e.$$.fragment,f),p(n.$$.fragment,f),i=!0)},o(f){A(e.$$.fragment,f),A(n.$$.fragment,f),i=!1},d(f){q(e,f),f&&D(l),q(n,f)}}}function He(t){let e,l;return e=new pe({props:{visible:t[6],variant:"solid",color:"grey",padding:!1,elem_id:t[5],disable:typeof t[8].container=="boolean"&&!t[8].container,$$slots:{default:[Se]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(n,i){j(e,n,i),l=!0},p(n,[i]){const r={};i&64&&(r.visible=n[6]),i&32&&(r.elem_id=n[5]),i&256&&(r.disable=typeof n[8].container=="boolean"&&!n[8].container),i&927&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}function Me(t,e,l){let{loading_status:n}=e,{show_label:i}=e,{label:r}=e,{root:_}=e,{root_url:f}=e,{elem_id:o=""}=e,{visible:a=!0}=e,{value:u=null}=e,{style:c={}}=e;return t.$$set=s=>{"loading_status"in s&&l(0,n=s.loading_status),"show_label"in s&&l(1,i=s.show_label),"label"in s&&l(2,r=s.label),"root"in s&&l(3,_=s.root),"root_url"in s&&l(4,f=s.root_url),"elem_id"in s&&l(5,o=s.elem_id),"visible"in s&&l(6,a=s.visible),"value"in s&&l(7,u=s.value),"style"in s&&l(8,c=s.style)},[n,i,r,_,f,o,a,u,c]}class Te extends ${constructor(e){super(),x(this,e,Me,He,ee,{loading_status:0,show_label:1,label:2,root:3,root_url:4,elem_id:5,visible:6,value:7,style:8})}}var Qe=Te;const We=["static"],Xe=t=>({type:"Array<{ name: string } | [{ name: string }, string]>",description:"list of objects with filename and optional caption"});export{Qe as Component,Xe as document,We as modes};
//# sourceMappingURL=index.57bb8d27.js.map