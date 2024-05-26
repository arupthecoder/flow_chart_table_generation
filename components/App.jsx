import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AlgoDropDown from "./AlgoDropDown";
import HistoricalDateRangePicker from "./HistoricalDateRangePicker";
import SymbolSelection from "./symbolSelection";
import MainApp from "./MainApp";

const ItemTypes = {
  COMPONENT: "component",
};

const DraggableComponent = ({ componentType, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COMPONENT,
    item: { componentType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 mb-2 bg-white rounded shadow-md ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

const DropZone = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COMPONENT,
    drop: (item) => onDrop(item.componentType),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 min-h-screen bg-gray-100 border-dashed border-2 ${
        isOver ? "border-blue-500" : "border-gray-300"
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [components, setComponents] = useState([]);

  const handleDrop = (componentType) => {
    setComponents([...components, componentType]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <div className="w-1/4 p-4 bg-gray-200 cursor-pointer">
          <h1 className="text-2xl font-bold mb-4">Toolbar</h1>
          <DraggableComponent componentType="AlgoDropDown">
            <p>AlgoDropDown</p>
          </DraggableComponent>
          <DraggableComponent componentType="HistoricalDateRangePicker">
            <p>Date Range Selector</p>
          </DraggableComponent>
          <DraggableComponent componentType="SymbolSelection">
            <p>Symbol Selector</p>
          </DraggableComponent>
        </div>
        <DropZone onDrop={handleDrop}>
          <h1 className="text-2xl font-bold mb-4">Canvas</h1>
          {components.map((component, index) => {
            switch (component) {
              case "AlgoDropDown":
                return <AlgoDropDown key={index} />;
              case "HistoricalDateRangePicker":
                return <HistoricalDateRangePicker key={index} />;
              case "SymbolSelection":
                return <SymbolSelection key={index} />;
              default:
                return null;
            }
          })}
        </DropZone>
        <MainApp />
      </div>
    </DndProvider>
  );
};

export default App;
