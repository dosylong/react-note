const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

//router POST todo/create
router.post('/create', TodoController.addTodo);

module.exports = router;
