import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./containers/Homepage/Homepage";
import { NotFound } from "./containers/NotFound";
import { Products } from "./containers/Products/Products";
import { Product_Info } from "./containers/Product_info/Product_Info";
import { Cart } from "./containers/Cart/Cart";
import CheckOut from "./containers/CheckOut/CheckOut";
import LoginPage from "./containers/Login/LoginPage";
import LogOffProcess from "./containers/LogOff/LogOffProcess";
import { UserPage } from "./containers/User/UserPage";
import { UserPage_detail } from "./containers/User/UserPage_detail";
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
        path: '/login',
        element:<LoginPage/>
    },
    {
        path: '/logoff',
        element:<LogOffProcess/>
    },
    {
        path: '/user',
        element:<UserPage/>
    },
    {
        path: '/order_detail/:id',
        element:<UserPage_detail/>
    }


])

export default router;