import { FaHandPointRight } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-center bg-blue-600 h-8 w-full text-white font-black drop-shadow-md hover:drop-shadow-2xl ">
      {<FaHandPointRight className="blink" />}
      <h2 className="hover: cursor-pointer ">Pullupkutz!</h2>
    </header>
  );
}

export default Header;
