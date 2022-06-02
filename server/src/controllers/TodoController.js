const prisma = require('../models/prisma');

class TodoController {
  addTodo = async (req, res, next) => {
    try {
      const { userId, title, description } = req.body;

      const response = await prisma.todo.create({
        data: {
          title: title,
          description: description,
          userId: userId,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getAllTodo = async (req, res, next) => {
    try {
      const response = await prisma.todo.findMany();
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  deleteTodo = async (req, res, next) => {
    try {
      const response = await prisma.todo.delete({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  editTodo = async (req, res, next) => {
    try {
      const response = await prisma.todo.update({
        where: {
          id: Number(req.body.id),
        },
        data: {
          title: req.body.title,
          description: req.body.description,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getTodoById = async (req, res, next) => {
    try {
      const response = await prisma.todo.findFirst({
        where: {
          id: Number(req.query.id),
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = new TodoController();
