import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginForm = () => {
  //   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendlChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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

    dispatch(logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormControl mb="50px">
      <form onSubmit={hendlSubmit}>
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
          Login
        </Button>
      </form>
    </FormControl>
  );
};

export default LoginForm;
