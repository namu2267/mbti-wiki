import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:postId',
        element: <DetailPage />,
      },
    ],
  },
]);

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
