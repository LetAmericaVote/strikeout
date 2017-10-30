import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import { RoutingProvider, Route } from './components/Routing';
import ContentRoute from './components/ContentRoute';

import './styling/base.scss';

const store = createStore();

render((
  <Provider store={store}>
    <RoutingProvider>
      <div>
        <Route path="*"><ContentRoute /></Route>
      </div>
    </RoutingProvider>
  </Provider>
), document.getElementById('root'));
