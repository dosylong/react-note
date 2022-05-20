import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import Auth from './features/Auth/index';
import Layout from './layout';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('User is not logged in');
        return;
      } else {
        const currentUser = auth.currentUser;
        if (currentUser) {
          console.log('Logged in user: ', currentUser);
          localStorage.setItem('account', JSON.stringify(currentUser));
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const user = localStorage.getItem('account');

  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='account/*'
            element={!user ? <Auth /> : <Navigate to='/' replace />}
          />

          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
