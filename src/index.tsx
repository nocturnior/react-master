import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

// import App from './Root';
import router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
