const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

//router POST todo/create
router.post('/create', TodoController.addTodo);

//router DELETE todo/delete
router.delete('/delete', TodoController.deleteTodo);

//router UPDATE todo/update
router.put('/update', TodoController.editTodo);

//router GET todo/get/all
router.get('/get/all', TodoController.getAllTodo);

//router GET todo/get/id
router.get('/get/id', TodoController.getTodoById);

module.exports = router;
