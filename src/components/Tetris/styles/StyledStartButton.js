import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 20px;
  padding: 10px 15px;
  min-height: 30px;
  width: 100%;
  border-radius: 0px;
  border: none;
  color: black;
  background-color: rgb(231, 218, 121);
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  width: auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(173, 216, 114);
  }
`;
