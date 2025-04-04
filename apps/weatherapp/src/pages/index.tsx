import React from "react";
import Weather from "../components/Weather";
import ReactQueryProvider from "../../utils/providers/ReactQueryProvider";
import SearchBar from "@/components/SearchBar";

const Home: React.FC = () => {
  return (
    <ReactQueryProvider>
      <div className="max-w-2xl mx-auto mt-12 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
        <SearchBar />
        <Weather />
      </div>
    </ReactQueryProvider>
  );
};

export default Home;
