import Layout from '../../components/Layout';
import transactionData from '../../data/Transactions.js';
import React, { useState } from 'react';
import DataTable from '../../components/DataTable';
const Aeps = () => {
  const [formData, setFormData] = useState({
    bank: '',
    customerNo: '',
    aadharNo: '',
    amount: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Sample data for the table
  const sampleTransactions = transactionData.slice(0,5);
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
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Bank Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bank
              </label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">--Select--</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="pnb">Punjab National Bank</option>
              </select>
            </div>

            {/* Customer No */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Customer No
              </label>
              <input
                type="text"
                name="customerNo"
                value={formData.customerNo}
                onChange={handleInputChange}
                placeholder="Customer No"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Aadhar No */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Aadhar No
              </label>
              <input
                type="text"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleInputChange}
                placeholder="Aadhar Number"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                I am providing my consent to Saral Technology Services Private Limited for using my Aadhar Number and 
                Finger Print for authorization of this transaction which is being initiated by the Saral Technology Services 
                Private Limited Agent for balance enquiry / cash withdrawal / Mini statement.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              Balance Enquiry
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
            >
              Mini Statement
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-purple-600 dark:bg-purple-700 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
            >
              Cash Withdrawal
            </button>
          </div>
        </form>
      </div>

      {/* Transaction Table */}
      <DataTable
        title="AEPS Transactions"
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

export default Aeps;