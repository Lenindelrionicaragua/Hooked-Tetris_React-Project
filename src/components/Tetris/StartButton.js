import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback, isGameStarted }) => (
  <StyledStartButton onClick={callback}>
    {isGameStarted ? "Restart Game" : "Start Game"}
  </StyledStartButton>
);

export default StartButton;
