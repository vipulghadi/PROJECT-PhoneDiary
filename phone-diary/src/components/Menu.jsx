import React from "react";
import profile_icon from '../assets/profile_icon.png'
import add from '../assets/add.png'
import logout from '../assets/logout.png'
import ihome from '../assets/ihome.png'
import ihamberg from '../assets/ihamberg.png'
import { useAppContext } from "../context/AppContext";
function Menu() {
    //global import/variable
  const   {
    setShowSideBar,
    showSideBar,
    showMain,
    setShowMain,
    showAddContact,
    setShowAddContact,
    showContactProfile,
    setShowContactProfile,
    showUserProfile, setShowUserProfile
  } =useAppContext()

  return <div className="bg-p px-3 py-2 rounded-3xl absolute  flex space-x-4 shadow-md  bottom-5 sm:left-[35%] left-[24%]"> 
   <img src={ihome} alt=""  className="w-8 link" onClick={()=>{
     setShowMain(true)
     setShowContactProfile(false)
     setShowAddContact(false)
     setShowUserProfile(false)
  }}/>
  <img src={ihamberg} alt=""  className="w-8 link" onClick={()=>{
    setShowSideBar(true)
  }}/>
  <img src={add} alt=""  className="w-8 link" onClick={()=>{
    setShowMain(false)
    setShowContactProfile(false)
    setShowAddContact(true)
    setShowUserProfile(false)
  }}/>
  <img src={profile_icon} alt=""  className="w-8 link" onClick={()=>{
    setShowUserProfile(true)
    setShowMain(false)
    setShowContactProfile(false)
    setShowAddContact(false)

  }}/>
  </div>;
}

export default Menu;
