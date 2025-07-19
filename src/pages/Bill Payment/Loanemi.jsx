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
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-sm dark:shadow-gray-700/30 max-w-xl">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Select Lender
        </label>
        <select
          value={selectedLender}
          onChange={handleLenderChange}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        >
          <option value="" className="dark:bg-gray-700">-- Select Lender --</option>
          <option value="HDFC" className="dark:bg-gray-700">HDFC</option>
          <option value="ICICI" className="dark:bg-gray-700">ICICI</option>
          <option value="Axis Bank" className="dark:bg-gray-700">Axis Bank</option>
          <option value="Bajaj Finserv" className="dark:bg-gray-700">Bajaj Finserv</option>
          {/* Add more lenders as needed */}
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
};

export default Loanemi;
