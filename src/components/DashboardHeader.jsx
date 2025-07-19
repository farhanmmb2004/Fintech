// components/DashboardHeader.jsx
import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate breadcrumb parts
  const parts = pathname.split("/").filter(Boolean);
  const pageName = parts[parts.length - 1]?.replace(/-/g, " ") || "Dashboard";

  return (
    <div className="p-3 bg-white border border-gray-200 shadow-sm rounded-md">
  <h1 className="text-lg font-semibold mb-2">Dashboard</h1>
  <p className="text-sm text-gray-600">
    Home
    {parts.map((part, index) => (
      <span
        key={index}
        className="text-blue-600 hover:underline cursor-pointer"
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
