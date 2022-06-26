import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TodoModal from '../../components/TodoModal';
import todoApi from '../../../../api/todoApi';

export default function DetailTodoPage() {
  const [myTodo, setMyTodo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMyOwnTodo = async () => {
      try {
        const response = await todoApi.getTodoById({
          id: id,
        });
        setMyTodo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMyOwnTodo();
  }, [id]);

  return <TodoModal modalTitle={myTodo.title} modalBody={myTodo.description} />;
}
