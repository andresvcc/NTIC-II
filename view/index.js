import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { CookiesProvider } from 'react-cookie';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import routerController from './GlobalFunction/routerController';
import routes from './routes';
import theme from './styles/theme';

const themeResposive = responsiveFontSizes(theme, { factor: 6, breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'] });

/*
// service worker - WPA5
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
*/

ReactDOM.render(
  <ThemeProvider theme={themeResposive}>
    <CssBaseline />
    <BrowserRouter>
      <CookiesProvider>
        <Switch>
          {routerController(routes)}
          <Redirect exact from="/" to="/home" />
          <Route component={routes[0].component} />
        </Switch>
      </CookiesProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
