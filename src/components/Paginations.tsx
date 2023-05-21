import React from 'react';
import { Pagination } from 'antd';

export default function Paginations() {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />;
    </div>
  );
}
