import { useContext, useRef, useEffect } from "react";
import Skill from "../skill/Skill";
import { AllassetContet } from "../../context/AssetsProvider";


const  Myskill = () => {

  const {skill_Progress} = useContext(AllassetContet)

  const devopSkill = skill_Progress.filter(s => s.catagory === 'devops')
  const ToolsSkill = skill_Progress.filter(s => s.catagory === 'tools')
  const languageSkill = skill_Progress.filter(s => s.catagory === 'Language')


  return (
         <div className="mx-auto max-w-7xl overflow-hidden gap-8 flex flex-col justify-center px-5 my-20 sm:my-0">
          <div className=" space-y-2 ">
            <h1 className=" text-lg sm:text-2xl font-montserrat font-extrabold">
              My Skills
            </h1>
            <p className="text-lg">
              Professional development expertise
            </p>
          </div>

          <p>Frontend</p>
          <div className="overflow-hidden w-full">
          <div className="animation-marquee">

            <div className="flex shrink-0 gap-5">
            {[...languageSkill, ...languageSkill].map((skill, index) => {
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

          <div className="overflow-hidden w-full">
            <div className="animation-marquee-reverse">

              <div className="flex w-max shrink-0 gap-5">
                {[...devopSkill, ...devopSkill].map((skill, index) => {
                    return (
                      <Skill
                        key={`a-${index}`}
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
          </div>

          <p>Apps & Tools</p>
          <div className="overflow-hidden ">
            <div className="animation-marquee">

              <div className="flex shrink-0 gap-5">
                {[...ToolsSkill, ...ToolsSkill].map((skill, index) => {
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
          </div>

        </div>

  );
};

export default Myskill;
