import { useStaticRendering } from 'mobx-react';

import EmployeeStore from './EmployeeStore';
import ShowStore from './ShowStore';
import ShowTransportLayer from './transport/ShowTransportLayer';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const getStores = function() {
  return {
    employeeStore: new EmployeeStore(),
    showStore: new ShowStore(new ShowTransportLayer()),
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