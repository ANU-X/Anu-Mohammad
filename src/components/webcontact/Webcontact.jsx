import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";



const Webcontacts = () => {
  return (
    <div className=" max-w-5xl mx-auto p-5">
      <div className="flex justify-between text-[#3bd595]  items-center px-2 h-[12vh] text-2xl sm:text-3xl md:text-4xl">
        <h2 className=" font-dmserif"> Contact Me. </h2>
        <AiOutlineMail />
      </div>
      <hr className="w-full h-2 border-dotted border-t-2 text-gray-700" />

      {/* --------------contact side------------------ */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 h-[76vh]">
        <div className=" flex flex-col gap-5 text-gray-200 items-center">
          <MdCall className="text-4xl text-[#3bd595]" />
          <h1>++880 170060-6955</h1>
        </div>
        <div className=" flex flex-col gap-5 text-gray-200 items-center px-8">
          <BiLogoGmail className="text-4xl text-[#3bd595]" />
          <h1> mdanumia1999@gmail.com </h1>
        </div>
        <div className=" flex flex-col gap-5 text-gray-200 items-center px-8">
          <MdLocationOn className="text-4xl text-[#3bd595]" />
          <h1> Vatara Thana, Nutun Bazar, Dhaka </h1>
        </div>
      </div>
      <div className="text-center">
        <span className="text-gray-400 font-montserrat word-speace tracking-wide">
          &copy; 2026 Powered by Anu. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Webcontacts;
