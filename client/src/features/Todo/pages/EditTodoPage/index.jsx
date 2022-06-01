import React, { useEffect, useState } from 'react';
import TodoModal from '../../components/TodoModal';
import todoApi from '../../../../api/todoApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import EditTodoForm from '../../components/EditTodoForm';

export default function EditTodoPage() {
  const user = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();
  const [myTodo, setMyTodo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMyOwnTodo = async () => {
      const response = await todoApi.getTodoById({
        id: id,
      });
      setMyTodo(response);
    };
    getMyOwnTodo();
  }, [id, user]);

  const onPressEditTodo = async () => {
    if (!user) return;
    try {
      const response = await todoApi.editTodo({
        title: myTodo.title,
        description: myTodo.description,
        id: id,
      });
      toast.success('Todo edited successfully!', {
        autoClose: 1200,
      });
      setTimeout(() => {
        navigate('/');
      }, 1800);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoModal
        modalBody={
          <EditTodoForm onPressEditTodo={onPressEditTodo} myTodo={myTodo} />
        }
        modalTitle='Edit Todo'
      />
      <ToastContainer />
    </>
  );
}
