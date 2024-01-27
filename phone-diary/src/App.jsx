import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { AppContextProvider,useAppContext} from "./context/AppContext";
import LayOut from "./pages/LayOut";
import { BrowserRouter,Route,Routes,  } from 'react-router-dom'
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import IntroPage from "./pages/IntroPage";

function App() {
  //global import 
  const {user,setUser}=useAppContext()



  //function to run when user logged in , we have to store its information
  useEffect(()=>{
    if(user!=null){
      localStorage.setItem("user",JSON.stringify(user))
    }
  },[user])

  // get back user credential from local storage
  useEffect(()=>{
    
    if(JSON.parse(localStorage.getItem("user"))==undefined){
      localStorage.setItem("user",JSON.stringify(null))
      setUser(null)
    }
    else{
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  },[])
  return <>
  
  <BrowserRouter>
  
  <Routes >
       <Route path="/" element={<IntroPage/>}/>
       {user!=null && <Route path="/home" element={<LayOut/>}/>}
       {user==null && <Route path="/login" element={<Login/>}/>}
       {user==null && <Route path="/signup" element={<SignUp/>}/>}
       <Route path="*" element={<IntroPage/>}/>
       
  </Routes>
  
  
  
  
  
  
  
  
  </BrowserRouter>

  <ToastContainer 
  position="top-right"
  autoClose={1500}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  transition: Bounce/>

  </>;
}

export default App;
