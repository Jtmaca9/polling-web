import React from "react";
import Poll from "@/models/Poll";

interface PollTableProps {
  polls: Poll[];
  handleRowClick: (poll: Poll) => void;
}

function PollTable({ polls, handleRowClick }: PollTableProps) {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg bg-white">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
              Title
            </th>
            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700 hidden lg:table-cell">
              Author
            </th>
            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700 hidden lg:table-cell">
              Location
            </th>
            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700 hidden xl:table-cell">
              Date
            </th>
            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
              Status
            </th>
            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700 hidden sm:table-cell">
              Voted
            </th>
            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700 hidden sm:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {polls.map((poll) => (
            <tr
              key={poll.id}
              className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={() => handleRowClick(poll)}
            >
              <td className="py-3 px-4 border-b max-w-xs truncate">
                {poll.title}
              </td>
              <td className="py-3 px-4 border-b max-w-xs truncate hidden lg:table-cell">
                {poll.author}
              </td>
              <td className="py-3 px-4 border-b max-w-xs truncate hidden lg:table-cell">
                {poll.location}
              </td>
              <td className="py-3 px-4 border-b max-w-xs truncate hidden xl:table-cell">
                {poll.date}
              </td>
              <td className="py-3 px-4 border-b max-w-xs">
                <span
                  className={`px-2 py-1 rounded-full text-white font-bold ${
                    poll.status === "Open" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {poll.status}
                </span>
              </td>
              <td className="py-3 px-4 border-b max-w-2xs hidden sm:table-cell">
                <div className="flex justify-center">
                  <input
                    type="checkbox"
                    checked={poll.votedOn}
                    readOnly
                    className="form-checkbox h-3 w-3 text-blue-600"
                  />
                </div>
              </td>
              <td className="py-3 px-4 border-b hidden sm:table-cell">
                <div
                  className="flex justify-center"
                  onClick={() => handleRowClick(poll)}
                >
                  <button className="text-blue-600 hover:text-blue-800">
                    ➔
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PollTable;
