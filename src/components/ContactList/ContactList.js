import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  fetchContacts,
  deleteContact,
} from '../../redux';
import { useEffect } from 'react';
import { List } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
  );
}

// export default function ContactList() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);

//   const getVisibleContacts = () => {
//     const normilizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };
//   const visibleContacts = getVisibleContacts();
//   console.log(visibleContacts);

//   if (!visibleContacts.length) return null;

//   return (
//     <ul className={css.contact__list}>
//       {visibleContacts.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           name={name}
//           number={number}
//           onDeleteContact={() => dispatch(deleteContactThunk(id))}
//         />
//       ))}
//     </ul>
//   );
// }
