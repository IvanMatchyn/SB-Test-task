import { MMKV } from 'react-native-mmkv';

import { TStorageValue } from '../models/types/storage.types';

const storageInstance = new MMKV();
let secureStorageInstance: MMKV | null = null;

const initSecureStorage = (encryptionKey: string) => {
  secureStorageInstance = new MMKV({
    id: 'mmkv-secure-storage-instance',
    encryptionKey,
  });
};

const selectStorage = (secure?: boolean): MMKV => {
  if (secure) {
    if (!secureStorageInstance) throw new Error('SecureStorage is not initialized!');
    return secureStorageInstance;
  }
  return storageInstance;
};

const storeDataStorage = (key: string, value: TStorageValue, secure?: boolean) => {
  selectStorage(secure).set(key, value);
};

const getStorageStringData = (key: string, secure?: boolean) =>
  selectStorage(secure).getString(key);

const getStorageNumberData = (key: string, secure?: boolean) =>
  selectStorage(secure).getNumber(key);

const getStorageBooleanData = (key: string, secure?: boolean) =>
  selectStorage(secure).getBoolean(key);

const removeStorageData = (key: string, secure?: boolean) => selectStorage(secure).delete(key);

const clearAllStorages = () => {
  selectStorage(true).clearAll();
  selectStorage(false).clearAll();
};

const MMKVStorage = {
  storageInstance,
  secureStorageInstance,
  storeDataStorage,
  getStorageStringData,
  getStorageNumberData,
  getStorageBooleanData,
  removeStorageData,
  clearAllStorages,
  initSecureStorage,
};

export { MMKVStorage };

MMKVStorage.initSecureStorage('test');
