import Header from "../components/Header";
import { FaArrowsLeftRight } from "react-icons/fa6";

function HomePage() {
  return (
    <main className="min-w-96">
      <Header />
      <h2>Home Page</h2>
      <div className="flex justify-center -space-x-14">
        <div className="mix-blend-multiply bg-blue-300 h-48 w-1/2">
          <p className="flex justify-center hover:cursor-pointer mt-9 text-white font-black text-3xl">
            Barbers
          </p>
        </div>
        <FaArrowsLeftRight className="h-24 min-w-2 max-w-24" />
        <div className="mix-blend-multiply bg-red-300 h-48 w-1/2">
          <p></p>
          <p className="flex justify-center hover:cursor-pointer mt-9 text-white font-black text-3xl">
            Customers
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
