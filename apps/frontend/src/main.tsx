import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import App from './app/app';
import { InitializePlugins, Store } from '@botvy-nx/framework/store';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`;

ReactDOM.render(
    <Provider store={Store}>
        <GlobalStyle />

        <App />
    </Provider>,
    document.getElementById('root'),
);

Store.dispatch(InitializePlugins());
