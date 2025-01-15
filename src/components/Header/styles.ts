import styled from 'styled-components'
import { breakpoints, colors, Input } from '../../styles'

export const Header = styled.nav<{ scrollY: number }>`
  position: sticky;
  top: ${({ scrollY }) => (scrollY > window.innerHeight ? '-100px' : '0')};
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  transition: top 0.3s ease-out;
  z-index: 1;

  button {
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-weight: 00;
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }

  div.brand {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 a {
      font-family: "Manrope", sans-serif;
      font-weight: 400;
      font-size: 17px;
    }
  }
`

export const UpperLine = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};

  p {
    color: ${colors.white};
    font-size: 12px;
  }
`

export const Links = styled.ul`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
`

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  align-items: top;
  padding: 8px 5%;
  text-transform: uppercase;
  background-color: ${colors.white};

  .toggle {
    position: relative;
    display: none;
    text-align: start;
    z-index: 2;

    img {
      height: 12px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    ${Links} {
      display: none;
    }

    .toggle {
      display: block;
    }
  }
`

export const AuxiliaryMenu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;

  img {
    width: 16px;
  }

  .btn-cart {
    position: relative;

    span {
      position: absolute;
      top: 50%;
      right: -5px;
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 0;
      font-size: 10px;
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    ${Input} {
      position: absolute;
      top: 100%;
      left: 5%;
      right: 5%;
      background-color: ${colors.white};
      width: 90%;
      z-index: 2;
    }
  }
`
