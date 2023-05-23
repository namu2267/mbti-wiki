import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { ServerDataType } from '../types/ServerData.type';

export default function Title({ id, title, content }: ServerDataType) {
  // const navigate = useNavigate();

  // const handleGotoDetail = () => {
  //   navigate(`/posts/${id}`);
  // };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'Enter') {
  //     handleGotoDetail();
  //   }
  // };

  return (
    <Link to={`/posts/${id}`}>
      <div>
        <p>title: {title}</p>
        <p>내용: {content}</p>
      </div>
      <Divider plain />
    </Link>
  );
}

// <div
//       onClick={handleGotoDetail}
//       onKeyDown={handleKeyDown}
//       role="button"
//       tabIndex={0}
//     ></div>
