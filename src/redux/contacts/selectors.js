export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleaAddContacts = (state, { payload }) => {
  // state.items.push(payload);
  state.items = [payload, ...state.items]; // чтобы записывалось вначале списка
};
export const handleDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};
