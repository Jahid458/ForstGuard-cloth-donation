import "animate.css";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/clothes-donation.png";
import usericon from "../assets/user.png";
import { authContext } from "./AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const logoutFunc = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-3 w-36 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
              }
              to="/donationcampaign"
            >
              Donation
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " btn bg-sky-500 text-white" : "btn "}`
              }
              to="/help"
            >
              How To Help
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img src={logo} className="w-10 lg:w-20 ml-0" alt="" />{" "}
        <span className="lg:text-2xl font-bold text-sky-500 animate__animated animate__rubberBand">
          FrostGuard
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
            }
            to="/donationcampaign"
          >
            Donation
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " btn bg-sky-500 text-white" : "btn "}`
            }
            to="/help"
          >
            How To Help
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " btn bg-sky-500 text-white" : "btn"}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {/* {
          user && user?.photoURL  && <div className="flex">
          <img
            src={user?.photoURL && user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-[50%] border-4 border-sky-500"
          />
        </div>
        } */}
        {user?.email ? (
          <div className="flex">
            <img
              src={user?.photoURL && user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-[50%] border-4 border-sky-500"
            />
          </div>
        ) : (
          <img src={usericon} alt="" className="w-8 lg:w-10" />
        )}
        {user ? (
          <button onClick={logoutFunc} className="btn lg:w-20  w-14">
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <a className="btn lg:w-20 w-14">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
