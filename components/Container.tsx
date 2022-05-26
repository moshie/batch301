import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 160em) {
    max-width: 50em;
  }
`;
