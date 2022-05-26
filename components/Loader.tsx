import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    0% {
        transform: scale(1);
        background: #535B63;
    }
    50% {
        transform: scale(.5);
        background: #c9c9ca;
    }
    100% {
        transform: scale(1);
        background: #535B63;
    }
`;

const Wrapper = styled.div`
  padding-top: 50px;
  text-align: center;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  display: inline-block;
  margin: 10px;
  border-radius: 50%;
  background: #c9c9ca;
  animation: ${scale} 2s infinite;
  will-change: transform;

  & + div {
    animation-delay: 0.4s;

    & + div {
      animation-delay: 0.8s;

      & + div {
        animation-delay: 1s;
      }
    }
  }
`;

export const Loader = () => (
  <Wrapper>
    <Dot />
    <Dot />
    <Dot />
    <Dot />
  </Wrapper>
);
