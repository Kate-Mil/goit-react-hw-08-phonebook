import PropTypes from 'prop-types';
import { IconButton, Text, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import IconUserCircle from '../../pictures/IconUser/IconUser';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li>
      <Box
        w="200px"
        p="6"
        display="flex"
        flexDirection="column"
        gap="10px"
        alignItems="center"
        boxShadow="base"
        rounded="md"
      >
        <Box
          as={IconUserCircle}
          boxSize="4em"
          fill="currentColor"
          // mr="1rem"
          boxShadow="dark-lg"
          rounded="50%"
          color="#00000040"
        />
        <Text>{name}</Text>
        <Text>{number}</Text>
        <IconButton
          onClick={onDeleteContact}
          type="button"
          colorScheme="blue"
          aria-label="Search database"
          icon={<DeleteIcon />}
        />
      </Box>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
