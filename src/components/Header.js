import { FaHandPointRight } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

function Header() {
  return (
    <header className="flex justify-evenly bg-blue-600 h-12 p-1 w-full text-white font-black drop-shadow-md hover:drop-shadow-2xl ">
      <div className="">
        <FaHandPointRight className="mt-2 size-6" />
      </div>
      <div className="">
        <h2 className="hover: cursor-pointer text-3xl">Pullupkutz!</h2>
      </div>
      <div className="mt-2 hover: cursor-pointer text-2xl">
        <CiMenuKebab />
      </div>
    </header>
  );
}

export default Header;
