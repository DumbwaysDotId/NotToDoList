import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators';

const middlewares = applyMiddleware(
  logger,
  promiseMiddleware()
);

class App extends Component {
  store = createStore(AppReducer, middlewares);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
