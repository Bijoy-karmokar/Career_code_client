import React from "react";
import { motion } from "motion/react"
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          animate={{y:[100,150,100]}}
          transition={{duration:5, repeat:Infinity}}
          src={team1}
          className="max-w-sm  rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600 shadow-2xl"
        />
          <motion.img
          animate={{x:[100,150,100]}}
          transition={{duration:5, repeat:Infinity,delay:3}}
          src={team2}
          className="max-w-sm  rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600 shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            The <motion.span animate={{color:['#F54927','#854539','#39854E','#06A130','#1106A1','#CF3A4B'
            ]}} transition={{duration:3,repeat:Infinity}}>Easiest Way</motion.span> <br /> to Get Your New Job!
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <fieldset className="fieldset bg-base-200 border-base-300 shadow-md rounded-box w-lg border p-4">
            <div className="join">
              <input
                type="text"
                className="input join-item"
                placeholder="Product name"
              />
              <button className="btn join-item btn-primary"><IoSearch></IoSearch> Search</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Banner;
