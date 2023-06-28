import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="2xl" p="12px" mt="90px" centerContent>
      <Heading size="lg" mb={2} color="blue" textShadow="2px 2px grey">
        Phonebook
      </Heading>
    </Container>
  );
}
