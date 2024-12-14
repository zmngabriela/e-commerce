import styled from "styled-components";

export const Home = styled.div`
  margin-top: -160px;
`

export const Carousel = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const ArrowButton = styled.button`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  &:first-of-type {
    left: 20px;
    transform: rotate(180deg);
  }

  &:last-of-type {
    right: 20px;
  }
`

export const ProductTypes = styled.div`
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

export const Types = styled.div`
  width: 100%;

  ul {
    display: inline-flex;
    justify-content: space-between;
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
