import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import MainLayouts from './Layout/MainLayouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
  {
    path: "/listedBooks",
    element: <ListedBooks></ListedBooks>,
  },
  {
    path: "/pagesToRead",
    element: <PagesToRead></PagesToRead>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
