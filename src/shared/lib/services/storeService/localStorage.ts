import { mapStoreKeysToValueType, STORAGE_KEYS, VALUE_TYPE } from './constants';

export interface IStorageService {
  setItem: (key: STORAGE_KEYS, item: string | number | boolean) => void;
  getItem: (
    key: STORAGE_KEYS
  ) => string | number | boolean | object | undefined;
  deleteItem: (key: STORAGE_KEYS) => void;
}

export class LocalStorage implements IStorageService {
  setItem(key: STORAGE_KEYS, item: string | number | boolean | object) {
    const value =
      typeof item === VALUE_TYPE.OBJECT ? JSON.stringify(item) : item;

    localStorage.setItem(key, String(value));
  }

  deleteItem(key: STORAGE_KEYS) {
    localStorage.removeItem(key);
  }

  getItem(key: STORAGE_KEYS) {
    if (mapStoreKeysToValueType[key] === VALUE_TYPE.OBJECT) {
      const storedValue = localStorage.getItem(key);

      try {
        return storedValue ? JSON.parse(storedValue) : undefined;
      } catch (error) {
        return undefined;
      }
    }

    return localStorage.getItem(key);
  }
}
