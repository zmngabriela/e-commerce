import styled from "styled-components";

type TabButtonProps = {
  $isactive: boolean
}

export const Component = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 160px auto 0;

  text-transform: uppercase;
  font-size: .8em;
  font-weight: 200;

  .shipping-note {
    width: 100%;

    p {
      text-align: start;
      max-width: 50%;
    }
  }
`

export const Tabs = styled.div`
  display: flex;
  gap: 32px;
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: ${(props) => props.$isactive ? '400' : '200'};
  cursor: pointer;
`
