import { SVGProps } from 'react';

export const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="nonzero"
      d="M13 10.935L8.496 6.49l4.442-4.486L10.935 0 6.487 4.506 1.986.062 0 2.048l4.507 4.463-4.445 4.503L2.048 13 6.51 8.494l4.487 4.444z"
    />
  </svg>
);
