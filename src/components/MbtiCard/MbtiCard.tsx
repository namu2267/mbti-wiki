import React from 'react';
import { Card } from 'antd';
import { mbtiEach } from '../../util/MbtiEach';

export default function MbtiCard() {
  const { Meta } = Card;

  return (
    <div>
      엠비티아이 카드
      {mbtiEach.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="mbtiPhoto" src={item.src} />}
        >
          <Meta title={item.title} description="설명적을거임" />
        </Card>
      ))}
    </div>
  );
}

// 상황: 받아올 데이터들을 util폴더안에 넣고 따로 빼줌
// 문제발생: 불러온 이미지파일이 정상적으로 화면에 나오지 않음
// 네트워크를 통해 확인해보면 get은 됐는데, 304 Not Modified라고 뜸
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
// 1. 해본방법: 캐시데이터 삭제 -> 변화없음
// 2. key prop을 현재시간으로 설정 -> 렌더링시마다 컴포넌트를 강제로 업데이트하게하기 -> 안됨.
