import { Link } from "react-router";

const Project = () => {
  return (
    <div className="container mx-auto w-full px-1">
      <div className=" flex flex-col mb-3">
        <h1 className=" text-lg sm:text-3xl font-montserrat font-medium text-gray-800 underline underline-offset-4">
          MY PROJECT
        </h1>
        <p className="text-lg text-gray-700">
          Quilityful user experience website{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">

        {/* -----------------------------------React apps------------------------------------ */}
      <div className="w-full border text-gray-700 p-2 space-y-3">
        <h3 className=" sm:text-lg font-montserrat font-semibold">
          Project Title-1---------{" "}
        </h3>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          accusamus eum laborio adipisicing elit. Harum accusamus eum laborio
        </p>
        <Link className=""> Project Link-1 </Link>
        <span className="text-green-600"> Last Update 12-01-2026 </span>
      </div>

       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          React <a href="https://anu-mohammad.onrender.com" target="blank" rel="noopener noreferrer" className="hover:text-[#ff0055] font-ahsing font-bold text-xl underline">Anu-Mohammad</a>
        </h3>
        <p className="text-gray-500">
          This Project useing by Vite, React, React icons, tailwind, The design is fully responsive and compatible with mobile, tablet, and desktop screen.
        </p>
        <a href="https://anu-mohammad.onrender.com" target="blank" rel="noopener noreferrer" className="text-[#ff0055] hover:underline hover:underline-offset-2">https:anu-mohammad.onrender.com</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          React <a href="https://e-commerce-frontend-5ean.onrender.com/" target="blank" rel="noopener noreferrer" className="hover:text-[#ff0055] font-ahsing font-bold text-xl underline">E-commerce-V1</a>
        </h3>
        <p className="text-gray-500">
          This Project useing by Vite, React, React icons, Tailwind, Express js, Mongodb. This project is MARN Stact. The design is fully responsive and compatible with mobile, tablet, and desktop.
        </p>
        <a href="https://e-commerce-frontend-5ean.onrender.com/" target="blank" rel="noopener noreferrer" className="text-[#ff0055] hover:underline hover:underline-offset-2">https:e-commerce-frontend-5ean.onrender.com</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>
{/* ---------------------------------------figma to tailwind------------------------------------- */}
       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Figma-Tailwind <a href="https://worldeducation.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-[#00BCFF] font-ahsing font-bold text-xl underline">WorldEducation</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a Figma template and converted into HTML using Tailwind. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://worldeducation.netlify.app/" target="blank" rel="noopener noreferrer" className="text-[#00BCFF] hover:underline hover:underline-offset-2">www.worldeducation.netlify.app/</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Figma-Tailwind <a href="https://dogbuysell.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-[#00BCFF] font-ahsing font-bold text-xl underline">DogBuySell</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a Figma template and converted into HTML using Tailwind. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://dogbuysell.netlify.app/" target="blank" rel="noopener noreferrer" className="text-[#00BCFF] hover:underline hover:underline-offset-2">www.dogbuysell.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Figma-Tailwind <a href="https://studiescourse.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-[#00BCFF] font-ahsing font-bold text-xl underline">Study</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a Figma template and converted into HTML using Tailwind. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://studiescourse.netlify.app/" target="blank" rel="noopener noreferrer" className="text-[#00BCFF] hover:underline hover:underline-offset-2">www.studiescourse.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>
{/* -----------------------------------bootstrap to html------------------------------------ */}
       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Bootstrap-Html <a href="https://housebuysellvi.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-[#ffb007] font-ahsing font-bold text-xl underline">Housbuysell</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using Bootstrap. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://housebuysellvi.netlify.app/" target="blank" rel="noopener noreferrer" className="text-[#ffb007] hover:underline hover:underline-offset-2">https:housebuysellvi.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Bootstrap-Html <a href="https://foodbuysell.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-[#ffb007] font-ahsing font-bold text-xl underline">Foodbuysell</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using Bootstrap. The design is no responsive.
        </p>
        <a href="https://foodbuysell.netlify.app/" target="blank" rel="noopener noreferrer" className="text-[#ffb007] hover:underline hover:underline-offset-2">https:foodbuysell.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>
{/* --------------------------------------psd to html-------------------------------------------------------- */}
       <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Psd-Html <a href="https://silionshop.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-purple-800 font-ahsing font-bold text-xl underline">Silion</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using CSS. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://silionshop.netlify.app/" target="blank" rel="noopener noreferrer" className="text-purple-800 hover:underline hover:underline-offset-2">www.silionshop.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

      <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Psd-Html <a href="https://travelnatural.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-purple-800 font-ahsing font-bold text-xl underline">Travel</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using CSS. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://travelnatural.netlify.app/" target="blank" rel="noopener noreferrer" className="text-purple-800 hover:underline hover:underline-offset-2">www.travelnatural.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

      <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className=" font-montserrat font-semibold text-xl">
          Psd-Html <a href="https://rockmusics.netlify.app/" target="blank" rel="noopener noreferrer" className="hover:text-purple-800 font-ahsing font-bold text-xl underline">Rock Music</a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using CSS. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://rockmusics.netlify.app/" target="blank" rel="noopener noreferrer" className="text-purple-800 hover:underline hover:underline-offset-2">www.rockmusics.netlify.app</a>
        <span className="text-green-600"> Last Update 12-01-2026 </span>        
      </div>

      <div className="w-full border p-2 space-y-3 text-gray-700">
        <h3 className="font-semibold text-xl">
          Psd-Html <a href="https://fruitsshopp.netlify.app/" target="blank" rel='noopener noreferrer' className="font-yummy font-bold text-xl underline hover:text-purple-800">Fruits Shop </a>
        </h3>
        <p className="text-gray-500">
          This project is developed from a PSD template and converted into HTML using CSS. The design is fully responsive and compatible with mobile, tablet, and desktop screens.
        </p>
        <a href="https://fruitsshopp.netlify.app/" target="blank" rel='noopener noreferrer' className="text-purple-800 hover:underline hover:underline-offset-2"> www.fruitsshopp.netlify.app </a>
        <span className="text-green-600"> Last Update 12-04-2025 </span>        
      </div>

      </div>            
    </div>
  );
};

export default Project;
