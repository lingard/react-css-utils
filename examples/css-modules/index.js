import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as CSSUtilsProvider} from 'react-css-utils';

import * as cssUtils from './styles/utils';
import {defaultTheme} from './styles/themes';

import App from './components/App';

import './styles/base.css';

const targetEl = document.getElementById('root')

ReactDOM.render(
  <CSSUtilsProvider utils={{
    ...cssUtils,
    ...defaultTheme
  }}>
    <App />
  </CSSUtilsProvider>,
  targetEl
);