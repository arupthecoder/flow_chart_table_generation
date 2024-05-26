"use client";
import React, { useState } from "react";

const AlgoDropDown = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedAlgo(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="text-3xl font-bold mb-6">Algo</h1>
      <div className="relative inline-block w-64">
        <select
          value={selectedAlgo}
          onChange={handleSelectionChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Renko">Renko</option>
          <option value="RSI">RSI</option>
          <option value="MACD">MACD</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-5-5h10l-5 5z" />
          </svg>
        </div>
      </div>
      {selectedAlgo && (
        <div className="mt-6 text-xl">
          <p>
            You have selected:{" "}
            <span className="font-semibold">{selectedAlgo}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AlgoDropDown;
