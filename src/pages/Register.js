import { Container } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container
      maxW="2xl"
      p="12px"
      centerContent
      display="flex"
      flex-derection="column"
      gap="15px"
    >
      <RegisterForm />
    </Container>
  );
}
