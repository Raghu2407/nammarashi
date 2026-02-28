// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import attractionsReducer from '../features/attractions/attractionsSlice';

export const store = configureStore({
  reducer: {
    attractions: attractionsReducer,
  },
});