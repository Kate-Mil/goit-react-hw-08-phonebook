import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="2xl" p="12px" mt="90px" centerContent>
      <Heading size="4xl" mb={2} color="#2EAFEF" textShadow="2px 2px grey">
        Phonebook
      </Heading>
    </Container>
  );
}
