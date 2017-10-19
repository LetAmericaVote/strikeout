import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './core/store';
import { RoutingProvider, Route } from './core/routing';
import { Container, Grid, Cell } from './core/grid';

import './styling/base.scss';

const store = createStore();

const Test = () => (
  <Container maxWidth padding>
    <Grid classes={['padding']}>
      <Cell column={4}>test</Cell>
      <Cell column={4}>test</Cell>
      <Cell column={4}>test</Cell>
    </Grid>
  </Container>
);

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        <Route path="/"><Test /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
