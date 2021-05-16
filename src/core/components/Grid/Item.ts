import styled, {css} from "styled-components";
import chroma from "chroma-js";

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem
  ${({ color = chroma.random().saturate(3) }) => {
    color = color as string;
    return css`
      background-color: ${color};
      color: ${chroma.contrast(color, "black") >= 4 ? "black" : "white"}
      font-size: 18px;
      font-weight: bold;
    `;
}}
`;
export default GridItem