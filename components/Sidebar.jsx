"use client";
import "@/app/globals.css";
import Image from "next/image";
import AlgoDropdown from "./AlgoDropDown";
import HistoricalDateRangePicker from "./HistoricalDateRangePicker";
import SymbolSelection from "./symbolSelection";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Toolbar</h2>
      <ul>
        <li>
          <Image src="/Picture2.png" alt="logo1" width={100} height={100} />

          <AlgoDropdown />
        </li>
        <li>
          <Image src="/Picture3.png" alt="logo1" width={100} height={100} />
          <HistoricalDateRangePicker />
        </li>
        <li>
          <Image src="/Picture4.png" alt="logo1" width={100} height={100} />
          <SymbolSelection />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
