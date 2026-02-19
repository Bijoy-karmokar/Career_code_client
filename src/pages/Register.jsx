import Lottie from "lottie-react";
import React from "react";
import RegisterData from '../assets/Lottie/RegisterLottie.json'

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
        <div className="text-center flex-1 lg:text-left">
          <Lottie style={{width:'400px'}} animationData={RegisterData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-2xl flex-1 shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Enter your name" />
              <label className="label">PhotoURL</label>
              <input type="file" className="input" placeholder="Enter your photoURL" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Enter your Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
