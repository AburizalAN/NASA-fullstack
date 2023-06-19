const express = require('express');
const usersRouter = express.Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require('./users.controller');
const requireLogin = require("../../middleware/requireLogin");

usersRouter.get('/', getAllUsers);

usersRouter.get("/:id", requireLogin, getUserById);

usersRouter.post('/create', createNewUser);

usersRouter.patch('/update/:id', updateUser);

usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter;

