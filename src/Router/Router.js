import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/pages/About/About";
import InstructorsDashboard from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InstructorsDashboard";
import AllInstructors from "../components/pages/Home/Instructors/AllInstructors";
import AllTuitions from "../components/pages/Home/Tuitions/AllTuitions";

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
                element: <AllInstructors></AllInstructors>
            },
            {
                path: '/find-tuitions',
                element: <AllTuitions></AllTuitions>
            },
            {
                path: '/instructors-dashboard',
                element: <InstructorsDashboard></InstructorsDashboard>
            },
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