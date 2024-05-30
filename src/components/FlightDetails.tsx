import DepartureSegment from "./DepartureSegment";
import FlightHead from "./FlightHead";
import DepartureInfo from "./DepartureInfo";

const FlightDetails = () => {
  return (
    <div className="bg-white shadow-md  rounded-md  ">
      <FlightHead />
      <hr
        className="w-full"
      />
      <div className="p-4">
               
        <DepartureInfo DepartureText={"Departure from Dhaka"}  flightStop={true} terminalNumber={1} terminalName=" Hazrat Shahjalal International Airport"/>
         
        <DepartureInfo DepartureText={"Layover at Dubai: 12 hr 20 min "} terminalName="Dubai International Airport"/>

        <DepartureSegment DepartureText="Destination at New York" terminalName=" John F Kennedy International Airport" terminalNumber={4}/>
      </div>
    </div>
  );
};

export default FlightDetails;
