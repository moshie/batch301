import styled from 'styled-components';
import { MouseEventHandler, ChangeEventHandler } from 'react';

import { Tick } from './icons/Tick';
import { Statuses } from '../utils/useRedirectTool';
import { DangerButton, SuccessButton, WarningButton } from './Button';

const Wrapper = styled.div`
  margin-bottom: 2em;
  position: sticky;
  top: 0;
  z-index: 99;
  background: #fbfafa;
  padding: 1em 0;
  box-shadow: 0px 4px 2px 2px #fbfafa;
`;

const StatusCodes = styled.div<Record<'activeFilter', Statuses | null>>`
  margin-left: -1em;
  display: flex;

  @media screen and (min-width: 768px) {
    display: block;
    float: right;
  }

  > button {
    margin-left: 1em;
    flex: 1 1 auto;

    @media screen and (max-width: 330px) {
      padding-left: 1em;
      padding-right: 1em;
    }

    @media screen and (max-width: 767px) {
      padding-top: 0.8em;
      padding-bottom: 0.8em;
    }

    svg {
      fill: rgba(0, 0, 0, 0.5);
    }

    &[data-filter='${({ activeFilter }) => activeFilter}'] svg {
      fill: #000;
    }
  }
`;

const Search = styled.input`
  margin-bottom: 2em;
  border: 1px solid #d4d3d4;
  padding: 0.8em 1.4em;
  border-radius: 0.25em;
  font-size: 0.865383em;
  min-height: 32px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #48077f;
  }

  @media screen and (min-width: 768px) {
    padding: 0.67em 1.4em;
    min-height: 28px;
    width: 10.8em;
    margin-bottom: 0;
    float: left;
  }
`;

interface Filters {
  searchChange: ChangeEventHandler<HTMLInputElement>;
  searchText: string;
  statusChange: MouseEventHandler<HTMLButtonElement>;
  status: Statuses | null;
}

export const Filters = ({ searchChange, searchText, statusChange, status }: Filters) => (
  <Wrapper className="clearfix">
    <Search type="search" value={searchText} onChange={searchChange} placeholder="Filter" className="search-filter" />

    <StatusCodes activeFilter={status}>
      <SuccessButton type="button" onClick={statusChange} data-filter="2">
        <Tick />
        2xx
      </SuccessButton>

      <WarningButton type="button" onClick={statusChange} data-filter="4">
        <Tick />
        4xx
      </WarningButton>

      <DangerButton type="button" onClick={statusChange} data-filter="5">
        <Tick />
        5xx
      </DangerButton>
    </StatusCodes>
  </Wrapper>
);
