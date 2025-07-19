import React, { useState } from 'react';
import DataTable from '../../components/DataTable';
import Layout from '../../components/Layout';
import transactionData from '../../data/Transactions.js';
const Prepaid = () => {
  const [form, setForm] = useState({
    operator: '',
    mobile: '',
    amount: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRecharge = () => {
    // Recharge logic here
    console.log('Recharging with', form);
  };

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

  const data = transactionData.slice(0,3); // Replace with actual data or API

 return (
  <Layout>
    <div className="p-4 space-y-6">
      {/* Form */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm dark:shadow-gray-700/30 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            name="operator"
            value={form.operator}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          >
            <option value="" className="dark:bg-gray-700">Select Operator</option>
            <option value="Airtel" className="dark:bg-gray-700">Airtel</option>
            <option value="Jio" className="dark:bg-gray-700">Jio</option>
            <option value="Vi" className="dark:bg-gray-700">Vi</option>
          </select>

          <input
            name="mobile"
            type="text"
            placeholder="Mobile"
            value={form.mobile}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />

          <button
            onClick={handleRecharge}
            className="bg-blue-700 dark:bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
          >
            Recharge
          </button>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm dark:shadow-gray-700/30">
        <DataTable
          title="Recharge History"
          columns={columns}
          data={data}
        />
      </div>
    </div>
  </Layout>
);

};

export default Prepaid;