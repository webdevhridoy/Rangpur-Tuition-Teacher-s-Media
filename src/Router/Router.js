import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/pages/About/About";
import InstructorSinglePage from "../components/pages/Home/Instructors/InstructorSinglePage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/pages/Home/Home");
const { default: Main } = require("../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/find-tutors',
                element: <InstructorSinglePage></InstructorSinglePage>
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