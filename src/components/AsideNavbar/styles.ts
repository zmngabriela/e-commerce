import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const NavbarOpen = styled.div<{ $menuOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 96px 32px 0;
  background-color: ${colors.white};

  transition: transform .3s ease-in-out;
  transform: ${props => props.$menuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  button {
    color: ${colors.lightGrey};
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;
  }

  ul {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    transform: translateX(-100%);
  }
`
