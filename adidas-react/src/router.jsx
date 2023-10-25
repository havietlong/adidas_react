import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./containers/Homepage/Homepage";
import { NotFound } from "./containers/NotFound";
import { Products } from "./containers/Products/Products";
import { Product_Info } from "./containers/Product_info/Product_Info";
import { Cart } from "./containers/Cart/Cart";
import CheckOut from "./containers/CheckOut/CheckOut";
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
        path: '/product_info/:id',
        element:<Product_Info/>
    },
    {
        path: '/cart',
        element:<Cart/>
    },
    {
        path: '/checkOut',
        element:<CheckOut/>
    },
    {
        path: '/products/:type',
        element:<Products/>
    },
    {
        path: '/products/:type/:category',
        element:<Products/>
    },
    {
        path: '/products/sneakers',
        element:<Products/>
    },
    
    
])

export default router;