import styled, { createGlobalStyle } from 'styled-components'
import arrowWhite from '../assets/icons/arrow-white.png'

export const colors = {
  white: '#f1f1f1',
  black: '#000',
  grey: '#5d5d5d',
  lightGrey: '#d5d5d5'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    text-decoration: none;
    color: ${colors.black};
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    padding-bottom: 80px;
    font-weight: 200;
    font-size: 12px;
  }
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;

    &.central {
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      text-align: center;
      gap: 8px;
    }

    &.narrow {
      width: 60%;
    }

    &.marginTop {
      margin-top: 160px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      width: 90%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      &.narrow {
        width: 80%;
      }
    }
  }
`

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;

  border: 1px solid ${colors.black};
  background-color: transparent;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.lightGrey};
  }

  &.arrow {
    img {
      width: 12px;
      transform: rotate(-40deg);
    }

    &:hover {
      img {
        content: url(${arrowWhite});
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;
      }
    }
  }
`

export const Input = styled.input`
  padding: 4px 16px;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 12px;
  font-weight: 200;

  &:focus {
    outline: none;
  }

  &.input-arrow {
    width: 100%;
    background-color: transparent;
    border: none;
  }
`

export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 200;
`
