import { Container, Box, Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import gus from '../pictures/gus.svg';

export default function Home() {
  return (
    <Container maxW="2xl" p="12px" mt="90px" centerContent>
      <Heading size="4xl" mb={2} color="#2EAFEF" textShadow="2px 2px grey">
        Phonebook
      </Heading>
      <Box>
        <Image width="470px" src={gus} alt="Logo" />
      </Box>
    </Container>
  );
}
