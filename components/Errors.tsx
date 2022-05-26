import styled from 'styled-components';

import { Warning } from './icons/Warning';
import { Errors as ErrorsType } from '../utils/useRedirectTool';

const Wrapper = styled.div`
  padding: 0.7em 1em 0.7em 4em;
  background: #ff3f3f;
  border-radius: 3px;
  margin-bottom: 2em;
  color: #fff;
  position: relative;
  min-height: 3.4em;

  @media screen and (min-width: 768px) {
    min-height: 3.5em;
    padding: 1em 1em 1em 4.8em;
  }

  svg {
    fill: #fff;
    position: absolute;
    width: 2em;
    left: 1em;
    top: 0.7em;
  }
`;

const Error = styled.span`
  display: block;
  word-break: break-all;
`;

export const Errors = ({ errors }: Record<'errors', ErrorsType[]>) =>
  errors.length ? (
    <Wrapper>
      <Warning />
      {errors.map((error, index) => (
        <Error key={index}>{error.message}</Error>
      ))}
    </Wrapper>
  ) : null;
