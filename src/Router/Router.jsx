import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout ,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path: 'jobs/:id',
          Component:JobDetails,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
          path:'myApplications',
          element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
        },
        {
          path:'addJob',
          element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
        },
        {
          path: 'register',
          Component:Register,
        },
        {
          path:'signIn',
          Component: SignIn
        }
    ]
  },
]);

export default router;