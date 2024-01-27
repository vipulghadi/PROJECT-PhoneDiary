import React from "react";
import intro_image from "../assets/intro_image.jpg";
import dashboard from "../assets/dashboard.png";
import cpu from "../assets/cpu.png";
import cloud from '../assets/cloud-server.png'
import lock from '../assets/padlock.png'
import user from '../assets/user.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import { Link } from "react-router-dom";
import vipul from '../assets/vipul.jpg'
import Navbar from "./Navbar";
function IntroPage() {
  return (
    <div className="w-screen h-full bg-white">
       <Navbar/>
      <hr />
      <div className="hero flex w-full p-5 flex-wrap mt-[80px] sm:mt-5">
        <div className="left  w-full sm:w-1/2 p-5 flex justify-center items-center flex-col">
          <p className=" text-5xl sm:text-7xl font-semibold">
            Welcome to{" "}
            <span className="txt-p link hover:text-blue-500">PhoneDiary</span>
          </p>
          <div className="main-heading  text-xl sm:text-2xl mt-2">
            {" "}
            your ultimate digital companion for contact management!{" "}
          </div>
        </div>
        <div className="right  w-full sm:w-1/2 flex justify-center items-center">
          <img src={intro_image} alt="" className="w-full sm:w-8/12" />
        </div>
      </div>
      <div className="features-section flex flex-col justify-center items-center p-3 ">
        <h2 className="text-4xl font-semibold mx-auto mb-5 ">
          Features </h2>
          <div className="features flex sm:space-x-4 flex-wrap  space-y-4 ">
            <div className="flex flex-col justify-center items-center sm:w-1/5 w-full">
              <img src={dashboard} alt="" className="w-10" />
              <div className="desc text-[12px] text-center">
              Interactive Dashboard
              </div>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-1/5 w-full">
              <img src={cpu} alt="" className="w-10" />
              <div className="desc text-[12px] text-center">Cutting-Edge Technology</div>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-1/5 w-full">
              <img src={cloud} alt="" className="w-10" />
              <div className="desc text-[12px] text-center">Cloud-Based Contact Storage</div>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-1/5 w-full">
              <img src={lock} alt="" className="w-10" />
              <div className="desc text-[12px] text-center">Robust Security Measures</div>
            </div>
          </div>
       
      </div>
      <div className="about-me mt-5 flex justify-center flex-col items-center mb-5">
        <h2 className="text-4xl font-semibold mt-5">About Developer</h2> 
        <div className="my-info sm:w-6/12 bg-p text-white rounded-md mt-5 p-3 flex justify-center items-center flex-col">
            <img src={vipul} className="w-20 rounded-full" alt="" />
            <p>Vipul Ghadi</p>
            <div className="bio p-3 text-center text-[13px]"> I am Vipul Ghadi, a dynamic 3rd-year AI&DS student at JEC Jabalpur, blends expertise in frontend and backend technologies. Proficient in machine learning, I excels as a versatile software developer.
            </div>
            <div className="link flex space-x-3">
              <a  target="_blank" href="https://www.linkedin.com/in/vipul-ghadi-b4a9ab226/" > <img src={linkedin} alt="" className="w-6" /></a>
           
            <img src={instagram} alt="" className="w-6" />
            <img src={facebook} alt="" className="w-6" />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default IntroPage;
