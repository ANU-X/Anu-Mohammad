import React from "react";
import { FaRegAddressCard } from "react-icons/fa";

const Webresume = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="flex justify-between p-5 text-2xl sm:text-3xl md:text-4xl text-[#3bd595]">
        <h2 className=" font-dmserif " > My Resume. </h2>
        <FaRegAddressCard />
      </div>
      <hr className="w-full h-2 border-dotted border-t-2 text-gray-700" />

      <h1 className="font-dmserif text-lg sm:text-2xl text-gray-100 my-5 underline underline-offset-6"> Education Qualification : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 text-gray-200 gap-4">
        <div className=" sm:font-semibold">2017-2022</div>
        <div className=" space-y-1">
          <h3 className="sm:text-lg font-bold"> Bachelor of Arts (BA) </h3>
          <p className="text-gray-300 text-sm">| Gaibandha Govt College </p>
          <p className="text-gray-300">| Board: National University </p>
          <p className="text-gray-300">| Subject: Philosophy </p>
          <p className="text-gray-300">| CGPA: 2.75 (out of 4.00)</p>
        </div>

        <div className="sm:font-semibold">2016-2017</div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold">Higher Secondary Certificate (HSC)</h3>
          <p className="text-gray-300">| Haji Osman Goni Dgree College</p>
          <p className="text-gray-300">| Board: Dinajpur</p>
          <p className="text-gray-300">| Subject: Humanities</p>
          <p className="text-gray-300">| CGPA: 3.33 (out of 5.00)</p>
        </div>

        <div className="sm:font-semibold">2010-2015</div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold">Secondary School Certificate (SSC)</h3>
          <p className="text-gray-300">| Ghagoa M.B. High School</p>
          <p className="text-gray-300">| Board: Dinajpur</p>
          <p className="text-gray-300">| Subject: Humanities</p>
          <p className="text-gray-300">| CGPA: 4.11 (out of 5.00) </p>
        </div>        
      </div>

      <div className="border border-gray-600 p-2 my-10 space-y-10">
      <h1 className="font-dmserif text-lg sm:text-2xl text-gray-200 underline underline-offset-6"> Personal Information : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 text-white space-y-3">
        <div>Name</div>
        <div> : Md. Anu Miah </div>
        <div> Father's Name </div>
        <div> : Md. Hossain Alli </div>
        <div> Mother's Name </div>
        <div> : Mst. Anjuare Begum </div>
        <div> Date of Birth  </div>
        <div> : 15 May 1999 </div>
        <div> Gender </div>
        <div> : Male </div>
        <div> Marital Status </div>
        <div> : Unmarried </div>
        <div> Nationality </div>
        <div> : Bangladeshi (By Birth) </div>
        <div> NID No </div>
        <div> : 330 458 1170 </div>
        <div> Religion </div>
        <div> : Islam </div>
        <div> Blood Group </div>
        <div> : O+ </div>
      </div>
      </div>

      <div className="space-y-5">
      <h1 className="font-dmserif text-lg sm:text-2xl text-gray-200 underline underline-offset-6"> Address  / Location : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 text-white gap-4">
        <div className=" sm:font-semibold"> PERMANENT </div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold"> Village : Uttar Ghagoa Gonglar Doba </h3>
          <p> Post Office : Ruper Bazar </p>
          <p> Police Station : Gaibandha Sadar </p>
          <p> District : Gaibandha </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-2 text-white gap-4">
        <div className="sm:font-semibold"> PRESENT </div>
        <div className="space-y-2">
          <h3 className="sm:text-lg font-bold"> Village : Nurer Chala Bazar </h3>
          <p> Post Office : No.11 Word </p>
          <p> Police Station : Vatara Thana </p>
          <p> District : Dhaka </p>
        </div>
        </div>
      </div>
      </div>
  );
};

export default Webresume;
