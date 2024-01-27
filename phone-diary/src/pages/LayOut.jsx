import React from "react";
import Main from "./Main";
import Menu from "../components/Menu";
import SideBar from "../components/SideBar";
import AddContact from "./AddContact";
import ContactProfile from "./ContactProfile";
import { useAppContext } from "../context/AppContext";
import UserProfile from "./UserProfile";

function LayOut() {
  const {
    setShowSideBar,
    showSideBar,
    showMain,
    setShowMain,
    showAddContact,
    setShowAddContact,
    showContactProfile,
    setShowContactProfile,
    showUserProfile, setShowUserProfile
  } = useAppContext();
  //global import
  return (
    <div className="sm:w-[600px] w-full h-screen bg-blue-400 sm:rounded-2xl sm:h-[450px] mx-auto sm:mt-[45px]  relative overflow-hidden">
      
      {showMain && <Main />} 
      {showAddContact && <AddContact />}
      {showContactProfile && <ContactProfile />}
      {showUserProfile && <UserProfile/>}
      <Menu />
      <SideBar />
    </div>
  );
}

export default LayOut;
