import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

export default function PostPage() {
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputs.title.trim().length === 0) {
      return;
    }
    if (inputs.content.trim().length === 0) {
      return;
    }

    db.collection('post')
      .add({ title: inputs.title, content: inputs.content })

      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        navigate('/');
      })

      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    // setInputs({
    //   title: '',
    //   content: '',
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
