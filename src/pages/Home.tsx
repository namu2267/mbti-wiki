import React, { useEffect, useState } from 'react';
import Paginations from '../components/Paginations';
import PostPage from './PostPage';
import TitleList from '../components/TitleList';
import { db } from '../firebase';

export default function Home() {
  const [data, setData] = useState<Document[]>([]);

  useEffect(() => {
    db.collection('post')
      .get()
      .then((querySnapshot) => {
        const data: Document[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data() as Document);
        });
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <p>홈입니당.</p>
      {/* {serverData ? <TitleList /> : '데이터가 안들어왔습니다'} */}
    </div>
  );
}
