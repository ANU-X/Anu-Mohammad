import React from "react";

const Education = () => {
  return (
    <div className=" space-y-4">
      <h1 className="text-2xl sm:text-3xl underline underline-offset-4 text-gray-800 font-montserrat font-semibold">
        Education
      </h1>

      <div className="flex justify-between space-y-2">
        <div>
          <h2 className="font-inter font-semibold">
            Gaibandha Government College
          </h2>
          <p className="font-inter text-gray-500"> Bachelor of Arts </p>
        </div>
        <span className="font-inter text-gray-500"> 2017-2023 </span>
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="font-inter font-semibold"> Sumit Sha Dhaka </h2>
          <p className="font-inter text-gray-500"> Web Development </p>
        </div>
        <span className="font-inter text-gray-500"> 2024-2026 </span>
      </div>      

      <div className="flex justify-between">
        <div>
          <h2 className="font-inter font-semibold"> Gaibandha Sahara Institute </h2>
          <p className="font-inter text-gray-500"> Photo Editing </p>
        </div>
        <span className="font-inter text-gray-500"> 2022-2023 </span>
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="font-inter font-semibold"> Genuin Computer Trining Senter Gaibandha</h2>
          <p className="font-inter text-gray-500"> Microsoft Office </p>
        </div>
        <span className="font-inter text-gray-500"> 2019-2020 </span>
      </div>
    </div>
  );
};

export default Education;
