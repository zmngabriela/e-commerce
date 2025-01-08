import styled from "styled-components";
import { colors } from "../../styles";

export const Text = styled.div`
  font-size: 12px;
  margin-bottom: 40px;

  a {
    color: ${colors.grey}
  }
`

export const Icons = styled.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 24px;

  img {
    width: 24px;
  }
`
