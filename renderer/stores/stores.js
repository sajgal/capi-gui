import { useStaticRendering } from 'mobx-react';

import ShowStore from './ShowStore';
import ShowTransportLayer from './transport/ShowTransportLayer';
import SettingsStore from './SettingsStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;
const getStores = function() {
  return {
    showStore: new ShowStore(new ShowTransportLayer()),
    settingsStore: new SettingsStore("new ElectronStore()"),
  };
}

export default function initializeStore(initialData = { showStore: {} }) {
  if (isServer) {
    return getStores();
  }
  if (store === null) {
    store = getStores();
  }

  return store;
}