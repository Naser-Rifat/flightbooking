import { FlightSegmentProps } from "../../type";

const FlightSegment = ({
  departure = "",
  departureTime = "",
  departureDate = "",
  arrivalTime = "",
  arrivalDate = "",
  flightNumber = "",
  aircraft = "",
  travelClass = "",
  airlinesName ="",
}: FlightSegmentProps) => {
  return (
    <div className="">

      <div className="flex items-center">
        <div>
          {departure && <p className="font-bold">{departure}</p>}
          {departureTime && (
            <p className="text-gray8500 font-bold">{departureTime}</p>
          )}{" "}
          {departureDate && <p className="text-gray-500">{departureDate}</p>}{" "}
        </div>
      </div>
      <div className=" mt-2">
        <p className="font-semibold">{airlinesName}</p>
        {flightNumber && <p>Flight No: {flightNumber}</p>}{" "}
        {aircraft && <p>{aircraft}</p>}
        {travelClass && <p>Class: {travelClass}</p>}{" "}
      </div>
      <div className="flex items-center mt-2">
        {/* <FaPlaneArrival className="text-blue-500 mr-2" /> */}
        <div>
          {arrivalTime && <p className="text-gray-500">{arrivalTime}</p>}
          {arrivalDate && <p className="text-gray-500">{arrivalDate}</p>}{" "}
        </div>
      </div>
    </div>
  );
};

export default FlightSegment;
