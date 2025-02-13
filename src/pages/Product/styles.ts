import styled from "styled-components";
import { breakpoints, Btn, colors } from "../../styles";

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 180px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 80vh;
    overflow-y: auto;

    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
      width: 0px;
      height: 0px;
    }
  }
`

export const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  img {
    width: 100%;
  }

  div {
    display: flex;
    gap: 1px;

    img {
      width: 50%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    div {
      flex-direction: column;

      img {
        width: 100%;
      }
    }
  }
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 80px;
  right: 0;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  text-transform: uppercase;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ${Btn} {
    font-weight: 200;
    background-color: black;
    color: white;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    justify-content: start;
    gap: 32px;
  }
`


export const ProductHeader = styled.div`
  height: 50%;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 16px;

  button {
    border: none;
    background-color: transparent;
    color: ${colors.black};
    text-transform: uppercase;
    font-weight: 200;
    font-size: 11px;
    text-align: start;
  }

  ul {
    display: flex;
    margin: 8px 0;

    li {
      width: 100%;
      height: 40px;
      text-align: center;
      padding: 8px;
      border: .8px solid ${colors.lightGrey};
      cursor: pointer;

      &:hover, &.size-selected {
        border: .8px solid ${colors.black};
      }
    }
  }
`

export const ProductDescription = styled.div`
  padding: 0 24px;

  h4 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 16px;
  }

  p {
    font-size: 12px;
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    p {
      max-width: 100%;
    }
  }
`

export const SizeChart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const SizeChartContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 80%;
  min-width: 580px;
  margin: 0 auto;

  header {
    margin-bottom: 24px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  > img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 90%;

    img {
      transform: rotate(90deg);
    }
  }
`
