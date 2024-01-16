import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  border-radius: 0px;
  background: ${(props) =>
    props.type === 0
      ? "rgba(230, 230, 250, 0.2)"
      : `rgba(${props.color}, 0.8)`};
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
