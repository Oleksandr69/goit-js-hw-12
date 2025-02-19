import axios from 'axios';
import { messageAllert } from './render-functions';

const axiosFotoSearch = axios.create({});

export function getAllFoto(value) {
  const searchParams = new URLSearchParams({
    key: '48882372-89a0cb49e548afa674928e493',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return axiosFotoSearch
    .get(`https://pixabay.com/api/?${searchParams}`)
    .then(res => res.data)
    .catch(error => console.log(error));
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
