import { configureStore } from '@reduxjs/toolkit'; 
import configReducer from '../feactures/alpine/AlpineSlice';

export const store = configureStore({ 
  reducer: {
    config: configReducer
  }
});
