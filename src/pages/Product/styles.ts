import styled from "styled-components";
import { colors } from "../../styles";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ProductInfo = styled.div`
  display: flex;
  gap: 1px;

  img.product-image {
    width: 40%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  text-transform: uppercase;
  font-weight: 200;

  h3 {
    font-weight: 200;
    font-size: 1.5em;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const ProductDetail = styled.div`
  height: 50%;
`

export const Sizes = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 16px;

  p.size-guide {
    font-size: .8em;
  }

  button {
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    text-align: start;
    font-weight: 200;
  }

  ul {
    display: flex;
    margin: 8px 0;

    li {
      width: 100%;
      padding: 8px 16px;
      text-align: center;
      font-size: .8em;
      border: .8px solid ${colors.lightGrey};
      cursor: pointer;

      &:hover, &.size-selected {
        background-color: ${colors.black};
        color: ${colors.lightGrey};

        button {
          background-color: ${colors.black};
          color: ${colors.lightGrey};
        }
      }
    }
  }

  img {
    width: 100%;
  }
`


export const ProductDescription = styled.div`
  h4 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.2em;
    margin-bottom: 16px;
  }

  p {
    font-size: .9em;
    font-weight: 200;
  }
`

export const NoResult = styled.div`
  width: 70%;
  margin: 0 auto;
`
