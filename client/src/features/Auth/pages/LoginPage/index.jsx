import { Box, Center, Container, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import { auth } from '../../../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/app';
import LoginImage from '../../../../assets/banner.png';
import { Link } from 'react-router-dom';
//import userApi from '../../../../api/userApi';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const provider = new firebase.auth.GoogleAuthProvider();
  //const user = JSON.parse(localStorage.getItem('account'));

  const onPressLoginGoogle = async () => {
    try {
      await auth
        .signInWithRedirect(provider)
        .then((result) => {
          console.log(result);
        })
        .then(() => {
          window.location.pathname = '/';
        });
    } catch (error) {
      if (error) {
        toast.error(error);
      }
    }
  };

  // useEffect(() => {
  //   if (user) return;
  //   try {
  //     const createUser = async () => {
  //       const response = await userApi.createUser({
  //         userFirebaseId: user?.uid,
  //         email: user?.email,
  //         fullName: user?.displayName,
  //       });
  //       console.log(response);
  //     };
  //     createUser();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [user]);

  const onPressLogin = async (values) => {
    try {
      await auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          console.log(user);
        });
      setTimeout(() => {
        window.location.pathname = '/';
      }, 800);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error('Please check your Password again!');
      }
      if (error.code === 'auth/user-not-found') {
        toast.error('Account not found!');
      }
    }
  };

  return (
    <Stack
      spacing='0'
      direction={['column', 'row']}
      maxH='100vh'
      maxW='100vw'
      h='90vh'>
      <Box flex='1'>
        <Box
          w='100%'
          h='auto'
          margin='12px'
          pl='25px'
          fontSize='xl'
          color='green'
          fontWeight='bold'
          _hover={{
            color: 'green.800',
            cursor: 'pointer',
          }}>
          <Link to='/'>Notice Me 📝</Link>
        </Box>
        <Image
          w='100%'
          h='100%'
          src={LoginImage}
          alt='login-image'
          fit='contain'
        />
      </Box>
      <Box flex='1'>
        <Center h='100vh' w='100w'>
          <Container>
            <LoginForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onPressLogin={onPressLogin}
              onPressLoginGoogle={onPressLoginGoogle}
            />
          </Container>
        </Center>
      </Box>
      <ToastContainer />
    </Stack>
  );
}
