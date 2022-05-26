import { useState } from 'react';
import styled from 'styled-components';

import { Chain } from './Chain';
import { HollowButton } from './Button';
import { Chevron } from './icons/Chevron';
import { getStatusCode } from '../utils/helpers';
import { IResult } from '../utils/useRedirectTool';

const Wrapper = styled.div`
  margin-bottom: 0.5em;
  border-radius: 0.25em;
  overflow: hidden;
  box-shadow: 1px 1px 1px rgba(#5d5d5d, 0.25);
  font-size: 1.1em;
`;

const Header = styled.div<Record<'open', boolean>>`
  padding: 0.5em 1em;
  background: #fff;
  position: relative;
  z-index: 20;
  min-height: 4em;

  &:after {
    top: 100%;
    left: 1.7em;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    z-index: 10;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #ffffff;
    border-width: 12px;
    margin-left: -12px;
    transform: translateY(-13px);
    transition: transform 0.3s ease;
    ${({ open }) => (open ? 'transform: translateY(0);' : '')}
  }

  button {
    padding: 0.7em 0.6em 0.2em 0.6em;
    position: absolute;
    top: 0.8em;
    right: 1em;

    svg {
      margin: 0;
      transition: transform 0.3s ease;
      fill: #000;
    }
  }
`;

const Notification = styled.div<Record<'status', number>>`
  border-radius: 50%;
  color: #fff;
  font-size: 0.778em;
  text-align: center;
  height: 1.5em;
  width: 1.5em;
  position: absolute;
  top: -0.6em;
  right: -0.6em;
  z-index: 5;

  background: ${({ status = 200 }) => {
    const firstNumber = status.toString()[0];
    switch (firstNumber) {
      case '2':
        return '#2e9612';
      case '4':
        return '#cac315';
      case '5':
      default:
        return '#ff3f3f';
    }
  }};
`;

const Body = styled.div<Record<'open', boolean>>`
  background: #555d65;
  color: #fff;
  font-size: 0.67299em;
  font-family: 'Fira Mono', monospace;
  max-height: 0;
  transition: max-height 0.3s ease;

  ${({ open }) => (open ? 'max-height: 10em; overflow-y: auto;' : '')}
`;

const Status = styled.span<Record<'status', number>>`
  font-weight: 600;
  float: left;

  color: ${({ status = 200 }) => {
    const firstNumber = status.toString()[0];
    switch (firstNumber) {
      case '2':
        return '#2e9612';
      case '4':
        return '#cac315';
      case '5':
      default:
        return '#ff3f3f';
    }
  }};
`;

const Source = styled.span`
  padding-left: 2.3em;
  padding-right: 48px;
  display: block;
  word-break: break-all;
`;

const Result = styled.span`
  padding-left: 3.4em;
  padding-right: 48px;
  display: block;
  font-size: 0.67299em;
  color: #6f6f6f;
  word-break: break-all;
`;

const Arrow = styled(Chevron)<Record<'open', boolean>>`
  ${({ open }) => (open ? 'transform: rotateZ(180deg);' : '')}
`;

export const Redirect = ({ redirect }: Record<'redirect', IResult>) => {
  const [open, setOpen] = useState<boolean>(false);
  const status = getStatusCode(redirect);
  return (
    <Wrapper className={`redirect ${open ? 'redirect--open' : ''}`}>
      <Header open={open}>
        <Status status={status}>{status}</Status>
        <Source>{redirect.source}</Source>
        <Result>{redirect.resolved}</Result>
        <HollowButton onClick={() => setOpen((prev) => !prev)}>
          <Arrow open={open} />
          <Notification status={status}>{redirect.chain.length}</Notification>
        </HollowButton>
      </Header>

      <Body open={open}>
        <Chain chain={redirect.chain} />
      </Body>
    </Wrapper>
  );
};
