import { decorate, action } from 'mobx';

class SettingsStore {
  datastore;
  apiTokenKey = 'settings-api-token';

  constructor(datastore) {
    this.datastore = datastore;
  }

  setToken(token) {
    const doc = {
      key: this.apiTokenKey,
      value: token,
    }

    this.datastore.insert(doc, function (err, newDoc) {
      console.log('Inserted', newDoc.key, 'with ID', newDoc._id);
    });
  }

  getToken() {
    return this.datastore.find({ key: this.apiTokenKey }, function (err, docs) {
      console.log('docs', docs);

      return docs;
    });
  }
}

export default decorate(SettingsStore, {
  setToken: action.bound,
  getToken: action.bound,
});