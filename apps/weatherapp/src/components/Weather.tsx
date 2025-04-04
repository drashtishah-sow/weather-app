import React from "react";
import { useWeather } from "@/hooks/useWeather";
import HeaderSection from "./HeaderSection";
import LocationCard from "./LocationCard";
import MainWeatherInfo from "./MainWeatherInfo";
import WeatherDetailCard from "./WeatherDetailCard";

const Weather: React.FC = () => {
  const { data, isLoading, error } = useWeather();
  const weatherData = data?.current ?? {};
  const location = data?.location ?? {};

  const weatherDetails = [
    {
      label: "Feels Like",
      value: `${weatherData?.feelslike_c ?? "N/A"}°C / ${weatherData?.feelslike_f ?? "N/A"}°F`,
    },
    { label: "Humidity", value: `${weatherData?.humidity ?? "N/A"}%` },
    {
      label: "Wind",
      value: `${weatherData?.wind_kph ?? "N/A"} kph (${weatherData?.wind_dir ?? "N/A"})`,
    },
    { label: "Pressure", value: `${weatherData?.pressure_mb ?? "N/A"} mb` },
    { label: "Visibility", value: `${weatherData?.vis_km ?? "N/A"} km` },
    { label: "UV Index", value: weatherData?.uv ?? "N/A" },
  ];

  if (isLoading) {
    return (
      <p className="text-center text-gray-500 text-lg">
        Fetching weather data...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-lg">
        Failed to load weather data. Please try again later.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 py-8 sm:px-8 sm:py-10 bg-gradient-to-br from-white/60 to-blue-100/40 backdrop-blur-md shadow-xl rounded-3xl border border-blue-100">
      <HeaderSection
        lastUpdated={weatherData?.last_updated}
        conditionIcon={weatherData?.condition?.icon}
        conditionText={weatherData?.condition?.text}
      />
      <LocationCard
        name={location?.name}
        region={location?.region}
        country={location?.country}
      />
      <MainWeatherInfo
        condition={weatherData?.condition?.text}
        tempC={weatherData?.temp_c}
        tempF={weatherData?.temp_f}
      />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {weatherDetails.map((detail, index) => (
          <WeatherDetailCard
            key={index}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
