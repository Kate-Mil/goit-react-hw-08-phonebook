import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './index';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
