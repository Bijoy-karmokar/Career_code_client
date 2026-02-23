import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOut} = useAuth();
  // console.log(user);
  const handleLogOut =()=>{
       logOut()
       .then(()=>{
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Your logOut has been successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
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
  
    const links=<>
        <li><NavLink className={({isActive})=>isActive? 'text-lg text-blue-600' :"text-lg"} to={'/'}>Home</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <p className="flex items-center justify-center gap-2 text-2xl lg:text-4xl font-bold"><BsBoxFill style={{color:'blue'}}></BsBoxFill> Job Box</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
            links
         }
        </ul>
      </div>
      <div className="navbar-end gap-3">
       {
        user ? <button onClick={handleLogOut} className="btn btn-primary btn-outline">LogOut</button> : <>
        <Link to='/login' className="btn btn-primary btn-outline">LogIn</Link>
        <Link to='/register' className="btn btn-primary btn-outline">Register</Link>
        </>
       }
      </div>
    </div>
  );
};

export default Navbar;
