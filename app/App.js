import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import HomePage from './containers/HomePage';
import Page from './components/Page';
import RootStore from './stores/RootStore';
import SettingsPage from './containers/SettingsPage'
import ShowsCreate from './containers/shows/create';
import ShowsHistory from './containers/shows/history';
import ShowsList from './containers/shows';

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
            <Route exact path="/shows" component={ShowsList} />
            <Route exact path="/shows/create" component={ShowsCreate} />
            <Route exact path="/shows/history" component={ShowsHistory} />
          </Page>
        </HashRouter>
      </Provider>
    );
  }
}
