import React from 'react';
import { Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { mbtiEach } from '../../fixtures/MbtiEach';
import './MbtiCard.scss';

export default function MbtiCard() {
  const navigate = useNavigate();
  const { Meta } = Card;
  const handleGotoDetail = (id: number) => {
    navigate(`/mbti/${id}`);
  };
  return (
    <div className="mbtiCardContainer">
      <div className="mbtiCard">
        엠비티아이 카드
        <div className="mbtiCardFlex">
          {mbtiEach.map((item) => (
            <Card
              key={item.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="mbtiPhoto" src={item.src} />}
              onClick={() => handleGotoDetail(item.id)}
            >
              <Meta title={item.title} description="설명적을거임" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
