import React from "react";
import Profile_photo from "../../assets/robot.webp";
import ring from "../../assets/ring.png";
import Footer from "../footer/Footer";
import Buttons from "../buttons/Buttons";

const Hero = () => {
  return (
    <div className=" h-[92.3vh] flex flex-col md:flex-row justify-center md:justify-around items-center gap-10">
      <div className=" flex flex-col gap-4">
        <h6 className="text-gray-800">Hello i'm ANU</h6>
        <h1 className=" font-inter-itght font-bold sm:font-black text-2xl sm:text-5xl text-gray-700">
          A Multiple Profession <br /> At Computer
        </h1>
        <h6 className="text-gray-800">based in bangladesh</h6>
        <div className="mt-5">
      <Buttons/>
        </div>
      </div>
      <div className=" relative w-40 sm:w-60 h-40 sm:h-60 flex justify-center items-center">
        <img src={Profile_photo} alt="" className="w-35 sm:w-54 rounded-full" />
        <img
          src={ring}
          alt=""
          className=" absolute w-full animation-spin-slow "
        />
      </div>
      <div className=" absolute bottom-5">
        <Footer />
      </div>
    </div>
  );
};


export default Hero;
