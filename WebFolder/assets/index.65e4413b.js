import{S as $,i as b,s as x,e as f,t as y,a as i,b as L,c as a,l as C,d as S,n as g,f as w,g as v,h as O,j as q,m as A,k as H,o as M,p as N}from"./vendor.be9a72b0.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};j();var E="/assets/svelte.d72399d3.png";function I(c){let e,n,r,t,s;return{c(){e=f("button"),n=y("Clicks: "),r=y(c[0]),i(e,"class","svelte-1c7643s")},m(l,o){L(l,e,o),a(e,n),a(e,r),t||(s=C(e,"click",c[1]),t=!0)},p(l,[o]){o&1&&S(r,l[0])},i:g,o:g,d(l){l&&w(e),t=!1,s()}}}function K(c,e,n){let r=0;return[r,()=>{n(0,r+=1)}]}class P extends ${constructor(e){super();b(this,e,K,I,x,{})}}function T(c){let e,n,r,t,s,l,o,_,p,h,m,d;return o=new P({}),{c(){e=f("main"),n=f("img"),t=v(),s=f("h1"),s.textContent="Hello world!",l=v(),O(o.$$.fragment),_=v(),p=f("p"),p.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.`,h=v(),m=f("p"),m.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!`,q(n.src,r=E)||i(n,"src",r),i(n,"alt","Svelte Logo"),i(n,"class","svelte-1fm71xa"),i(s,"class","svelte-1fm71xa"),i(p,"class","svelte-1fm71xa"),i(m,"class","svelte-1fm71xa"),i(e,"class","svelte-1fm71xa")},m(u,k){L(u,e,k),a(e,n),a(e,t),a(e,s),a(e,l),A(o,e,null),a(e,_),a(e,p),a(e,h),a(e,m),d=!0},p:g,i(u){d||(H(o.$$.fragment,u),d=!0)},o(u){M(o.$$.fragment,u),d=!1},d(u){u&&w(e),N(o)}}}class V extends ${constructor(e){super();b(this,e,null,T,x,{})}}new V({target:document.getElementById("app")});