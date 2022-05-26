import styled from 'styled-components';

interface ButtonProps {
  size?: 'lg';
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  position: relative;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5em 1.4em;
  font-size: 1em;
  line-height: 1.5;
  border-radius: 0.25em;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  ${({ size }) => (size === 'lg' ? 'padding: 0.8em 2.5em 0.8em 1.5em;' : '')}

  &:focus {
    outline: none;
    transform: scale(1.06);
  }

  svg {
    margin-right: 1em;
    vertical-align: text-top;
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: #fff;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background: #48077f;
  color: #fff;

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    background: #7a7a7a;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background: #35085c;
  }
`;

export const SuccessButton = styled(Button)`
  background: #2e9612;
  color: #fff;

  &:hover,
  &:focus {
    background: #298003;
  }
`;

export const WarningButton = styled(Button)`
  background: #cac315;
  color: #fff;

  &:hover,
  &:focus {
    background: #a9a703;
  }
`;

export const DangerButton = styled(Button)`
  background: #ff3f3f;
  color: #fff;

  &:hover,
  &:focus {
    background: #d73429;
  }
`;

export const HollowButton = styled(Button)`
  border: 1px solid #c6c6c6;
  background: transparent;
`;
