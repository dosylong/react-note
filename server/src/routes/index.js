const userRouter = require('./user');
const todoRouter = require('./todo');

const route = (app) => {
  //route /user
  app.use('/user', userRouter);

  //route /todo
  app.use('/todo', todoRouter);
};

module.exports = route;
