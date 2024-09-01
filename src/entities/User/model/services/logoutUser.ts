import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '../slice/userSlice';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

export const logoutUser = createAsyncThunk('user/logoutUser', (_, thunkAPI) => {
  const { dispatch } = thunkAPI;

  StorageService.deleteItem(STORAGE_KEYS.USER_ID_KEY);

  dispatch(userActions.logout());
});
