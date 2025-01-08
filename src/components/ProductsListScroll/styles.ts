import styled from 'styled-components'
import { Product } from '../ProductCard/styles'
import { breakpoints, colors } from '../../styles'

export const Products = styled.ul`
  display: flex;
  gap: 2px;
  padding-bottom: 40px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  cursor: grab;

  scrollbar-width: thin;
  scrollbar-color: ${colors.black} transparent;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.black};
    border-radius: 0;
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0;
    width: 4px;
    height: 4px;
  }

  ${Product} {
    img.product-image {
      height: 320px;
      width: 320px;
      object-fit: cover;

      @media (max-width: ${breakpoints.desktop}) {
        height: 240px;
        width: 240px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        height: 300px;
        width: 300px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        height: 320px;
        width: 320px;
      }
    }
  }
`
