import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function galleryClear() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function galleryMaker(imageArr) {
  return imageArr.map(elem => itemMaker(elem)).join('');
}

function itemMaker(foto) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = foto;
  return `<li class="gallery-item">
	            <a class="gallery-link" href="${largeImageURL}">
		            <img 
			          class="gallery-image" 
			          src="${webformatURL}" 
			          alt="${tags}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${likes}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${views}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${comments}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${downloads}</p>
                </div>
              </div>
              </a>  
        </li>`;
}

export function messageAllert(message, text, backColor) {
  iziToast.show({
    position: 'topRight',
    title: message,
    titleColor: 'white',
    message: text,
    messageSize: '24px',
    messageLineHeight: '24px',
    messageColor: 'white',
    backgroundColor: backColor,
    theme: 'dark',
  });
}
