import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const RegisterForm = () => {
  //   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendlChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
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
    console.log(name);
    console.log(email);
    console.log(password);
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormControl mb="50px">
      <form onSubmit={hendlSubmit}>
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
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
          />
        </FormLabel>
        <FormLabel>
          Password
          <Input
            value={password}
            onChange={hendlChange}
            type="text"
            name="password"
            pattern="^(?=.*[a-z]).{7,}$"
            title="Password must be at least 5 characters long and contain at least one lowercase letter"
            required
          />
        </FormLabel>
        <Button size="sm" colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </FormControl>
  );
};

export default RegisterForm;
