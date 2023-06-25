import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendlChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const hendlSubmit = e => {
    e.preventDefault();

    const preCheck = contacts.some(
      contacts =>
        contacts.name.toLowerCase() === name.toLowerCase() ||
        contacts.number === number
    );

    if (preCheck) {
      alert(`Sorry, contact ${name} is already exists`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contact__form} onSubmit={hendlSubmit}>
      <label className={css.contact__lable}>
        Name
        <input
          className={css.contact__input}
          value={name}
          onChange={hendlChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contact__lable}>
        Number
        <input
          className={css.contact__input}
          value={number}
          onChange={hendlChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
