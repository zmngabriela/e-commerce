import styled from "styled-components";
import { colors } from "../../styles";

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;
  font-weight: 200;
  font-size: 12px;

  h3 {
    font-weight: 200;
    margin-bottom: 16px;
  }

  p.news {
    width: 100%;
    margin-top: 80px;
    padding-bottom: 16px;
    font-size: 13px;
    border-bottom: 2px solid ${colors.lightGrey};
  }
`
