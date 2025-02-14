import styled from "styled-components";
import { colors } from "../../styles";

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  font-weight: 200;
  font-size: 12px;

  h3 {
    margin-bottom: 16px;
    font-weight: 200;
  }

  p.recommended {
    width: 100%;
    margin-top: 80px;
    padding-bottom: 16px;

    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    border-bottom: 2px solid ${colors.lightGrey};
  }

  p {
    text-align: start;
  }
`
