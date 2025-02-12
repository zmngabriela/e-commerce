import styled from "styled-components";
import { colors } from "../../styles";

export const Tabs = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 80px;
`

export const TabButton = styled.button<{ mode: 'cart' | 'wishlist'}>`
  color: ${colors.black};
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: ${(props) => props.mode === 'cart' ? '400' : '200'};
  cursor: pointer;
`
