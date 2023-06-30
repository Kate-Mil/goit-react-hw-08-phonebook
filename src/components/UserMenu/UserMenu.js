import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOut } from '../../redux';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import gus from '../../pictures/gus.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Box display="flex" gap="10px">
      <Box
        as="img"
        src={gus}
        boxSize="2em"
        backgroundColor="#A5DEFF"
        rounded="50%"
        justifyContent="center"
      />
      <p>
        Welcome, <Text as="b">{name}</Text>
      </p>
      <Link to="/">
        <Button
          size="xs"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Link>
    </Box>
  );
};
