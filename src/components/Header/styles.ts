import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type MenuOpenProps = {
  $isopen: boolean
}

export const Header = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  z-index: 1;

  button {
    border: none;
    background-color: transparent;
    font-size: .7em;
    text-transform: uppercase;
    cursor: pointer;
  }

  div.logo {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 200;
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
    font-size: .7em;
    font-weight: 200;
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    z-index: 2;
  }
`

export const Links = styled.ul`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 24px;

  button:hover {
    font-weight: 700;
  }
`

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  align-items: top;
  padding: 8px 32px;
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
      font-size: .8em;
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }
`

export const NavbarOpen = styled.div<MenuOpenProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 96px 32px 0;
  background-color: ${colors.white};
  text-transform: uppercase;
  z-index: 1;

  transition: transform .3s ease-in-out;
  transform: ${props => props.$isopen ? 'translateX(0)' : 'translateX(-100%)'};

  button {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  ul {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 32px;
    z-index: 2;
  }

  @media (min-width: ${breakpoints.desktop}) {
    transform: translateX(-100%);
  }
`
