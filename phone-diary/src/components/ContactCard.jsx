import React from "react";
import right_arrow from "../assets/right_arrow.png";
import { useAppContext } from "../context/AppContext";
function ContactCard({id,data}) {
  
   
   
    //global import/variable
  const   {
    setShowMain,
    setShowAddContact,
    setShowContactProfile,
    setEditProfile
  } =useAppContext()
  return (
    <div className="w-full p-2 flex mt-2">
      <div className="left w-[50px] h-[50px] rounded-full bg-orange-300 flex justify-center items-center text-[30px]">
        {data.name[0]}
      </div>
      <div className="mid w-[80%] px-4">
        <div className="name font-bold text-c1 hover:text-blue-500 link">{data.name}
        </div>
        <div className="phone text-[14px]">{data.phone}</div>
      </div>
      <div className="right w-[40px] h-[40px]  bg-f flex justify-center items-center rounded-full link" onClick={()=>{
      setShowMain(false)
      setShowContactProfile(true)
      setShowAddContact(false)
      setEditProfile({
        id:id,
        data:data
      })
      }
    }>
        <img src={right_arrow} alt="" className="w-4" />
      </div>
    </div>
  );
}

export default ContactCard;
