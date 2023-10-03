import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import routes from './route/routes';
import { AppProvider } from './context/useContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AppProvider>
  </React.StrictMode>
);
