import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const FilterAside = styled.div<{ filterOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 96px 32px 0;
  background-color: ${colors.white};
  text-transform: uppercase;

  transition: transform .3s ease-in-out;
  transform: ${props => props.filterOpen ? 'translateX(0)' : 'translateX(100%)'};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  select {
    background-color: transparent;
    padding: 2px;
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
  color: ${colors.lightGrey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
`

export const OptionOpen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;

  input.input-price {
    width: 100%;
    text-align: end;
    padding: 0;
  }
`

