import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface LocationCardProps {
  name: string;
  region: string;
  country: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  region,
  country,
}) => (
  <div className="mt-6 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-4 max-w-md mx-auto hover:scale-[1.02] cursor-default">
    {/* Icon with animated hover */}
    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-3 rounded-full shadow-md transition-transform duration-300 hover:rotate-6 hover:scale-110">
      <MapPinIcon className="h-6 w-6" />
    </div>

    {/* Text content */}
    <div className="text-left">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
        {name || "Unknown Location"}
      </h3>
      <p className="text-sm text-gray-500 leading-tight">
        {region || "N/A"}, {country || "N/A"}
      </p>
    </div>
  </div>
);

export default LocationCard;
