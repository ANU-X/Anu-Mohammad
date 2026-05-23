const Skill = (props) => {


  return (
    <div className="border bg-linear-to-r  to-blue-900 px-4 py-1 rounded ">
        <div className="flex justify-center items-center gap-2">
          <img src={props.image} alt="" className="rounded h-8" />
          <p className="sm:text-lg text-gray-100 text-center text-nowrap">{props.name}</p>
        </div>
    </div>
  );
};


export default Skill;

