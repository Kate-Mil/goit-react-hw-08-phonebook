import { NavLink } from 'react-router-dom';
import { chakra, List, ListItem } from '@chakra-ui/react';
import { selectIsLoggedIn } from '../../redux';
import { useSelector } from 'react-redux';

const StyledListItem = chakra(ListItem, {
  baseStyle: {
    fontSize: '20px',
    color: '#2EAFEF',
    transition: 'color 0.2s',
    _hover: { color: '#1C8DBB', textShadow: '1px 1px grey' },
    _focus: { color: '#1C8DBB' },
  },
});

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <List display="flex" gap="10px">
        <StyledListItem>
          <NavLink to="/">Home</NavLink>
        </StyledListItem>
        {isLoggedIn && (
          <StyledListItem>
            <NavLink to="/contacts">Contacts</NavLink>
          </StyledListItem>
        )}
      </List>
    </nav>
  );
};
