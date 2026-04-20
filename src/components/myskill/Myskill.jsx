import { useContext } from "react";
import Skill from "../skill/Skill";
import { AllassetContet } from "../../context/AssetsProvider";



const Myskill = () => {

  const {skill_Progress} = useContext(AllassetContet)

  return (
         <div className="mx-auto max-w-7xl gap-12 sm:h-screen flex flex-col justify-center px-5 my-20 sm:my-0">
          <div className=" space-y-2 ">
            <h1 className=" text-lg sm:text-2xl font-montserrat font-medium">
              My Skills
            </h1>
            <p className="text-lg">
              Professional development expertise
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "Language")
                return (
                  <Skill
                    key={index}
                    id={skill.id}
                    image={skill.image}
                    name={skill.name}
                    catagory={skill.catagory}
                    color={skill.backgroundColor}
                  />
                );
            })}
          </div>
        </div>

  );
};

export default Myskill;
