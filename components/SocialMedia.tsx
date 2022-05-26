import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Github } from './icons/Github';
import { Twitter } from './icons/Twitter';

const List = styled.ul`
  margin-left: -10px;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

const Link = styled.a`
  display: block;
  transition: scale 0.3s ease;

  svg {
    transition: fill 0.3s ease-in-out;
    fill: #555d65;
    width: 2em;
    height: 2em;
  }

  &:focus {
    outline: none;
    transform: scale(1.1);
  }

  &:hover svg {
    fill: #3e4349;
  }
`;

export const SocialMedia = (props: HTMLAttributes<HTMLUListElement>) => (
  <List {...props}>
    <ListItem>
      <Link href="https://github.com/moshie" rel="noopener noreferrer" target="_blank">
        <Github />
        <span className="sr-only">github</span>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="https://twitter.com/mosh1e" rel="noopener noreferrer" target="_blank">
        <Twitter />
        <span className="sr-only">twitter</span>
      </Link>
    </ListItem>
  </List>
);
