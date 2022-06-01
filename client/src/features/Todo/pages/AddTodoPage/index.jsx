import React from 'react';
import TodoModal from '../../components/TodoModal';
import todoApi from '../../../../api/todoApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodoForm from '../../components/AddTodoForm';
import { useNavigate } from 'react-router-dom';

export default function TodoPage() {
  const user = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();

  const onPressAddTodo = async (values) => {
    if (!user) return;
    try {
      const response = await todoApi.addTodo({
        title: values.title,
        description: values.description,
        userId: user?.uid,
      });
      toast.success('Todo added successfully!', {
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
        modalBody={<AddTodoForm onPressAddTodo={onPressAddTodo} />}
        modalTitle='Add Todo'
      />
      <ToastContainer />
    </>
  );
}
