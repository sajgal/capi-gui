import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import HomePage from './pages/Home';
import Page from './components/Page';
import RootStore from './stores/RootStore';
import SettingsPage from './pages/Settings'
import LastResponsePage from './pages/LastResponse'
import ShowsCreate from './pages/shows/ShowsCreate';
import ShowsUpdate from './pages/shows/ShowsUpdate';
import Favourites from './pages/Favourites';
import ShowsList from './pages/shows/ShowsList';

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
            <Route exact path="/show" component={ShowsList} />
            <Route exact path="/show/create" component={ShowsCreate} />
            <Route exact path="/show/update/:id" component={ShowsUpdate} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/last-response" component={LastResponsePage} />
          </Page>
        </HashRouter>
      </Provider>
    );
  }
}
