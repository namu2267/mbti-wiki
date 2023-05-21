import { Pagination } from 'antd';
import { useState } from 'react';
import Title from './Title';
import { ServerDataType } from '../types/ServerDataType';

export default function TitleList({
  serverData,
}: {
  serverData: ServerDataType[];
}) {
  const pageSize = 5; // 한 페이지에 표시할 아이템 수
  const totalItems = serverData.length; // 전체 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  // 현재 페이지에 해당하는 아이템 인덱스 계산
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageItems = serverData.slice(startIndex, endIndex);

  return (
    <>
      <div>
        {currentPageItems.map((item: ServerDataType) => (
          <Title
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <Pagination
        pageSize={pageSize}
        total={totalItems}
        current={currentPage}
        onChange={setCurrentPage}
      />
    </>
  );
}
