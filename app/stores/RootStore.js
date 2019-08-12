import { remote } from 'electron'
import Datastore from 'nedb'
import path from 'path'

import FavouritesStore from './FavouritesStore';
import SettingsStore from './SettingsStore';
import ShowStore from './ShowStore';
import ShowTransportLayer from './transport/ShowTransportLayer';
import UIStore from './UIStore';


class RootStore {
  constructor() {
    const settingsDataStore = new Datastore({
      filename: path.join(remote.app.getPath('userData'), '/data.db'),
      autoload: true
    })

    const favouritesDataStore = new Datastore({
      filename: path.join(remote.app.getPath('userData'), '/favourites.db'),
      autoload: true,
      timestampData: true,
    })

    this.favouritesStore = new FavouritesStore(favouritesDataStore);
    this.settingsStore = new SettingsStore(settingsDataStore);
    this.showStore = new ShowStore(new ShowTransportLayer());
    this.uiStore = new UIStore();
  }
}

export default RootStore;