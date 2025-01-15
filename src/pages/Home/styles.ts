import styled from "styled-components";
import { breakpoints, Btn, colors, Container } from "../../styles";

export const Home = styled.div`
  margin-top: 80px;

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
`

export const Hero = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 160px;

  img.hero {
    width: 20vw;
    height: 20vw;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img.hero {
      display: none;
    }
  }
`

export const Carousel = styled.div`
  position: relative;
  width: 79.98vw;

  img {
    width: 100%;
  }

  ul {
    position: absolute;
    bottom: 16px;
    right: 50%;
    display: flex;
    align-items: center;
    gap: 8px;

    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      height: 70vh;
      object-fit: cover;
      object-position: -40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      object-position: -50px;
    }
  }
`

export const SlideButton = styled.button`
  width: 18px;
  height: 2px;
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
