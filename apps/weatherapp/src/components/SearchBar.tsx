"use client";
import { useEffect, useState } from "react";
import { useWeatherStore } from "../_store";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  const { city, setCity } = useWeatherStore();
  const [searchCity, setSearchCity] = useState(city);
  const [scrolled, setScrolled] = useState(false);

  // Debounced city search update
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchCity.trim()) {
        setCity(searchCity);
      }
    }, 800);

    return () => clearTimeout(debounce);
  }, [searchCity, setCity]);

  // Scroll listener for sticky style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm px-4 py-2 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Search city..."
            className="flex-1 bg-transparent outline-none text-sm sm:text-base text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
