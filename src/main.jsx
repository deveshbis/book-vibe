
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import MainLayouts from './Layout/MainLayouts';
import Home from './pages/Home';
import Book from './pages/Book';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch("https://deveshbis.github.io/json-hosting/books.json"),

      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/book/:bookId",
        element: <Book></Book>,
        // loader: ({params}) => fetch(`https://deveshbis.github.io/json-hosting/books.json/${params.bookId}`),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
