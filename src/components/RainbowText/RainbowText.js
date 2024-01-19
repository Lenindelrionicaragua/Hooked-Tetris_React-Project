import React from "react";

const RainbowText = ({ text }) => {
  const getRandomColor = () => {
    const colors = [
      "#E8DA7A",
      "#9E90DF",
      "#95D14B",
      "#CFD4DA",
      "#E1ABD8",
      "#6F7FDE",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <span style={{ color: getRandomColor() }}>
      {Array.from(text).map((letter, index) => (
        <span key={index} style={{ color: getRandomColor() }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default RainbowText;
