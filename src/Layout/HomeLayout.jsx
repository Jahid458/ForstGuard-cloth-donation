import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";



const HomeLayout = () => {
  return <div className="">
        <Toaster></Toaster>
        <Navbar></Navbar>
       <div className="min-h-[calc(100vh-344px)] container mx-auto">
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
     </div>;
};

export default HomeLayout;
