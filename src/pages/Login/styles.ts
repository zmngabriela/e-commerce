import styled from "styled-components";
import { breakpoints, Input } from "../../styles";

export const Login = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  ${Input} {
    height: 32px;
  }

  > div {
    display: flex;
    gap: 8px;
    margin: 8px 0 16px;
  }

  p {
    text-align: start;
    margin-top: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`
