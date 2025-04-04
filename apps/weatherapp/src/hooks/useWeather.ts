import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "../_store";

export const useWeather = () => {
  const { city, fetchDataByCity } = useWeatherStore();

  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchDataByCity(city),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
