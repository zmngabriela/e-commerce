import styled from "styled-components"
import InputMask from "react-input-mask";

import paypalWhite from '../../assets/icons/paypal-white.png'
import applePayWhite from '../../assets/icons/apple-pay-white.png'

import { Btn, colors } from "../../styles"

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
  }

  ${Btn} {
    width: 100%;
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
    img {
      height: 14px;
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

export const InputMaskStyle = styled(InputMask)`
  padding: 4px 16px;
  border: 1px solid ${colors.black};
  border-radius: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 12px;
  font-weight: 200;

  &:focus {
    outline: none;
  }

  &.error {
    border: 1px solid red;
  }
`
