import React, { useEffect, useState } from 'react';
import PostPage from './PostPage';
import TitleList from '../components/TitleList';
import { db } from '../firebase';
import { ServerDataType } from '../types/ServerData.type';

export default function Home() {
  const [serverData, setServerData] = useState<ServerDataType[]>([]);

  // useEffect(() => {
  //   db.collection('post')
  //     .get()
  //     .then((querySnapshot) => {
  //       const data: ServerDataType[] = [];
  //       querySnapshot.forEach((doc) => {
  //         data.push(doc.data() as ServerDataType);
  //       });
  //       setServerData(data);
  //     });
  // }, []);

  useEffect(() => {
    db.collection('post')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { title, content } = doc.data();
          const { id } = doc;
          const serverData: ServerDataType = {
            title,
            content,
            id,
          };
          setServerData((prev) => [...prev, serverData]);
        });
      });
  }, []);

  // 타입에러 발생.
  // 의도: doc안에 있는 id와 data를 모두 이용하고 싶다!
  // 궁금증: 발생한 에러 코드를 어떻게 해석해야 하는지?
  // useEffect(() => {
  //   db.collection('post')
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         const { data, id } = doc;
  //         setServerData((prev) => [...prev, { data, id }]);
  //       });
  //     });
  // }, []);

  return (
    <div>
      <p>홈입니당.</p>
      {serverData ? (
        <TitleList serverData={serverData} />
      ) : (
        '데이터가 안들어왔습니다'
      )}
    </div>
  );
}

// 질문1. 위의 타입에러 코드 해석.
// 질문2. 디테일페이지의 id를 위와같은 식으로 불러와도 보안상 괜찮은지? 보통 이런식으로도 만드는지?
// 질문3. console창을 통해서 보면 처음에 빈배열이 하나 들어온다. 이유는?
