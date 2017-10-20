import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './core/store';
import { RoutingProvider, Route } from './core/routing';
import { Container, Grid, Column } from './core/grid';

import ActionPage from './components/ActionPage';

import './styling/base.scss';

const store = createStore();

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        <Route path="/action"><ActionPage /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
