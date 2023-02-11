import { css } from 'styled-components';

export const base = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // DEFINES WHAT 1 REM IS E.G. 1REM === 10PX
    @media ${({ theme }) => theme.mediaQ.tablet45} {
      font-size: 81.25%;
    }
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    overscroll-behavior-y: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    transition: background 3.5s ease-in-out;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }
`;
