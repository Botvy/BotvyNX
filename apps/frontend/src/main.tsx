import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './app/app';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`;

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />

        <App />
    </React.Fragment>,
    document.getElementById('root'),
);
