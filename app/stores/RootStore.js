import { remote } from 'electron'
import Datastore from 'nedb'
import path from 'path'

import SettingsStore from './SettingsStore';
import ShowStore from './ShowStore';
import ShowTransportLayer from './transport/ShowTransportLayer';
import UIStore from './UIStore';


class RootStore {
  constructor() {
    const datastore = new Datastore({
      filename: path.join(remote.app.getPath('userData'), '/data.db'),
      autoload: true
    })

    this.settingsStore = new SettingsStore(datastore);
    this.showStore = new ShowStore(new ShowTransportLayer());
    this.uiStore = new UIStore();
  }
}

export default RootStore;