import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/donationcampaign",
        element: <h1>Donation Campaign</h1>,
      },
      {
        path: "/help",
        element: <h1>How To Help</h1>,
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },

    ]

    
  },
  
]);
export default router;
