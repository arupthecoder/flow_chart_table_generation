"use client";
import App from "@/components/App";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-100 mx-8">
      <App>
        <Sidebar />
      </App>
    </div>
  );
}
