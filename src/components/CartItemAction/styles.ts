import styled from "styled-components"
import { colors } from "../../styles"

export const Action = styled.div<{ mode: 'aside' | 'full' }>`
  height: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.mode === 'aside' ? `127px 2fr 1fr`: `2fr 2fr 1fr`};
  border: ${props => props.mode === 'full' && `.8px solid ${colors.lightGrey}`};
  border-top: ${props => props.mode === 'aside' && `.8px solid ${colors.lightGrey}`};
  background-color: ${colors.white};

  button {
    border: none;
  }

  button, select {
    background: none;
    font-weight: 200;
    font-size: 12px;
    color: ${colors.black};
    cursor: pointer;

    text-align: center;
    text-align-last: center;

    img {
      height: 8px;
      width: 8px;
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  padding: 0 8px;
`

export const Size = styled.select`
  text-align: center;
  border: none;
  border-right: .8px solid ${colors.lightGrey};
  border-left: .8px solid ${colors.lightGrey};

  &:active,
  &:focus {
    border: none;
    outline: none;
    border-right: .8px solid ${colors.lightGrey};
    border-left: .8px solid ${colors.lightGrey};
  }
`
