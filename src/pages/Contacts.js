import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filer from '../components/Filter/Filter';
import { Container, Heading, Box } from '@chakra-ui/react';

export default function Contacts() {
  return (
    <Box overflow="auto">
      <Container
        maxW="2xl"
        p="12px"
        centerContent
        display="flex"
        flex-derection="column"
        gap="15px"
        height="100vh"
      >
        <Heading size="lg">Phonebook</Heading>
        <ContactForm />
        <Heading size="lg">Contacts</Heading>
        <Filer />
        <ContactList />
      </Container>
    </Box>
  );
}
