import { useContext } from "react";
import { authContext } from "./AuthProvider";
import glogo from '../assets/google.webp'
import { useNavigate } from "react-router-dom";




const Register = () => {


  const {handleResgister,setUser,googleLogIn,updateUserProfile} = useContext(authContext);
  const navigate = useNavigate()


  const LogGoogle = ()=>{
    googleLogIn()
    navigate('/')
  }

  

  const handleSubmit = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const image = e.target.photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      console.log(name,email,image,password)
      handleResgister(email,password)
      .then(res => {
        setUser(res.user)
        updateUserProfile({displayName:name, photoURL:photo})
        .then(()=>{
          navigate('/')
        })
        .catch(err =>{
          console.log(err)
        })
      })
  }

  return (
    <div>
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* {
            error.name && (
              <label className="label text-xs text-red-600">
                {error.name}
              </label>
            )
          } */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-neutral rounded-none">Register</button>
            <div className="divider">OR</div>
                <button onClick={LogGoogle} className="btn rounded-xl text-md font-bold">
                  <img src={glogo} alt="" className="w-7" />
                      Continue With Google
                </button>
          </div>
        </form>
    </div>
    </div>
    </div>
  );
};

export default Register;