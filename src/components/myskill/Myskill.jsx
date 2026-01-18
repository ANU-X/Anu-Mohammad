import React, { useContext } from "react";
import Skill from "../skill/Skill";
import { SkillContet } from "../../context/SkillProvider";
import personal_skill from "../../assets/personal-skill.png";

const Myskill = () => {
  const { skill_Progress } = useContext(SkillContet);
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 justify-between items-center">
        <div className=" hidden md:block">
          <img src={personal_skill} alt="" className="w-md" />
        </div>
        <div className="space-y-8 ">
          <div className="flex flex-col items-center">
            <h1 className=" text-3xl font-montserrat font-medium text-gray-800">
              MY SKILL
            </h1>
            <p className="text-gray-700">
              {" "}
              Professional development expertise{" "}
            </p>
          </div>
          <div className="space-y-8">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "Language")
                return (
                  <Skill
                    key={index}
                    id={skill.id}
                    name={skill.name}
                    catagory={skill.catagory}
                    percentage={skill.percentage}
                    color={skill.backgroundColor}
                  />
                );
            })}
          </div>
        </div>
      </div>

  );
};

export default Myskill;
