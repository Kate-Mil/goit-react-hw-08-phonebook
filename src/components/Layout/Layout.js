import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container maxW="1280px">
      <AppBar />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default Layout;
