import React, { useEffect } from "react";
import { useState } from "react";
import { userCollection } from "../services/DbServices";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
function UserProfile() {

 
  const {user}=useAppContext()
  
  const [userDetails, setUserDetails] = useState({
    name:"",
    phone:"",
    address:"",
    id:""
  })

  useEffect(()=>{
    console.log("aksla");
    
    userCollection.getUserInfo(user.userId).then((resp)=>{
      setUserDetails({
        name:resp.docs[0].data().name,
        phone:resp.docs[0].data().phone,
        address:resp.docs[0].data().address,
        id:resp.docs[0].id
      })
      
    }).catch((e)=>{
      console.log(error);
      toast.error("error while fetching data!!")
    })
  },[])
  function updateUserProfile(){
      userCollection.updateUserInfo(userDetails.id,userDetails).then((resp)=>{
        console.log(resp);
        toast.success("profile updated")
      }).catch((e)=>{
        console.log(e);
        toast.error("error")
        
      })
  }


  return <div className=" main sm:w-[600px] bg-white  p-5 absolute inset-0"> 
    <div className="add-new-contact-form p-3  mt-3 rounded-md flex justify-center flex-col items-center">
        <h2 className="text-3xl mb-3 mt-5">My Profile</h2>
        <div className="name">
          <label htmlFor="" className="text-[12px]">
            Name
          </label>
          <br />
          <input
            type="text"
            value={userDetails.name}
            onChange={(e)=>{
              setUserDetails({...userDetails,name:e.target.value})
            }}
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
          />
        </div>
        <div className="phone-number">
          <label htmlFor="" className="text-[12px]">
            Phone
          </label>
          <br />
          <input
            type="text"
            value={userDetails.phone}
            onChange={(e)=>{
              setUserDetails({...userDetails,phone:e.target.value})
            }}
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
          />
        </div>
        <div className="address">
          <label htmlFor="" className="text-[12px]">
            Address
          </label>
          <br />
          <input
            type="text"
            value={userDetails.address}
            onChange={(e)=>{
              setUserDetails({...userDetails,address:e.target.value})
            }}
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
          />
        </div>
       
        <button className="bg-p text-white mt-4 px-3 py-1 hover:bg-blue-500 rounded-2xl" onClick={updateUserProfile}>update</button>
        </div>
    </div>
  
 
}
export default UserProfile;
