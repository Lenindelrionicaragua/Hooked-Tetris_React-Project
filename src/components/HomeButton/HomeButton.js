import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = ({ className }) => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <button className={className} onClick={goToHomePage}>
      Return
    </button>
  );
};

export default HomeButton;
