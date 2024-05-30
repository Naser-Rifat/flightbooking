
interface FlightStopProps {
    message: string;
    icon: React.ReactNode;
  }

const FlightStop = ({ message, icon }:FlightStopProps) => {
  return (
    <div className="bg-orange-100 text-xs text-gray-700 px-4 py-2 rounded-md mb-6 flex items-center">
      {icon}
      <p className="ml-2">{message}</p>
    </div>
  );
};

export default FlightStop;
