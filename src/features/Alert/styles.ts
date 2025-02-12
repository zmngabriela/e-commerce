import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Alert = styled.div<{ $alertOpen: boolean }>`
  position: fixed;
  bottom: 8px;
  left: 30%;
  width: 40%;
  height: 80px;
  z-index: 1;

  display: ${props => props.$alertOpen ? 'flex' : 'none'};
  padding: 16px 16px;
  background-color: ${colors.lightGrey};

  @media (max-width: ${breakpoints.desktop}) {
    left: 30%;
    width: 40%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    left: 10%;
    width: 80%;
  }
`

export const Image = styled.div`
  width: 50px;

  img {
    width: 12px;
    height: 12px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  p.title {
    font-weight: 400;
  }
`
