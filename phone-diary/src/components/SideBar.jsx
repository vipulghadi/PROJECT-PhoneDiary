import React from "react";
import close from "../assets/close.png";
import userImage from "../assets/user.png";
import { useAppContext } from "../context/AppContext";
import logoutImg from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SideBar() {
  //global import
  const navigate=useNavigate()

  const { showSideBar, setShowSideBar, user,setUser } = useAppContext();
  function handleSidebar() {
    setShowSideBar(false);
  }

  function logoutFunction() {
    setUser(null);
    setShowSideBar(false);
    localStorage.setItem("user", null);
    navigate("/")
    toast.success("logout successfully..");
  }

  return (
    <div
      className={`w-full h-full absolute inset-0 ${
        showSideBar ? null : "translate-x-[-500px]"
      } transition-all duration-500`}
    >
      <div
        className={`sidebar sm:w-1/2 w-10/12 h-full bg-white p-5   
       `}
      >
        <div className="close">
          <img
            src={close}
            alt=""
            className="w-6 h-6 ml-auto link hover:rotate-45 transition-all"
            onClick={() => {
              handleSidebar();
            }}
          />
        </div>
        <div className="user-avtar w-full p-2 mt-3 flex space-x-3">
          <img src={userImage} alt="" className="w-8" />
          <div className="info">
            <p>{user.email}</p>
          </div>
        </div>
        
        <img
          src={logoutImg}
          
          className="w-8 bg-red-600 absolute rounded-full p-1 bottom-[40px] sm:bottom-[20px] sm:left-[22%] left-[35%] link"
            onClick={()=>{
              logoutFunction()
              }}
        />
      </div>
    </div>
  );
}

export default SideBar;
