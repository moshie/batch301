import styled from 'styled-components';

export const Donate = styled.a`
  border: 2px solid #fff;
  border-radius: 3px;
  background: transparent;
  display: inline-block;
  padding: 0.4em 1.2em;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: scale 0.3s ease;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 11px 1px rgba(#000, 0.3);
    transform: scale(1.04);
    background: rgba(255, 255, 255, 0.2);
  }
`;
