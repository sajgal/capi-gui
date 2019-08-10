import { decorate, action, observable } from 'mobx';
import { find } from '../helpers/NedbPromiseLayer'

class SettingsStore {
  datastore;
  settings = {};
  settingsKeys = [
    'settings-endpoint-token',
    'settings-api-token',
  ]

  constructor(datastore) {
    this.datastore = datastore;
    this.load();
  }

  save(key, setting) {
    const doc = {
      key,
      value: setting,
    }

    this.datastore.update({ key }, doc, { upsert: true }, newDoc => {
      this.setToken(key, setting);
    });
  }

  load() {
    return find(this.datastore, { key: { $in: this.settingsKeys} })
      .then(docs => {
        docs.forEach(doc => {
          this.setToken(doc.key, doc.value);
        });
      })
  }

  setToken(key, setting) {
    this.settings[key] = setting;
  }
}

export default decorate(SettingsStore, {
  settings: observable,
  settingsKeys: observable,
  setToken: action.bound,
  save: action.bound,
  load: action.bound,
});