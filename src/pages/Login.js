import LoginForm from '../components/LoginForm/LoginForm';
import { Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Container
      maxW="2xl"
      p="12px"
      centerContent
      display="flex"
      flex-derection="column"
      gap="15px"
    >
      <LoginForm />
    </Container>
  );
}
