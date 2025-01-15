import styled from 'styled-components'

import { Product } from '../../components/ProductCard/styles'
import { Category } from '../../components/CategoryCard/styles'

import { breakpoints, colors } from '../../styles'

export const Items = styled.ul`
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
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.black};
    border-radius: 0;
    width: 4px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0;
    width: 4px;
    height: 4px;
  }

  ${Product},
  ${Category} {
    p {
      font-size: 12px;
      font-weight: 200;
    }

    img.product-image,
    img.category-image {
      height: 400px;
      width: 400px;

      @media (max-width: ${breakpoints.desktop}) {
        height: 320px;
        width: 320px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        height: 280px;
        width: 280px;
      }
    }
  }
`
