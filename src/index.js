import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor: 'whiteSmoke',
  backgroundColor: 'hsl(218, 23%, 21%)',
};

const lightTheme = {
  textColor: 'hsl(218, 23%, 21%)',
  backgroundColor: 'whiteSmoke',
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
