import { fotoMaker } from './js/render-functions';
import { getAllFoto } from './js/pixabay-api';
import { messageAllert } from './js/render-functions';
import { galleryClear } from './js/render-functions';

const formSearchFotos = document.querySelector('.feedback-form');
const loadMessage = document.querySelector('.message');

formSearchFotos.addEventListener('submit', fotosSearch);

function fotosSearch(evt) {
  evt.preventDefault();
  // console.log(evt.target.searchImages.value);
  galleryClear();
  loadMessage.innerHTML = '<span class="loader"></span>';
  const searchValue = evt.target.searchImages.value.trim();
  if (searchValue === '') {
    messageAllert('Enter a search term!');
  }
  // console.log(searchValue);

  getAllFoto(searchValue)
    .then(res => {
      if (res.hits.length !== 0) {
        // console.log(res.hits[0]);
        fotoMaker(res.hits);
      } else {
        messageAllert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      loadMessage.innerHTML = '';
    })
    .catch(error => {
      messageAllert(`Sorry, ${error}!`);
    });

  formSearchFotos.reset();
}
