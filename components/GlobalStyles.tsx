import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1em;
    line-height: 1.28;
    color: #232323;
    background: #fbfafa;
    overflow-x: hidden;
    position: relative;
  
    @media (min-width: 64em) {
      font-size: 1.2em;
      line-height: 1.2;
    }
  
    @media (min-width: 85.375em) {
      font-size: 1.1em;
    }
  
    @media (min-width: 121em) {
      font-size: 1.2em;
    }
  
    @media (min-width: 160em) {
      font-size: 1.4em;
    }
  }

  .clearfix {
    *zoom: 1;
  
    &:before,
    &:after {
      content: '';
      display: table;
      clear: both;
      line-height: 0;
    }
  
    &:after {
      clear: both;
    }
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
