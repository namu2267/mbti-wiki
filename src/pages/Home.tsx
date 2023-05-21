import React, { useEffect, useState } from 'react';
import PostPage from './PostPage';
import TitleList from '../components/TitleList';
import { db } from '../firebase';
import { ServerDataType } from '../types/ServerDataType';

export default function Home() {
  const [serverData, setServerData] = useState<ServerDataType[]>([]);

  useEffect(() => {
    db.collection('post')
      .get()
      .then((querySnapshot) => {
        const data: ServerDataType[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data() as ServerDataType);
        });
        console.log(data);
        setServerData(data);
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
