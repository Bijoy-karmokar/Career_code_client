import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";

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
              path:'/jobDetails/:id',
              Component:JobDetails,
              loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
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