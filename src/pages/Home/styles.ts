import styled from "styled-components";
import { breakpoints, Btn, colors } from "../../styles";

export const Home = styled.div`
  margin-top: 80px;
`

export const Hero = styled.div`
  display: flex;
  gap: 2px;

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
    display: flex;
    align-items: center;
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
  position: absolute;
  bottom: 16px;
  right: 50%;
  width: 18px;
  height: 4px;
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
  margin: 160px 0 80px;
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
  align-items: center;
`

export const Categories = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;

    li {
      margin-bottom: 40px;

      &:nth-of-type(4),
      &:nth-of-type(5) {
        display: none;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Category = styled.li`
  button {
    display: flex;
    flex-direction: column;
    font-weight: 200;
    cursor: pointer;

    background: none;
    border: none;

    img {
      width: 100%;
      margin-bottom: 8px;
    }

    &:hover {
      font-weight: 400;
    }
  }
`
