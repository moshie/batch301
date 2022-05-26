import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SocialMedia } from './SocialMedia';
import { Donate } from './Donate';
import { Waves } from './Waves';

const Wrapper = styled.footer`
  padding-top: 4em;
  padding-bottom: 3em;

  ul {
    float: left;
  }

  a {
    float: right;
    border-color: #48077f;
    color: #48077f;
  }
`;

export const Footer = (props: HTMLAttributes<HTMLElement>) => (
  <Wrapper {...props}>
    <SocialMedia />
    <Donate href="https://monzo.me/davidhewitt" target="_blank" rel="noopener noreferrer">
      Donate
    </Donate>
    <Waves />
  </Wrapper>
);
