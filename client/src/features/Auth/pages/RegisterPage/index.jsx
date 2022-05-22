import { Box, Center, Container, Image, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import RegisterImage from '../../../../assets/banner.png';
import RegisterForm from '../../components/RegisterForm';
import { auth } from '../../../../firebase';
import userApi from '../../../../api/userApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const onClickSubmitForm = async (values) => {
    try {
      await auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          console.log(user);
        });

      await userApi
        .addUser({
          userFirebaseId: auth.currentUser.uid,
          email: auth.currentUser.email,
          name: values.name,
        })
        .then(() => {
          toast.success('Registered successfully!', {
            autoClose: 1200,
          });
        });

      await auth.currentUser
        .updateProfile({
          displayName: values.name,
        })
        .catch((error) => {
          console.log(error);
        });

      setTimeout(() => {
        window.location.pathname = '/';
      }, 1300);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(`${values.email} already in use!`);
      }
    }
  };

  return (
    <Stack spacing='0' direction={['column', 'row']} h='100vh' w='100vw'>
      <Box flex='1'>
        <Image
          objectFit='contain'
          w='100%'
          h='100%'
          src={RegisterImage}
          alt='register-image'
        />
      </Box>
      <Box flex='1'>
        <Center h='100vh'>
          <Container>
            <RegisterForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              formData={formData}
              setFormData={setFormData}
              onClickSubmitForm={onClickSubmitForm}
            />
          </Container>
        </Center>
      </Box>
      <ToastContainer />
    </Stack>
  );
}
