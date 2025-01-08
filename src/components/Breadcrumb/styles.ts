import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Breadcrumb = styled.div`
  display: flex;
  gap: 8px;

  .bold {
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span.limit-characters {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
