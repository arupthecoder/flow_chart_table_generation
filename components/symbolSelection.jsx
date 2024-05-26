"use client";
import React, { useState } from "react";

const SymbolSelection = () => {
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [currentSymbol, setCurrentSymbol] = useState("");

  const symbols = ["USDJPY", "EURUSD", "AAPL", "TCS", "INFY", "ITC"];

  const handleSelectionChange = (event) => {
    setCurrentSymbol(event.target.value);
  };

  const addSymbol = () => {
    if (currentSymbol && !selectedSymbols.includes(currentSymbol)) {
      setSelectedSymbols([...selectedSymbols, currentSymbol]);
      setCurrentSymbol("");
    }
  };

  const removeSymbol = (symbol) => {
    setSelectedSymbols(selectedSymbols.filter((s) => s !== symbol));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Symbols</h1>
      <div className="flex flex-col items-center mb-4">
        <div className="relative inline-block w-64 mb-4">
          <select
            value={currentSymbol}
            onChange={handleSelectionChange}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Select a symbol
            </option>
            {symbols.map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
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
        <button
          onClick={addSymbol}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Symbol
        </button>
      </div>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Selected Symbols</h2>
        {selectedSymbols.length === 0 ? (
          <p>No symbols selected</p>
        ) : (
          <ul>
            {selectedSymbols.map((symbol) => (
              <li
                key={symbol}
                className="mb-2 flex justify-between items-center"
              >
                <span>{symbol}</span>
                <button
                  onClick={() => removeSymbol(symbol)}
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

export default SymbolSelection;

// SymbolSelection
