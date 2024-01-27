import { createContext } from "react";
import { useState, useContext } from "react";
import React from "react";

const appContext = createContext();

export function AppContextProvider({ children }) {
  //app reducer functions
  const [showSideBar, setShowSideBar] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showContactProfile, setShowContactProfile] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [user,setUser]=useState(null)
  const [isLogin,setIsLogin]=useState(false)
  const [editProfile,setEditProfile]=useState({})

 
  return (
    <appContext.Provider
      value={{
        setShowSideBar,
        showSideBar,
        showMain,
        setShowMain,
        showAddContact,
        setShowAddContact,
        showContactProfile,
        setShowContactProfile,
        showUserProfile,
        setShowUserProfile,
        refresh,
        setRefresh,
        isloading,
        setIsLoading,
        isError,
        setIsError,
        error,
        setError,
        isLogin,
        setIsLogin,
        user,
        setUser,
        editProfile,
        setEditProfile
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export  function useAppContext() {
  return useContext(appContext);
}
