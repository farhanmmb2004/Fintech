import React, { useState } from "react";
import Layout from "../../components/Layout";

const CableTV = () => {
  const [selectedOperator, setSelectedOperator] = useState("");

  return (
    <Layout>
      <div className="p-4 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-sm dark:shadow-gray-900/20 max-w-xl border border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Cable TV</h1>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Select Cable Operator</label>
          <select
            value={selectedOperator}
            onChange={(e) => setSelectedOperator(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">-- Select Operator --</option>
            <option value="Hathway">Hathway</option>
            <option value="Den">Den</option>
            <option value="Siti">Siti</option>
          </select>

          <button className="bg-blue-700 dark:bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200">
            Fetch Bill
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CableTV;