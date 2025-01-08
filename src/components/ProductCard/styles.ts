import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = styled.li`
  p {
    font-size: 12px;
    font-weight: 200;

    &.title:hover {
      font-weight: 400;
    }
  }
`

export const ProductInfo = styled.div`
  position: relative;
  overflow: hidden;

  img.product-image {
    width: 100%;
  }

  &:hover {
    div {
      transform: translateY(0);
    }
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 8px;

  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  img.fav-icon {
    width: 12px;
    height: 12px;
    cursor: pointer;
    z-index: 2;
  }
`

export const LinkStyle = styled(Link)`
  height: 100%;
  width: 100%;
  cursor: pointer;
`

export const Cart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 16px;
    }
  }
`

export const Sizes = styled.ul`
  display: flex;
  gap: 16px;

  li {
    display: flex;
    font-size: 12px;
    cursor: pointer;

    &:hover, &.size-selected {
      font-weight: 400;
    }
  }
`
