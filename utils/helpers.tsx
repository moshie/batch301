import { IResult } from './useRedirectTool';
import { Tick } from '../components/icons/Tick';
import { Cross } from '../components/icons/Cross';
import { Chevron } from '../components/icons/Chevron';

export const getStatusCode = (redirect: IResult) => redirect.chain[redirect.chain.length - 1].statusCode;

export const getIcon = (code: number) => {
  if (code >= 200 && code < 300) {
    return <Tick />;
  }

  if (code >= 300 && code < 400) {
    return <Chevron />;
  }

  if (code >= 400 && code < 500) {
    return '~';
  }

  return <Cross />;
};
