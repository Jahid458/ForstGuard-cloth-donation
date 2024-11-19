import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";
import DonationCampaign from "../pages/DonationCampaign";

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
        element: <DonationCampaign></DonationCampaign>,
        loader: ()=>fetch('/Donation.json')
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
