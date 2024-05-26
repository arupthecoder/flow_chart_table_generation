"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const HistoricalDateRangePicker = () => {
  const [dateRanges, setDateRanges] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const addDateRange = () => {
    if (startDate && endDate) {
      setDateRanges([...dateRanges, { id: uuidv4(), startDate, endDate }]);
      setStartDate(null);
      setEndDate(null);
    }
  };

  const removeDateRange = (id) => {
    setDateRanges(dateRanges.filter((range) => range.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <h1 className="text-3xl font-bold mb-6">Historical</h1>
      <div className="flex flex-col items-center mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={addDateRange}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Date Range
        </button>
      </div>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Selected Date Ranges</h2>
        {dateRanges.length === 0 ? (
          <p>No date ranges selected</p>
        ) : (
          <ul>
            {dateRanges.map((range) => (
              <li
                key={range.id}
                className="mb-2 flex justify-between items-center"
              >
                <span>
                  {range.startDate.toLocaleDateString()} -{" "}
                  {range.endDate.toLocaleDateString()}
                </span>
                <button
                  onClick={() => removeDateRange(range.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoricalDateRangePicker;

// HistoricalDateRangePicker
