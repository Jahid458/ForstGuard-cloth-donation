
import { useContext } from 'react';
import { authContext } from './AuthProvider'



const ForgetPass = () => {

  const {resetPassword} = useContext(authContext);

  const handleResetPassword = e =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email")

    resetPassword(email)
    .then(() =>{
        window.location.href = "https://mail.google.com";
    })
    .catch(error =>{
        console.log(error)
    })
}

  return (
    <div className="w-[90%] md:w-[90%] lg:w-[100%] mx-auto">
    <div className=" flex justify-center items-center rounded-2xl bg-base-200 p-7 mb-5" >
  <div className="card bg-base-100 lg:w-full max-w-lg shrink-0 rounded-none p-10 ">
    <h2 className="text-2xl font-semibold text-center">
      Reset Your Password 
    </h2>


    <form onSubmit={handleResetPassword}   className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <button  className="btn bg-sky-500 text-white text-xl">Reset password</button>
    </form>

   
  </div>
</div>
</div>
  );
};

export default ForgetPass;