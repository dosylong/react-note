import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../components/Home';
import AddTodoPage from './pages/AddTodoPage';
import DeleteTodoPage from './pages/DeleteTodoPage';
import DetailTodoPage from './pages/DetailTodoPage';
import EditTodoPage from './pages/EditTodoPage';

export default function Todo() {
  let location = useLocation();
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='add' element={<AddTodoPage />} />
          <Route path='edit/:id' element={<EditTodoPage />} />
          <Route path='delete/:id' element={<DeleteTodoPage />} />
          <Route path='detail/:id' element={<DetailTodoPage />} />
        </Route>
      </Routes>
      {location.state?.backgroundLocation && (
        <Routes>
          <Route path='add' element={<AddTodoPage />} />
          <Route path='edit/:id' element={<EditTodoPage />} />
          <Route path='delete/:id' element={<DeleteTodoPage />} />
          <Route path='detail/:id' element={<DetailTodoPage />} />
        </Routes>
      )}
    </>
  );
}
