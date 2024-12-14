import styled from "styled-components";
import { breakpoints, Btn, colors } from "../../styles";

type FilterProps = {
  $isopen: boolean
}

type PaginationProps = {
  $percentage: number
}

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
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  cursor: pointer;
`

export const Pagination = styled.div<PaginationProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  ${Btn} {
    font-size: .8em;
    background: background: linear-gradient(to right, ${colors.black}) ${props => props.$percentage}%, ${colors.white} 0%);
  }
`

export const NoResult = styled.div`
  width: 70%;
  margin: 0 auto;
`

export const FilterOpen = styled.div<FilterProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 96px 32px 0;
  text-transform: uppercase;
  background-color: ${colors.white};

  transition: transform .3s ease-in-out;
  transform: ${props => props.$isopen ? 'translateX(0)' : 'translateX(100%)'};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  select {
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ButtonRow = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const OptionOpen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: .7em;
  font-weight: 200;

  input.input-price {
    width: 100%;
    text-align: end;
    padding: 0;
  }
`

