import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
    return (
      <header className=" py-4 px-6">
        <div className="container mx-auto">
          <nav className="flex flex-wrap items-center">
            <a href="#" className="text-blue-600 text-sm md:text-base">Home</a>
            <span className="mx-2 text-gray-400"> <IoIosArrowForward />
</span>
            <a href="#" className="text-gray-500 text-sm md:text-base">Booking History</a>
            <span className="mx-2 text-gray-400"><IoIosArrowForward /></span>
            <a href="#" className="text-gray-500 text-sm md:text-base">Flight</a>
            <span className="mx-2 text-gray-400"><IoIosArrowForward /></span>
            <a href="#" className="text-blue-600 text-sm md:text-base">STFL17121182045413</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  
  