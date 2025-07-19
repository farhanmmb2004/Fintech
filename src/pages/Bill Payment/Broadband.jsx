import React, { useState } from "react";
import Layout from "../../components/Layout";

const Broadband = () => {
  const [selectedISP, setSelectedISP] = useState("");

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="bg-white p-6 rounded shadow-sm max-w-xl">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">Broadband</h1>
          <label className="block mb-2 text-sm font-medium text-gray-700">Select ISP</label>
          <select
            value={selectedISP}
            onChange={(e) => setSelectedISP(e.target.value)}
            className="border p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select ISP --</option>
            <option value="Airtel">Airtel</option>
            <option value="JioFiber">JioFiber</option>
            <option value="BSNL">BSNL</option>
          </select>

          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            Fetch Bill
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Broadband;
