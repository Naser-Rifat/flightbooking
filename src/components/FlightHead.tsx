import { MdArrowForward } from "react-icons/md"
import { BsDot } from "react-icons/bs"

const FlightHead = () => {
  return (
    <div className="px-5 py-3  ">
        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-5">
            <div className="w-6 h-6 flex justify-center items-center text-xs font-medium  rounded-full bg-blue-500 text-white">
              1
            </div>
            <div>
              <h2 className="text-md md:text-lg font-semibold ">
                DAC <MdArrowForward className="inline" /> JFK
              </h2>
              <p className="text-gray-500 text-sm">
                Round Trip <BsDot className="inline text-xl" /> 25 Mar - 4 Apr
                2023 <BsDot className="inline text-xl" /> 1 Stop
              </p>
            </div>
          </div>
          <div>
            <button className="px-2 py-1  bg-blue-50 text-blue-600 font-semibold rounded-full">
              33h 20m
            </button>
          </div>
        </div>
      </div>
  )
}

export default FlightHead