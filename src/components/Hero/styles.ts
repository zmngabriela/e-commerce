import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  margin: 80px;
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    text-align: start;

    h3 {
      font-size: 32px;
      font-weight: 200;
    }

    p {
      font-size: 14px;
      margin: 4px 0 16px;
    }

    img.image-api {
      width: 160px;
      height: 160px;
    }

    div {
      display: flex;
      gap: 8px;
    }
  }
`
