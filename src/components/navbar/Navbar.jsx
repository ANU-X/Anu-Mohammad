import { Link } from "react-router";
import logo_1 from '../../assets/logo.png'

const Navbar = () => {

    
  return (
    <div className=" flex justify-around items-center p-2 bg-gray-50">
      <div className=" w-10">
        <Link> <img src={logo_1} alt=""  /> </Link>
      </div>
      <div>
        <ul className=" flex gap-10">
          <li>
            <Link to='/' className="text-lg hover:text-pink-700 active:text-amber-200"> Home </Link>
          </li>
          <li>
            <Link to='/about' className="text-lg hover:text-pink-700 active:text-amber-200"> About </Link>
          </li>
          <li>
            <Link to='/resume' className="text-lg hover:text-pink-700 active:text-amber-200"> Resume </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to='contact' className=" text-lg hover:text-pink-700 active:text-amber-400"> Contact </Link>
      </div>
    </div>
  );
};


export default Navbar;
