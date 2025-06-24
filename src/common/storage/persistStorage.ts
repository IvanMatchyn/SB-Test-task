import { Storage } from 'redux-persist';

import { MMKVStorage } from './storage';

export const wrappedStorage: Storage = {
  setItem: (key: string, value: string | number | boolean) => {
    MMKVStorage.storeDataStorage(key, value, true);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = MMKVStorage.getStorageStringData(key, true);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    MMKVStorage.removeStorageData(key, true);
    return Promise.resolve();
  },
};
