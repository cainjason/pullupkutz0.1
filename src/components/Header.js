import { FaHandPointRight } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-center bg-blue-600 h-12 p-1 w-full text-white font-black drop-shadow-md hover:drop-shadow-2xl ">
      <FaHandPointRight className="mt-2 mr-2 size-6" />
      <h2 className="hover: cursor-pointer text-3xl">Pullupkutz!</h2>
    </header>
  );
}

export default Header;
