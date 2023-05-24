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
      {detailServerData && (
        <div>
          <p>title: {detailServerData.title}</p>
          <p>content: {detailServerData.content}</p>
        </div>
      )}
    </div>
  );
}

// 궁금
// 1. server의 데이터를 가져오는방식
// 현재 내가 사용한 방법은 이 페이지에서도 useEffect를 통해서 서버에서 또 get을한다.
// 이미 home에서 사용중이지만 그걸 전달받는 형식은 아니다
// 둘중에 어떤 방식이 더 좋은 방식인지?
// 현재 이 페이지는 하나의 값만을 받아온다. 그래서 해당은 안되지만 궁금. 같은 데이터라면 어떤 식의 방식이 더 좋은것인지?

// 2. useState<ServerDataType | null>(null);
// 유니온타입을 통해서 null타입도 들어오도록 지정함.
// 컴포넌트가 처음 렌더링될때 데이터를 받지 못한 상태를 위해서 넣어줌.
// 궁금한점? 초기값을 저렇게 지정해도 동작은 잘함. 어떤게 더 좋은 방식인지?

// 3. const { id } = useParams<{ id: string }>();
// useParams의 타입지정을 제네릭으로 하는이유?
// '타입안정성을 위해 권장되는 방법, 반환하는 값의 타입이 동적 매개변수에 따라 달라지는 것을 명시적으로 표시한다'의 의미가 이해가 안됨.
// string타입이라고 그냥 지정해주면되는거 아님?
