import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container } from '@chakra-ui/react';
import Banner from '../components/Banner';

export default function Layout() {
  return (
    <>
      <Header />
      <Banner />
      <Container as='main' mt='20'>
        <Box minH='20vh' maxH='auto' px={4}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
