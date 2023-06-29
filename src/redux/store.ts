import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.ts';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware];
  },
});

export default store;
