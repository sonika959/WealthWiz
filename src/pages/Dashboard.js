import React from "react";
import Sidebar from "../components/Sidebar";
import "../components/Chatbox.css";


import QuickTopics from "../components/QuickTopics";
import ChatBox from "../components/ChatBox";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="chat-section">
        <ChatBox />
      </div>
      <QuickTopics />
      </div>
  );
};

export default Dashboard;
