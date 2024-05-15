import { NavLink } from "react-router-dom";
import { FcDribbble } from "react-icons/fc";
const Navbar = () => {
  return (
    <nav className=" bg-cyan-200 p-4">
      <div className="max-w-7xl mx-auto text-black text-xl ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white font-semibold text-lg">
              <FcDribbble className="text-5xl" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className=" mr-4 hover:bg-cyan-400 p-2 rounded-md">
              <NavLink to={"/"}>Home</NavLink>
            </a>
            <a href="#" className=" mr-4 hover:bg-cyan-400 p-2 rounded-md">
              <NavLink to={"donations"}> All Donations</NavLink>
            </a>
            <a href="#" className=" mr-4 hover:bg-cyan-400 p-2 rounded-md">
              <NavLink to={"dashboard"}>Dashboard</NavLink>
            </a>
            <a href="" className=" mr-4 hover:bg-cyan-400 p-2 rounded-md">
              <NavLink to={"login"}>login</NavLink>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
