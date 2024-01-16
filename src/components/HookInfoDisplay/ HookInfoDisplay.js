import React from "react";

const HookInfoDisplay = ({ message }) => {
  return (
    <div className="main-container">
      <div className="hook-info-display">
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default HookInfoDisplay;
