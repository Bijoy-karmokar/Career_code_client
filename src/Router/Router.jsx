import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:"register",
                Component:Register
            }
        ]
    }
])
export default router;