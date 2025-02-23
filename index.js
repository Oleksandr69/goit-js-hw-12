import{i as M,a as b,S as f}from"./assets/vendor-BDaiwwc1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();function d(){const r=document.querySelector(".gallery");r.innerHTML=""}function m(r){return r.map(e=>w(e)).join("")}function w(r){const{largeImageURL:e,webformatURL:o,tags:l,likes:a,views:s,comments:n,downloads:v}=r;return`<li class="gallery-item">
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
        </li>`}function c(r,e,o){M.show({position:"topRight",title:r,titleColor:"white",message:e,messageSize:"24px",messageLineHeight:"24px",messageColor:"white",backgroundColor:o,theme:"dark"})}const S="48882372-89a0cb49e548afa674928e493";async function y(r,e,o){const l=new URLSearchParams({key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:e,page:o,language:"en"});return(await b.get(`https://pixabay.com/api/?${l}`)).data}const p=document.querySelector(".feedback-form"),i=document.querySelector(".message"),u=document.querySelector(".btn-load-more"),h=document.querySelector(".gallery"),t={searchValue:"",page:1,perPage:40,pageMax:1};p.addEventListener("submit",P);u.addEventListener("click",async()=>{t.page+=1,g(),i.innerHTML='<span class="loader"></span>';const r=await y(t.searchValue,t.perPage,t.page);h.insertAdjacentHTML("beforeend",m(r.hits)),new f(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),L(),i.innerHTML=""});async function P(r){try{if(r.preventDefault(),d(),t.searchValue=r.target.searchImages.value.trim(),t.page=1,!t.searchValue)g(),c("","Enter a search term!","rgb(9, 206, 42)");else{i.innerHTML='<span class="loader"></span>';const e=await y(t.searchValue,t.perPage,t.page);t.pageMax=Math.ceil(e.total/t.perPage),e.hits.length!==0?(h.innerHTML=m(e.hits),new f(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),L()):(g(),c("","Sorry, there are no images matching your search query. Please try again!","rgb(9, 206, 42)")),i.innerHTML=""}p.reset()}catch(e){p.reset(),d(),i.innerHTML="",c("ERROR",`Sorry, ${e}!`," #ef4040")}}function x(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}function L(){t.page>=t.pageMax?(g(),c("","The end!","rgb(9, 206, 42)")):x()}
//# sourceMappingURL=index.js.map
