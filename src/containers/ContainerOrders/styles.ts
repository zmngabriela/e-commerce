import styled from "styled-components";
import { colors } from "../../styles";

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  width: 100%;
`

export const Order = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.lightGrey};

  h4 {
    font-weight: 400;
  }

  &:last-of-type {
    border-bottom: none;
  }
`

export const ItemCart = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 8px 0 16px;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  p.limit-characters {
    max-width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Content = styled.div`
`
