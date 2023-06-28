import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filer from '../components/Filter/Filter';
import { Container, Heading } from '@chakra-ui/react';

export default function Contacts() {
  return (
    <Container
      maxW="2xl"
      p="12px"
      centerContent
      display="flex"
      flex-derection="column"
      gap="15px"
    >
      <Heading size="lg">Phonebook</Heading>
      <ContactForm />
      <Heading size="lg">Contacts</Heading>
      <Filer />
      <ContactList />
    </Container>
  );
}
