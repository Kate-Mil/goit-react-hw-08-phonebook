import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  fetchContacts,
  deleteContact,
  selectIsLoading,
  selectError,
} from '../../redux';
import { useEffect } from 'react';
import { List } from '@chakra-ui/react';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  if (!visibleContacts.length) return null;

  return (
    <>
      {isLoading && !error && <Loader />}
      <List
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="auto"
        gridGap="2rem"
      >
        {visibleContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        ))}
      </List>
    </>
  );
}
