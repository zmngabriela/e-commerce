import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../styles";

export const ItemCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: .8px solid ${colors.black};
  text-transform: uppercase;
  font-size: 11px;
`

export const Content = styled.div`
  display: flex;
`

export const LinkToProduct = styled(Link)`
  cursor: pointer;

  img {
    width: 128px;
    height: 128px;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const Info = styled.div<{ mode: 'aside' | 'full' }>`
  display: flex;
  flex-direction: ${props => props.mode === 'aside' ? 'column': ''};
  justify-content: space-between;
  gap: 16px;
  padding: ${props => props.mode === 'aside' ? '8px': '16px'};

  h3 {
    font-weight: 200;
    font-size: ${props => props.mode === 'aside' ? '10px': '11px'};
    text-align: start;
  }
`
