import React from "react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { contactCollection } from "../services/DbServices";
function AddContact() {
  //global variable
  const {isLoading,setIsLoading,isError,setIsError,error,setError,user,refresh,setRefresh}=useAppContext()
  //local variables
  const [contactDetails, setContactDetails] = useState({
    name:"",
    phone:"",
    address:"",
    isClose:false,
    isSecret:false
  })
  function handleForm(){
      setIsLoading(true)
      if(!Number(contactDetails.phone) || contactDetails.phone.length<10){
        toast.error("invalid phone number")
        return
      }
      if(contactDetails.name==""|| contactDetails.phone=="" ||contactDetails.address==""){
        toast.error("all fields are mendatory")
        return
      }
      else{
        contactCollection.addContact(contactDetails.name, contactDetails.phone, contactDetails.address, contactDetails.isClose, contactDetails.isSecret,user.userId ).then((resp)=>{
          toast.success("contact added successfully")
          setRefresh(true)
          setContactDetails({
            name:"",
            phone:"",
            address:"",
            isClose:false,
            isSecret:false
          })
        }).catch((e)=>{
          toast.error("invalid details")
          console.log(e);
        })
      }
  }
  return (
    <div className=" main sm:w-[600px] bg-white p-5 absolute inset-0 ">
      <div className="add-new-contact-form p-3  mt-3 rounded-md flex justify-center flex-col items-center">
        <h2 className="text-3xl mb-3">Add Contact</h2>
        <div className="name">
          <label htmlFor="" className="text-[12px]">
            Name
          </label>
          <br />
          <input
          value={contactDetails.name}
            type="text"
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
         onChange={(e)=>{
          setContactDetails({...contactDetails,name:e.target.value})
         }} />
        </div>
        <div className="phone-number">
          <label htmlFor="" className="text-[12px]">
            Phone
          </label>
          <br />
          <input
            type="text"
            value={contactDetails.phone}
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
            onChange={(e)=>{
          setContactDetails({...contactDetails,phone:e.target.value})
         }}/>
        </div>
        <div className="address">
          <label htmlFor="" className="text-[12px]">
          Address
          </label>
          <br />
          <input
            type="text"
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"  value={contactDetails.address}
            onChange={(e)=>{
          setContactDetails({...contactDetails,address:e.target.value})
         }} />
        </div>
        <div className="secret-close flex text-[14px] w-full justify-center mt-3 space-x-5">
          <div className="secrete flex space-x-2">
            <input type="checkbox" onChange={(e)=>{
              setContactDetails({...contactDetails,isClose:e.target.checked})
            }} />
          
            <label htmlFor="">secret</label>
          </div>
          <div className="secrete flex space-x-2">
            <input type="checkbox" onChange={(e)=>{
              setContactDetails({...contactDetails,isClose:e.target.checked})
            }} />
            <label htmlFor="">close friend</label>
          </div>
        </div>
        <button className="bg-p text-white mt-4 px-3 py-1 hover:bg-blue-500 rounded-2xl" onClick={()=>{
          handleForm()
        }}>create</button>
        </div>
    </div>
  );
}

export default AddContact;
