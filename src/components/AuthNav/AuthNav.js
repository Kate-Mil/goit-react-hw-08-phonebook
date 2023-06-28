import { NavLink } from 'react-router-dom';
import { chakra, List, ListItem } from '@chakra-ui/react';

const StyledListItem = chakra(ListItem, {
  baseStyle: {
    fontSize: '20px',
    color: '#2EAFEF',
    transition: 'color 0.2s',
    _hover: { color: '#1C8DBB', textShadow: '1px 1px grey' },
    _focus: { color: '#1C8DBB' },
  },
});

export const AuthNav = () => {
  return (
    <div>
      <List display="flex" gap="10px">
        <StyledListItem>
          {' '}
          <NavLink to="/register">Register</NavLink>
        </StyledListItem>
        <StyledListItem>
          {' '}
          <NavLink to="/login">Log In</NavLink>
        </StyledListItem>
      </List>
    </div>
  );
};
