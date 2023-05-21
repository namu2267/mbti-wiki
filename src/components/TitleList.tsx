import { Pagination } from 'antd';
import Title from './Title';
import { ServerDataType } from '../types/ServerDataType';

export default function TitleList({
  serverData,
}: {
  serverData: ServerDataType[];
}) {
  return (
    <>
      <div>
        {serverData.map((item: ServerDataType) => (
          <Title
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </>
    //  <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    //     merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
    //     quo modo.
    //   </p>

    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    //     merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
    //     quo modo.
    //   </p>
    //   <Divider plain>Text</Divider>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    //     merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
    //     quo modo.
    //   </p>
    //   <Divider plain>Text</Divider>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    //     merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
    //     quo modo.
    //   </p>
    //   <Divider plain>Text</Divider>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    //     merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
    //     quo modo.
    //   </p>
    // </div>
  );
}
