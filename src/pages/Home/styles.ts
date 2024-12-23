import styled from "styled-components";
import { colors } from "../../styles";

export const Home = styled.div`
  margin-top: -60px;
`

export const Hero = styled.div`
  display: flex;
  gap: 2px;

  img.hero {
    width: 20vw;
    height: 20vw;
  }

  div {
    display: flex;
    flex-direction: column;

    > div {
      align-items: start;
      gap: 2px;
      padding: 80px 2px;
    }
  }
`

export const Carousel = styled.div`
  width: 70vw;

  img {
    width: 100%;
  }
`

export const SlideButton = styled.button`
  width: 6px;
  height: 6px;
  border: 1px solid ${colors.black};
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: ${colors.black};
  }
`

export const ProductCategories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 104px auto;
  text-transform: uppercase;

  h2 {
    font-size: 2em;
    font-weight: 200;
    margin-bottom: 40px;
  }
`

export const Categories = styled.div`
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 4px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        font-weight: 200;
        cursor: pointer;

        img {
          width: 100%;
        }

        &:hover {
          font-weight: 700;
          }
      }
    }
  }

  img {
    width: 100%;
    margin-bottom: 16px;
  }
`
