import { useContext } from "react";
import { AllassetContet } from "../../context/AssetsProvider";

const Education = () => {
  const { Contributor } = useContext(AllassetContet);

  return (
    <div className=" relative mx-auto max-w-7xl px-5 flex flex-col justify-center gap-10 sm:h-screen">
      <h1 className="text-2xl sm:text-3xl font-montserrat text-[#3bd595] font-semibold">
        Mentor that shape me
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {Contributor.map((contribut, index) => {
        return (
 
            <div key={index} className="flex justify-between items-center p-6 border border-gray-500/50 bg-gray-900/10 rounded-xl space-y-1 hover:bg-[#5c88f808] hover:scale-105 transition-all duration-300">
              <div className="">
                <h2 className="font-dmserif text-lg sm:text-xl"> {contribut.name} </h2>
                <p className="text-gray-500"> {contribut.profession} </p>
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
      <div className=" absolute left-0 top-0 h-100 w-50 md:w-100 pointer-events-none bg-[#5c87f8] rounded-full opacity-20 blur-3xl "></div>
    </div>
  );
};

export default Education;
