import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

export default Grid