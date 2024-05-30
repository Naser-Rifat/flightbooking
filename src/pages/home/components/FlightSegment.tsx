import { FlightSegmentProps } from "../../../../type";

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
  totalFlightTime ="",
}: FlightSegmentProps) => {
  return (
    <div className="">

      <div className="flex items-center">
        <div>
          {departure && <p className="font-bold">{departure}</p>}
          {departureTime && (
            <p className=" font-bold">{departureTime}</p>
          )}{" "}
            {totalFlightTime&& (
            <p className=" font-bold text-gray-500">{totalFlightTime}</p>
          )}{" "}
          {departureDate && <p className="text-gray-500">{departureDate}</p>}{" "}
        </div>
      </div>
      <div className=" mt-2">
        <p className="font-semibold text-gray-500">{airlinesName}</p>
        {flightNumber && <p>Flight No: {flightNumber}</p>}{" "}
        {aircraft && <p>{aircraft}</p>}
        {travelClass && <p>Class: <span className="font-medium text-gray-500">{travelClass}</span></p>}{" "}
      </div>
      <div className="flex items-center mt-2">
        <div>
          {arrivalTime && <p className="text-gray-500">{arrivalTime}</p>}
          {arrivalDate && <p className="text-gray-500">{arrivalDate}</p>}{" "}
        </div>
      </div>
    </div>
  );
};

export default FlightSegment;
