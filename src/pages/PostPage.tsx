import React, { useState } from 'react';
import { createArticleApi } from '../api/Api';

export default function PostPage() {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   db.collection('post')
  //     .add({
  //       title: '',
  //       content: '',
  //     })
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createArticleApi(inputs).then((res: any) => {
  //     getArticleApi().then((res: any) => {
  //       setServerData(res.data);
  //     });
  //   });
  // };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="제목을 입력하세요"
          required
        />
        <input
          type="text"
          name="content"
          placeholder="내용을 입력하세요"
          onChange={handleChange}
          required
        />
        <button type="submit">글등록</button>
      </form>
      글쓰기 페이지
    </div>
  );
}
