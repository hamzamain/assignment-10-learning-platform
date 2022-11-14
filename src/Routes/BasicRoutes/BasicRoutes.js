import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryHome from "../../Pages/Course/CategoryPages/CategoryHome/CategoryHome";
import CheckOut from "../../Pages/Course/CategoryPages/CheckOut/CheckOut";
import ConfirmPage from "../../Pages/Course/CategoryPages/ConfirmPage/ConfirmPage";
import CourseDetails from "../../Pages/Course/CategoryPages/CourseDetails/CourseDetails";
import Course from "../../Pages/Course/Course/Course";
import CourseHome from "../../Pages/Course/CourseHome/CourseHome";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import Settings from "../../Pages/Settings/Settings";
import Error404 from "../../Pages/Shared/NotFound/Error404";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Success from "../../Pages/Success/Success";
import LoginBreak from "../PrivateRoutes/LoginBreak";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
      {
        path: "/course",
        loader: () =>
          fetch(
            "https://assignment-10-learn-programming-server.vercel.app/categories"
          ),
        element: <Course></Course>,
        children: [
          {
            path: "/course",
            loader: () =>
              fetch(
                "https://assignment-10-learn-programming-server.vercel.app/categories"
              ),
            element: <CourseHome />,
          },
          {
            path: "/course/category/:id",
            loader: ({ params }) =>
              fetch(
                `https://assignment-10-learn-programming-server.vercel.app/category/${params.id}`
              ),
            element: <CategoryHome></CategoryHome>,
          },
          {
            path: "/course/:id",
            loader: ({ params }) =>
              fetch(
                `https://assignment-10-learn-programming-server.vercel.app/course/${params.id}`
              ),
            element: <CourseDetails></CourseDetails>,
          },
          {
            path: "/course/checkout",
            element: (
              <LoginBreak>
                <CheckOut></CheckOut>
              </LoginBreak>
            ),
          },
          {
            path: "/course/confirm",
            element: (
              <LoginBreak>
                <ConfirmPage></ConfirmPage>
              </LoginBreak>
            ),
          },
          {
            path: "*",
            element: <Error404></Error404>,
          },
        ],
      },
      {
        path: "/faq",
        loader: () =>
          fetch(
            "https://assignment-10-learn-programming-server.vercel.app/questions"
          ),
        element: <Faq></Faq>,
      },
      {
        path: "/success",
        loader: () => fetch("https://randomuser.me/api/?results=50"),
        element: <Success></Success>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
