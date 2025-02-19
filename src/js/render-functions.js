import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');

export function galleryClear() {
  const gallery = document.querySelector('.gallery');
  gallery.textContent = '';
}

export function fotoMaker(imageArr) {
  galleryClear();
  // console.log(imageArr);
  const listImages = imageArr
    .map(
      foto =>
        `<li class="gallery-item">
	            <a class="gallery-link" href="${foto.largeImageURL}">
		            <img 
			          class="gallery-image" 
			          src="${foto.webformatURL}" 
			          alt="${foto.tags}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${foto.likes}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${foto.views}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${foto.comments}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${foto.downloads}</p>
                </div>
              </div>
              </a>  
        </li>`
    )
    .join(' ');

  gallery.insertAdjacentHTML('beforeend', listImages);

  const galleryBox = new SimpleLightbox('.gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  galleryBox.refresh();
}

export function messageAllert(messageSnack) {
  iziToast.show({
    position: 'topRight',
    title: 'error',
    titleColor: 'white',
    message: messageSnack,
    messageSize: '24px',
    messageLineHeight: '24px',
    messageColor: 'white',
    backgroundColor: ' #ef4040',
    theme: 'dark',
  });
}
