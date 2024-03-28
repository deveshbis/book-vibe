import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import Book from "../pages/Book";
import PagesToRead from "../pages/PagesToRead";
import ReadBooksContent from "../component/ReadBooksContent";
import Wishlist from "../component/Wishlist";
import Ebook from "../pages/Ebook";
import KidsBook from "../pages/KidsBook";
import ErrorPage from "../component/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: "/listedBooks",
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooksContent></ReadBooksContent>,
                        

                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist></Wishlist>,

                    },
                ],
            },
            {
                path: "/book/:bookId",
                element: <Book></Book>,

            },
            {
                path: "/pagesToRead",
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: "/ebook",
                element: <Ebook></Ebook>,
            },
            {
                path: "/kids",
                element: <KidsBook></KidsBook>,
            },
        ]
    },

]);