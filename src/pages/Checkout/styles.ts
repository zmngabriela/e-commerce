import styled from "styled-components";
import InputMask from "react-input-mask";

import paypalWhite from '../../assets/icons/paypal-white.png'
import applePayWhite from '../../assets/icons/apple-pay-white.png'

import { Btn, colors } from "../../styles";

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  font-size: .8em;
  font-weight: 200;
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
`

export const CheckoutInfo = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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
    max-height: 180px;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
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

export const InputMaskStyle = styled(InputMask)`
  padding: 4px 16px;
  border: 1px solid ${colors.black};
  border-radius: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: .9em;
  font-weight: 200;

  &:focus {
    outline: none;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-top: .8px solid ${colors.black};
  padding-top: 16px;

  p {
    font-weight: 400;
  }

  input {
    padding: 4px 16px;
    font-size: 1em;

    error {
      border: 1px solid red;
    }
  }

  ${Btn} {
    width: 100%;
    padding: 12px 0;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  input {
    width: 100%;
  }
`

export const Payment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  div.payment-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid ${colors.black};
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div.radio {
    display: flex;
    justify-content: left;

    input {
      margin-right: 16px;
    }
  }
`

export const PaymentMethodOpen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    width: 100%;
  }

  ${Btn} {
    padding: 8px 16px;

    img {
      height: 20px;
      width: 40px;
      object-fit: cover;
    }

    &:hover {
      &.apple-pay {
        img {
          content: url(${applePayWhite});
        }
      }

      &.paypal {
        img {
          content: url(${paypalWhite});
        }
      }
    }
  }
`
