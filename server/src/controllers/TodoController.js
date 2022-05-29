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
}

module.exports = new TodoController();
