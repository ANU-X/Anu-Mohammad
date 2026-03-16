import { useContext } from "react";
import { AllassetContet } from "../../context/AssetsProvider";

const Education = () => {
  const { Contributor } = useContext(AllassetContet);

  return (
    <div className=" space-y-4">
      <h1 className="text-2xl sm:text-3xl underline underline-offset-4 text-gray-800 font-montserrat font-semibold">
        Mentor that shape me
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Contributor.map((contribut, index) => {
        return (
 
            <div key={index} className="flex justify-between items-center p-4 bg-gray-300 rounded-lg space-y-1">
              <div className="">
                <h2 className="font-dmserif text-lg sm:text-xl text-gray-800"> {contribut.name} </h2>
                <p className="text-gray-700"> {contribut.profession} </p>
              </div>
              <img
                src={contribut.image}
                alt=""
                className="rounded-full h-18 border-2 border-white"
              />
            </div>

        );
      })}
      </div>
    </div>
  );
};

export default Education;
