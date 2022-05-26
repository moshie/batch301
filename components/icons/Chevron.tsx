import { SVGProps } from 'react';

export const Chevron = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 21 13" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="nonzero" d="M18.375 0L21 2.65 10.5 13 0 2.65 2.625 0 10.5 7.8z" />
  </svg>
);
