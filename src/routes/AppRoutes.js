import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        {/* Add more routes as you wish */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
