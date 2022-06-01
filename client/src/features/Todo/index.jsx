import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddTodoPage from './pages/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage';

export default function Todo() {
  let location = useLocation();
  return (
    <>
      {location.state?.backgroundLocation && (
        <Routes>
          <Route path='add' element={<AddTodoPage />} />
          <Route path='edit/:id' element={<EditTodoPage />} />
        </Routes>
      )}
    </>
  );
}
