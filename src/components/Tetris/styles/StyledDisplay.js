import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid rgb(231, 218, 121, 0.8);
  min-height: 30px;
  width: 100%;
  border-radius: 0px;
  color: black;
  text-shadow: ${(props) =>
    props.gameOver
      ? "0 0 10px #FEFEFE, 0 0 20px #FEFEFE, 0 0 20px #FEFEFE"
      : "0 0 5px #FEFEFE, 0 0 10px #FEFEFE, 0 0 20px #FEFEFE"};

  background: rgb(254, 254, 254, 0.5);

  font-size: 0.8rem;
`;
