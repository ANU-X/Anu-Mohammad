import { RiBook3Line } from "react-icons/ri";
import Cart from "../cart/Cart";
import { useContext } from "react";
import { AllassetContet } from "../../context/AssetsProvider";

const Webblog = () => {
  const {Blog} = useContext(AllassetContet)
  return (
    <div className='max-w-5xl mx-auto p-5'>
      <div className='flex justify-between text-[#3bd595] p-5 text-2xl sm:text-3xl md:text-4xl'>
        <h2 className=' font-dmserif'> My Blog. </h2>
        <RiBook3Line/>
      </div>
      <hr className='w-full h-2 border-dotted border-t-2 text-gray-700'/>

      <div className=" sm:columns-2 md:columns-3">
        {
          Blog.map( (items, index)=> {
            return(
              <Cart key={index} image = {items.image} />
            )
          } )
        }
      </div>           
    </div>
  )
}

export default Webblog
