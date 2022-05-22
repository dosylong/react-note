const prisma = require('../models/prisma');

class UserController {
  addUser = async (req, res, next) => {
    try {
      const { userFirebaseId, email, name } = req.body;
      const response = await prisma.user.create({
        data: {
          userFirebaseId: userFirebaseId,
          email: email,
          name: name,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getUser = async (req, res, next) => {
    try {
      const response = await prisma.user.findUnique({
        where: {
          userFirebaseId: req.query.userFirebaseId,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = new UserController();
