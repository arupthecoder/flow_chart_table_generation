"use client";
import React, { useState } from "react";
import AlgoDropDown from "./AlgoDropDown";
import HistoricalDateRangePicker from "./HistoricalDateRangePicker";
import SymbolSelection from "./symbolSelection";
import DataTable from "./DataTable";

const data = [
  {
    id: 1,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "1Hr",
    Symbol: "EURUSD",
  },
  {
    id: 2,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "1m",
    Symbol: "EURUSD",
  },
  {
    id: 3,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "5m",
    Symbol: "EURUSD",
  },
  {
    id: 4,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "5m",
    Symbol: "EURUSD",
  },
  {
    id: 5,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "5m",
    Symbol: "EURUSD",
  },
  {
    id: 6,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "5m",
    Symbol: "EURUSD",
  },
  {
    id: 7,
    Algo: "Renko",
    start_date: "05/08/2024",
    end_date: "05/08/2024",
    interval: "5m",
    Symbol: "EURUSD",
  },
];

const MainApp = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const [dateRanges, setDateRanges] = useState([]);
  const [selectedSymbols, setSelectedSymbols] = useState([]);

  const generateTable = () => {
    const combinations = [];
    for (const symbol of selectedSymbols) {
      for (const range of dateRanges) {
        combinations.push({
          Algo: selectedAlgo,
          Symbol: symbol,
          StartDate: range.startDate.toLocaleDateString(),
          EndDate: range.endDate.toLocaleDateString(),
        });
      }
    }
    console.table(combinations);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ml-64  bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Flow Chart</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <AlgoDropDown
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
        />
        <HistoricalDateRangePicker
          dateRanges={dateRanges}
          setDateRanges={setDateRanges}
        />
        <SymbolSelection
          selectedSymbols={selectedSymbols}
          setSelectedSymbols={setSelectedSymbols}
        />
      </div>
      <button
        onClick={generateTable}
        className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Save/Generate Table
      </button>
      <div className="container mx-auto p-4">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default MainApp;
