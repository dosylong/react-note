import {
  Box,
  Flex,
  useColorModeValue,
  chakra,
  Image,
  Text,
  Heading,
  Divider,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';

export default function TodoCard(props) {
  const { myTodo, handleDeleteTodo } = props;
  const location = useLocation();

  return (
    <>
      <Box
        maxW={{ base: '100%', sm: 'sm', md: 'md', lg: 'lg' }}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
        _hover={{
          boxShadow: '2xl',
        }}>
        <Box
          h={{ base: '150px', sm: '300px' }}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={{ base: '2', sm: '6' }}>
          <Image
            height={{ base: '150px', sm: '300px' }}
            loading='eager'
            w={'full'}
            src='https://www.sunnyskyz.com/uploads/2021/03/ufp23-cat-with-bowl-cut-2.jpg'
            objectFit={'cover'}
            cursor='pointer'
          />
        </Box>
        <Box px='4'>
          <Text
            color={'green.400'}
            textTransform={'uppercase'}
            fontWeight={{ base: 600, sm: 800 }}
            fontSize={{ base: 'xs', sm: 'sm' }}
            letterSpacing={1}
            mb={{ base: 'xs', sm: '1.5' }}
            cursor='pointer'>
            {myTodo.title}
          </Text>
          <Box minH='56px'>
            <Heading
              display='block'
              color={useColorModeValue('gray.700', 'white')}
              fontSize={{ base: 'xs', sm: 'md', md: 'md' }}
              fontFamily={'body'}>
              {myTodo.description}
            </Heading>
          </Box>
          <Divider orientation='horizontal' mt='2' mb='3' />
          <Stack direction={'row'} justify={'center'} mb='2'>
            <Stack flex={1} spacing={1} align={'center'} py='3'>
              <Text as='span' fontSize={{ base: 'xs', sm: 'sm' }}>
                {moment(myTodo.createdAt).fromNow() ? (
                  <Text color='black' fontSize='md'>
                    Created at: {moment(myTodo.createdAt).fromNow()}
                  </Text>
                ) : (
                  <Text color='black' fontSize='md'>
                    Updated at: {moment(myTodo.updatedAt).fromNow()}
                  </Text>
                )}
              </Text>
            </Stack>

            <Stack flex={1} spacing={1} align={'flex-end'}>
              <Flex
                alignItems='center'
                justifyContent='space-between'
                px={4}
                py={2}
                roundedBottom='lg'>
                <Link
                  to={`todo/edit/${myTodo.id}`}
                  state={{ backgroundLocation: location }}>
                  <chakra.button
                    px={2}
                    py={1}
                    bg='white'
                    fontSize='lg'
                    color='gray.900'
                    fontWeight='bold'
                    rounded='lg'
                    textTransform='uppercase'
                    _hover={{
                      bg: 'green.200',
                    }}
                    _focus={{
                      bg: 'green.400',
                    }}>
                    Edit
                  </chakra.button>
                </Link>

                <Link
                  to={`todo/delete/${myTodo.id}`}
                  state={{ backgroundLocation: location }}>
                  <chakra.button
                    px={2}
                    py={1}
                    bg='white'
                    fontSize='lg'
                    color='gray.900'
                    fontWeight='bold'
                    rounded='lg'
                    textTransform='uppercase'
                    _hover={{
                      bg: 'red.200',
                    }}
                    _focus={{
                      bg: 'red.400',
                    }}>
                    Delete
                  </chakra.button>
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
