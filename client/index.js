import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './core/store';
import { RoutingProvider, Route } from './core/routing';

const store = createStore();

import MarkdownRenderer from './core/markdown/MarkdownRenderer';
const Test = () => <MarkdownRenderer markdown="# test" />

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        <Route path="/"><Test /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
