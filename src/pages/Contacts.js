import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filer from '../components/Filter/Filter';

export default function Contacts() {
  return (
    <div style={{ paddingLeft: 15 }}>
      <h1 className="contact_title">Phonebook</h1>
      <ContactForm />
      <h2 className="contact__title">Contacts</h2>
      <Filer />
      <ContactList />
    </div>
  );
}
