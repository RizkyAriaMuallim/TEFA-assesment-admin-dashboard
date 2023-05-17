import { createBrowserRouter } from "react-router-dom";
import Product from './routes/Product'
import ErrorPage from "./routes/ErrorPage";
import User from "./routes/Users";
import Root from "./routes/root";

const Router = createBrowserRouter ([
    {
        path: "/",
        // page root belum diganti :v
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/products",
        // page users
        element: <Product/>,
    },
    {
        path: "/users",
        // page users
        element: <User/>
    }
]);

export default Router;