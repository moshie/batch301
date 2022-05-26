import { Redirect } from './Redirect';
import { IResult } from '../utils/useRedirectTool';

export const Redirects = ({ redirects = [] }: Record<'redirects', IResult[]>) =>
  redirects.length ? (
    <ul>
      {redirects.map((redirect, i) => {
        return (
          <li key={i}>
            <Redirect redirect={redirect} />
          </li>
        );
      })}
    </ul>
  ) : null;
