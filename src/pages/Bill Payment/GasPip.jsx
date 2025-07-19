import React, { useState } from "react";
import Layout from "../../components/Layout";

const GasPipe = () => {
  const [selectedBoard, setSelectedBoard] = useState("");

return (
  <Layout>
    <div className="p-4 space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-sm dark:shadow-gray-700/30 max-w-xl">
        <h1 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Gas Pipeline</h1>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Select Gas Board
        </label>
        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        >
          <option value="" className="dark:bg-gray-700">-- Select Gas Board --</option>
          <option value="IGL" className="dark:bg-gray-700">IGL</option>
          <option value="MGL" className="dark:bg-gray-700">MGL</option>
          <option value="Adani Gas" className="dark:bg-gray-700">Adani Gas</option>
        </select>

        <button className="bg-blue-700 dark:bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">
          Fetch Bill
        </button>
      </div>
    </div>
  </Layout>
);
};

export default GasPipe;
