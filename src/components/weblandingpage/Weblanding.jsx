import Webresume from "../webresume/Webresume"
import Summary from "../websummary/Summary"
import { FaRegAddressCard } from "react-icons/fa";


const Weblanding = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between p-5 text-2xl sm:text-3xl md:text-4xl text-[#3bd595]">
        <h2 className=" font-dmserif " > My Resume. </h2>
        <FaRegAddressCard />
      </div>
      <hr className="w-full h-2 border-dotted border-t-2 text-gray-700" />

        <div>
            <Summary/>
        </div>
        <div>
            <Webresume/>
        </div>
    </div>
  )
}

export default Weblanding
