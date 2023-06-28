import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginForm = () => {
  //   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const hendlChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const hendlSubmit = e => {
    e.preventDefault();

    // const preCheck = contacts.some(
    //   contacts =>
    //     contacts.name.toLowerCase() === name.toLowerCase() ||
    //     contacts.number === number
    // );

    // if (preCheck) {
    //   alert(`Sorry, contact ${name} is already exists`);
    //   return;
    // }

    dispatch(addContact({ name, email }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
  };

  return (
    <FormControl mb="50px" onSubmit={hendlSubmit}>
      <FormLabel>
        Name
        <Input
          value={name}
          onChange={hendlChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Email
        <Input
          value={email}
          onChange={hendlChange}
          type="email"
          name="number"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          required
        />
      </FormLabel>
      <Button size="sm" colorScheme="blue" type="submit">
        Login
      </Button>
    </FormControl>
  );
};

export default LoginForm;
