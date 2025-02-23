import{i as v,a as M,S as b}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function d(){const r=document.querySelector(".gallery");r.innerHTML=""}function f(r){return r.map(a=>w(a)).join("")}function w(r){const{largeImageURL:a,webformatURL:o,tags:n,likes:e,views:s,comments:l,downloads:L}=r;return`<li class="gallery-item">
	            <a class="gallery-link" href="${a}">
		            <img 
			          class="gallery-image" 
			          src="${o}" 
			          alt="${n}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${e}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${s}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${l}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${L}</p>
                </div>
              </div>
              </a>  
        </li>`}function c(r,a,o){v.show({position:"topRight",title:r,titleColor:"white",message:a,messageSize:"24px",messageLineHeight:"24px",messageColor:"white",backgroundColor:o,theme:"dark"})}const S="48882372-89a0cb49e548afa674928e493";async function m(r,a,o){const n=new URLSearchParams({key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:o,language:"en"});return(await M.get(`https://pixabay.com/api/?${n}`)).data}const p=document.querySelector(".feedback-form"),i=document.querySelector(".message"),u=document.querySelector(".btn-load-more"),y=document.querySelector(".gallery"),t={searchValue:"",page:1,perPage:40,pageMax:1};p.addEventListener("submit",P);u.addEventListener("click",async()=>{t.page+=1,g(),i.innerHTML='<span class="loader"></span>';const r=await m(t.searchValue,t.perPage,t.page);y.insertAdjacentHTML("beforeend",f(r.hits)),h(),i.innerHTML=""});async function P(r){try{if(r.preventDefault(),d(),t.searchValue=r.target.searchImages.value.trim(),t.page=1,!t.searchValue)g(),c("","Enter a search term!","rgb(9, 206, 42)");else{i.innerHTML='<span class="loader"></span>';const a=await m(t.searchValue,t.perPage,t.page);t.pageMax=Math.ceil(a.total/t.perPage),a.hits.length!==0?(y.innerHTML=f(a.hits),new b(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),h()):(g(),c("","Sorry, there are no images matching your search query. Please try again!","rgb(9, 206, 42)")),i.innerHTML=""}p.reset()}catch(a){p.reset(),d(),i.innerHTML="",c("ERROR",`Sorry, ${a}!`," #ef4040")}}function x(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}function h(){t.page>=t.pageMax?(g(),c("","The end!","rgb(9, 206, 42)")):x()}
//# sourceMappingURL=index.js.map
