import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, lazy } from 'react';
import { refreshUser, selectIsRefreshing } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './RrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from './Loader/Loader';
import { theme } from './globalStyles';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}
