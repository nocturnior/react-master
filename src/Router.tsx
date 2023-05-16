import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

// array 형식으로
const router = createBrowserRouter([
  {
    // 전체 route들의 컨테이너
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
