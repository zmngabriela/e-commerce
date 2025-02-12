import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const CartAside = styled.div<{ $cartOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 96px 32px;
  overflow-y: auto;

  text-transform: uppercase;
  background-color: ${colors.white};

  transition: transform .3s ease-in-out;
  transform: ${props => props.$cartOpen ? 'translateX(0)' : 'translateX(100%)'};

  img.close {
    width: 12px;
    height: 12px;
  }

  .title {
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const Purchase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
      height: 32px;
    }
  }
`
