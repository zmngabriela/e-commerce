import styled from "styled-components";
import { Btn } from "../../styles";

export const Shop = styled.div`
  overflow: hidden;
  button.btn-filter,
  button
  label,
  input {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: .8em;
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
  cursor: pointer;

  ${Btn} {
    font-size: .7em;
  }
`

export const NoResult = styled.div`
  width: 70%;
  margin: 0 auto;
`
