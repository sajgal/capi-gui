import { useStaticRendering } from 'mobx-react';

import EmployeeStore from './EmployeeStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const getStores = function() {
  return {
    employeeStore: new EmployeeStore(),
  };
}

export default function initializeStore(initialData = { employeeStore: {} }) {
  if (isServer) {
    return getStores();
  }
  if (store === null) {
    store = getStores();
  }

  return store;
}