import React from "react";
import { Avatar } from "@mui/material";
import ChatHistory from "./ChatHistory";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <Avatar src="/profile-pic.jpg" />
        <h3>John Doe</h3>
        <p>Member since 12/31/2023</p>
      </div>
      <div className="favorites">
        <h4>⭐ Favorite Companies</h4>
        <ul>
          <li>Apple Inc. ⭐</li>
          <li>Microsoft ⭐</li>
          <li>Tesla</li>
          <li>Amazon ⭐</li>
          <li>Google</li>
          <li>Meta</li>
        </ul>
      </div>
      <div className="chat-history">
        <ChatHistory />
        
      </div>
    </div>
  );
};

export default Sidebar;
