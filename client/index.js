import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './core/store';
import { RoutingProvider, Route } from './core/routing';
import { StyleProvider } from './core/styling';

const store = createStore();

render((
  <Provider store={store}>
    <StyleProvider>
      <RoutingProvider>
        <div>
          <Route path="/"><h1>Yo</h1></Route>
        </div>
      </RoutingProvider>
    </StyleProvider>
  </Provider>
), document.getElementById('root'));
