import Lottie from "lottie-react";
import React from "react";
import LoginData from '../assets/Lottie/LoginLottie.json'
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const {signInUser} = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
 
  
  const handleLogin = (e)=>{
     e.preventDefault();
     const form = e.target;
     const formData = new FormData(form);
     const {email,password} = Object.fromEntries(formData.entries());
    //  console.log(email,password);
     signInUser(email,password)
     .then(res=>{
       const user = res.user;
       if(user && user.email){
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Your login has been successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
       }
       navigate('/');
     })
     .catch(error=>{
      if(error){
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
     })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
           <Lottie style={{width:'400px'}} animationData={LoginData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
