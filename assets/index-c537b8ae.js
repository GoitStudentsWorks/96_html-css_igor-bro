(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const l=document.querySelector(".mobile-menu"),n=document.querySelector(".header-btn-menu"),s=document.querySelector(".mobile-menu-close-btn"),r=document.querySelectorAll(".mobile-menu-navi-item-link"),e=()=>{const o=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!o),l.classList.toggle("is-open");const i=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};r.forEach(o=>o.addEventListener("click",e)),n.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(l.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});const t=()=>{const o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(t),window.scrollTo(0,o-o/8))},c=document.querySelector(".back-to-top");c.addEventListener("click",t),window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop)>350?c.classList.add("active"):c.classList.remove("active")})})();
