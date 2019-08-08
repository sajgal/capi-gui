import { decorate, action, observable } from 'mobx';
import { findOnePromise } from '../helpers/NedbPromiseLayer'

class SettingsStore {
  datastore;
  apiTokenKey = 'settings-api-token';
  settings = {};

  constructor(datastore) {
    this.datastore = datastore;
    this.loadToken();
  }

  saveToken(token) {
    const doc = {
      key: this.apiTokenKey,
      value: token,
    }

    this.datastore.update({ key: this.apiTokenKey }, doc, { upsert: true }, newDoc => {
      this.setToken(token);
    });
  }

  loadToken() {
    return findOnePromise(this.datastore, { key: this.apiTokenKey })
      .then(doc => {
        this.setToken(doc.value);
      })
  }

  setToken(token) {
    this.settings = {
      ...this.settings,
      token
    }
  }
}

export default decorate(SettingsStore, {
  settings: observable,
  setToken: action.bound,
  saveToken: action.bound,
});