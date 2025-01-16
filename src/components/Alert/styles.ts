import styled from "styled-components"
import { colors } from "../../styles"

export const Alert = styled.div<{ $alertOpen: boolean }>`
  position: fixed;
  bottom: 16px;
  left: 16px;
  width: 300px;
  height: 80px;

  display: ${props => props.$alertOpen ? 'flex' : 'none'};
  padding: 16px 16px;
  background-color: ${colors.white};
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
