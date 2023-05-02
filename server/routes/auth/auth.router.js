const express = require('express');
const authRouter = express.Router();
const {
  register,
  login,
  logout
} = require('./auth.controller');
const { body } = require('express-validator');

authRouter.post('/register', body('email').notEmpty(), register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

module.exports = authRouter;