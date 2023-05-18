import React from 'react';
import { Pagination } from 'antd';

export default function Home() {
  return (
    <div>
      <p>홈입니당.</p>
      <Pagination defaultCurrent={1} total={50} />;
    </div>
  );
}
