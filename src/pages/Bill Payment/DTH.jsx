import React from 'react';
import Layout from '../../components/Layout';

const DTH = () => {
 return (
  <Layout>
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/30 p-6 max-w-md">
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
              Operator
            </label>
            <select className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
              <option>Airtel TV</option>
              <option>Tata Sky</option>
              <option>Dish TV</option>
              <option>Videocon D2H</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
              Mobile<span className="text-red-500 dark:text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-900 dark:text-gray-100">
              Amount<span className="text-red-500 dark:text-red-400">*</span>
            </label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Amount"
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 mr-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm whitespace-nowrap">
                R-Offer
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 dark:bg-blue-800 text-white py-2 rounded hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
          >
            Recharge
          </button>
        </form>
      </div>
    </div>
  </Layout>
);
}
export default DTH;