import { useState, useEffect, useCallback } from "react";

import reactHooksMessages from "../data/reactHooksMessages";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * reactHooksMessages.length);
    const randomMessage = reactHooksMessages[randomIndex]?.content || "";

    console.log("getRandomMessage - Random message:", randomMessage);

    return randomMessage;
  };

  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return {
    score,
    setScore,
    rows,
    setRows,
    level,
    setLevel,
    getRandomMessage,
    rowsCleared,
  };
};
