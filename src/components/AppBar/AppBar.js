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
        borderBottom="2px"
        boxShadow="base"
      >
        <Box>
          <Navigation />
        </Box>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        {/* <UserMenu /> */}
        <Box>
          <AuthNav />
        </Box>
      </Flex>
    </header>
  );
}
