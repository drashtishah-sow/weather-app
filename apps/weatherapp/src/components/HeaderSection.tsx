import React from "react";
import Image from "next/image";

interface HeaderSectionProps {
  lastUpdated: string;
  conditionIcon: string;
  conditionText: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  lastUpdated,
  conditionIcon,
  conditionText,
}) => (
  <div className="flex flex-col sm:flex-row items-center sm:justify-between">
    <div className="text-center sm:text-left">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        Weather Update
      </h2>
      <p className="text-xs sm:text-sm text-gray-600">
        Last updated: {lastUpdated || "N/A"}
      </p>
    </div>
    <Image
      src={conditionIcon ? `https:${conditionIcon}` : "/fallback-icon.png"}
      alt={conditionText || "Weather condition"}
      width={64}
      height={64}
      className="w-14 h-14 sm:w-16 sm:h-16 mt-4 sm:mt-0"
    />
  </div>
);

export default HeaderSection;
