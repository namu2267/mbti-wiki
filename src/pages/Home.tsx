import React, { useEffect, useState } from 'react';
import PostPage from './PostPage';
import TitleList from '../components/TitleList';
import { db } from '../firebase';
import { ServerDataType } from '../types/ServerData.type';

export default function Home() {
  const [serverData, setServerData] = useState<ServerDataType[]>([]);

  useEffect(() => {
    db.collection('post')
      .orderBy('timestamp', 'desc')
      .get()
      .then((querySnapshot) => {
        console.log('재렌더링');
        const list: ServerDataType[] = [];
        querySnapshot.forEach((doc) => {
          const { title, content } = doc.data();
          const { id } = doc;
          const serverData: ServerDataType = {
            title,
            content,
            id,
          };
          // setServerData((prev) => [...prev, serverData]);

          list.push(serverData);
        });
        setServerData(list);
      });
  }, []);

  // 타입에러 발생.
  // 의도: doc안에 있는 id와 data를 모두 이용하고 싶다!
  // 궁금증: 발생한 타입에러 코드를 어떻게 해석해야 하는지? 어떻게 읽어야하는지가 알고싶다.
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
