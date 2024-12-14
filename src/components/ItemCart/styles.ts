import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../styles";

export const Product = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  margin-bottom: 18px;
  border: .8px solid ${colors.black};

  text-transform: uppercase;
  font-size: .8em;
  font-weight: 200;
`

export const LinkToProduct = styled(Link)`
  cursor: pointer;

  img {
    height: 119px;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  h3 {
    font-weight: 200;
    margin: 0;
  }
`

export const Action = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  border: .8px solid ${colors.lightGrey};

  button, select {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 200;
    cursor: pointer;

    img {
      height: 8px;
    }
  }

  button {
    border: none;
  }

  select {
    text-align: center;
    padding: 0 70px;
    appearance: none;
    border-radius: 0;
    border: none;
    border-right: .8px solid ${colors.lightGrey};
    border-left: .8px solid ${colors.lightGrey};
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: none;
      border: 1px solid ${colors.lightGrey};
    }

    &:active {
      border: 1px solid ${colors.lightGrey};
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 16px;
`

export const Size = styled.select`
  display: flex;
  flex: 1;
`
