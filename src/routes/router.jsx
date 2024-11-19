import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";
import DonationCampaign from "../pages/DonationCampaign";
import DonationDetails from "../pages/DonationDetails";
import Login from "../components/Login";
import Register from "../components/Register";

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
      {
        path: "/donationdetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader:async({params})=>{
            const res = await fetch('/Donation.json')
            const donationdata =await res.json();
            const singleDonation = donationdata.find(d=>d.id == params.id)
            console.log(singleDonation)
            return singleDonation
        }
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },

  
  
]);
export default router;
