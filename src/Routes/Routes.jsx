import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import AllTests from "../Pages/AllTests/AllTests";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
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
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/user-profile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
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
]);