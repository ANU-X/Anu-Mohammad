import { Link, useLocation } from "react-router";
import codding_resume from "../assets/codding-log.png";
import graphic_resume from "../assets/graphic.png";
import data_resume from "../assets/data-entry.png";
import { useEffect, useState } from "react";

const Resume = () => {
  const [activeLink, setActiveLink] = useState('')
  const pathLocation = useLocation()
  useEffect( ()=>{
    setActiveLink(pathLocation.pathname)
  }, [pathLocation] )

  const isActive = (path)=> {
      return activeLink === path
  }
  return (
    <div className=" flex flex-col sm:flex-row justify-center items-center gap-10 h-[92.3vh]">

      <Link to='webresumelayout' className={`${isActive('resume/webresumelayout') ? 'text-green-400': ''}`}>
        <div className=" border p-2">
          <img src={codding_resume} alt="" className="h-20 sm:h-30" />
          <h2> Web Resume </h2>
        </div>
      </Link>

      <Link>
        <div className=" p-2 border">
          <img src={graphic_resume} alt="" className="h-20 sm:h-30" />
          <h2> Graphic Resume </h2>
        </div>
      </Link>

      <Link>
        <div className=" p-2 border">
          <img src={data_resume} alt="" className="h-20 sm:h-30" />
          <h2> Data Resume </h2>
        </div>
      </Link>

    </div>
  );
};

export default Resume;
