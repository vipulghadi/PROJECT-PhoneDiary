import React from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { contactCollection } from "../services/DbServices";
import { toast } from "react-toastify";
function ContactProfile() {
  //global variable
  //here editprofile stores the data of edutable person
  //it stores id and data of contact
  const { editProfile } = useAppContext();
  const {
    setShowMain,
    setShowContactProfile,
  } = useAppContext();
//local variables
  const [profileDetails, setprofileDetails] = useState({
    name: editProfile.data.name,
    phone: editProfile.data.phone,
    address: editProfile.data.address,
    isClose: editProfile.data.isClose,
    isSecret: editProfile.data.isSecret,
  });
  //function to update current contact profile
  
  function upateContactProfile() {
    console.log(Number(profileDetails.phone));
    if(profileDetails.name==""|| profileDetails.phone==""|| profileDetails.address==""){
      toast.error("all fields are required")
      return
    }
    if(!Number(profileDetails.phone) || profileDetails.phone.length<10){
      toast.error("please enter valid phone")
      return
    }
    contactCollection
      .updateContact(editProfile.id, profileDetails)
      .then((resp) => {
        toast.success("contact updated successfull");
      })
      .catch((e) => {
        toast.error(e);
      });
  }
  //function to delete the contact
  function deleteContactProfile(){
    contactCollection.deleteContact(editProfile.id).then((resp)=>{
      toast.success("contact deleted")
      setShowContactProfile(false)
      setShowMain(true)
      
    }).catch((e)=>{
      console.log(e);
      toast.error(e)
    })
  }

  return (
    <div className=" main sm:w-[600px] bg-white p-5 absolute inset-0 ">
      <div className="add-new-contact-form p-3  mt-3 rounded-md flex justify-center flex-col items-center">
        <h2 className="text-3xl mb-3"></h2>
        <div className="name">
          <label htmlFor="" className="text-[12px]">
            Name
          </label>
          <br />
          <input
            type="text"
            value={profileDetails.name}
            onChange={(e) => {
              setprofileDetails({ ...profileDetails, name: e.target.value });
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
            value={profileDetails.phone}
            onChange={(e) => {
              setprofileDetails({ ...profileDetails, phone: e.target.value });
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
            value={profileDetails.address}
            onChange={(e) => {
              setprofileDetails({ ...profileDetails, address: e.target.value });
            }}
            className="p-1 outline-none  border-blue-400 border-2 rounded-md hover:border-blue-500"
          />
        </div>
        <div className="secret-close flex text-[14px] w-full justify-center mt-3 space-x-5">
          <div className="secrete flex space-x-2">
            <input
              type="checkbox"
              defaultChecked={profileDetails.isSecret}
              onChange={(e) => {
                setprofileDetails({
                  ...profileDetails,
                  isSecret: e.target.checked,
                });
              }}
            />

            <label htmlFor="">secret</label>
          </div>
          <div className="secret flex space-x-2">
            <input
              type="checkbox"
              defaultChecked={profileDetails.isClose}
              onChange={(e) => {
                setprofileDetails({
                  ...profileDetails,
                  isClose: e.target.checked,
                });
              }}
            />

            <label htmlFor="">close friend</label>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-red-600 text-white mt-4 px-3 py-1 hover:bg-blue-500 rounded-2xl"
            onClick={() => {
              upateContactProfile();
            }}
          >
            Update
          </button>
          <button className="bg-p text-white mt-4 px-3 py-1 hover:bg-blue-500 rounded-2xl" onClick={deleteContactProfile}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactProfile;
