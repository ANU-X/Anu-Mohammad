
const Webresume = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="font-dmserif text-lg sm:text-2xl my-5 underline underline-offset-6"> Education Qualification : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
        <div className=" sm:font-semibold">2017-2022</div>
        <div className=" space-y-1">
          <h3 className="sm:text-lg font-bold"> Bachelor of Arts (BA) </h3>
          <p className="text-sm">| Gaibandha Govt College </p>
          <p>| Board: National University </p>
          <p>| Subject: Philosophy </p>
          <p>| CGPA: 2.75 (out of 4.00)</p>
        </div>

        <div className="sm:font-semibold">2016-2017</div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold">Higher Secondary Certificate (HSC)</h3>
          <p>| Haji Osman Goni Dgree College</p>
          <p>| Board: Dinajpur</p>
          <p>| Subject: Humanities</p>
          <p>| CGPA: 3.33 (out of 5.00)</p>
        </div>

        <div className="sm:font-semibold">2010-2015</div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold">Secondary School Certificate (SSC)</h3>
          <p>| Ghagoa M.B. High School</p>
          <p>| Board: Dinajpur</p>
          <p>| Subject: Humanities</p>
          <p>| CGPA: 4.11 (out of 5.00) </p>
        </div>        
      </div>

      <div className="border border-gray-600 p-2 my-10 space-y-10">
      <h1 className="font-dmserif text-lg sm:text-2xl underline underline-offset-6"> Personal Information : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 space-y-3">
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
      <h1 className="font-dmserif text-lg sm:text-2xl underline underline-offset-6"> Address  / Location : </h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
        <div className=" sm:font-semibold"> PERMANENT </div>
        <div className="space-y-1">
          <h3 className="sm:text-lg font-bold"> Village : Uttar Ghagoa Gonglar Doba </h3>
          <p> Post Office : Ruper Bazar </p>
          <p> Police Station : Gaibandha Sadar </p>
          <p> District : Gaibandha </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
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
