import React from "react";
import { StyledCell } from "../Tetris/styles/StyledCell.js";
import { TETROMINOS } from "../../tetrominos.js";

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
);

export default React.memo(Cell);
