import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { rtkApi } from 'shared/api/rtkApi';

import { userReducer } from 'entities/User';

function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}

export const store = createReduxStore();

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
