import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import PrivateRoute from './../Route/PrivateRoute';
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

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
               path:'/jobApply/:id',
               element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
               path:"/myApplication",
               element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
               path:'/addJob',
               element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
              path:"/myPostedJobs",
              element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
              path:"/applications/:job_id",
              element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
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