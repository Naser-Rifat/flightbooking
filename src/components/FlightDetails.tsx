import DepartureSegment from "./DepartureSegment";
import FlightHead from "./FlightHead";
import DepartureInfo from "./DepartureInfo";

const FlightDetails = () => {
  return (
    <div className="bg-white shadow-md  rounded-md  p-1 ">
      <FlightHead />
      <hr
        className="w-full
      "
      />
      <div className="p-4">
       

        {/* ----------- */}
        
        <DepartureInfo DepartureText={"Departure from Dhaka"} flightStop={true}/>
         
        <DepartureInfo DepartureText={"Layover at Dubai: 12 hr 20 min "}/>

        <DepartureSegment DepartureText=""/>
      </div>
    </div>
  );
};

export default FlightDetails;
