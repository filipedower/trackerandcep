import 'antd/dist/antd.min.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5rem;
    font-family: -system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    overflow: hidden;
  }

  .elipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
  }

  .ant-scrolling-effect {
    min-width: 100%;
  }
`;
