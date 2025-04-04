import { create } from 'zustand';

interface WeatherData {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    vis_km: number;
    uv: number;
  }
  
  interface States {
    city: string;
    setCity: (newCity: string) => void;
    data: WeatherData | null;
    fetchDataByCity: (city: string) => Promise<void>;
  }
export const useWeatherStore = create<States>((set) => ({
    data: null,
    city: "Surat", // Default city
    setCity: (newCity) => set({ city: newCity }),
    fetchDataByCity: async (city) => {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`);
            const data = await response.json();
            set({ data: data });
            return data;
        // }
    }
}));
