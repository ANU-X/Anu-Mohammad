import { Link } from "react-router";


const Project = () => {

  return (
        <div className="w-full flex flex-col space-y-10">
          <div className=" flex flex-col">
            <h1 className=" text-lg sm:text-3xl font-montserrat font-medium text-gray-800 underline underline-offset-4"> MY PROJECT</h1>
            <p className="text-sm text-gray-700"> Quilityful user experience website </p>
          </div>
          <div className="w-full border text-gray-700 p-2 space-y-3">
            <h3 className=" sm:text-lg font-montserrat font-semibold"> Project Title-1--------- </h3>
            <p className=" text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus eum laborio adipisicing elit. Harum accusamus eum laborio adipisicing elit. Harum accusamus eum laborio Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo! </p>
            <Link className=""> Project Link-1 </Link>
          </div>
          <div className="w-full border p-2 space-y-3 text-gray-700">
            <h3 className=" font-montserrat font-semibold text-lg"> Project Title-2--------- </h3>
            <p className="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nihil. elit. Harum accusamus eum laboriosam. </p>
            <Link> Project Link-2 </Link>
          </div>

          <div className="w-full border p-2 space-y-3 text-gray-700">
            <h3 className=" font-montserrat font-semibold text-lg"> Project Title-3--------- </h3>
            <p className="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam. laboriosam. </p>
            <Link> Project Link-3 </Link>
          </div>

          <div className="w-full border p-2 space-y-3 text-gray-700">
            <h3 className=" font-montserrat font-semibold text-lg"> Project Title-4--------- </h3>
            <p className="text-gray-500"> Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, beatae. dolor sit amet consectetur adipisicing elit. Harum accusamus eum laboriosam. </p>
            <Link> Project Link-4 </Link>
          </div>

        </div>
  );
};


export default Project;
