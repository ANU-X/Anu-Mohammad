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
        <h6>I bridge the gap between design and high-level engineering. Based in Navi Mumbai I <br /> focus on creating digital experiences that are as technically sound as they are visually intuitive. <br />
        I focus on creating digital experiences that are as technically </h6>
        <div className="flex sm:block flex-col space-y-2">
        <li className="text-lg list-inside hover:underline underline-offset-4">Web Developer</li>
        <li className="text-lg list-inside hover:underline underline-offset-4">Graphic Designer</li>
        <li className="text-lg list-inside hover:underline underline-offset-4">Data Analist</li>
        </div>
        <div className='flex justify-between gap-10'>
        <div>
          <p>Status</p>
          <span className='flex items-center gap-2'><GoDotFill className='text-green-600 text-xl'/> active</span>
        </div>
          <div>
            <p>location</p>
            <p>Dhaka, Bangladesh.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
