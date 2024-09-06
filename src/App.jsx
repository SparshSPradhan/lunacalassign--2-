import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import MacBookPro16160 from './pages/MacBookPro16160';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/MacBookPro16160', element: <MacBookPro16160 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}