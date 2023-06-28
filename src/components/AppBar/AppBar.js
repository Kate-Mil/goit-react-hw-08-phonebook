import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Flex, Box } from '@chakra-ui/react';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export default function AppBar() {
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
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        {/* <UserMenu /> */}
        <Box p="10px">
          <AuthNav />
        </Box>
      </Flex>
    </header>
  );
}
