import{i as b,a as M,S as h}from"./assets/vendor-BDaiwwc1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();function f(){const t=document.querySelector(".gallery");t.innerHTML=""}function m(t){return t.map(e=>w(e)).join("")}function w(t){const{largeImageURL:e,webformatURL:o,tags:l,likes:a,views:s,comments:n,downloads:v}=t;return`<li class="gallery-item">
	            <a class="gallery-link" href="${e}">
		            <img 
			          class="gallery-image" 
			          src="${o}" 
			          alt="${l}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${a}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${s}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${n}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${v}</p>
                </div>
              </div>
              </a>  
        </li>`}function c(t,e,o){b.show({position:"topRight",title:t,titleColor:"white",message:e,messageSize:"24px",messageLineHeight:"24px",messageColor:"white",backgroundColor:o,theme:"dark"})}const S="48882372-89a0cb49e548afa674928e493";async function y(t,e,o){const l=new URLSearchParams({key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:e,page:o,language:"en"});return(await M.get(`https://pixabay.com/api/?${l}`)).data}const p=document.querySelector(".feedback-form"),i=document.querySelector(".message"),d=document.querySelector(".btn-load-more"),u=document.querySelector(".gallery"),r={searchValue:"",page:1,perPage:40,pageMax:1};p.addEventListener("submit",P);d.addEventListener("click",async()=>{r.page+=1,g(),i.innerHTML='<span class="loader"></span>';const t=await y(r.searchValue,r.perPage,r.page);u.insertAdjacentHTML("beforeend",m(t.hits)),new h(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),L(),i.innerHTML="";const o=u.firstChild.getBoundingClientRect();scrollBy({top:o.height*2,behavior:"smooth"})});async function P(t){try{if(t.preventDefault(),f(),r.searchValue=t.target.searchImages.value.trim(),r.page=1,!r.searchValue)g(),c("","Enter a search term!","rgb(9, 206, 42)");else{i.innerHTML='<span class="loader"></span>';const e=await y(r.searchValue,r.perPage,r.page);r.pageMax=Math.ceil(e.total/r.perPage),e.hits.length!==0?(u.innerHTML=m(e.hits),new h(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),L()):(g(),c("","Sorry, there are no images matching your search query. Please try again!","rgb(9, 206, 42)")),i.innerHTML=""}p.reset()}catch(e){p.reset(),f(),i.innerHTML="",c("ERROR",`Sorry, ${e}!`," #ef4040")}}function x(){d.classList.remove("is-hidden")}function g(){d.classList.add("is-hidden")}function L(){r.page>=r.pageMax?(g(),c("","We're sorry, but you've reached the end of search results.","rgb(9, 206, 42)")):x()}
//# sourceMappingURL=index.js.map
