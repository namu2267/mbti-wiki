import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import store from './redux/store.ts';
import mediaQuery from './assets/mediaQuery.ts';
import NavBar from './components/NavBar/NavBar.tsx';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Outlet />
    </Provider>
  );
}

export default App;
