import React from "react";
import dashboard from "../assets/dashboard.png";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Navbar() {
  //global import
  const {user,setUser}=useAppContext()
  //local variable
  function logoutFunction(){
      setUser(null)
      localStorage.setItem("user",null)
      toast.success("logout successfully..")

  }
  return  <div className="navbar h-16 w-full  flex justify-between items-center px-5 fixed bg-white  top-0">
  <div className="left-nav text-[20px] font-bold space-x-1">
    <span>Phone</span>
    <span className="px-1 py-2 bg-p rounded-md text-white link">
     <Link to="/">  Diary</Link>
    </span>
  </div>
  <div className="right-nav flex space-x-5">
    {user!=null && <div className="flex space-x-2"> <Link  to="/home"> <img src={dashboard} alt=""  className="w-5 mr-3 link"/></Link>
       <Link className='sm:block hidden' to="/home">Dashboard</Link></div>}
       {user!=null &&  <p className="txt-p link" onClick={()=>{logoutFunction()}}>  Logout</p>}
       {user==null &&  <p className="txt-p link">  <Link to="/signup"> SignUp</Link></p>}
       {user==null &&  <p className="link">  <Link to="/login">Login</Link></p>}
  
  </div>
  
</div>;
}

export default Navbar;
