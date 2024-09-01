import { IStorageService, LocalStorage } from './localStorage';

export { STORAGE_KEYS } from './constants';

export const StorageService: IStorageService = new LocalStorage();
