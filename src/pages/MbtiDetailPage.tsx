import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { mbtiEach } from '../fixtures/MbtiEach';

export default function MbtiDetailPage() {
  const { id } = useParams<{ id: string }>();

  // 해당 ID에 해당하는 데이터 찾기
  const mbtiFixData = mbtiEach.find((item) => item.id === Number(id));

  return (
    <div>
      <div>엠비티아이 디테일페이지</div>
      <div>ID: {id}</div>
      <div>{mbtiFixData.title}</div>
      <img alt="mbtiPhoto" src={mbtiFixData.src} />
    </div>
  );
}
