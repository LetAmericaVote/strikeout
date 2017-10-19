import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './core/store';
import { RoutingProvider, Route } from './core/routing';
import { Container, Grid, Column } from './core/grid';

import Nav from './components/Nav';

import './styling/base.scss';

const store = createStore();

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        <Nav />
        <Route path="/"><Test /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
