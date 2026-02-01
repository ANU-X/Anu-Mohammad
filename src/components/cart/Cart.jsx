import React from "react";

const Cart = (props) => {
  return (
    <div className="p-2 space-y-5">
      <div className=" break-inside-avoid border border-[#212224] space-y-5 bg-[#27292b]">
        <img src={props.image} alt="" className="" />
        <div className="text-center p-2">
          <p className="text-sky-500">Travaling</p>
          <h2 className=" font-dmserif text-xl text-gray-200">
            The Best Plase in Coxbazer
          </h2>
          <p className=" font-monteCarlo text-gray-300">26 January 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
