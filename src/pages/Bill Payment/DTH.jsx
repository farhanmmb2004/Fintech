import React from 'react';
import Layout from '../../components/Layout';

const DTH = () => {
  return (
    <Layout>
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Operator</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Airtel TV</option>
                <option>Tata Sky</option>
                <option>Dish TV</option>
                <option>Videocon D2H</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Mobile<span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Mobile number"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Amount<span className="text-red-500">*</span></label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full border rounded px-3 py-2 mr-2"
                />
                <a href="#" className="text-blue-600 text-sm whitespace-nowrap">R-Offer</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
            >
              Recharge
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DTH;
