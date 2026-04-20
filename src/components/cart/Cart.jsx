
const Cart = (props) => {
  return (
    <div className="p-2 space-y-5">
      <div className=" shadow-sm shadow-amber-400 rounded-2xl break-inside-avoid border border-[#212224] space-y-5 bg-[#27292b] transition-transform duration-300 hover:scale-105">
        <img src={props.image} alt="img" className="rounded-2xl object-cover" loading="lazy" />
        <div className="text-center p-2">
          <p className="text-sky-500">{props.name}</p>
          <h2 className=" font-dmserif text-xl text-gray-200">
            {props.about}
          </h2>
          <p className=" font-monteCarlo text-gray-300">{props.date}</p>
        </div>
      </div>
    </div>
  );
};


export default Cart;

