import React from "react";
import logo from "../assets/logo.png";
import loginlogo from '../assets/loginlogo.png'
import google from '../assets/google.png'
import Navbar from "./Navbar";
import { useState } from "react";
import authentication from "../services/AuthServices";
import { userCollection } from "../services/DbServices";
import { useAppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { signup_validators } from "../validators/fieldValidation";
import { useNavigate } from "react-router-dom";
function SignUp() {
  //global variable
 const {isloading,setIsLoading,isError,setIsError,error,setError,user,setUser}=useAppContext()
 const navigate=useNavigate()

 //local variable
  const [isSuccess,setIsSuccess]=useState(false)
  const [userDetails, setUserDetails] = useState({
    name:"",
    address:"",
    phone:"",
    email:"",
    password:""
  })
function handleRegister(){
      setIsLoading(true)
      let [isValidationError,validationError]=signup_validators(userDetails)
      if(isValidationError){
          setIsError(true)
          setIsLoading(false)
          setError(validationError)
          toast.error(validationError)
          
    return
   } else{
      authentication.signupWithEmail(userDetails.email,userDetails.password).then((resp)=>
      {
        try{
          if(resp.user.uid!=null){
            //call for  creating user profile
          userCollection.createUser(
          userDetails.name,userDetails.email,userDetails.phone,resp.user.uid,userDetails.address
            ).then((resp)=>{  
            setIsSuccess(true)
            toast.success("account created successfully") 
           setUserDetails({
            name:"",
            address:"",
            phone:"",
            email:"",
            password:""
          })
          navigate('/login')
            }).catch((e)=>{
            toast.error("invalid request")
            setIsError(true)
            setIsSuccess(false)
            setError("please enter valid details")
            })
           
          }
          else{
            toast.error("invalid request")
            setIsError(true)
            console.log("f1");
            setIsSuccess(false)
            setError("please enter valid details")
          }
          setIsLoading(false)
        }
        catch(e){
          toast.error("please enter valid details")
          console.log(resp);
          console.log("f2");
          setIsSuccess(false)
          setIsError(true)
          setError("please enter valid details")
          setIsLoading(false)
        }
      })
    }
     
  }
  return<div>
     {/* {isError==true?toast.error(error):isSuccess?toast.success("account created successfult"):null} */}
  <Navbar/>
 
  <div className="sm:w-3/12 bg-white rounded-md mx-auto sm:mt-[80px] sm:p-5 p-5 h-screen sm:h-full">
    <div className="logo mb-[100px] sm:mb-4 sm:block hidden">
      <img src={logo} alt="" />
    </div>
    <img src={loginlogo} alt="" className="w-20 mx-auto mt-[25px]" />
    <h2 className="text-center">Register</h2>
    <div className="form mt-5 space-y-3">
      <input type="text" placeholder="username" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
  setUserDetails({...userDetails,name:e.target.value})
      }} />
      <input type="text" placeholder="address" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
  setUserDetails({...userDetails,address:e.target.value})
      }} />
      <input type="text" placeholder="phone" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
  setUserDetails({...userDetails,phone:e.target.value})
      }}/>
      <input type="email" placeholder="email" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
  setUserDetails({...userDetails,email:e.target.value})
      }} />
      <input type="password" placeholder="password" className="w-full outline-none border border-blue-600 rounded-md px-3 py-2" onChange={(e)=>{
  setUserDetails({...userDetails,password:e.target.value})
      }} />
    </div>
    <div className="login-btn w-full link flex justify-center items-center px-3 py-2 bg-p text-white text-center rounded-md mt-4 mb-3" onClick={()=>{
      handleRegister()
    }}>{isloading?<Loader/>:"Register"}</div>
    {/* <p className="text-center text-[14px]">or use</p>
    <img src={google} alt=""  className="w-6 text-center mx-auto mt-2 link"/> */}
  </div>
  </div>;
}
export default SignUp;
