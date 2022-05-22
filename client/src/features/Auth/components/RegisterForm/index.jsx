import {
  Heading,
  Text,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  VStack,
  Button,
  InputRightElement,
  FormErrorMessage,
  Flex,
} from '@chakra-ui/react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm(props) {
  const {
    showPassword,
    setShowPassword,
    onClickSubmitForm,
    formData,
    setFormData,
  } = props;

  const initialValues = {
    email: formData.email,
    name: formData.name,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };

  const handleOnSubmit = (values) => {
    setFormData({
      email: values.email,
      name: values.name,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    onClickSubmitForm(values);
  };

  const signUpSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, 'Password must contain 6-8 characters!')
      .required('Password is required!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match!'),
    email: yup
      .string()
      .email('Please input valid email!')
      .required('Email is required!'),
    name: yup.string().required('Name is required!'),
  });

  return (
    <>
      <Heading size='2xl' color='green'>
        Get's started
      </Heading>

      <Box py='3'>
        <Text color='gray.600'>
          Let's get you all set up in order to find your favorite recipe.
        </Text>
      </Box>

      <Box py='5'>
        <Flex align='center'>
          <Box
            w='full'
            borderTopWidth='2px'
            h='3px'
            borderTopColor='gray.200'
          />
        </Flex>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          handleOnSubmit(values);
          return new Promise((resolve) => {
            setTimeout(resolve, 1200);
          });
        }}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form>
            <VStack spacing='5'>
              <FormControl isRequired isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor='name' fontWeight='bold'>
                  Name
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<HiOutlineMail color='gray' />}
                  />
                  <Input
                    id='name'
                    type='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={values.name}
                    focusBorderColor='green.400'
                    sx={{
                      borderRadius: '9px',
                    }}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor='email' fontWeight='bold'>
                  Email
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<HiOutlineMail color='gray' />}
                  />
                  <Input
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={values.email}
                    focusBorderColor='green.400'
                    sx={{
                      borderRadius: '9px',
                    }}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor='password' fontWeight='bold'>
                  Password
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<RiLockPasswordLine color='gray' />}
                  />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={handleChange}
                    value={values.password}
                    focusBorderColor='green.400'
                    sx={{
                      borderRadius: '9px',
                    }}
                  />
                  <InputRightElement>
                    <Button
                      variant='ghost'
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      <Text fontSize='xl'>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </Text>
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={errors.confirmPassword && touched.confirmPassword}>
                <FormLabel htmlFor='confirmPassword' fontWeight='bold'>
                  Confirm password
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<RiLockPasswordLine color='gray' />}
                  />
                  <Input
                    id='confirmPassword'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm password'
                    onChange={handleChange}
                    value={values.confirmPassword}
                    focusBorderColor='green.400'
                    sx={{
                      borderRadius: '9px',
                    }}
                  />
                  <InputRightElement>
                    <Button
                      variant='ghost'
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      <Text fontSize='xl'>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </Text>
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>

              <Button
                w='full'
                colorScheme='green'
                sx={{
                  borderRadius: '9px',
                }}
                isLoading={isSubmitting}
                loadingText={isSubmitting && 'Registering...'}
                boxShadow='xl'
                type='submit'
                onClick={handleSubmit}>
                Register
              </Button>
            </VStack>

            <Box py='2'>
              <HStack>
                <Text>Already have an account?</Text>
                <Link to='/account/login'>
                  <Text
                    color='green.500'
                    fontWeight='bold'
                    _hover={{ textDecoration: 'underline' }}>
                    Log in.
                  </Text>
                </Link>
              </HStack>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
