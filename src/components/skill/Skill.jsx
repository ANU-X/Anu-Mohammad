import React from "react";


const Skill = (props) => {


  return (
    <div className="flex flex-col justify-between border border-gray-700 rounded h-36 bg-gray-700 ">
        <div className="flex flex-col justify-center items-center">
          <img src={props.image} alt="" className="rounded h-16" />
          <p className="sm:text-lg text-gray-100 text-center">{props.name}</p>
        </div>
        <div className="bg-gray-200 h-1 rounded-full">
          <div
            className="h-full rounded-full "
            style={{
              width: `${props.percentage}%`,
              backgroundColor: props.color,
            }}
          ></div>
        </div>
    </div>
  );
};


export default Skill;

