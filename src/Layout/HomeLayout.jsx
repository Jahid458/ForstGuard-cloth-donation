import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const HomeLayout = () => {
  return <div className="">
        <Navbar></Navbar>
       <div className="min-h-[calc(100vh-344px)] container mx-auto">
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
     </div>;
};

export default HomeLayout;
