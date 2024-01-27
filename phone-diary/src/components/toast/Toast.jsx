import React from "react";
import { ToastContainer, toast } from "react-toastify";


function Toast() {
    const showToastMessage = () => {
        console.log("hi");
        toast.error("Success Notification !", {
        //   position: toast.POSITION.TOP_RIGHT,
        });
      };

  return <div className="bg-green-500 px-4 py-3 w-36 mt-5 link" onClick={showToastMessage}>click </div>;
}

export default Toast;
