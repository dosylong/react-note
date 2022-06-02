import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import * as yup from 'yup';

export default function EditTodoForm(props) {
  const { onPressEditTodo, myTodo } = props;

  const initialValues = {
    title: myTodo.title,
    description: myTodo.description,
  };

  const handleEditTodo = (values) => {
    onPressEditTodo(values);
  };

  const todoSchema = yup.object().shape({
    title: yup.string().required('Title is required!'),
    description: yup.string().required('Description is required!'),
  });

  return (
    <>
      {Object.keys(myTodo).length > 0 && (
        <Formik
          initialValues={initialValues}
          validationSchema={todoSchema}
          onSubmit={(values) => {
            handleEditTodo(values);
            return new Promise((resolve) => {
              setTimeout(resolve, 1500);
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
                <FormControl
                  isRequired
                  isInvalid={errors.title && touched.title}>
                  <FormLabel htmlFor='title' fontWeight='bold'>
                    Title
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<BsClipboardCheck color='gray' />}
                    />
                    <Input
                      id='title'
                      type='text'
                      placeholder='Title'
                      onChange={handleChange}
                      value={values.title}
                      focusBorderColor='green.400'
                      sx={{
                        borderRadius: '9px',
                      }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={errors.description && touched.description}>
                  <FormLabel htmlFor='description' fontWeight='bold'>
                    Description
                  </FormLabel>

                  <InputGroup>
                    <Textarea
                      id='description'
                      type='text'
                      placeholder='Description'
                      onChange={handleChange}
                      value={values.description}
                      focusBorderColor='green.400'
                      sx={{
                        borderRadius: '9px',
                      }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>

                <Button
                  w='full'
                  colorScheme='green'
                  sx={{
                    borderRadius: '9px',
                  }}
                  isLoading={isSubmitting}
                  loadingText={isSubmitting && 'Editing...'}
                  boxShadow='xl'
                  type='submit'
                  onClick={handleSubmit}>
                  Edit
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
