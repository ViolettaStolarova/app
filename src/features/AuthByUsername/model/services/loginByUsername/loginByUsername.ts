import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserByUsername, userActions } from 'entities/User';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

export const loginByUsername = createAsyncThunk(
  'auth/loginByUsername',
  async (username: string, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;

    try {
      const user = await dispatch(getUserByUsername(username)).unwrap();

      if (!user) {
        return rejectWithValue('The user was not found.');
      }

      StorageService.setItem(STORAGE_KEYS.USER_ID_KEY, user.id);

      dispatch(userActions.setAuthData(user));

      return user;
    } catch (e) {
      return rejectWithValue('Something went wrong, try again later');
    }
  }
);
