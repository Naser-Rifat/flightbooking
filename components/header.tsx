const Header = () => {
    return (
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto">
          <nav className="flex items-center">
            <a href="#" className="text-blue-600">Home</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-gray-500">Booking History</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-gray-500">Flight</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-blue-600">STFL17121182045413</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  