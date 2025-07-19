import React, { useState } from 'react';
import Layout from '../../components/Layout';
import DataTable from '../../components/DataTable';
import transactionData from '../../data/Transactions.js';

const ExpressTransfer = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Remitter Mobile Number:', mobileNumber);
    // Handle money transfer logic here
  };

  const sampleTransactions = transactionData.slice(0, 5);

  const columns = [
    { key: 'txnId', label: 'Txn Id' },
    { key: 'txnDate', label: 'Txn Date' },
    { key: 'service', label: 'Service' },
    { key: 'proName', label: 'Pro Name' },
    { key: 'accountNo', label: 'Account No' },
    { key: 'amount', label: 'Amount' },
    { key: 'wallet', label: 'Wallet' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ];

return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Remitter Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Remitter Mobile Number *
                </label>
                <input
                  type="text"
                  name="remitterMobile"
                  value={mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Transaction Table */}
        <DataTable
          title=""
          columns={columns}
          data={sampleTransactions}
          pageSize={10}
          searchable={true}
          sortable={true}
        />
      </div>
    </Layout>
  );
};

export default ExpressTransfer;
