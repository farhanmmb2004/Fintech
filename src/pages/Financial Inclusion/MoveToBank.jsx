import React from 'react';
import Layout from '../../components/Layout';
import DataTable from '../../components/DataTable';

const MoveToBank = () => {
  const bankData = [
    {
      holderName: "UWAISH HASHMI S O AQEEL AHMAD HASHMI",
      bankName: "UNION BANK OF INDIA",
      accountNo: "559302010211155",
      ifsc: "UBIN0550451",
      mobile: "8840302453",
      email: "uwaishji@gmail.com",
    },
    {
      holderName: "Rohit Agrawal",
      bankName: "HDFC Bank",
      accountNo: "0355105002272",
      ifsc: "HDFC0004355",
      mobile: "9322906135",
      email: "rohitag.mumbai@gmail.com",
    },
    {
      holderName: "Rohit Agrawal",
      bankName: "BANK OF INDIA",
      accountNo: "008518210000163",
      ifsc: "BKID0000085",
      mobile: "9322906135",
      email: "rohitag.mumbai@gmail.com",
    }
  ];

  const columns = [
    { key: 'holderName', label: 'A/C Holder Name' },
    { key: 'bankName', label: 'Bank Name' },
    { key: 'accountNo', label: 'A/C Number' },
    { key: 'ifsc', label: 'IFSC Code' },
    { key: 'mobile', label: 'Mobile No' },
    { key: 'email', label: 'E Mail' },
    {
      key: 'transfer',
      label: 'Transfer',
      render: (_, row) => (
        <button
          onClick={() => alert(`Transferring to ${row.holderName}`)}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Transfer
        </button>
      ),
    }
  ];

return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <DataTable
          title="Payout Bank"
          columns={columns}
          data={bankData}
          pageSize={10}
          searchable={true}
          sortable={true}
        />

        {/* Add Bank Button */}
        <div className="flex justify-end mt-4">
          <button className="px-5 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-sm">
            Add Bank
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MoveToBank;
