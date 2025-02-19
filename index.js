import{S as u,i as d,a as m}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const p=document.querySelector(".gallery");function c(){const t=document.querySelector(".gallery");t.textContent=""}function f(t){c();const s=t.map(o=>`<li class="gallery-item">
	            <a class="gallery-link" href="${o.largeImageURL}">
		            <img 
			          class="gallery-image" 
			          src="${o.webformatURL}" 
			          alt="${o.tags}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${o.likes}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${o.views}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${o.comments}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${o.downloads}</p>
                </div>
              </div>
              </a>  
        </li>`).join(" ");p.insertAdjacentHTML("beforeend",s),new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function i(t){d.show({position:"topRight",title:"error",titleColor:"white",message:t,messageSize:"24px",messageLineHeight:"24px",messageColor:"white",backgroundColor:" #ef4040",theme:"dark"})}const y=m.create({});function h(t){const s=new URLSearchParams({key:"48882372-89a0cb49e548afa674928e493",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return y.get(`https://pixabay.com/api/?${s}`).then(r=>r.data).catch(r=>console.log(r))}const g=document.querySelector(".feedback-form"),n=document.querySelector(".message");g.addEventListener("submit",v);function v(t){t.preventDefault(),c(),n.innerHTML='<span class="loader"></span>';const s=t.target.searchImages.value.trim();s===""&&i("Enter a search term!"),h(s).then(r=>{r.hits.length!==0?f(r.hits):i("Sorry, there are no images matching your search query. Please try again!"),n.innerHTML=""}).catch(r=>{i(`Sorry, ${r}!`)}),g.reset()}
//# sourceMappingURL=index.js.map
