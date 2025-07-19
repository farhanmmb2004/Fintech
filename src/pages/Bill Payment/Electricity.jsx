import { useState } from "react";
import Layout from '../../components/Layout';

export default function Electricity() {
  const [selectedBoard, setSelectedBoard] = useState("");

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
  };

  const handleFetch = () => {
    // Handle fetch logic here
    console.log("Fetching bill for:", selectedBoard);
  };

 return (
  <Layout>
    <div className="p-4 space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-sm dark:shadow-gray-700/30 max-w-xl">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Select Board
        </label>
        <select
          value={selectedBoard}
          onChange={handleBoardChange}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        >
          <option value="" className="dark:bg-gray-700">-- Select Board --</option>
          <option value="UPPCL (Urban)" className="dark:bg-gray-700">UPPCL (Urban)</option>
          <option value="UPPCL (Rural)" className="dark:bg-gray-700">UPPCL (Rural)</option>
          <option value="DVVNL" className="dark:bg-gray-700">DVVNL</option>
          <option value="PVVNL" className="dark:bg-gray-700">PVVNL</option>
          <option value="MVVNL" className="dark:bg-gray-700">MVVNL</option>
          <option value="NPCL" className="dark:bg-gray-700">NPCL</option>
        </select>

        <button
          onClick={handleFetch}
          className="bg-blue-700 dark:bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
        >
          Fetch Bill
        </button>
      </div>
    </div>
  </Layout>
);
}