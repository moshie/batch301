import styled from 'styled-components';

import { IResult } from '../utils/useRedirectTool';
import { getIcon } from '../utils/helpers';

const List = styled.ul`
  padding: 1.5em;
`;

const Item = styled.li`
  line-height: 2em;
`;

const Icon = styled.span<Record<'status', number>>`
  ${({ status }) => {
    const state = status.toString()[0];
    switch (state) {
      case '2':
        return 'fill: #4cd229;';
      case '3':
        return 'fill: #238af7;';
      case '4':
        return 'font-size: 1.6em; color: #cac315;';
      case '5':
      default:
        return 'fill: #ff3f3f;';
    }
  }}
  svg {
    width: 1em;
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 0 1em;
`;

const Url = styled.span`
  word-break: break-all;
`;

export const Chain = ({ chain }: { chain: IResult['chain'] }) => (
  <List>
    {chain.map((chain, i) => {
      return (
        <Item key={i}>
          <Icon status={chain.statusCode}>{getIcon(chain.statusCode)}</Icon>
          <Status>{chain.statusCode}</Status>
          <Url>{chain.url}</Url>
        </Item>
      );
    })}
  </List>
);
