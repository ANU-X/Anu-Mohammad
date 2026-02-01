import { useContext } from "react";
import { SlBriefcase } from "react-icons/sl";
import { AllassetContet } from "../../context/AssetsProvider";
import Cart from "../cart/Cart";


const Webportfolio = () => {
  const {Portfilo} = useContext(AllassetContet)
  return (
    <div className=' max-w-5xl mx-auto py-5 px-5'>
      <div className='flex justify-between text-[#3bd595] p-5 text-2xl sm:text-3xl md:text-4xl'>
        <h2 className=' font-dmserif'> My Portfolio. </h2>
        <SlBriefcase/>
      </div>
      <hr className='w-full h-2 border-dotted border-t-2 text-gray-700'/>
    <div className="sm:columns-2 md:columns-3">
      {
        Portfilo.map( (data, index)=>{
          return(
            <Cart key={index} image = {data.image} />
          )
        } )
      }
    </div>
    </div>
  )
}


export default Webportfolio
