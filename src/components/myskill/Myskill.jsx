import React, { useContext } from "react";
import Skill from "../skill/Skill";
import { AllassetContet } from "../../context/AssetsProvider";



const Myskill = () => {

  const {skill_Progress} = useContext(AllassetContet)

  return (
         <div className="max-w-4xl mx-auto mt-8 space-y-10 ">
          <div className="flex flex-col items-center">
            <h1 className=" text-lg underline underline-offset-2 sm:text-3xl font-montserrat font-medium text-gray-800">
              MY SKILL
            </h1>
            <p className="text-sm text-gray-700">
              Professional development expertise
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "Language")
                return (
                  <Skill
                    key={index}
                    id={skill.id}
                    image={skill.image}
                    name={skill.name}
                    catagory={skill.catagory}
                    percentage={skill.percentage}
                    color={skill.backgroundColor}
                  />
                );
            })}
          </div>
        </div>

  );
};

export default Myskill;
