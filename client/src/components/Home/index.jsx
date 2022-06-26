import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import TodoCard from '../../features/Todo/components/TodoCard';
import todoApi from '../../api/todoApi';
import userApi from '../../api/userApi';

export default function Home() {
  const [myTodo, setMyTodo] = useState([]);
  const [myInfo, setMyInfo] = useState({});
  const currentUser = JSON.parse(localStorage.getItem('account'));

  useEffect(() => {
    const getMyTodo = async () => {
      try {
        const response = await todoApi.getAllTodo();
        setMyTodo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMyTodo();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      if (!currentUser) return;
      try {
        const response = await userApi.getUser({
          userFirebaseId: currentUser?.uid,
        });
        setMyInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser]);

  return (
    <>
      <Box maxH='auto' maxW='auto'>
        <Banner />

        {!currentUser ? null : (
          <Heading py='5' px='1' fontSize='33'>
            {myInfo.name}'s latest TODO
          </Heading>
        )}

        <SimpleGrid
          pt='5'
          pb='5'
          px='1'
          columns={{ base: 2, sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={{ base: 2, sm: 7 }}>
          {myTodo?.map(
            (todo) =>
              myInfo?.userFirebaseId === todo?.userId && (
                <TodoCard key={todo.id} todo={todo} />
              )
          )}
        </SimpleGrid>
      </Box>
    </>
  );
}
