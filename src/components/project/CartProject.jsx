import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
import { AllassetContet } from "../../context/AssetsProvider";
import { FaExternalLinkAlt } from "react-icons/fa";


const CartProject = () => {
  const { ProjectCart } = useContext(AllassetContet);

  return (
    <div className="md:columns-2 xl:columns-3 md:gap-10 xl:gap-10 space-y-12">
      {ProjectCart.map((item) => (
        <div key={item.id} className="flex flex-col border rounded-4xl break-inside-avoid">
          <div>
          <video autoPlay loop playsinline loading='lazy' className="rounded-t-4xl">
            <source src={item.video} type="video/mp4"/>
          </video>            
          </div>
          <div className="flex flex-col gap-5 px-8 py-5">
            <div>
              <a href={item.liveLink} target="blank" className="flex items-center gap-3 text-2xl transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(212,4,91,1)] hover:text-red-500">{item.name} <FaExternalLinkAlt className="text-sm"/> </a>
              <p>{item.about}</p>
            </div>

            <div className=" space-x-2 space-y-2">
                {
                item.lavel.map((teach, index)=>(
                  <button key={index} className=" outline px-2 rounded">
                    {teach}
                    </button>
                ))
              }
            </div>
            <div className="flex gap-8 items-center justify-center">
              <button className="border rounded-sm px-4 py-2 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(224,45,45,0.6)]  hover:bg-red-500">
                <a
                  target="blank"
                  href={item.liveLink}
                  className="flex justify-center items-center gap-4"
                >
                  <VscGlobe />
                  Live Demo
                </a>
              </button>
              <button className="border rounded-sm px-4 py-2 transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_2px_rgba(224,45,45,0.6)] hover:bg-red-500">
                <a
                  target="blank"
                  href={item.codeLink}
                  className="flex justify-center items-center gap-4"
                >
                  <VscGithubInverted />
                  Source
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProject;
