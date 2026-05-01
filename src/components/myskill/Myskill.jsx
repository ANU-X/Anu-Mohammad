import { useContext, useRef, useEffect } from "react";
import Skill from "../skill/Skill";
import { AllassetContet } from "../../context/AssetsProvider";


const Myskill = () => {

  const {skill_Progress} = useContext(AllassetContet)


  return (
         <div className="mx-auto max-w-7xl gap-8 flex flex-col justify-center px-5 my-20 sm:my-0">
          <div className=" space-y-2 ">
            <h1 className=" text-lg sm:text-2xl font-montserrat font-extrabold">
              My Skills
            </h1>
            <p className="text-lg">
              Professional development expertise
            </p>
          </div>
          <p>Frontend</p>
          <div>
          <div className="flex flex-wrap gap-5">
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
          <p>Backend</p>
          <div className="flex flex-wrap gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "backend")
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
          <p>Database</p>
          <div className="flex flex-wrap gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "database")
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
          <p>Devops</p>
          <div className="flex flex-wrap gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "devops")
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
          <p>Apps & Tools</p>
          <div className="flex flex-wrap gap-5">
            {skill_Progress.map((skill, index) => {
              if (skill.catagory === "tools")
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
