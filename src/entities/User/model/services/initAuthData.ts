import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserById } from '../../api/userApi';
import { userActions } from '../slice/userSlice';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

export const initAuthData = createAsyncThunk(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;

    try {
      const userId = StorageService.getItem(STORAGE_KEYS.USER_ID_KEY);

      if (!userId) {
        return;
      }

      const user = await dispatch(getUserById(Number(userId))).unwrap();

      if (!user) {
        return rejectWithValue('The user was not found');
      }

      dispatch(userActions.setAuthData(user));
    } catch (e) {
      return rejectWithValue('');
    }
  }
);
