import styled from "styled-components";
import { breakpoints, Btn, Input } from "../../styles";

export const Form = styled.form`
  max-width: 540px;
  display: flex;
  flex-direction: column;

  ${Input} {
    height: 32px;
    margin-top: 16px;

    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    input {
      width: 8px;
      height: 8px;
    }

    label {
      text-align: start;
      font-size: 11px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  p {
    text-align: start;
    margin-top: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
