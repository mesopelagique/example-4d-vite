function C(){}function N(t){return t()}function j(){return Object.create(null)}function m(t){t.forEach(N)}function q(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let l;function Q(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function L(t){return Object.keys(t).length===0}function R(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function W(){return B(" ")}function X(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let b;function i(t){b=t}const a=[],A=[],_=[],S=[],P=Promise.resolve();let y=!1;function z(){y||(y=!0,P.then(O))}function x(t){_.push(t)}const $=new Set;let d=0;function O(){const t=b;do{for(;d<a.length;){const e=a[d];d++,i(e),D(e.$$)}for(i(null),a.length=0,d=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];$.has(n)||($.add(n),n())}_.length=0}while(a.length);for(;S.length;)S.pop()();y=!1,$.clear(),i(t)}function D(t){if(t.fragment!==null){t.update(),m(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const h=new Set;let F;function G(t,e){t&&t.i&&(h.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(h.has(t))return;h.add(t),F.c.push(()=>{h.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function et(t){t&&t.c()}function H(t,e,n,o){const{fragment:s,on_mount:p,on_destroy:f,after_update:g}=t.$$;s&&s.m(e,n),o||x(()=>{const c=p.map(N).filter(q);f?f.push(...c):m(c),t.$$.on_mount=[]}),g.forEach(x)}function I(t,e){const n=t.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(a.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,n,o,s,p,f,g=[-1]){const c=b;i(t);const r=t.$$={fragment:null,ctx:null,props:p,update:C,not_equal:s,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:j(),dirty:g,skip_bound:!1,root:e.target||c.$$.root};f&&f(r.root);let w=!1;if(r.ctx=n?n(t,e.props||{},(u,E,...v)=>{const k=v.length?v[0]:E;return r.ctx&&s(r.ctx[u],r.ctx[u]=k)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](k),w&&J(t,u)),E}):[],r.update(),w=!0,m(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const u=M(e.target);r.fragment&&r.fragment.l(u),u.forEach(T)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),O()}i(c)}class rt{$destroy(){I(this,1),this.$destroy=C}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!L(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as S,Y as a,U as b,R as c,Z as d,V as e,T as f,W as g,et as h,nt as i,Q as j,G as k,X as l,H as m,C as n,tt as o,I as p,K as s,B as t};