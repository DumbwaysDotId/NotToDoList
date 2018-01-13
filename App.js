import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators';

class App extends Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
