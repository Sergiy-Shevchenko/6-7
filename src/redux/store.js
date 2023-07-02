import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../redux/users/slice';

export const userStore = configureStore({ reducer: userReducer });
