import CartProject from "./CartProject";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 space-y-12 mt-20">
      <div className="space-y-2">
        <h1 className=" text-lg sm:text-2xl font-montserrat font-medium ">
          My Project
        </h1>
        <p className="text-lg">
          Quilityful user experience website
        </p>
      </div>
      <CartProject/>    
    </div>
  );
};

export default Project;
