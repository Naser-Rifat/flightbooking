import { MdOutlineAirplanemodeActive } from "react-icons/md";
import DepartureSegment from "./DepartureSegment";
import FlightSegment from "./FlightSegment";
import airlineImg from '../assets/Airline.jpg'
import FlightStop from "./FlightStop";
import { FaExclamationCircle } from "react-icons/fa";

const DepartureInfo = ({ flightStop = false ,DepartureText="",terminalName="" , terminalNumber=0 }) => {
  return (
    <div>
      {" "}
      <DepartureSegment DepartureText={DepartureText} terminalName={terminalName} terminalNumber={terminalNumber}  />
        {/* <IoLocationSharp className="inline text-gray-400  text-2xl ml-2  " /> */}
      <div className="flex">
        <div className="flex flex-col items-center">

          {/* <FaPlaneDeparture className="text-blue-500 mr-2" /> */}
          {/* <TarkishairLinesSVG className=" mt-5 w-10 h-16   text-3xl" /> */}
          <img src={airlineImg} className="mt-5 w-10" alt="" />
          <hr className="h-full border-[1px] w-0 " />
          <MdOutlineAirplanemodeActive className="rotate-180 my-2 w-4 h-20 text-gray-400" />
          <hr className="h-full border-[1px] w-0 " />
        </div>
        <div className="pl-4 pt-4">
          <div className="md:grid grid-cols-3 ">
            <FlightSegment
              departure="DAC-DXB"
              departureTime="07:30 PM"
              airlinesName="Turkish Airlines"
              flightNumber="TUR467"
            />

            <FlightSegment
              departureTime="07:30 PM"
              departureDate="28 Mar, Friday"
              aircraft="Airbus Industrie 737-800-738"
              travelClass="Economy-Y (O)"
            />

            <FlightSegment
 departureTime="07:30 PM"
 departureDate="28 Mar, Saturday"
            />
          </div>
          {flightStop && (
            <FlightStop
              message="Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality."
              icon={<FaExclamationCircle className="text-orange-500 text-xl" />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartureInfo;
