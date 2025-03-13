import styled from "styled-components";
import { breakpoints, Btn, colors, Container } from "../../styles";

export const Home = styled.div`
  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
`

export const Hero = styled.div`
  position: relative;
  margin-bottom: 160px;

  ul {
    position: absolute;
    bottom: 160px;
    left: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`

export const Carousel = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      height: 95vh;
      object-fit: cover;
      object-position: top;
    }
  }
`

export const SlideButton = styled.button`
  width: 2px;
  height: 18px;
  border: none;
  background-color: ${colors.lightGrey};
  cursor: pointer;

  &.active {
    background-color: ${colors.black};
  }
`

export const Arrivals = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  text-transform: uppercase;

  h2 {
    font-size: 12px;
    font-weight: 200;
  }

  ${Btn} {
    padding: 4px 8px;
    font-weight: 200;

    img {
      width: 10px;
      height: 10px;
    }
  }
`

export const ProductCategories = styled.div`
  display: flex;
  flex-direction: column;
`
