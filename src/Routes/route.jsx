import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import MyBookings from "../Pages/MyBookings";
import LowyersAppoin from "../Pages/LowyersAppoin";
import LowyersDtails from "../Pages/LowyersDtails";
import MainLayout from "../MainLayout/MainLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>error</p>,
     children:[
      {
        path: "/",
        element: <Home></Home> ,
        loader:()=>fetch('../lowyers.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Lowyersdtails/:id",
        element: <LowyersDtails></LowyersDtails>,
        loader:()=>fetch('../lowyers.json')
      },
      {
        path:'/LowyersAppoin',
        element:<LowyersAppoin></LowyersAppoin>
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      }

     ],
    },
  ]);
  export default router