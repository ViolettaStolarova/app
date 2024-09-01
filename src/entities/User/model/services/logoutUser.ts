import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '../slice/userSlice';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;

    try {
      StorageService.deleteItem(STORAGE_KEYS.LOCAL_STORAGE_USER_ID_KEY);

      dispatch(userActions.logout());
    } catch (e) {
      return rejectWithValue('');
    }
  }
);
