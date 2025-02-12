import styled from "styled-components";
import { Btn, colors } from "../../styles";

export const Content = styled.div`
  img.icon {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
  }

  p {
    margin-top: 4px;
  }

  p.recommended {
    width: 100%;
    margin-top: 80px;
    padding-bottom: 16px;

    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    border-bottom: 2px solid ${colors.lightGrey};
  }

  ${Btn} {
    display: inline-flex;
    margin-top: 24px;
  }
`
