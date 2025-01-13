import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Cart = styled.div`
  text-transform: uppercase;

  .shipping-note {
    width: 100%;
    margin-bottom: 24px;

    p {
      text-align: start;
      max-width: 50%;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .shipping-note p {
      text-align: center;
      max-width: 100%;
    }
  }
`

export const Purchase = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
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
