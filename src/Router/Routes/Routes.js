import AddServices from "../../AddServices/AddServices";
import Main from "../../Layout/Main";
// import AddReview from "../../Pages/AddReview/AddReview";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch(`https://quick-eat-server.vercel.app/services`)

      },
      
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader:({params})=>fetch(`https://quick-eat-server.vercel.app/services/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/myreviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/addservices',
          element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        // {
        //   path: '/addreview/:id',
        //   element: <AddReview></AddReview>
        // },
        {
          path: '*', element: <ErrorPage></ErrorPage>

      }

      ]

    }
  ])
  export default router;