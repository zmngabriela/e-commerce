import styled from "styled-components";

import { Btn, colors } from "../../styles";

export const CartSumary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div.payment-methods {
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    img {
      width: 32px;
    }
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: .8px solid ${colors.black};

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-weight: 700;
  }

  .price-calc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.black};
  }

  .line-through {
    text-decoration: line-through;
    margin-right: 8px;
  }
`

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button.voucher {
    display: flex;
    background-color: transparent;
    color: ${colors.black};
    border: none;
    text-transform: uppercase;
    font-size: 12px;
  }

  button,
  ${Btn} {
    font-weight: 200;

    &.checkout {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }

  input {
    font-size: 13px;
  }
`
