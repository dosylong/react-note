import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import TodoCard from '../../features/Todo/components/TodoCard';
import todoApi from '../../api/todoApi';

export default function Home() {
  const [myTodo, setMyTodo] = useState([]);

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

  const handleDeleteTodo = async (id) => {
    try {
      const response = await todoApi.deleteTodo({
        id: id,
      });
      setMyTodo(myTodo.filter((todo) => todo.id !== response.id));
      console.log('delete at id: ', id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box maxH='auto' maxW='auto'>
        <Banner />

        <Heading py='5' fontSize='33'>
          Latest TODO
        </Heading>
        <SimpleGrid
          pt='5'
          pb='5'
          columns={{ base: 2, sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={{ base: 2, sm: 7 }}>
          {myTodo?.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                myTodo={todo}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
