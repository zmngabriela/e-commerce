import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Hero = styled.div`
  display: flex;
  padding: 80px 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 110px;
    height: 110px;
  }

  > div {
    text-align: start;

    h3 {
      font-size: 32px;
      font-weight: 200;
    }

    p {
      font-size: 14px;
      margin: 4px 0 16px;
    }

    div {
      display: flex;
      gap: 8px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    img {
      width: 80px;
      height: 80px;
    }

    > div {
      h3 {
        font-size: 30px;
      }

      p {
        font-size: 13px;
      }

      div {
        button {
          font-size: 11px;
          padding: 8px 8px;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    > div {
      justify-content: center;

      div {
        flex-direction: column;
      }
    }
  }
`
