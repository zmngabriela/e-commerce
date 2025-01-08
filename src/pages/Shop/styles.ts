import styled from "styled-components";
import { Btn, colors } from "../../styles";

export const Shop = styled.div`
  overflow: hidden;
  button.btn-filter,
  button
  label,
  input {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 200;
    cursor: pointer;
  }

  img {
    width: 12px;
  }
`

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`

export const Pagination = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 8px;
  margin-top: 80px;

  ${Btn} {
    font-size: 12px;
    border: none;

    &.active {
      background-color: ${colors.black};
      color: ${colors.white};
    }

    &:disabled {
      background-color: transparent;
      color: ${colors.lightGrey};
      cursor: auto;
    }
  }
`

export const NoResult = styled.div`
  width: 70%;
  margin: 0 auto;
`
