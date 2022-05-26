import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Triangle } from './icons/Triangle';

const Wrapper = styled.div`
  background-image: url(./images/subtle-pattern.png), linear-gradient(to top, #7c07c1 0%, #510a9d 58%);
  background-blend-mode: multiply;
  height: 23em;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  @media (min-width: 64em) {
    height: 33em;
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    fill: #fbfafa;
  }

  @supports not (background-blend-mode: multiply) {
    background: linear-gradient(to top, #7c07c1 0%, #510a9d 58%);
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    background: linear-gradient(to top, #7c07c1 0%, #510a9d 58%);
  }
`;

export const Slant = (props: HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>
    <Triangle />
  </Wrapper>
);
