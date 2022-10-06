import "./index.css"
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
]);


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);