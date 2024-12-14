import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Purchase = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .payment-methods {
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
    border: none;
    text-transform: uppercase;
    font-weight: 200;
  }

  input {
    font-size: 1.1em;
  }
`
