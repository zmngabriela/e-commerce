import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 260px 0 80px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    display: flex;
    gap: 0;

    img.footer-concept {
      position: absolute;
      top: -50px;
      right: 0;
    }
  }
`

export const Links = styled.div`
  display: grid;
  grid-template-columns: 50% 50% 100%;
  gap: 16px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: top;

    li {
      font-size: 12px;

      &:hover {
        font-weight: 400;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 100%;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 100%;
    gap: 50px;
  }
`

export const Newsletter = styled.form`
  grid-column: 1;

  h3 {
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    color: ${colors.black};
  }

  a {
    cursor: pointer;
  }
`

export const Input = styled.div`
  width: 100%;
  height: 32px;
  margin: 8px 0;
  padding: 4px 16px 4px 4px;
  border: 1px solid ${colors.black};
  border-radius: 30px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      img {
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;
      }
    }

    img {
      width: 12px;
      transform: rotate(-40deg);
    }
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: end;

  img {
    width: 250px;
    object-fit: contain;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: start;

    img {
      width: 200px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 160px;
    }
  }
`
