import { Link } from "react-router";

const Buttons = ({
  buttonStracter = ["web", "graphic", "operatore"],
}) => {
  const butonOjbect = {
    web: {
      id: 1,
      texts: "Web Developer",
      style: "text-gray-800 border border-gray-400 hover:bg-gray-400 hover:text-white",
      path: "web",
    },
    graphic: {
      id: 2,
      texts: "Graphic Designer",
      style: "text-gray-800 border border-gray-400 hover:bg-gray-400 hover:text-white",
    },
    operatore: {
      id: 3,
      texts: "Data Analist",
      style: "text-gray-800 border border-gray-400 hover:bg-gray-400 hover:text-white",
    },
  };

  const buttonCompo = buttonStracter.map((btn) => butonOjbect[btn]);

  return (
    <div className="flex sm:block flex-col space-y-5 sm:space-x-8">
      {buttonCompo.map((props, index) => (
        <Link
          key={index}
          to={props.path}
          className={`${props.style} rounded-sm text-lg px-4 py-2`}
        >
          {props.texts}
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
