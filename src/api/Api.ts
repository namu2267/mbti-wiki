import axios from 'axios';
import { ArticleTypes } from '../types/Article.type';

// article 데이터를 받아옴
// export const getArticleApi = () => {
//   db.collection('post')
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });

//   // return axios.get('/');
// };

// article 데이터를 생성함
export const createArticleApi = (article: ArticleTypes) => {
  return axios.post('/post/new', article);
};
// export const createArticleApi = async => {
//   return await axios.post('/posts', article);
// };
