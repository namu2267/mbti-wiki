import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import mediaQuery from './assets/mediaQuery.ts';

function App() {
  return (
    <RecoilRoot>
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
