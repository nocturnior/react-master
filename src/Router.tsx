import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrComponent from './components/ErrorComponent';

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
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
