import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Products = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px 8px;
  margin: 40px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }

  &.smaller {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
