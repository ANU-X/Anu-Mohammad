import React from "react";

const Skill = (props) => {
  console.log(props);
  return (
    <div>
        <div className="flex justify-between items-center">
          <span className=" text-lg text-gray-700">{props.name}</span>
          <span className=" font-semibold" style={{ color: props.color }}> {props.percentage}% </span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
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

