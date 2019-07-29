import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import HomePage from './containers/HomePage';
import RootStore from './stores/RootStore';

configure({ enforceActions: "observed" });

export default class App extends Component {
  render() {
    return (
      <Provider rootStore={new RootStore}>
        <HashRouter>
          <Route exact path="/" component={HomePage} />
        </HashRouter>
      </Provider>
    );
  }
}
