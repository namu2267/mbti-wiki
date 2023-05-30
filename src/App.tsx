import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import mediaQuery from './assets/mediaQuery.ts';
import NavBar from './components/NavBar/NavBar.tsx';

function App() {
  return (
    <RecoilRoot>
      <NavBar />
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
