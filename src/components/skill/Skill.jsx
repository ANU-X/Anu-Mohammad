const Skill = (props) => {


  return (
    <div className="flex flex-col justify-center border border-gray-700 rounded h-36 bg-gray-700 ">
        <div className="flex flex-col justify-center items-center">
          <img src={props.image} alt="" className="rounded h-16" />
          <p className="sm:text-lg text-gray-100 text-center">{props.name}</p>
        </div>
    </div>
  );
};


export default Skill;

