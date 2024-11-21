import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import HomeLayout from "../Layout/HomeLayout";
import DonationCampaign from "../pages/DonationCampaign";
import DonationDetails from "../pages/DonationDetails";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import ForgetPass from "../components/ForgetPass";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donationcampaign",
        element: <DonationCampaign></DonationCampaign>,
        loader: () => fetch("/Donation.json"),
      },
      {
        path: "/help",
        element: <h1>How To Help</h1>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: '/passreset',
        element: <ForgetPass></ForgetPass>
      },
      {
        path: "/donationdetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/Donation.json");
          const donationdata = await res.json();
          const singleDonation = donationdata.find((d) => d.id == params.id);
          console.log(singleDonation);
          return singleDonation;
        },
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },


]);
export default router;
