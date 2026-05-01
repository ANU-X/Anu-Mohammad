
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "august 2023 - Present",
      role: "Graphice Designer",
      company: "Brain Craft Ltd. Mahakali, Dhaka",
      desc: "junior Ui/Ux Designer",
      skills: ['Learn and apply UI/UX design principles', 'Create designs using Figma/Photoshop/Illustrator', 'Design visual elements for web and mobile applications','Implement designs in coordination with developers.']
    },
    {
      date: "august 2023 - Present",
      role: "Data Analyst",
      company: "Brain Craft Ltd. Mahakali, Dhaka",
      desc: "Senior Data Analyst",
      skills: ["Data storage and management in apps Server site, Browsing, apps management.", "Experience in data validation and quality check processes", "Working in coordination with Design, iOS, Android, Web and QA team.", "Opportunity to see and understand the work of software development teams up close"]
    },
    {
      date: "January 2021 - 2022",
      role: "Photo Editor",
      company: "Cat Out (pixel perfect) Gaibandha",
      desc: "Middle Level Photo editor",
      skills: ["Acquire image manipulation and retouching skills", "Neck joint, Shadow, Masking and visual Design Experience.", "Experience working with team and clients."]
    }
  ];

  return (
    <div className="py-40 px-4 space-y-12 mx-auto max-w-7xl">
      <div>
        <h1 className='text-lg sm:text-2xl font-montserrat font-medium'>Experience</h1>
        <p className='text-lg'>profesonal experience</p>
      </div>
      <div className="max-w-6xl mx-auto relative">
        
        {/* line */}
        <div className="absolute md:left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="hidden md:block w-5/12"></div>
              
              {/* red cirel */}
              <div className=" absolute md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#bc94f5] rounded-full border-4 border-[#5c87f8] z-10 shadow-[0_0_10px_rgba(220,38,38,1)] "></div>

              {/* main cart */}
              <div className="w-full md:w-5/12 p-6 rounded-xl border border-gray-600 hover:border-[#5c87f8] transition-all duration-300">
                <span className="text-sm font-medium text-[#3bd595] ">{exp.date}</span>
                <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
                  <span>{exp.company}</span>
{/* 5c87f8-bc94f5-3bd595 */}
                <p className="text-gray-400 mb-6">{exp.desc}</p>
                
                <div className=" space-y-2">
                  {exp.skills.map((skill, i) => (
                    <ul key={i} className="list-disc list-inside">
                      <li>{skill}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience