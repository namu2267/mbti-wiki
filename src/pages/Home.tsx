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
