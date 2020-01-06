import 'core-js';
import 'regenerator-runtime/runtime';
import { customEventPolyFill } from './misc/util';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './modules/app';
import store from './config/store';
import LangProvider from './context/LangContainer';

customEventPolyFill();

hydrate(
  <Provider store={store}>
    <LangProvider>
      <App />
    </LangProvider>
  </Provider>,
  document.getElementById('app'),
  () => {
    store.dispatch({ type: 'color/get' });
    store.dispatch({ type: 'user/auth' });
  }
);
if (process.env.NODE_ENV !== 'development') {
  window.dispatchEvent(new CustomEvent('_COLORPK_SCRIPT_READY'));
}