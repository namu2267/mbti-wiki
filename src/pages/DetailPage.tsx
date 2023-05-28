import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServerDataType } from '../types/ServerData.type';
import { db } from '../firebase';
// 🔫 질문2. 방법1
export default function DetailPage() {
  // const [detailServerData, setDetailServerData] =
  //   useState<ServerDataType | null>(null);

  const [detailServerData, setDetailServerData] = useState<ServerDataType>({
    id: '',
    title: '',
    content: '',
  });

  console.log('디테일페이지', detailServerData);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    db.collection('post')
      .doc(id)
      .get()
      .then((docSnapshot) => {
        const serverData = docSnapshot.data() as ServerDataType;
        setDetailServerData(serverData);
      });
  }, []);

  return (
    <div>
      디테일 페이지입니다.
      <h1> 디테일 페이지</h1>
      <div>
        <p>title: {detailServerData.title}</p>
        <p>content: {detailServerData.content}</p>
      </div>
    </div>
  );
}
