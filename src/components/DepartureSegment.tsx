import { IoLocationSharp } from "react-icons/io5"

const DepartureSegment = ({DepartureText=""}) => {
  return (
    <div className="flex items-center  ">
        <IoLocationSharp className="inline text-gray-400 text-2xl w-10  " />
        <div className="ml-3 px-3 py-2 rounded flex justify-between items-center bg-grayLight w-full ">
          <h3 className="text-sm md:text-balance font-medium ">
            {DepartureText}
          </h3>
          <span className="text-xs md:text-sm text-gray-400 ml-auto">
            Terminal 1: Hazrat Shahjalal International Airport
          </span>
        </div>
      </div>
  )
}

export default DepartureSegment