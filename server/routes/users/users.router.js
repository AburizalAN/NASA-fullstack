const express = require('express');
const usersRouter = express.Router();
const {
  getAllUsers,
  createNewUser,
  parseBody,
  updateUser,
  deleteUser,
} = require('./users.controller');

usersRouter.get('/', getAllUsers);

usersRouter.post('/create', createNewUser);

usersRouter.patch('/update/:id', updateUser);

usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter;

