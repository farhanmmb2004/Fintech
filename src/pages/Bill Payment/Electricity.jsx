import { useState } from "react";
import Layout from '../../components/Layout';

export default function Electricity() {
  const [selectedBoard, setSelectedBoard] = useState("");

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
  };

  const handleFetch = () => {
    // Handle fetch logic here
    console.log("Fetching bill for:", selectedBoard);
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="bg-white p-6 rounded shadow-sm max-w-xl">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Board
          </label>
          <select
            value={selectedBoard}
            onChange={handleBoardChange}
            className="border p-2 w-full rounded mb-4"
          >
            <option value="">-- Select Board --</option>
            <option value="UPPCL (Urban)">UPPCL (Urban)</option>
            <option value="UPPCL (Rural)">UPPCL (Rural)</option>
            <option value="DVVNL">DVVNL</option>
            <option value="PVVNL">PVVNL</option>
            <option value="MVVNL">MVVNL</option>
            <option value="NPCL">NPCL</option>
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
}

