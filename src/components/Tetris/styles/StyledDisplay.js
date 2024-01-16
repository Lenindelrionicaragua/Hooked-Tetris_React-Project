import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #white;
  min-height: 30px;
  width: 100%;
  border-radius: 0px;
  color: white;
  text-shadow: ${(props) =>
    props.gameOver
      ? "0 0 10px #D49BC4, 0 0 20px #D7C8E5, 0 0 20px #D7C8E5"
      : "0 0 5px #ACC1EC, 0 0 10px #4D82DC, 0 0 20px #4D82DC"};

  background: #acc1ec;

  font-size: 0.8rem;
`;
