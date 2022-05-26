import styled, { keyframes } from 'styled-components';

import { Boat } from './icons/Boat';

const wave = keyframes`
0% {
    margin-left: 0;
}
100% {
    margin-left: -1600px;
}
`;

const swell = keyframes`
0%, 100% {
    transform: translate3d(0, -4px, 0);
}
50% {
    transform: translate3d(0, 6px, 0);
}
`;

const bobsmall = keyframes`
    0%, 100% {
        bottom: 12px;
    }
    50% {
        bottom: 14px;
    }
`;

const bob = keyframes`
0%, 100% {
    bottom: 8px;
}
50% {
    bottom: 12px;
}
`;

const Ocean = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  overflow: hidden;
`;

const Wave = styled.div`
  background: url(images/wave-1.svg) repeat-x;
  position: absolute;
  bottom: -10px;
  width: 6400px;
  height: 40px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  z-index: 30;
  opacity: 0.8;
  will-change: margin-left;

  &:nth-of-type(2) {
    background: url(images/wave-2.svg) repeat-x;
    background-position-x: -20%;
    z-index: 20;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, ${swell} 7s ease -1.25s infinite;
    opacity: 0.75;
  }

  &:nth-of-type(3) {
    background: url(images/wave-3.svg) repeat-x;
    background-position-x: -45%;
    z-index: 10;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.5s infinite, ${swell} 7s ease -2.5s infinite;
    opacity: 0.6;
  }
`;

const FloatingBoat = styled(Boat)`
  width: 6em;
  height: 4em;
  position: absolute;
  left: 50%;
  bottom: 8px;
  fill: #555d65;
  transform: translateX(-50%);
  will-change: bottom;
  animation: ${bob} 2s ease-in-out infinite;

  @media screen and (max-width: 330px) {
    animation: ${bobsmall} 2s ease-in-out infinite;
    width: 90px;
    bottom: 12px;
  }
`;

export const Waves = () => (
  <>
    <FloatingBoat />
    <Ocean>
      <Wave />
      <Wave />
      <Wave />
    </Ocean>
  </>
);
