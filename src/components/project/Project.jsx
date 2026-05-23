import CartProject from "./CartProject";



const Project = () => {

  return (
    <div className=" overflow-hidden relative max-w-7xl mx-auto px-5 space-y-12 mt-20">
      <div className="space-y-2">
        <h1 className=" text-lg sm:text-2xl font-montserrat font-medium ">
          My Project
        </h1>
        <p className="text-lg">
          Quilityful user experience website
        </p>
      </div>
      <CartProject/>

      <div className=" absolute top-1/5 md:left-1/2 w-80 h-300 rounded-full pointer-events-none bg-[#5c87f8] blur-3xl opacity-20 lg:-rotate-45"></div>       
    </div>
  );
};

export default Project;
