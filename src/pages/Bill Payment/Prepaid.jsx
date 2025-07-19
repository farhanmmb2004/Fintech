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
      <div className="bg-white p-4 rounded shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            name="operator"
            value={form.operator}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Operator</option>
            <option value="Airtel">Airtel</option>
            <option value="Jio">Jio</option>
            <option value="Vi">Vi</option>
          </select>

          <input
            name="mobile"
            type="text"
            placeholder="Mobile"
            value={form.mobile}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <button
            onClick={handleRecharge}
            className="bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800 transition"
          >
            Recharge
          </button>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white p-4 rounded shadow-sm">
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
