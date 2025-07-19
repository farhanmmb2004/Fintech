// src/pages/Postpaid.jsx
import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Postpaid = () => {
  const [selectedBiller, setSelectedBiller] = useState('');

  const handleBillerChange = (e) => {
    setSelectedBiller(e.target.value);
  };

  const handleFetch = () => {
    if (!selectedBiller) return;
    console.log('Fetching bill for:', selectedBiller);
    // Add API call logic here
  };

  return (
    <Layout>
    <div className="p-4 space-y-6">
      {/* Form Box */}
      <div className="bg-white p-6 rounded shadow-sm max-w-xl">
        <label className="block mb-2 text-sm font-medium text-gray-700">Select Biller</label>
        <select
          value={selectedBiller}
          onChange={handleBillerChange}
          className="border p-2 w-full rounded mb-4"
        >
          <option value="">-- Select Biller --</option>
          <option value="Airtel">Airtel</option>
          <option value="Jio">Jio</option>
          <option value="Vi">Vi</option>
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

export default Postpaid;
