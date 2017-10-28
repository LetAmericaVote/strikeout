import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import { RoutingProvider, Route } from './components/Routing';
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
        <Route path="/"><h1>Homepage</h1></Route>
        <Route path="/action"><h1>Action</h1></Route>
        { demoRoute }
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
