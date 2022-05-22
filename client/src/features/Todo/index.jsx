import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddTodoPage from './pages/AddTodoPage';

export default function Todo() {
  return (
    <Routes>
      <Route path='add-todo' element={<AddTodoPage />} />
    </Routes>
  );
}
