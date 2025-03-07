import React from "react";
import Sidebar from "../components/Sidebar";
import DisplayChat from "../components/DisplayChat";
import NewChat from "../components/NewChat";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main chat area */}
      <div className="flex flex-col flex-1">
        <DisplayChat />
        <NewChat />
      </div>
    </div>
  );
};

export default Home;
