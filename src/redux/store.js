import { configureStore } from '@reduxjs/toolkit';
import { authSlice, contactsSlice, filterSlice } from './index';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistedAuthSlice = persistReducer(
  { key: 'auth', storage, whiteList: ['token'] },
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthSlice,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
