
import App from "@/App";
import { AddBook } from "@/pages/AddBook";
import Books from "@/pages/Books";
import BorrowForm from "@/pages/BorrowForm";
import BorrowSummary from "@/pages/BorrowSummary";
import EditBook from "@/pages/EditBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App></App>,
    children: [
        {
           index: true,
           element: <Books></Books> 
        },  {
            path: "/books",
           element: <Books></Books> 
        },
        {
            path: "/addBook",
            element: <AddBook></AddBook>
        },
        {
            path: "/editBook/:id", 
            element: <EditBook></EditBook>
        },
        {
            path: "/borrow/:bookId",
            element: <BorrowForm></BorrowForm>
        },
        {
            path: '/borrow-summary',
            element: <BorrowSummary></BorrowSummary>
        }
    ]
   }
]);

export default router