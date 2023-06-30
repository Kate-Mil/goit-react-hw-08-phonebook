import { Container, Box, Image } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import gus3 from '../pictures/gus3.svg';

export default function Register() {
  return (
    <Container
      maxW="2xl"
      p="12px"
      centerContent
      display="flex"
      flex-direction="column"
      gap="15px"
    >
      <RegisterForm />
      <Box>
        <Image width="280px" src={gus3} alt="Logo" />
      </Box>
    </Container>
  );
}
