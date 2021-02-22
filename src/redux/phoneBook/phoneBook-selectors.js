import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = state => {
  const filter = getFilter(state);
  const allContacts = getAllContacts(state);
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
export default {
  getLoading,
  getAllContacts,
  getFilter,
  getFilteredContacts,
};
