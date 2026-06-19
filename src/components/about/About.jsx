import FSR03764 from '../../assets/FSR03764.jpg'
import { GoDotFill } from "react-icons/go";


const About = () => {


  return (
    <div id="about" className="flex flex-col md:flex-row justify-center items-center gap-20 py-40 px-5">
      <div className="w-60 sm:w-70
      ">
        <div className='border p-2 rounded-2xl border-app-border'>
          <img src={FSR03764} alt="img" loading='lazy' className=" rounded-2xl" />
        </div>
      </div>      


      <div className="flex flex-col justify-center items-center text-justify gap-4">
        <h6 >Hello i'm ANU</h6>
        <h1 className=" font-inter-itght font-bold text-lg sm:text-4xl">
          A multiple profession at computer
        </h1>
        <h6>I am a versatile tech professional with expertise in Web Development, Graphic Design <br /> and Data Entry. I specialize in building functional websites, creating visually compelling <br /> designs and managing data with high accuracy to deliver end-to-end digital solutions.</h6>
        <div className="flex sm:block flex-col space-y-2">
        <li className="text-lg list-inside hover:underline underline-offset-4">Web Developer</li>
        <li className="text-lg list-inside hover:underline underline-offset-4">Graphic Designer</li>
        <li className="text-lg list-inside hover:underline underline-offset-4">Data Analist</li>
        </div>
        <div className='flex justify-between gap-10'>
        <div>
          <p>Status</p>
          <span className='flex items-center gap-2'><GoDotFill className='text-green-600 text-xl animate-pulse'/> Active</span>
        </div>
          <div>
            <p>Location</p>
            <p>Dhaka, Bangladesh.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
