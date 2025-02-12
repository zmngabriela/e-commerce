import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Nav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-bottom: 40px;
  border-bottom: .8px solid ${colors.black};

  button {
    border: none;
    background-color: transparent;
    font-weight: 200;
    font-size: 12px;
    cursor: pointer;
  }
`

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 1fr;
  margin: 40px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 30% 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Logout = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  button.logout-btn {
    border: none;
    background-color: transparent;
    font-weight: 200;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      font-weight: 400;
    }
  }
`

export const Aside = styled.aside<{ mode?: string }>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
  }

  button {
    border: none;
    background-color: transparent;
    font-weight: 200;
    font-size: 12px;
    text-align: start;
    cursor: pointer;

    &.personal-data {
      font-weight: ${props => props.mode === 'personal-data' ? '400' : '200'};
    }

    &.newsletter {
      font-weight: ${props => props.mode === 'newsletter' ? '400' : '200'};
    }

    &.ongoing {
      font-weight: ${props => props.mode === 'ongoing' ? '400' : '200'};
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
  }
`

export const BtnArrow = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 200;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;

  img {
    width: 11px;
    height: 11px;
  }

  &:hover {
    font-weight: 400;
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
  text-align: start;

  div {
    display: flex;
    flex-direction: column;
  }

  label, h3 {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid transparent;
    background-color: transparent;
    font-weight: 200;
    font-size: 12px;
    padding: 1px 2px;

    &.editing {
      border: 1px solid ${colors.lightGrey};

      &:focus {
        outline: none;
      }
    }
  }
`
