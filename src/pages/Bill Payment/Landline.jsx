import React, { useState } from "react";
import Layout from "../../components/Layout";

const Landline = () => {
  const [selectedProvider, setSelectedProvider] = useState("");

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="bg-white p-6 rounded shadow-sm max-w-xl">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">Landline</h1>
          <label className="block mb-2 text-sm font-medium text-gray-700">Select Provider</label>
          <select
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
            className="border p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Landline Provider --</option>
            <option value="BSNL">BSNL</option>
            <option value="Airtel">Airtel</option>
          </select>

          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            Fetch Bill
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Landline;
