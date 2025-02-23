import { galleryMaker } from './js/render-functions';
import { getAllFoto } from './js/pixabay-api';
import { messageAllert } from './js/render-functions';
import { galleryClear } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearchFotos = document.querySelector('.feedback-form');
const loadMessage = document.querySelector('.message');
const btnLoadMore = document.querySelector('.btn-load-more');
const gallery = document.querySelector('.gallery');

const params = {
  searchValue: '',
  page: 1,
  perPage: 40,
  pageMax: 1,
};

formSearchFotos.addEventListener('submit', fotosSearch);

btnLoadMore.addEventListener('click', async () => {
  params.page += 1;
  hideBtnLoadMore();
  loadMessage.innerHTML = '<span class="loader"></span>';
  const res = await getAllFoto(params.searchValue, params.perPage, params.page);

  gallery.insertAdjacentHTML('beforeend', galleryMaker(res.hits));
  checkLoadStatus();
  loadMessage.innerHTML = '';
});

async function fotosSearch(evt) {
  try {
    evt.preventDefault();

    galleryClear();
    params.searchValue = evt.target.searchImages.value.trim();
    params.page = 1;

    if (!params.searchValue) {
      hideBtnLoadMore();
      messageAllert('', 'Enter a search term!', 'rgb(9, 206, 42)');
    } else {
      loadMessage.innerHTML = '<span class="loader"></span>';
      const res = await getAllFoto(
        params.searchValue,
        params.perPage,
        params.page
      );
      params.pageMax = Math.ceil(res.total / params.perPage);
      if (res.hits.length !== 0) {
        gallery.innerHTML = galleryMaker(res.hits);
        const galleryBox = new SimpleLightbox('.gallery-link', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
          captionPosition: 'bottom',
        });
        galleryBox.refresh();
        checkLoadStatus();
      } else {
        hideBtnLoadMore();
        messageAllert(
          '',
          'Sorry, there are no images matching your search query. Please try again!',
          'rgb(9, 206, 42)'
        );
      }
      loadMessage.innerHTML = '';
    }
    formSearchFotos.reset();
  } catch (error) {
    formSearchFotos.reset();
    galleryClear();
    loadMessage.innerHTML = '';
    messageAllert('ERROR', `Sorry, ${error}!`, ' #ef4040');
  }
}

function showBtnLoadMore() {
  btnLoadMore.classList.remove('is-hidden');
}

function hideBtnLoadMore() {
  btnLoadMore.classList.add('is-hidden');
}

function checkLoadStatus() {
  if (params.page >= params.pageMax) {
    hideBtnLoadMore();
    messageAllert('', 'The end!', 'rgb(9, 206, 42)');
  } else {
    showBtnLoadMore();
  }

  // if (res.hits.length < params.perPage) {
  //   hideBtnLoadMore();
  // } else {
  //   showBtnLoadMore();
  // }
}
