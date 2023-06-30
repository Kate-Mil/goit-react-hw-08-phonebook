import { Box, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOut } from '../../redux';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Box display="flex" gap="15px">
      <p>{name}</p>
      <Button
        size="xs"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="blue"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
