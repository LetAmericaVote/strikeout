import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import { RoutingProvider, Route } from './components/Routing';
import ContentRoute from './components/ContentRoute';
import Demo from './components/Demo';

import './styling/base.scss';

const store = createStore();

const demoRoute = process.env.NODE_ENV !== 'production' ? (
  <Route path="/demo"><Demo /></Route>
) : null;

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        { demoRoute }
        <Route path="*"><ContentRoute /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
