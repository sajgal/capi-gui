import ShowStore from './ShowStore';
import ShowTransportLayer from './transport/ShowTransportLayer';
import SettingsStore from './SettingsStore';
import UIStore from './UIStore';

class RootStore {
  constructor() {
    this.showStore = new ShowStore(new ShowTransportLayer());
    this.settingsStore = new SettingsStore();
    this.uiStore = new UIStore();
  }
}

export default RootStore;