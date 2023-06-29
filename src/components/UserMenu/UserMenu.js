import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOut } from '../../redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>{name}</p>
      <Button size="xs" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
