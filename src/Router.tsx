import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Freeboard';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';
import PostPage from './pages/PostPage';
import MbtiPage from './pages/MbtiPage';
import MbtiDetailPage from './pages/MbtiDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/free',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostPage />,
      },
      {
        path: '/posts/:id',
        element: <DetailPage />,
      },
      {
        path: '/',
        element: <MbtiPage />,
      },
      {
        path: '/mbti/:id',
        element: <MbtiDetailPage />,
      },
    ],
  },
]);

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
