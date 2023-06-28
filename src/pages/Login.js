import LoginForm from '../components/LoginForm/LoginForm';
import { Container, Box, Image } from '@chakra-ui/react';
import gus2 from '../pictures/gus2.svg';

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
      <Box>
        <Image width="280px" src={gus2} alt="Logo" />
      </Box>
    </Container>
  );
}
