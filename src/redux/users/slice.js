import { getUsers, getUserId, deleteUser } from './operation';
import { createSlice } from '@reduxjs/toolkit';

const sliceUsers = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: {
    [getUsers.pending](state) {
      state.isLoading = true;
    },
    [getUsers.fulfilled](state, action) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getUsers.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [getUserId.pending](state) {
      state.isLoading = true;
    },
    [getUserId.fulfilled](state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getUserId.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteUser.pending](state) {
      state.isLoading = true;
    },
    [deleteUser.fulfilled](state, action) {
      state.users = state.users.filter(({ id }) => id !== action.payload);
      state.isLoading = false;
      state.error = null;
      state.currentUser = null;
    },
    [deleteUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const userReducer = sliceUsers.reducer;
