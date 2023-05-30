import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';

export default function NavBar() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            href: '',
            title: (
              <>
                <UserOutlined />
                <span>Application List (로그인하면 이름나올거임) </span>
              </>
            ),
          },
          {
            title: 'mbti정보를 만들어보세요.',
          },
        ]}
      />
      );
    </div>
  );
}
