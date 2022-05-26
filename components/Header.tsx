import styled from 'styled-components';

import { Logo } from './Logo';
import { Donate } from './Donate';
import { HTMLAttributes } from 'react';

const Head = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 1.4em;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  .donate {
    float: right;
  }
`;

export const Header = (props: HTMLAttributes<HTMLElement>) => (
  <Head {...props}>
    <Logo>Batch 301</Logo>
    <Donate className="donate" href="https://monzo.me/davidhewitt" target="_blank" rel="noopener noreferrer">
      Donate
    </Donate>
  </Head>
);
