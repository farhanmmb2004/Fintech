import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Loanemi = () => {
  const [selectedLender, setSelectedLender] = useState('');

  const handleLenderChange = (e) => {
    setSelectedLender(e.target.value);
  };

  const handleFetch = () => {
    // Add fetch logic here
    console.log('Fetching loan EMI for:', selectedLender);
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Form Box */}
        <div className="bg-white p-6 rounded shadow-sm max-w-xl">
          <label className="block mb-2 text-sm font-medium text-gray-700">Select Lender</label>
          <select
            value={selectedLender}
            onChange={handleLenderChange}
            className="border p-2 w-full rounded mb-4"
          >
            <option value="">-- Select Lender --</option>
            <option value="HDFC">HDFC</option>
            <option value="ICICI">ICICI</option>
            <option value="Axis Bank">Axis Bank</option>
            <option value="Bajaj Finserv">Bajaj Finserv</option>
            {/* Add more lenders as needed */}
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

export default Loanemi;
