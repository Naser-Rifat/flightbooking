import { IoLocationSharp } from "react-icons/io5";

const DepartureSegment = ({
  DepartureText = "",
  terminalName = "",
  terminalNumber = 0,
  lastDepartureSegment=false
}) => {
  return (
    <div className="flex items-center  ">
      <IoLocationSharp className={`inline ${lastDepartureSegment ? "text-blue-500":"text-gray-400"}  text-2xl w-10  `} />
      <div className="ml-3 px-3 py-2 rounded flex justify-between items-center bg-grayLight w-full ">
        <h3 className="text-sm md:text-balance font-medium ">
          {DepartureText}
        </h3>
        <span className="text-xs md:text-sm text-gray-400 ml-auto">
          {terminalNumber!==0 && (
            <span className="font-medium text-gray-500">
              Terminal {terminalNumber}:
            </span>
          )}

          {terminalName}
        </span>
      </div>
    </div>
  );
};

export default DepartureSegment;
