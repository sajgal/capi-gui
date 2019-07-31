import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import HomePage from './containers/HomePage';
import SettingsPage from './containers/SettingsPage'
import Page from './components/Page';
import RootStore from './stores/RootStore';

configure({ enforceActions: "observed" });

const store = new RootStore;

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <HashRouter>
          <Page>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/settings" component={SettingsPage} />
          </Page>
        </HashRouter>
      </Provider>
    );
  }
}
