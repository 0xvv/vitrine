function j(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(O)}function P(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function ct(t,n,e,i){if(t){const o=D(t,n,e,i);return t[0](o)}}function D(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const o=t[2](i(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const u=[],c=Math.max(n.dirty.length,o.length);for(let l=0;l<c;l+=1)u[l]=n.dirty[l]|o[l];return u}return n.dirty|o}return n.dirty}function st(t,n,e,i,o,u){if(o){const c=D(n,e,i,u);t.p(c,o)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function at(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function _t(t){return t&&P(t.destroy)?t.destroy:j}let w=!1;function I(){w=!0}function W(){w=!1}function G(t,n,e,i){for(;t<n;){const o=t+(n-t>>1);e(o)<=i?t=o+1:n=o}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let o=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(o>0&&n[e[o]].claim_order<=s?o+1:G(1,o,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,o=Math.max(f,o)}const u=[],c=[];let l=n.length-1;for(let r=e[o]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);l>=r;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);u.reverse(),c.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<c.length;r++){for(;s<u.length&&c[r].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(c[r],a)}}function K(t,n){if(w){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function ht(){return A(" ")}function mt(){return A("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function U(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function xt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:U(t,i,n[i])}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,o=!1){X(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const r=e(l);return r===void 0?t.splice(c,1):t[c]=r,o||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const r=e(l);return r===void 0?t.splice(c,1):t[c]=r,o?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Y(t,n,e,i){return B(t,o=>o.nodeName===n,o=>{const u=[];for(let c=0;c<o.attributes.length;c++){const l=o.attributes[c];e[l.name]||u.push(l.name)}u.forEach(c=>o.removeAttribute(c))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,R)}function Z(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function $t(t){return Z(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){y().$$.on_mount.push(t)}function vt(t){y().$$.after_update.push(t)}function jt(t){y().$$.on_destroy.push(t)}function At(t,n){return y().$$.context.set(t,n),n}function Nt(t){return y().$$.context.get(t)}function St(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],T=[],b=[],M=[],L=Promise.resolve();let k=!1;function q(){k||(k=!0,L.then(z))}function Ct(){return q(),L}function v(t){b.push(t)}const E=new Set;let x=0;function z(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),tt(n.$$)}for(h(null),d.length=0,x=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;M.length;)M.pop()();k=!1,E.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function Mt(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Dt(t,n){const e={},i={},o={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=n[u];if(l){for(const r in c)r in l||(i[r]=1);for(const r in l)o[r]||(e[r]=l[r],o[r]=1);t[u]=l}else for(const r in c)o[r]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:o,on_mount:u,on_destroy:c,after_update:l}=t.$$;o&&o.m(n,e),i||v(()=>{const r=u.map(O).filter(P);c?c.push(...r):p(r),t.$$.on_mount=[]}),l.forEach(v)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,o,u,c,l=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:j,not_equal:o,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};c&&c(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...N)=>{const S=N.length?N[0]:g;return s.ctx&&o(s.ctx[f],s.ctx[f]=S)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](S),a&&rt(t,f)),g}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){I();const f=V(n.target);s.fragment&&s.fragment.l(f),f.forEach(Q)}else s.fragment&&s.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),W(),z()}h(r)}class Ft{$destroy(){it(this,1),this.$destroy=j}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Bt as A,it as B,F as C,Ct as D,j as E,pt as F,St as G,yt as H,gt as I,ct as J,xt as K,_t as L,st as M,ut as N,lt as O,P,p as Q,at as R,Ft as S,y as T,ft as U,Pt as V,T as W,Nt as X,jt as Y,K as Z,ht as a,dt as b,$t as c,Mt as d,mt as e,nt as f,Tt as g,Q as h,zt as i,At as j,vt as k,R as l,bt as m,V as n,kt as o,U as p,Et as q,A as r,ot as s,Ot as t,Z as u,wt as v,Lt as w,qt as x,et as y,Dt as z};
