export enum STORAGE_KEYS {
  THEME_KEY = 'theme',
  USER_ID_KEY = 'userId',
}

export enum VALUE_TYPE {
  PRIMITIVE = 'primitive',
  OBJECT = 'object',
}

export const mapStoreKeysToValueType: Record<STORAGE_KEYS, VALUE_TYPE> = {
  [STORAGE_KEYS.THEME_KEY]: VALUE_TYPE.PRIMITIVE,
  [STORAGE_KEYS.USER_ID_KEY]: VALUE_TYPE.PRIMITIVE,
};
