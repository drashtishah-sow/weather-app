import React from "react";

interface MainWeatherInfoProps {
  condition: string;
  tempC: number;
  tempF: number;
}

const MainWeatherInfo: React.FC<MainWeatherInfoProps> = ({
  condition,
  tempC,
  tempF,
}) => {
  const displayTempC = tempC !== undefined ? `${tempC}°C` : "N/A";
  const displayTempF = tempF !== undefined ? `${tempF}°F` : "N/A";

  return (
    <div className="mt-6 text-center animate-fade-in">
      <p className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wide mb-1">
        {condition || "N/A"}
      </p>
      <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        {displayTempC} / {displayTempF}
      </p>
    </div>
  );
};

export default MainWeatherInfo;
