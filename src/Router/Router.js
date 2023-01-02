import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/pages/About/About";
import InsCoursesReviews from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InsCoursesReviews";
import InsReferral from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InsReferral";
import InstructorsCourses from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InstructorsCourses";
import InstructorsDashboardRight from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InstructorsDashboardRight";
import InstructorsReviews from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/InstructorsReviews";
import MyTuitions from "../components/pages/Dashboard/DasboardLayout/InstructorsDashboard/MyTuitions";
import DashboardLayout from "../components/pages/Dashboard/DashboardLayout";
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
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/instructors-dashboard',
                        element: <InstructorsDashboardRight></InstructorsDashboardRight>
                    },
                    {
                        path: '/instructors-dashboard/my-tuitions',
                        element: <MyTuitions></MyTuitions>
                    },
                    {
                        path: '/instructors-dashboard/instructors-reviews',
                        element: <InstructorsReviews></InstructorsReviews>
                    },
                    {
                        path: '/instructors-dashboard/my-courses',
                        element: <InstructorsCourses></InstructorsCourses>
                    },
                    {
                        path: '/instructors-dashboard/courses-reviews',
                        element: <InsCoursesReviews></InsCoursesReviews>
                    },
                    {
                        path: '/instructors-dashboard/referral',
                        element: <InsReferral></InsReferral>
                    },
                ]
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