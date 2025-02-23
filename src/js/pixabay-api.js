import axios from 'axios';
// import { messageAllert } from './render-functions';

const API_KEY = '48882372-89a0cb49e548afa674928e493';

export async function getAllFoto(value, perPage, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: page,
    language: 'en',
  });

  const result = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return result.data;
}
// export function getFoto(id) {
//   return axiosFotoSearch.get(`/fotos/${id}`).then(res => res.data);
// }
// export function createFoto(foto) {
//   return axiosFotoSearch.post('/fotos', foto).then(res => res.data);
// }
// export function updeteFoto(id, foto) {
//   return axiosFotoSearch.patch(`/fotos/${id}`, foto).then(res => res.data);
// }
// export function resetFoto(id, foto) {
//   return axiosFotoSearch.put(`/fotos/${id}`, foto).then(res => res.data);
// }
// export function deleteFoto(id) {
//   return axiosFotoSearch.delete(`/fotos/${id}`).then(res => res.data);
// }
