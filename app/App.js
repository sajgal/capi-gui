import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import HomePage from './pages/HomePage';
import Page from './components/Page';
import RootStore from './stores/RootStore';
import SettingsPage from './pages/SettingsPage'
import ShowsCreate from './pages/shows/create';
import ShowsHistory from './pages/shows/history';
import ShowsList from './pages/shows';

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
