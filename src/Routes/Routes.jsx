import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import AllTests from "../Pages/AllTests/AllTests";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageTests from "../Pages/Dashboard/Admin/ManageTests";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddTests from "../Pages/Dashboard/Admin/AddTests";
import AllBanner from "../Pages/Dashboard/Admin/AllBanner";
import AddBanner from "../Pages/Dashboard/Admin/AddBanner";
import Reservation from "../Pages/Dashboard/Admin/Reservation";
import MyProfile from "../Pages/Dashboard/User/MyProfile";
import Appointments from "../Pages/Dashboard/User/Appointments";
import TestResults from "../Pages/Dashboard/User/TestResults";
import TestDetails from "../Pages/TestDetails/TestDetails";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-tests",
                element: <AllTests></AllTests>
            },
            {
                path: "/test-details/:id",
                element: <TestDetails></TestDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/tests/${params.id}`)
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // admin routes 
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
            {
                path: "all-users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "add-tests",
                element: <AddTests></AddTests>
            },
            {
                path: "manage-tests",
                element: <ManageTests></ManageTests>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "add-banner",
                element: <AddBanner></AddBanner>
            },
            {
                path: "all-banners",
                element: <AllBanner></AllBanner>
            },

            // user routes 

            {
                path: "my-profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "appointments",
                element: <Appointments></Appointments>
            },
            {
                path: "test-results",
                element: <TestResults></TestResults>
            },
        ]
    }
]);