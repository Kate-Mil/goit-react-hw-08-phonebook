import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container
      maxW="1280px"
      h="100vh"
      bgGradient="linear(to-b, #EDE990,#2EAFEF)"
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
