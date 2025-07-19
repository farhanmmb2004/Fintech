import React, { useState } from "react";
import Layout from "../../components/Layout";

const Water = () => {
  const [selectedBiller, setSelectedBiller] = useState("");

  const handleBillerChange = (e) => {
    setSelectedBiller(e.target.value);
  };

  const handleFetch = () => {
    // Add fetch logic here
    alert(`Fetching bill for: ${selectedBiller}`);
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Form Box */}
        <div className="bg-white p-6 rounded shadow-sm max-w-xl">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">Water</h1>

          <label className="block mb-2 text-sm font-medium text-gray-700">Select Water Board</label>
          <select
            value={selectedBiller}
            onChange={handleBillerChange}
            className="border p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Water Board --</option>
            <option value="Delhi Jal Board">Delhi Jal Board</option>
            <option value="Bangalore Water Supply">Bangalore Water Supply</option>
            <option value="Hyderabad Water Board">Hyderabad Water Board</option>
            {/* Add more boards if needed */}
          </select>

          <button
            onClick={handleFetch}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Fetch Bill
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Water;
