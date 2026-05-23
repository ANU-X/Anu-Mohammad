import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
import { AllassetContet } from "../../context/AssetsProvider";
import { FaExternalLinkAlt } from "react-icons/fa";
import Buttons from "../buttons/Buttons";


const CartProject = () => {
  const { ProjectCart } = useContext(AllassetContet);
  
  // {/* 5c87f8-bc94f5-3bd595 */}
  return (
    <div  className="md:columns-2 xl:columns-3 md:gap-10 xl:gap-10 space-y-12">
      {ProjectCart.map((item) => (
        <div key={item.id} className="flex flex-col bg-[#5c88f811] border border-[#5c88f881] hover:border-[#5c88f8] hover:shadow-[0_0_10px_0.5px_rgba(188,148,245,0.40)] rounded-4xl break-inside-avoid hover:scale-105 transition-all duration-500">
          <div>
          <video autoPlay loop playsinline className=" aspect-video rounded-t-4xl">
            <source src={item.video} type="video/mp4"/>
          </video>            
          </div>
          <div className="flex flex-col gap-5 px-8 py-5">
            <div>
              <a href={item.liveLink} target="blank" className="flex items-center gap-3 text-2xl transition-all duration-300 hover:text-[#7bffc8] text-[#3bd595]">{item.name} <FaExternalLinkAlt className="text-sm"/> </a>
              <p>{item.about}</p>
            </div>

            <div className=" space-x-2 space-y-2">
                {
                item.lavel.map((teach, index)=>(
                  <button key={index} className=" outline outline-app-border hover:text-[#3bd595] px-2 rounded">
                    {teach}
                    </button>
                ))
              }
            </div>
            <div className="flex gap-8 items-center justify-center">
              <Buttons text="Live Demo" icon ={<VscGlobe/>} link = {item.liveLink} />   
              <Buttons text='Source' icon= {<VscGithubInverted/>} link = {item.codeLink}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default CartProject;

