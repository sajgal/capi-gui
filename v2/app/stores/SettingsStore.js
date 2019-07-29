import { observable, decorate, action } from 'mobx';

class SettingsStore {
  electronStore;
  apiTokenLabel = 'settings-api-token';

  constructor(electronStore) {
    this.electronStore = electronStore;
  }

  setToken(token) {
    this.electronStore.set(this.apiTokenLabel, token);
  }

  getToken() {
    return this.electronStore.get(this.apiTokenLabel);
  }
}

export default decorate(SettingsStore, {
  setToken: action.bound,
  getToken: action.bound,
});