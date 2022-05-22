import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Container,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  //useDisclosure,
  //useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import userApi from '../../api/userApi';
import { AddIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();
  //const user = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();

  const onPressSignOut = async () => {
    await auth.signOut().then(() => {
      localStorage.clear();
      window.location.href = '/';
    });
  };

  const onPressAddTodo = () => {
    navigate('/todo/add-todo');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;
    const getUserProfile = async () => {
      try {
        const response = await userApi.getUser({
          userFirebaseId: currentUser.uid,
        });
        setUserProfile(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsLoggedIn(localStorage.getItem('account'));
    }
  }, [isLoggedIn]);
  return (
    <>
      <Box
        px={4}
        w='full'
        backgroundColor='rgba(255,255, 255, 0.8)'
        backdropFilter='saturate(180%) blur(5px)'
        sx={{
          position: 'fixed',
        }}>
        <Container maxW='container.xl'>
          <Flex h='16' alignItems='center' justifyContent='space-between'>
            <Link to='/'>
              <Box
                fontSize='xl'
                fontWeight='bold'
                _hover={{
                  color: 'green.800',
                  cursor: 'pointer',
                }}>
                Notice Me 📝
              </Box>
            </Link>

            {isLoggedIn ? (
              <Flex alignItems='center'>
                <Stack direction='row' spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>

                  <Button
                    variant={'solid'}
                    colorScheme={'green'}
                    size={'md'}
                    onClick={onPressAddTodo}
                    leftIcon={<AddIcon />}>
                    Add Todo
                  </Button>

                  <Menu autoSelect={false}>
                    <MenuButton
                      rounded='full'
                      variant='link'
                      cursor='pointer'
                      minW={0}>
                      <Stack direction='row' spacing={1}>
                        <Avatar
                          size='sm'
                          src={
                            !userProfile?.photoURL
                              ? 'https://avatars.dicebear.com/api/micah/69.svg'
                              : userProfile?.photoURL
                          }
                        />

                        <Box py='3' fontSize={12} px='2'>
                          <IoIosArrowDown />
                        </Box>
                      </Stack>
                    </MenuButton>

                    <MenuList alignItems='center' spacing={7}>
                      <Center>
                        <Avatar
                          size='2xl'
                          src={
                            !userProfile?.photoURL
                              ? 'https://avatars.dicebear.com/api/micah/69.svg'
                              : userProfile?.photoURL
                          }
                        />
                      </Center>

                      <Center h='50px'>
                        {userProfile ? (
                          <Stack direction='row' spacing={1}>
                            <Text>{userProfile?.name}</Text>
                          </Stack>
                        ) : null}
                      </Center>

                      <MenuDivider />

                      <MenuItem onClick={onPressSignOut}>
                        <Stack direction='row' spacing={1}>
                          <Box py='1'>
                            <FiLogOut />
                          </Box>
                          <Box>Logout</Box>
                        </Stack>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </Flex>
            ) : (
              <Flex alignItems='center'>
                <Stack direction='row' spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>

                  <Box
                    as='button'
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'green.500',
                        textDecoration: 'underline',
                      },
                    }}>
                    <Link to='/account/login'>Log in</Link>
                  </Box>

                  <Button colorScheme='green'>
                    <Link to='/account/register'>Register</Link>
                  </Button>
                </Stack>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
