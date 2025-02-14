import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  font-size: 12px;
  text-transform: uppercase;

  div.secure {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 12px;
      height: 12px;
    }
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  &.three-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const CheckoutInfo = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 0 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

export const PurchaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: .8px solid ${colors.black};
`

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  border-bottom: .8px solid ${colors.black};

  img {
    max-height: 178px;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;

    img {
      width: 100%;
      max-height: none;
    }
  }
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-weight: 700;
  }
`

export const PriceCalc = styled.div`
  flex-direction: column;
  gap: 8px;
  padding-bottom: 20px;
  border-bottom: .8px solid ${colors.black};

  .line-through {
    text-decoration: line-through;
  }
`

