import React from "react";
import Profile_photo from "../../assets/robot.webp";
import ring from "../../assets/ring.png";
import { Link } from "react-router";
import Footer from "../footer/Footer";

const Hero = () => {
  return (
    <div className=" h-[94vh] flex justify-around items-center ">
      <div className=" flex flex-col gap-4">
        <h6 className="text-gray-800">Hello i'm ANU</h6>
        <h1 className=" font-inter-itght font-black text-5xl text-gray-700">
          A Multiple Profession <br /> At Computer
        </h1>
        <h6 className="text-gray-800">based in bangladesh</h6>
        <div className="flex gap-8 mt-5">
          <Link
            to="/web"
            className="bg-gray-500 px-4 py-2 rounded-sm text-white hover:bg-gray-400 hover:text-gray-800 active:bg-amber-300"
          >
            Web Development
          </Link>

          <Link
            onClick={() => alert("It is developing pandding")}
            className="bg-gray-500 px-4 py-2 rounded-sm text-white hover:bg-gray-400 hover:text-gray-800 active:bg-amber-300"
          >
            Graphic Design
          </Link>

          <Link
            onClick={() => alert("It is developing pandding")}
            className="bg-gray-500 px-4 py-2 rounded-sm text-white hover:bg-gray-400 hover:text-gray-800 active:bg-amber-300"
          >
            Data Entry
          </Link>

          <Link
            onClick={() => alert("It is developing pandding")}
            className="bg-gray-500 px-4 py-2 rounded-sm text-white hover:bg-gray-400 hover:text-gray-800 active:bg-amber-300"
          >
            Photo Editor
          </Link>
        </div>
      </div>
      <div className=" relative w-60 h-60 flex justify-center items-center">
        <img src={Profile_photo} alt="" className="w-54 rounded-full" />
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
