import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExclamationCircle,
  FaCircle,
} from "react-icons/fa";

const FlightDetails = () => {
  return (
    <div className="bg-white shadow-md  rounded-md  ">
     <div className="p-4 md:p-6">
     <div className="flex justify-between ">
        <div className="flex items-center mb-4 gap-3">
          <FaCircle className="text-blue-500" />
          <div>
            <h2 className="text-lg md:text-2xl font-semibold ">
              DAC → JFK
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Round Trip • 25 Mar - 4 Apr 2023 • 1 Stop
            </p>
          </div>
        </div>
        <div>
          <button>33h 20m</button>
        </div>
      </div>
     </div>
      <hr className="w-full
      " />
      <FlightSegment />
    </div>
  );
};

const FlightSegment = () => {
  return (
    <div className="mt-4">
      <div className="border-l-4 border-gray-200 pl-4 mb-6">
        <div className="flex items-center mb-2">
          <FaPlaneDeparture className="text-gray-500" />
          <h3 className="text-base md:text-lg font-semibold ml-2">
            Departure from Dhaka
          </h3>
          <span className="text-xs md:text-sm text-gray-400 ml-auto">
            Terminal 1: Hazrat Shahjalal International Airport
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-500 text-sm md:text-base">DAC - DXB</div>
          <div className="text-gray-500 text-sm md:text-base">
            07:30 PM - 08:50 AM
          </div>
        </div>
        <p className="text-gray-500 text-xs md:text-sm mb-2">
          Turkish Airlines • Airbus Industrie 737-800-738 • Flight no: TUR467 •
          Class: ECONOMY-Y (0)
        </p>
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2 md:p-4 mb-4"
          role="alert"
        >
          <FaExclamationCircle className="inline mr-2" />
          Technical stoppage at Malpensa International Airport (Milano). Before
          booking this flight please check your visa requirements as per your
          nationality.
        </div>
        <div className="flex items-center mb-2">
          <FaPlaneArrival className="text-gray-500" />
          <h3 className="text-base md:text-lg font-semibold ml-2">
            Layover at Dubai
          </h3>
          <span className="text-xs md:text-sm text-gray-400 ml-auto">
            Dubai International Airport
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-500 text-sm md:text-base">DAC - DXB</div>
          <div className="text-gray-500 text-sm md:text-base">
            07:30 PM - 08:50 AM
          </div>
        </div>
        <p className="text-gray-500 text-xs md:text-sm">
          Turkish Airlines • Airbus Industrie 737-800-738 • Flight no: TUR467 •
          Class: ECONOMY-Y (0)
        </p>
      </div>
      <div className="flex items-center">
        <FaCircle className="text-blue-500" />
        <h3 className="text-base md:text-lg font-semibold ml-2">
          Destination at New York
        </h3>
        <span className="text-xs md:text-sm text-gray-400 ml-auto">
          Terminal 4: John F Kennedy International Airport
        </span>
      </div>
    </div>
  );
};

export default FlightDetails;
