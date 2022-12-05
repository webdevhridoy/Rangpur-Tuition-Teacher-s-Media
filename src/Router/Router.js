import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/pages/Home/Home");
const { default: Main } = require("../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
]);