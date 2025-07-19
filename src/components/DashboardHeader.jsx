// components/DashboardHeader.jsx
import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate breadcrumb parts
  const parts = pathname.split("/").filter(Boolean);
  const pageName = parts[parts.length - 1]?.replace(/-/g, " ") || "Dashboard";

 return (
    <div className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-md">
      <h1 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        Dashboard
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Home
        {parts.map((part, index) => (
          <span
            key={index}
            className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            {" > "}
            {part.replace(/-/g, " ")}
          </span>
        ))}
      </p>
    </div>
  );
};

export default DashboardHeader;