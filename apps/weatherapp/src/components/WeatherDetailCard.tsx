import React from "react";

interface WeatherDetailCardProps {
  label: string;
  value: string | number;
}

const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
  label,
  value,
}) => (
  <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 w-31 sm:w-44 border border-gray-100">
    <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">
      {label}
    </p>
    <p className="text-lg sm:text-xl font-semibold text-gray-800 mt-1">
      {value}
    </p>
  </div>
);

export default WeatherDetailCard;
