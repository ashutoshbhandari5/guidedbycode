import React, { useMemo } from "react";
import { BookOpenCheck, HandHelping, BriefcaseBusiness, CheckCircle } from "lucide-react";


const Card: React.FC<{ title: string; content: string; bullets: string[], icon: string }> = ({
  title,
  content,
  bullets,
  icon
}) => {

 const Icon = useMemo(() => {
    switch (icon) {
      case "book":
        return BookOpenCheck;
      case "heart":
        return HandHelping;
      case "briefcase":
        return BriefcaseBusiness;
      default:
        return null;
    }
  }, [icon]);
    return (
    <div className="border border-gray-250 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
      <div className="mb-4">
        {Icon && <Icon className="w-8 h-8 text-blue-500" />} 
      </div>      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
        <span>{title}</span>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8">{content}</p>
         <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-gray-600 dark:text-gray-300">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Card;
