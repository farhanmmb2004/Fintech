import React from 'react';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import DataTable from './DataTable';
import { Calendar, Download } from 'lucide-react';
import  transactionData  from '../data/Transactions';
const Overview = () => {
  const incomeData = [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 1800 },
    { name: 'Wed', value: 1600 },
    { name: 'Thu', value: 2200 },
    { name: 'Fri', value: 1900 },
    { name: 'Sat', value: 2500 },
    { name: 'Sun', value: 1400 }
  ];

  const spendingData = [
    { name: 'Utilities', value: 19.5 },
    { name: 'Groceries', value: 28.9 },
    { name: 'Rent', value: 29.5 },
    { name: 'Entertainment', value: 5 },
    { name: 'Others', value: 17.1 }
  ];

  const goalProgress = [
    {
      title: "New Car Purchase",
      target: "$15,000",
      current: "$8,500",
      progress: 56.7,
      description: "Save $15,000 for a down payment on a new car within three years."
    },
    {
      title: "Pay Off Credit Card Debt",
      target: "$5,000",
      current: "$3,200",
      progress: 64,
      description: "Eliminate $5,000 in credit card debt within the next six months."
    },
    {
      title: "Vacation Fund",
      target: "$2,500",
      current: "$1,200",
      progress: 48,
      description: "Save $2,500 for a family vacation next summer."
    }
  ];

  // Transaction table data
  const transactionColumns = [
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
  <div className="p-6 space-y-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Today is 15 July 2025</p>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-700 dark:text-gray-200">Jul 2 - Today 2025</span>
        </div>
        <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700">
          <Download className="w-4 h-4 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Income" value="$132,142" color="green" />
      <StatCard title="Total Spent" value="$30,671" color="blue" />
      <StatCard title="Card Balance" value="$2,301" change="+2.5%" trend="up" color="green" />
      <StatCard title="Savings" value="$101,471" change="+12.3%" trend="up" color="yellow" />
    </div>

    {/* Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Compare Net Income and Spent" type="bar" data={incomeData} />
      <ChartCard title="Spending Breakdown" type="pie" data={spendingData} />
    </div>

    {/* Recent Transactions Table */}
    <DataTable
      title="Recent Transactions"
      columns={transactionColumns}
      data={transactionData}
      pageSize={10}
      searchable={true}
      sortable={true}
    />

    {/* Goals Section */}
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Goals</h3>

      <div className="space-y-6">
        {goalProgress.map((goal, index) => (
          <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white">{goal.title}</h4>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {goal.current} / {goal.target}
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Achievement Badge */}
    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 border border-green-200 dark:border-green-600 rounded-xl p-6">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-4">
          <span className="text-green-600 dark:text-green-300 text-xl">🎉</span>
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Great Job!</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            You've used 6 times this month to manage your money. Great Job!
          </p>
        </div>
      </div>
    </div>
  </div>
);
}
export default Overview;