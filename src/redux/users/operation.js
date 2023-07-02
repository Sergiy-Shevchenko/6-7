import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648db88a2de8d0ea11e826bf.mockapi.io';

export const getUsers = createAsyncThunk(
  'userrs/fetchall',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserId = createAsyncThunk(
    'userrs/fetchUser',
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await axios(`/user/${id}`);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
