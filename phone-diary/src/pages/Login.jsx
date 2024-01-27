import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginlogo from '../assets/loginlogo.png'
import google from '../assets/google.png'
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import authentication from "../services/AuthServices";
import { useAppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
function Login() {
  //global variable
  const navigate=useNavigate()
  const {isloading,setIsLoading,isError,setIsError,error,setError,user,setUser}=useAppContext()
  //local vairaible
  const [userDetails,setUserDetails]=useState({
    email:"",
    password:""
  })
  function handleForm(){
    setIsLoading(true)
    if (userDetails.email=="" || userDetails.password==""){
      setIsLoading(false)
      toast.error("invalid credentials")
       return 
    }
    else{
      authentication.loginWithEmail(userDetails.email,userDetails.password).then((resp)=>{
         console.log(resp);
        try{
        setUser({
          email:userDetails.email,
         
          userId:resp.user.uid
        })
        navigate("/home")
        toast.success("login succesfully!")
       }
       catch(e){
         toast.error("error!!")
       }
       setIsLoading(false)

      }).catch((e)=>{
       
        setIsLoading(false)
        toast.error("error")
        
      })
    }
  }
  return (<div>
    <Navbar/>
    <div className="sm:w-3/12 bg-white rounded-md mx-auto sm:mt-[80px] sm:p-5 p-5 h-screen sm:h-auto">
      <div className="logo mb-[100px] sm:mb-4">
        <img src={logo} alt="" />
      </div>
      <img src={loginlogo} alt="" className="w-20 mx-auto mt-[25px]" />
      <h2 className="text-center">LogIn</h2>
      <div className="form mt-5 space-y-3">
        <input type="text" placeholder="email" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
          setUserDetails({...userDetails,email:e.target.value})
        }} />
        <input type="password" placeholder="password" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
          setUserDetails({...userDetails,password:e.target.value})
        }} />
      </div>
      <div className="login-btn w-full px-3 py-2 bg-p flex justify-center items-center text-white text-center rounded-md mt-4 mb-3" onClick={()=>{
        handleForm()
      }}>{isloading?<Loader/>:"Login"}</div>
      <p className="text-center text-[14px] link txt-p">forgot password</p>
      {/* 
      <img src={google} alt=""  className="w-6 text-center mx-auto mt-2 link"/>
       */}
    </div>
  
    </div>
  );
}

export default Login;
