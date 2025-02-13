import styled from "styled-components";
import { colors } from "../../styles";

export const Category = styled.li`
  button {
    display: flex;
    flex-direction: column;
    color: ${colors.black};
    cursor: pointer;

    background: none;
    border: none;

    img {
      width: 100%;
      margin-bottom: 4px;
    }

    &:hover {
      font-weight: 400;
    }
  }
`
