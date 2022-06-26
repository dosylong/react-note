import React, { useState, useEffect } from 'react';
import DeleteTodoModal from '../../components/DeleteTodoModal';
import todoApi from '../../../../api/todoApi';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeleteTodoPage() {
  const [myTodo, setMyTodo] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDeleteTodo = async () => {
    try {
      const response = await todoApi.deleteTodo({
        id: myTodo.id,
      });
      console.log('Deleted: ', response);
      toast.success('Deleted successfully!', {
        autoClose: 1200,
      });
      setTimeout(() => {
        navigate('/');
      }, 1400);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DeleteTodoModal myTodo={myTodo} handleDeleteTodo={handleDeleteTodo} />
      <ToastContainer />
    </>
  );
}
