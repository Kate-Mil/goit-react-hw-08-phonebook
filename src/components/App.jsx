import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { refreshUser } from '../redux';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}
