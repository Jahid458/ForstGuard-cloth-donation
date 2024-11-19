import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";
import glogo from '../assets/google.webp'


const Login = () => {
  const {handleLogin,setUser,googleLogIn} = useContext(authContext);
  const navigate = useNavigate()
  const location = useLocation();


  const LogGoogle = ()=>{
    googleLogIn()
    navigate('/')
  }



  const handleSubmit=(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleLogin(email,password)
    .then(res=>{
      setUser(res.user)
      navigate(location?.state ? location.state : "/");
    })
    .catch(err => {
      console.log(err.message)
    })
   }
  return (
    <div>
        <div className="min-h-screen flex justify-center items-center rounded-2xl bg-base-200 p-3 mb-5" >
      <div className="card bg-base-100 lg:w-full max-w-lg shrink-0 rounded-none p-10 ">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>


        <form  onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {/* {error.login && <label className="label text-sm text-red-600">{error.login}</label>} */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
            <div className="divider">OR</div>
                <button onClick={LogGoogle} className="btn rounded-xl text-md font-bold">
                  <img src={glogo} alt="" className="w-7" />
                      Continue With Google
                </button>
           

          </div>
        </form>

        <p className="text-center font-semibold">
          Don&lsquo;t have an account ?{" "}
          <Link className="text-red-500" to="/register">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;