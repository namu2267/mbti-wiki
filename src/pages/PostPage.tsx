import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

export default function PostPage() {
  const navigate = useNavigate();
  const timestamp = new Date();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputs.title.trim().length === 0 ||
      inputs.content.trim().length === 0
    ) {
      return; // 입력값이 비어있을 경우 제출 방지
    }

    db.collection('post')
      .add({ title: inputs.title, content: inputs.content, timestamp })

      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        navigate('/');
      })

      .catch((error) => {
        console.error('Error adding document: ', error);
      });
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
