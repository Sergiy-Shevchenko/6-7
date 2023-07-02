import { getUsers, getUserId } from './operation';
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
    }

  },
});


export const userReducer = sliceUsers.reducer