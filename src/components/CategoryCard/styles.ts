import styled from "styled-components";

export const Category = styled.li`
  button {
    display: flex;
    flex-direction: column;
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
