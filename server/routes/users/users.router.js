const express = require('express');
const usersRouter = express.Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require('./users.controller');

usersRouter.get('/', getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post('/create', createNewUser);

usersRouter.patch('/update/:id', updateUser);

usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter;

