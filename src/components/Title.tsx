import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import { ServerDataType } from '../types/ServerDataType';

export default function Title({ id, title, content }: ServerDataType) {
  const navigate = useNavigate();
  return (
    <div
    // onClick={() => navigate(`/posts/${id}`, { state: { title, content } })}
    >
      <div>
        <p>title: {title}</p>
        <p>내용: {content}</p>
      </div>
      <Divider plain />
    </div>
  );
}
