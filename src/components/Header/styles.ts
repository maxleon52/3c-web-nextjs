import styled from "styled-components";

export const Container = styled.div`
  padding: 34px 0px 32px 0px;
  border-bottom: 2px solid var(--blue-900);

  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    :first-letter {
      text-transform: uppercase; /* Make the first letters uppercase      */
    }
  }
`;
