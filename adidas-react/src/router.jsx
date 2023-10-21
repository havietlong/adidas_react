import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./containers/Homepage/Homepage";
import { NotFound } from "./containers/NotFound";
import { Products } from "./containers/Products/Products";
import { Product_Info } from "./containers/Product_Info";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Homepage/>
    },
    {
        path: '/*',
        element:<NotFound/>
    },
    {
        path: '/products',
        element:<Products/>
    },
    {
        path: '/product_info',
        element:<Product_Info/>
    }
])

export default router;