import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Flex, Box } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Flex
        align="center"
        justify="space-between"
        p="4px"
        borderBottom="1px solid"
        borderColor="#2EAFEF"
        mb="50px"
      >
        <Box p="10px">
          <Navigation />
        </Box>
        {isLoggedIn ? (
          <Box p="10px">
            <UserMenu />
          </Box>
        ) : (
          <Box p="10px">
            <AuthNav />
          </Box>
        )}
      </Flex>
    </header>
  );
}
