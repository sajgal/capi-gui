import { decorate, action, observable } from 'mobx';

class SettingsStore {
  datastore;
  apiTokenKey = 'settings-api-token';
  settings = {};

  constructor(datastore) {
    this.datastore = datastore;
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
    const promise = new Promise((resolve, reject) => {
      this.datastore.findOne({ key: this.apiTokenKey }, function (err, doc) {
        if (err) {
          reject(err)
        } else {
          resolve(doc.value)
        }
      })
    })

    return promise.then(token => {
      this.setToken(token);
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
  loadToken: action.bound,
});