import {
  Box,
  useColorModeValue,
  chakra,
  Image,
  Text,
  Heading,
  Divider,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';

export default function TodoCard(props) {
  const { todo } = props;
  const location = useLocation();
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <>
      <Box
        maxW={{ base: '100%', sm: 'sm', md: 'md', lg: 'lg' }}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
        bg={bg}
        _hover={{
          boxShadow: '2xl',
        }}>
        <Box
          h={{ base: '150px', sm: '300px' }}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={{ base: '2', sm: '6' }}>
          <Link
            to={`todo/detail/${todo.id}`}
            state={{ backgroundLocation: location }}>
            <Tooltip hasArrow label='Show detail' bg='gray.300' color='black'>
              <Image
                height={{ base: '150px', sm: '300px' }}
                loading='eager'
                w={'full'}
                src='https://static.vecteezy.com/system/resources/previews/002/531/065/original/task-list-illustration-vector.jpg'
                objectFit={'cover'}
                cursor='pointer'
              />
            </Tooltip>
          </Link>
        </Box>

        <Box px='4'>
          <Text
            color={'green.400'}
            textTransform={'uppercase'}
            fontWeight={{ base: 600, sm: 800 }}
            fontSize={{ base: 'xs', sm: 'sm' }}
            letterSpacing={1}
            mb={{ base: 'xs', sm: '1.5' }}>
            {todo.title}
          </Text>
          <Box minH='56px'>
            <Heading
              noOfLines={3}
              color={useColorModeValue('gray.700', 'white')}
              fontSize={{ base: 'xs', sm: 'md', md: 'md' }}
              fontFamily={'body'}>
              {todo.description}
            </Heading>
          </Box>
          <Divider orientation='horizontal' mt='2' mb='3' />
          <Stack direction={'row'} justify={'flex-start'} mb='2'>
            <Stack flex={1} spacing={1} align={'flex-start'} py='3'>
              <Text as='span' fontSize={{ base: 'xs', sm: 'sm' }}>
                <Text
                  color={useColorModeValue('black', 'white')}
                  fontSize='md'
                  fontWeight='bold'>
                  Changed at:{' '}
                  {moment(
                    todo.createdAt ? todo.updatedAt : todo.createdAt
                  ).fromNow()}
                </Text>
              </Text>
            </Stack>
          </Stack>

          <Stack justify={'flex-end'}>
            <Stack
              spacing={4}
              direction='row'
              alignItems='flex-end'
              justifyContent='flex-end'
              py={2}
              roundedBottom='lg'>
              <Link
                to={`todo/edit/${todo.id}`}
                state={{ backgroundLocation: location }}>
                <chakra.button
                  px={4}
                  py={1}
                  bg='green.200'
                  fontSize='lg'
                  color='gray.900'
                  fontWeight='bold'
                  rounded='lg'
                  textTransform='uppercase'
                  _hover={{
                    bg: 'green.300',
                  }}
                  _focus={{
                    bg: 'green.400',
                  }}>
                  Edit
                </chakra.button>
              </Link>

              <Link
                to={`todo/delete/${todo.id}`}
                state={{ backgroundLocation: location }}>
                <chakra.button
                  px={4}
                  py={1}
                  bg='red.200'
                  fontSize='lg'
                  color='gray.900'
                  fontWeight='bold'
                  rounded='lg'
                  textTransform='uppercase'
                  _hover={{
                    bg: 'red.300',
                  }}
                  _focus={{
                    bg: 'red.400',
                  }}>
                  Delete
                </chakra.button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
