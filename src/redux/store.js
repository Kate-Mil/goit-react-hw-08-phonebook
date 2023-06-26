import { configureStore } from '@reduxjs/toolkit';
import { authSlice, contactsSlice, filterSlice } from './index';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
